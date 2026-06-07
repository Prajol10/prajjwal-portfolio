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

export async function POST(req: NextRequest) {
  if (!verifyToken(req)) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const formData = await req.formData();
  const file = formData.get("cv") as File;

  if (!file) return NextResponse.json({ error: "No file" }, { status: 400 });

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  const savePath = path.join(process.cwd(), "public", "prajjwal-cv.pdf");
  fs.writeFileSync(savePath, buffer);

  return NextResponse.json({ success: true, path: "/prajjwal-cv.pdf" });
}
