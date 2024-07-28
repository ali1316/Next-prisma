import { PrismaClient } from '@prisma/client'
import { PrismaAdapter } from "@lucia-auth/adapter-prisma";

const client = new PrismaClient();

const adapter = new PrismaAdapter(client.session, client.user);
const prismaClientSingleton = () => {
    return new PrismaClient()
}

declare const globalThis: {
    prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

let prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma