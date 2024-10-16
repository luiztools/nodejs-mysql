import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function connect() {
    await prisma.$connect();
}

connect();

export function getClientes() {
    return prisma.clientes.findMany();
}

export function getCliente(id: number) {
    return prisma.clientes.findUnique({
        where: { id }
    })
}

export function addCliente(newCustomer: any) {
    return prisma.clientes.create({
        data: newCustomer
    });
}

export function updateCliente(id: number, newData: any) {
    return prisma.clientes.update({
        where: { id },
        data: newData
    })
}

export async function deleteCliente(id: number) {
    return prisma.clientes.delete({
        where: { id }
    })
}