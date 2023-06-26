//index.js
(async () => {
    const database = require('./db');
    const Produto = require('./models/produto');
    const Fabricante = require('./models/fabricante');
    const Categoria = require('./models/categoria');
    const CategoriaProduto = require('./models/categoriaProduto');

    try {
        Produto.belongsTo(Fabricante, {
            constraint: true, 
            foreignKey: 'idFabricante'
        });
        Fabricante.hasMany(Produto, {
            foreignKey: 'idFabricante'
        });

        Produto.belongsToMany(Categoria, {
            foreignKey: 'idProduto',
            constraints: true,
            through: {
                model: CategoriaProduto
            }
        })

        Categoria.belongsToMany(Produto, {
            foreignKey: 'idCategoria',
            constraints: true,
            through: {
                model: CategoriaProduto
            }
        })

        const resultado = await database.sync({force: true});
        //console.log(resultado);

        const resultadoCreate = await Fabricante.create({
            nome: 'Apple'
        })
        const idFabricante = resultadoCreate.id;
        
        const resultadoCreate2 = await Produto.create({
            nome: 'iPhone',
            preco: 5000,
            descricao: 'Smartphone da maçã',
            idFabricante: idFabricante
        })
        //console.log(resultadoCreate2);

        //const produto = await Produto.findByPk(resultadoCreate2.id, {include: Fabricante});
        //console.log(produto);
        //const fabricante = await produto.getFabricante();
        //console.log(fabricante);

        //const fabricante = await Fabricante.findByPk(resultadoCreate.id, {include: Produto});
        //console.log(fabricante);
        //const produtos = await fabricante.getProdutos();
        //console.log(produtos);

        const resultadoCreate3 = await Categoria.create({
            nome: 'Telefones'
        })
        //console.log(resultadoCreate3);

        const produto = await Produto.findByPk(resultadoCreate2.id);
        const categoria = await Categoria.findByPk(resultadoCreate3.id);
        //console.log(produto);
        //await produto.setCategorias([categoria]);
        await categoria.setProdutos([produto]);
    } catch (error) {
        console.log(error);
    }
})();
