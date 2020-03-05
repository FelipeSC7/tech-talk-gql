const { ApolloServer } = require('apollo-server')
const { importSchema } = require('graphql-import')
const resolvers = require('./resolvers')

// const express = require('express')
// const path = require('path')
// const PORT = process.env.PORT || 5000

const schemaPath = './schema/index.graphql';
const server = new ApolloServer({
  typeDefs: importSchema(schemaPath),
  resolvers
})

// express()
//   .use(express.static(path.join(__dirname, 'public')))
//   .set('views', path.join(__dirname, 'views'))
//   .set('view engine', 'ejs')
//   .get('/', (req, res) => res.render('pages/index'))
//   .listen(PORT, () => console.log(`Listening on ${ PORT }`))

server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});