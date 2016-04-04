const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')

const app = express()
app.use(morgan('tiny'))

//app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  // Send JSON
  res.send({ status: 'on' })
})

const messages = []

app.get('/messages',(req, res) => {
  res.send({ messages: messages });
})

app.post('/add', (req, res) => {
  messages.push(req.body.newmessage);
  res.sendStatus(200);
})


module.exports = app
