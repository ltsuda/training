// https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers

const express = require('express')

const app = express()

// app.use((req, res, next) => {
//   console.log('inside middleware assignment1')
//   next()
// })


// app.use((req, res, next) => {
//   console.log('inside middleware assignment2')
//   res.send('<h1>Hello Express Assignment</h1>')
// })

app.use('/users', (req, res, next) => {
  res.send('<h1>Hello Express users route</h1>')
})


app.use('/', (req, res, next) => {
  res.send('<h1>Hello Express Assignment Root </h1>')
})

app.listen(3000)
