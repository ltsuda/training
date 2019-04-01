const path = require('path')
const express = require('express')

const rootDir = require('../util/path.js')

const router = express.Router()

router.get('/add-product', (req, res, next) => {
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
})

router.post('/add-product', (req, res, next) => {
  console.log(req.body)
  res.sendFile(path.join(rootDir, 'views', 'shop.html'))
})

module.exports = router
