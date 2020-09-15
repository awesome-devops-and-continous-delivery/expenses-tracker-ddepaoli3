const express = require('express')
const parser = require('body-parser')

const app = express()
  .use(parser.json())
  .use(express.static('web'))

const lists = []

app.get('/lists', function (req, res) {
  res.json(lists)
})

app.get('/lists/:id', function (req, res) {
  console.log(req.params.id)
  res.json(lists[req.params.id])
})

app.post('/lists', function (req, res) {
  const list = req.body
  list.id = lists.length
  lists.push(list)
  res.setHeader('Location', '/lists/' + list.id)
  res.json(list)
})

app.listen(8080)
