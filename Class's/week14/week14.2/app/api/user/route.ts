import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
const client = new PrismaClient();
export function GET() {
  return Response.json({
    email: "kiran@gmail.com",
    name: "kiran",
  });
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  // should add zod validation here
  const user = await client.user.create({
    data: {
      username: body.username,
      password: body.password,
    },
  });

  console.log(user.id);

  return NextResponse.json({ message: "Signed up" });
}
