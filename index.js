const express = require('express')
const parser = require('body-parser')

const app = express()
  .use(parser.json())

const lists = []

app.get('/lists', function (req, res) {
  res.json(lists)
})

app.post('/lists', function (req, res) {
  const list = req.body
  list.id = lists.length
  lists.push(list)
  res.setHeader('Location', '/lists/' + list.id)
  res.json(list)
})

app.listen(8080)
