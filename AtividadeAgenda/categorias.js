const { connect } = require("./db");

module.exports = class Categoria {
    constructor(nome, cor) {
        this.nome = nome;
        this.cor = cor
    }

    async inserir() {
        try {
            const { db, client } = await connect();
            const result = await db.collection("categorias").insertOne({
                nome: this.nome,
                cor: this.cor
            });
            console.log("Categoria inserida:", result.insertedId);
            client.close();
        } catch (error) {
            console.log("Erro ao inserir categoria:", error);
        }
    }
}
