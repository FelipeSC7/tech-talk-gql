let idLivro = 1;
let idAutor = 1;

function proximoIdLivro() {
    return idLivro++
}
function proximoIdAutor() {
    return idAutor++
}

const livros = [{
    id: proximoIdLivro(),
    titulo: "Livro 1",
    paginas: 150,
    autor: 1
},
{
    id: proximoIdLivro(),
    titulo: "Livro 2",
    paginas: 50,
    autor: 3
},
{
    id: proximoIdLivro(),
    titulo: "Livro 3",
    paginas: 70,
    autor: 2
}
]

const autores = [{
    id: proximoIdAutor(),
    nome: "Autor 1"
},
{
    id: proximoIdAutor(),
    nome: "Autor 2"
},
{
    id: proximoIdAutor(),
    nome: "Autor 3"
}
]

module.exports = {
    livros,
    autores,
    proximoIdLivro,
    proximoIdAutor
}