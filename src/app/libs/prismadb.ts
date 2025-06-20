import { PrismaClient } from "@/generated/prisma"; // <-- correct path

declare global {
  var prisma: PrismaClient | undefined;
}

const client = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = client;
}

export const prisma = client;
