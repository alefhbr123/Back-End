const { connect } = require("./db");

module.exports = class Evento {
    constructor(
        titulo,
        descricao,
        data,
        horaInicio,
        horaFim,
        local,
        categoriaId,
        usuarioId,
        convidados = []
    ){
        this.titulo = titulo;
        this.descricao = descricao;
        this.data = new Date(data);
        this.horaInicio = horaInicio;
        this.horaFim = horaFim;
        this.local = local;
        this.categoriaId = categoriaId;
        this.usuarioId = usuarioId;
        this.convidados = convidados;
    }

    async inserir() {
        try {
            const { db, client } = await connect();
            const result = await db.collection("eventos").insertOne({
                titulo: this.titulo,
                descricao: this.descricao,
                data: this.data.toISOString(),
                hora_inicio: this.horaInicio,
                hora_fim: this.horaFim,
                local: this.local,
                categoria_id: this.categoriaId,
                usuario_id: this.usuarioId,
                convidados: this.convidados
            });
            console.log("Evento inserido:", result.insertedId);
            client.close();
        } catch (error) {
            console.log("Erro ao inserir evento:", error);
        }
    }

}