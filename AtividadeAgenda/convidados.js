const { connect } = require("./db");

module.exports = class Convidado {
    constructor(evento_id, nome, email, status) {
        this.evento_id = evento_id;
        this.nome = nome;
        this.email = email;
        this.status = status;
    }

    async inserir() {
        try {
            const { db, client } = await connect();
            const result = await db.collection("convidados").insertOne({
                evento_id: this.evento_id,
                nome: this.nome,
                email: this.email,
                status: this.status
            });
            console.log("Convidado inserido:", result.insertedId);
            client.close();
        } catch (error) {
            console.log("Erro ao inserir convidado:", error);
        }
    }
}
