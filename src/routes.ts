import express from 'express'

const routes = express.Router()

routes.get('/users', (request, response) => {
  console.log('listagem de usuarios')
  response.send('Hello World')
})

export default routes