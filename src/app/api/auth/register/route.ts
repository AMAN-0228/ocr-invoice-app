import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import prisma from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json({ message: "Email already in use" }, { status: 400 });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user (you can also create a customer entry here if needed)
    await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        active: true,
        code: `USR-${Math.floor(1000 + Math.random() * 9000)}`, // Example
        reference: `REF-${Date.now()}`,
        customerId: '1'
      },
    });

    return NextResponse.json({ message: "User registered successfully" }, { status: 200 });
  } catch (error) {
    console.error("Error in register API:", error);
    return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
  }
}
