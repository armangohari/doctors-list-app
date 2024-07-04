import { formatDate } from "@/utils/helpers";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET(request: NextRequest) {
  const doctorId = request.nextUrl.searchParams.get("doctorId");
  if (!doctorId) {
    return NextResponse.json(
      { error: "Doctor ID is required" },
      { status: 400 },
    );
  }

  try {
    const comments = await prisma.comment.findMany({
      where: { doctorId: parseInt(doctorId) },
    });
    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch comments" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { doctorId, content } = body;

    console.log(formatDate(new Date()));

    const newComment = await prisma.comment.create({
      data: {
        doctorId,
        content,
        createdAt: formatDate(new Date()),
      },
    });

    await prisma.doctor.update({
      where: {
        id: parseInt(doctorId),
      },
      data: {
        numOfComments: {
          increment: 1,
        },
      },
    });

    return NextResponse.json(newComment, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create comment" },
      { status: 500 },
    );
  }
}
