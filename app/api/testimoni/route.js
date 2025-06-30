import { promises as fs } from "fs";
import path from "path";

const filePath = path.join(process.cwd(), "data", "testimoni.json");

async function ensureFile() {
  try {
    await fs.access(filePath);
  } catch {
    await fs.mkdir(path.dirname(filePath), { recursive: true });
    await fs.writeFile(filePath, "[]");
  }
}

export async function GET() {
  await ensureFile();
  try {
    const data = await fs.readFile(filePath, "utf-8");
    return new Response(data, { status: 200 });
  } catch {
    return new Response("[]", { status: 200 });
  }
}

export async function POST(request) {
  await ensureFile();
  const { name, message } = await request.json();
  if (!name || !message) {
    return new Response(JSON.stringify({ error: "Invalid" }), { status: 400 });
  }
  let data = [];
  try {
    data = JSON.parse(await fs.readFile(filePath, "utf-8"));
  } catch {}
  data.unshift({ name, message, date: new Date().toISOString() });
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
  return new Response(JSON.stringify({ ok: true }), { status: 201 });
}
