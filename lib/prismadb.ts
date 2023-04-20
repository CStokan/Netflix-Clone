import { PrismaClient } from "@prisma/client";
// This prevents prisma from generating too many client processes 

const client = global.prismadb || new PrismaClient();
if (process.env.NODE_ENV == 'production') global.prismadb = client;

export default client;