import { PrismaClient } from "@prisma/client";
import { withSchema } from "@/lib/dbUrl";

// Reuse one client across hot reloads in development
const globalForPrisma = globalThis;

const prisma = globalForPrisma.prisma || new PrismaClient({ datasourceUrl: withSchema(process.env.DATABASE_URL) });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
