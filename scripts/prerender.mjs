import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const serverPath = join(root, "dist/server/server.js");

const { default: server } = await import(serverPath);
const response = await server.fetch(new Request("http://localhost/"));
const html = await response.text();

writeFileSync(join(root, "dist/client/index.html"), html, "utf-8");
console.log("✓ Pre-rendered dist/client/index.html");
