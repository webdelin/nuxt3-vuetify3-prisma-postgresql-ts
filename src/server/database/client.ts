import pkg from "@prisma/client";

const { PrismaClient } = pkg;
const prisma = new PrismaClient();
await prisma.$connect();
export default prisma;
