const livro = require('./livro')
const autor = require('./autor')

 module.exports = {
   ...livro,
   ...autor
 }