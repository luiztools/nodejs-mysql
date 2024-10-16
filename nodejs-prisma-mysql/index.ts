import { addCliente } from "./clientesRepository";

async function start() {
    const result = await addCliente({
        nome: "Luiz",
        idade: 36,
        uf: "RS"
    })
    console.log(result);
}

start();