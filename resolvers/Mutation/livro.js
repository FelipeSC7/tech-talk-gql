const { livros, proximoIdLivro } = require('../../data/db')

module.exports = {
    novoLivro(_, { titulo, paginas, autor }) {
        const novo = {
            id: proximoIdLivro(),
            titulo,
            paginas,
            autor
        }
        livros.push(novo)
        return novo
    },
    excluirLivro(_, { id }) {
        const i = livros
            .findIndex(l => l.id == id)
        if (i < 0) return null
        const excluidos = livros.splice(i, 1)
        return excluidos ? excluidos[0] : null
    },
    alterarLivro(_, dados ) {
        const i = livros
            .findIndex(l => l.id == dados.id)
        console.log(livros)
        if(i < 0) return null

        livros[i].titulo = dados.titulo
        livros[i].paginas = dados.paginas
        livros[i].autor = dados.autor

        return livros[i]
    }
}