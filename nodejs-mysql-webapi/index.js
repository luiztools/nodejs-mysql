require("dotenv").config();
const db = require("./db");

const express = require('express');
const app = express();
const port = process.env.PORT;

app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

app.get('/clientes/:id', async (req, res) => {
    const results = await db.selectCustomer(req.params.id);
    res.json(results);
})

app.get('/clientes', async (req, res) => {
    const results = await db.selectCustomers();
    res.json(results);
})

app.delete('/clientes/:id', async (req, res) => {
    await db.deleteCustomer(req.params.id);
    res.sendStatus(204);
})

app.post('/clientes', async (req, res) => {
    await db.insertCustomer(req.body);
    res.sendStatus(201);
});

app.patch('/clientes/:id', async (req, res) => {
    await db.updateCustomer(req.params.id, req.body);
    res.sendStatus(200);
})

app.listen(port);

console.log('API funcionando!');