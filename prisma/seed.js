const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const doctorProfile = "/assets/icons/default-profile-image.svg";

async function main() {
  await prisma.doctor.createMany({
    data: [
      {
        name: "Andrew Huberman",
        email: "contact@hubermanlab.com",
        specialization: "Neuroscientist",
        profileImage: doctorProfile,
        numOfLikes: 63,
        numOfComments: 0,
      },
      {
        name: "Jason Washington",
        email: "contact@jasonw.com",
        specialization: "Brain Surgeon",
        profileImage: doctorProfile,
        numOfLikes: 79,
        numOfComments: 0,
      },
      {
        name: "William Nelson",
        email: "william.nelson@poz.pl",
        specialization: "Anesthesiologist",
        profileImage: doctorProfile,
        numOfLikes: 34,
        numOfComments: 0,
      },
      {
        name: "Maria Brown",
        email: "maria.b@poz.pl",
        specialization: "Radiologist",
        profileImage: doctorProfile,
        numOfLikes: 28,
        numOfComments: 0,
      },
      {
        name: "Anna Reynold",
        email: "a.reynold@poz.pl",
        specialization: "Heart Surgeon",
        profileImage: doctorProfile,
        numOfLikes: 53,
        numOfComments: 0,
      },
      {
        name: "Elizabeth Turner",
        email: "elizabeth.t@medmail.com",
        specialization: "Pediatrician",
        profileImage: doctorProfile,
        numOfLikes: 47,
        numOfComments: 0,
      },
      {
        name: "Michael Clarke",
        email: "m.clarke@medcare.com",
        specialization: "Orthopedic Surgeon",
        profileImage: doctorProfile,
        numOfLikes: 62,
        numOfComments: 0,
      },
      {
        name: "Sophia Martinez",
        email: "sophia.m@healthplus.com",
        specialization: "Dermatologist",
        profileImage: doctorProfile,
        numOfLikes: 51,
        numOfComments: 0,
      },
      {
        name: "David Johnson",
        email: "david.johnson@wellcare.com",
        specialization: "Cardiologist",
        profileImage: doctorProfile,
        numOfLikes: 68,
        numOfComments: 0,
      },
    ],
  });

  console.log("Database has been seeded with 9 new doctors. 🌱");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
