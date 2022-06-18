//index.js
(async () => {
    const db = require("./db");
    console.log('Começou!');
    
    console.log('INSERT INTO CLIENTES');
    const result = await db.insertCustomer({nome: "Zé", idade: 18, uf: "SP"});
    console.log(result);

    console.log('SELECT * FROM CLIENTES');
    const clientes = await db.selectCustomers();
    console.log(clientes);

    console.log('UPDATE CLIENTES');
    const result2 = await db.updateCustomer(6, {nome: "Zé José", idade: 19, uf: "SP"});
    console.log(result2);

    console.log('DELETE FROM CLIENTES');
    const result3 = await db.deleteCustomer(7);
    console.log(result3);
})();
