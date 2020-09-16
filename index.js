const express = require('express')
const parser = require('body-parser')

const app = express()
  .use(parser.json())
  .use(express.static('web'))

const lists = []

app.get('/lists', function (req, res) {
  res.json(lists)
})

app.get('/lists/:list_id', function (req, res) {
  res.json(lists[req.params.list_id])
})

app.post('/lists', function (req, res) {
  const list = req.body
  list.id = lists.length
  list.expenses = []
  lists.push(list)
  res.setHeader('Location', '/lists/' + list.id)
  res.json(list)
})

app.get('/lists/:list_id/expenses', function (req, res) {
  res.json(lists[req.params.list_id].expenses)
})

app.get('/lists/:list_id/expenses/:expense_id', function (req, res) {
  res.json(lists[req.params.list_id].expenses[req.params.expense_id])
})

app.post('/lists/:list_id/expenses', function (req, res) {
  const expense = req.body
  expense.id = lists[req.params.list_id].expenses.length
  lists[req.params.list_id].expenses.push(expense)

  res.setHeader('Location', '/lists/' + req.params.list_id + '/' + expense.id)
  res.json(expense)
})

app.listen(process.env.npm_package_config_port, function () {
  const { address, family, port } = this.address()
  console.log('-- server started on http://[%s]:%s (%s)', address, port, family)
})
