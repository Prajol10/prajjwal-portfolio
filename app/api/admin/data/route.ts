import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import fs from "fs";
import path from "path";

function verifyToken(req: NextRequest) {
  const token = req.cookies.get("admin_token")?.value;
  if (!token) return false;
  try {
    jwt.verify(token, process.env.JWT_SECRET!);
    return true;
  } catch {
    return false;
  }
}

const dataPath = path.join(process.cwd(), "data", "site-data.json");

function getData() {
  if (!fs.existsSync(dataPath)) return null;
  return JSON.parse(fs.readFileSync(dataPath, "utf-8"));
}

export async function GET(req: NextRequest) {
  if (!verifyToken(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const data = getData();
  return NextResponse.json(data || {});
}

export async function POST(req: NextRequest) {
  if (!verifyToken(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const body = await req.json();
  const dir = path.join(process.cwd(), "data");
  if (!fs.existsSync(dir)) fs.mkdirSync(dir);
  fs.writeFileSync(dataPath, JSON.stringify(body, null, 2));
  return NextResponse.json({ success: true });
}
