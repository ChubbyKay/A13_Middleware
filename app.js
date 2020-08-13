// app.js
const express = require('express')
const app = express()
const port = 3000

app.use(function (req, res, next) {
  const request_start_time = new Date().getTime()
  const localTime = new Date().toLocaleString('zh-TW', { hour12: false })
  res.on('finish', function () {
    const response_end_time = new Date().getTime()
    const duration = response_end_time - request_start_time
    console.log(localTime, '|', req.method, 'from', req.originalUrl, '|', 'total time:', duration, 'ms')
  })
  next()
})

app.get('/', (req, res) => {
  res.send('列出全部 Todo')
})

app.get('/new', (req, res) => {
  res.send('新增 Todo 頁面')
})

app.get('/:id', (req, res) => {
  res.send('顯示一筆 Todo')
})

app.post('/', (req, res) => {
  res.send('新增一筆  Todo')
})

app.listen(port, () => {
  console.log(`App running on localhost:${port}`)
})
