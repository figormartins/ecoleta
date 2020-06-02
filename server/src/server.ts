import express from 'express'

const app = express()

app.get('/users', (request, response) => {
  console.log('users')

})

app.listen(3333)