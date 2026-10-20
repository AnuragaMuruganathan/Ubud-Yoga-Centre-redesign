// Crawls ubudyogacentre.com, downloads every page image to public/images/
// and dumps readable page text to content/raw/<slug>.txt for copy editing.
import { mkdir, writeFile, access } from "node:fs/promises";
import path from "node:path";

const ORIGIN = "https://ubudyogacentre.com";
const ROOT = path.resolve(import.meta.dirname, "..");
const IMG_DIR = path.join(ROOT, "public", "images");
const RAW_DIR = path.join(ROOT, "content", "raw");
const UA = { "user-agent": "Mozilla/5.0 (UYC redesign asset sync)" };

const PAGES = [
  "", "yoga-classes-pricing", "ubud-yoga-centre-class-schedule", "cafe", "our-story",
  "our-location", "yoga-beginners", "events", "host-your-own-retreat",
  "host-yoga-retreat-holidays", "gallery", "welcome-to-canggu-yoga-centre",
  "bikram-hot-yoga", "inferno-hot-pilates", "trx-hot", "hot-barre", "hot-vinyasa",
  "intro-ashtanga-yoga", "yin-yoga", "hatha-yoga", "vinyasa-yoga", "kundalini-yoga",
  "aerial-yoga", "yoga-nidra-sound-healing",
];

const exists = (p) => access(p).then(() => true, () => false);

function decode(s) {
  return s
    .replace(/&#(\d+);/g, (_, n) => String.fromCodePoint(+n))
    .replace(/&#x([0-9a-f]+);/gi, (_, n) => String.fromCodePoint(parseInt(n, 16)))
    .replace(/&nbsp;/g, " ").replace(/&amp;/g, "&").replace(/&quot;/g, '"')
    .replace(/&rsquo;|&lsquo;/g, "'").replace(/&ldquo;|&rdquo;/g, '"')
    .replace(/&ndash;/g, "–").replace(/&mdash;/g, "—").replace(/&lt;/g, "<").replace(/&gt;/g, ">");
}

function toText(html) {
  let body = html.replace(/[\s\S]*?<body[^>]*>/i, "");
  body = body
    .replace(/<(script|style|noscript|svg|iframe)[\s\S]*?<\/\1>/gi, "")
    .replace(/<h([1-6])[^>]*>/gi, (_, n) => `\n\n${"#".repeat(+n)} `)
    .replace(/<\/h[1-6]>/gi, "\n")
    .replace(/<li[^>]*>/gi, "\n- ")
    .replace(/<a [^>]*href="([^"]+)"[^>]*>([\s\S]*?)<\/a>/gi, (_, href, t) => `${t} [${href}]`)
    .replace(/<img [^>]*?(?:data-src|src)="([^"]+)"[^>]*>/gi, (_, src) => ` {img:${path.basename(src.split("?")[0])}} `)
    .replace(/<(br|\/p|\/div|\/tr|\/section)[^>]*>/gi, "\n")
    .replace(/<td[^>]*>/gi, " | ")
    .replace(/<[^>]+>/g, " ");
  return decode(body)
    .split("\n").map((l) => l.replace(/[ \t]+/g, " ").trim()).filter(Boolean)
    .filter((l, i, a) => l !== a[i - 1]).join("\n");
}

function imageUrls(html) {
  const found = new Set();
  const re = /https?:\/\/ubudyogacentre\.com\/wp-content\/uploads\/[^"'\s,)]+?\.(?:jpe?g|png|webp|gif|svg)/gi;
  for (const m of html.matchAll(re)) found.add(m[0]);
  return [...found];
}

// WordPress resized variants look like name-300x200.jpg; prefer the original.
const original = (u) => u.replace(/-\d+x\d+(?=\.\w+$)/, "").replace(/-scaled(?=\.\w+$)/, "");

async function download(url, dest) {
  const res = await fetch(url, { headers: UA });
  if (!res.ok) return false;
  await writeFile(dest, Buffer.from(await res.arrayBuffer()));
  return true;
}

await mkdir(IMG_DIR, { recursive: true });
await mkdir(RAW_DIR, { recursive: true });

const manifest = {};
const eventLinks = new Set();

async function crawl(slug) {
  const url = `${ORIGIN}/${slug ? slug + "/" : ""}`;
  const res = await fetch(url, { headers: UA });
  if (!res.ok) { console.warn(`! ${res.status} ${url}`); return; }
  const html = await res.text();
  const name = slug.replace(/\//g, "__") || "home";
  await writeFile(path.join(RAW_DIR, `${name}.txt`), toText(html));
  for (const m of html.matchAll(/href="https?:\/\/ubudyogacentre\.com\/(event\/[^"#?]+?)\/?"/g)) eventLinks.add(m[1]);

  const files = [];
  for (const u of imageUrls(html)) {
    if (/favicon|whatsapp|\/themes\//.test(u)) continue;
    const orig = original(u);
    const file = path.basename(orig);
    const dest = path.join(IMG_DIR, file);
    if (!(await exists(dest))) {
      const ok = (await download(orig, dest)) || (await download(u, dest));
      if (!ok) { console.warn(`  ! image ${u}`); continue; }
    }
    if (!files.includes(file)) files.push(file);
  }
  manifest[name] = files;
  console.log(`✓ ${name} (${files.length} images)`);
}

for (const slug of PAGES) await crawl(slug);
for (const slug of eventLinks) await crawl(slug);

await download(`${ORIGIN}/wp-content/uploads/2019/07/light-logo.png`, path.join(IMG_DIR, "light-logo.png"));
await download(`${ORIGIN}/wp-content/uploads/2026/09/favicon-512x512-4-270x270.png`, path.join(IMG_DIR, "gate-mark.png"));
await writeFile(path.join(ROOT, "content", "raw", "manifest.json"), JSON.stringify(manifest, null, 2));
console.log(`Done. ${Object.keys(manifest).length} pages.`);
