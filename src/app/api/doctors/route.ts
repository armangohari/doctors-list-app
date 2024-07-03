import { capitalizeWords } from "@/utils/helpers";
import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

const prisma = new PrismaClient();
const defaultProfileImage = "/assets/icons/default-profile-image.svg";

export async function GET(request: NextRequest) {
  try {
    const doctors = await prisma.doctor.findMany();
    return NextResponse.json(doctors, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch doctors" },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, specialization } = body;

    const capitalizedName = capitalizeWords(name);
    const capitalizedSpecialization = capitalizeWords(specialization);

    const newDoctor = await prisma.doctor.create({
      data: {
        name: capitalizedName,
        email: email,
        specialization: capitalizedSpecialization,
        profileImage: defaultProfileImage,
        numOfLikes: 0,
      },
    });

    return NextResponse.json(newDoctor, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to create doctor" },
      { status: 500 },
    );
  }
}
