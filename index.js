// const { ApolloServer, gql } = require('apollo-server')
// const { importSchema } = require('graphql-import')
// const resolvers = require('./resolvers')


const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))

// const schemaPath = './schema/index.graphql';
// const server = new ApolloServer({
//     typeDefs: importSchema(schemaPath),
//     resolvers
// })

// server.listen().then(({ url }) => {
//     console.log(`Executando em ${url}`)
// })