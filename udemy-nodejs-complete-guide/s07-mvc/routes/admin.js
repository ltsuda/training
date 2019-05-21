const express = require('express')
const adminController = require('../controllers/admin')
const router = express.Router()

router.get('/add-product', adminController.getAddProduct)
router.post('/add-product', adminController.postAddProduct)
router.get('/products', adminController.getProducts)
router.get('/edit-product/:productID', adminController.getEditProduct)

module.exports = router
