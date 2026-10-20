// Writes content/image-sizes.json ({ "file.jpg": [width, height] }) for layout-stable galleries.
import { readdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const ROOT = path.resolve(import.meta.dirname, "..");
const dir = path.join(ROOT, "public", "images");
const sizes = {};
for (const f of (await readdir(dir)).sort()) {
  const m = await sharp(path.join(dir, f)).metadata();
  sizes[f] = [m.width, m.height];
}
await writeFile(path.join(ROOT, "content", "image-sizes.json"), JSON.stringify(sizes, null, 1));
console.log(Object.keys(sizes).length, "images");
