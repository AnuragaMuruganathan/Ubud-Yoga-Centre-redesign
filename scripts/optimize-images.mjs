// One-off: re-encode public/images to right-sized WebP, rewrite references in
// app/, components/ and content/, and move the originals to image-originals/
// (git- and vercel-ignored) so nothing is lost.
// Usage: node scripts/optimize-images.mjs   (then: node scripts/image-sizes.mjs)
import { readdir, readFile, writeFile, stat, copyFile, rename, mkdir } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const IMG = path.join(ROOT, "public", "images");
const BACKUP = path.join(ROOT, "image-originals");
await mkdir(BACKUP, { recursive: true });
const MAX_W = 1920;
const MAX_H = 2400;
// Small UI assets stay PNG (logos with transparency, favicon).
// og.jpg stays JPEG because some link-preview crawlers still reject WebP.
const KEEP = new Set(["light-logo.png", "dark-logo.png", "gate-mark.png", "og.jpg"]);

// Read inputs into memory so Windows never sees the source and target open at once.
sharp.cache(false);
const exists = (p) => stat(p).then(() => true, () => false);
const stem = (f) => f.replace(/\.(jpe?g|png|webp)$/i, "");

// Social share image: 1200x630 JPEG cut from the homepage hero.
const heroSrc = (await exists(path.join(BACKUP, "hero-desktop.jpg"))) ? path.join(BACKUP, "hero-desktop.jpg") : path.join(IMG, "hero-desktop.jpg");
await writeFile(
  path.join(IMG, "og.jpg"),
  await sharp(await readFile(heroSrc)).resize(1200, 630, { fit: "cover", position: "right" }).jpeg({ quality: 80, mozjpeg: true }).toBuffer(),
);

// Safe to re-run: originals already moved to BACKUP are recorded as renames and not re-encoded.
const backedUp = new Map((await readdir(BACKUP)).map((f) => [stem(f), f]));
const renames = new Map();

for (const f of (await readdir(IMG)).sort()) {
  if (KEEP.has(f) || !/\.(jpe?g|png|webp)$/i.test(f)) continue;
  const out = `${stem(f)}.webp`;
  const original = backedUp.get(stem(f));
  if (f === out && original && original !== f) { renames.set(original, out); continue; }

  const src = path.join(IMG, f);
  const input = await readFile(original === f ? path.join(BACKUP, f) : src);
  const buf = await sharp(input)
    .rotate()
    .resize({ width: MAX_W, height: MAX_H, fit: "inside", withoutEnlargement: true })
    .webp({ quality: 78, effort: 6, smartSubsample: true })
    .toBuffer();
  // Already-optimised WebP that wouldn't shrink: keep the original bytes.
  if (f === out && buf.length >= input.length) continue;
  if (f === out) { if (!original) await copyFile(src, path.join(BACKUP, f)); }
  else { await rename(src, path.join(BACKUP, f)); renames.set(f, out); }
  await writeFile(path.join(IMG, out), buf);
  console.log(`${(input.length / 1024).toFixed(0).padStart(6)}KB -> ${(buf.length / 1024).toFixed(0).padStart(5)}KB  ${out}`);
}

// Rewrite references: match whole file names only, so "2.jpg" never touches "ugc-2.jpg".
const esc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
async function* walk(dir) {
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (e.name !== "raw") yield* walk(p); }
    else if (/\.(tsx?|json|css|mjs)$/.test(e.name)) yield p;
  }
}
for (const dir of ["app", "components", "content"]) {
  for await (const file of walk(path.join(ROOT, dir))) {
    let text = await readFile(file, "utf8");
    let changed = false;
    for (const [from, to] of renames) {
      const re = new RegExp(`(?<![\\w-])${esc(from)}`, "g");
      if (re.test(text)) { text = text.replace(re, to); changed = true; }
    }
    if (changed) { await writeFile(file, text); console.log("updated", path.relative(ROOT, file)); }
  }
}
let total = 0;
for (const f of await readdir(IMG)) total += (await stat(path.join(IMG, f))).size;
console.log(`\npublic/images is now ${(total / 1048576).toFixed(1)} MB`);
