const express = require('express')
const morgan = require('morgan')

const app = express()
app.use(morgan('tiny'))

app.get('/', (req, res) => {
  // Send JSON
  res.send({ status: 'on' })
})

const m = []

app.get('/messages',(req, res) => {
  res.send({ messages: m });
})

app.post('/add', (req, res) => {
  m.push(req.query.a);
  res.sendStatus(200);
})


module.exports = app
