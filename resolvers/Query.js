const { livros, autores } = require('../data/db')

module.exports = {
    ola() {
        return 'Olá Mundo!!!'
    },
    horaAtual() {
        return new Date
    },
    livros() {
        return livros
    },
    livro(_, args) {
        const sels = livros
            .filter(l => l.id == args.id)
        return sels ? sels[0] : null
    },
    autores() {
        return autores
    },
    autor(_, args) {
        const sels = autores
            .filter(a => a.id == args.id)
        return sels ? sels[0] : null
    },
}