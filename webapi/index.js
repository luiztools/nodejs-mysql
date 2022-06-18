const express = require('express');
const app = express();
const port = 3000; //porta padrão
const mysql = require('mysql2');

app.use(express.json());

app.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

function execSQLQuery(sqlQry, res) {
    const connection = mysql.createConnection({
        host: 'XXX',
        port: XXX,
        user: 'XXX',
        password: 'XXX',
        database: 'XXX'
    });

    connection.query(sqlQry, (error, results, fields) => {
        if (error)
            res.json(error);
        else
            res.json(results);
        connection.end();
        console.log('executou!');
    });
}

app.get('/clientes/:id?', (req, res) => {
    let filter = '';
    if (req.params.id) filter = ' WHERE ID=' + parseInt(req.params.id);
    execSQLQuery('SELECT * FROM Clientes' + filter, res);
})

app.get('/clientes', (req, res) => {
    execSQLQuery('SELECT * FROM Clientes', res);
})

app.delete('/clientes/:id', (req, res) => {
    execSQLQuery('DELETE FROM Clientes WHERE ID=' + parseInt(req.params.id), res);
})

app.post('/clientes', (req, res) => {
    const nome = req.body.nome.substring(0, 150);
    const cpf = req.body.cpf.substring(0, 11);
    execSQLQuery(`INSERT INTO Clientes(Nome, CPF) VALUES('${nome}','${cpf}')`, res);
});

app.patch('/clientes/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const nome = req.body.nome.substring(0, 150);
    const cpf = req.body.cpf.substring(0, 11);
    execSQLQuery(`UPDATE Clientes SET Nome='${nome}', CPF='${cpf}' WHERE ID=${id}`, res);
})

app.listen(port);
console.log('API funcionando!');