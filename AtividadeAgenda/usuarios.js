const { connect } = require("./db");

module.exports = class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
    }

    async inserir() {
        try {
            const { db, client } = await connect();
            const result = await db.collection("usuarios").insertOne({
                nome: this.nome,
                email: this.email,
                senha_hash: this.senha
            });
            console.log("Usuário inserido:", result.insertedId);
            client.close();
        } catch (error) {
            console.log("Erro ao inserir usuário:", error);
        }
    }
}

