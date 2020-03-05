const { autores, proximoIdAutor } = require('../../data/db')

module.exports = {
    novoAutor(_, { nome }){
        const novo = {
            id: proximoIdAutor(),
            nome
        }
        autores.push(novo)
        return novo
    },
    excluirAutor(_, { id }) {
        const i = autores
            .findIndex(l => l.id == id)
        if (i < 0) return null
        const excluidos = autores.splice(i, 1)
        return excluidos ? excluidos[0] : null
    },
    alterarAutor(_, dados ) {
        const i = livros
            .findIndex(l => l.id == dados.id)
        console.log(autores)
        if(i < 0) return null

        autores[i].nome = dados.nome

        return autores[i]
    }
}