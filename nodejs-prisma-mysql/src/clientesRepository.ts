import { PrismaMariaDb } from '@prisma/adapter-mariadb';
import { PrismaClient } from '../generated/prisma/client';

const adapter = new PrismaMariaDb(`${process.env.DATABASE_URL}`);
const prisma = new PrismaClient({ adapter });

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