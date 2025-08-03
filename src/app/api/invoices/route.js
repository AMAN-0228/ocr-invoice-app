import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  try {
    console.log('_______ heelo');
    const data = await prisma.user.findMany();
   return NextResponse.json({message: 'Hello api testing done', data: data}) 
  } catch (error) {
    console.error('Error fetching users:', error)
    return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 })

  }
}