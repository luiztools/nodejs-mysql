const mysql = require('mysql2/promise');

const client = mysql.createPool(process.env.CONNECTION_STRING);

async function selectCustomers() {
    const res = await client.query('SELECT * FROM clientes');
    return res[0];
}

async function selectCustomer(id) {
    const res = await client.query('SELECT * FROM clientes WHERE ID=?', [id]);
    return res[0];
}

async function deleteCustomer(id) {
    return await client.query('DELETE FROM clientes where id=?;', [id]);
}

async function insertCustomer(customer) {
    const sql = 'INSERT INTO clientes(nome,idade,uf) VALUES (?,?,?);';
    const values = [customer.nome, customer.idade, customer.uf];
    await client.query(sql, values);
}

async function updateCustomer(id, customer) {
    const sql = 'UPDATE clientes SET nome=?, idade=?, uf=? WHERE id=?';
    const values = [customer.nome, customer.idade, customer.uf, id];
    await client.query(sql, values);
}

module.exports = { selectCustomers, selectCustomer, deleteCustomer, insertCustomer, updateCustomer }