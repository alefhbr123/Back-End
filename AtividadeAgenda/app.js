const Usuario = require("./usuarios");
const Categoria = require("./categorias");
const Evento = require("./eventos");
const Convidado = require("./convidados");

async function testarInsercaoUsuario() {
    const user = new Usuario("rogeriolima",
    "rogerio@email.com", "senha123");
    await user.inserir();
}

async function testarInsercaoCategoria() {
    const categoria = new Categoria("Trabalho", "#ff0000");
    await categoria.inserir();
}

async function testarInsercaoEvento() {
    const evento = new Evento(
        "Reunião com equipe",
        "Planejamento semanal dos projetos",
        "2025-06-01",
        "14:00",
        "15:00",
        "Sala 02 ou via Google Meet",
        "66509be6f0b5b60bbf8e3f10",
        "66509be6f0b5b60bbf8e3f0f",
        [
            {
                nome: "Ciclano",
                email: "ciclano@email.com"
            }
        ]
    );
    await evento.inserir();
}

async function testarInsercaoConvidado() {
    const convidado = new Convidado(
        "66509c21f0b5b60bbf8e3f15",
        "Fulano",
        "fulano@email.com",
        "Confirmado"
    );
    await convidado.inserir();
}

testarInsercaoUsuario();
testarInsercaoCategoria();
testarInsercaoEvento();
testarInsercaoConvidado();