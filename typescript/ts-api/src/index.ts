import { PrismaClient } from "@prisma/client";
import { UserType } from "./types/types";

const prisma = new PrismaClient();

async function getUsers() {
    const query = await prisma.user.findMany();
    await console.log(query)
}

async function createUser(data: UserType) {
    const query = await prisma.user.create({
        data: {
            name: data.name,
            cpf_cnpj: data.cpf_cnpj
        }
    });
    await console.log(query)
}

async function main(func: any) {
    await func
} 

// Using a Type to create a new User
const newUser: UserType = {
    name: "John Doe",
    cpf_cnpj: "12345678901"
}

// createUser(newUser)

main(getUsers())
    .catch(e => {
        throw e
    })
    .finally(async () => {
        await prisma.$disconnect()
    })