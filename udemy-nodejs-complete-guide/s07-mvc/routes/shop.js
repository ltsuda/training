const express = require('express')
const shopController = require('../controllers/shop')
const router = express.Router()

router.get('/', shopController.getIndex)
router.get('/products', shopController.getProducts)
router.get('/products/:productID', shopController.getProduct)
router.post('/cart', shopController.postCart)
router.get('/cart', shopController.getCart)
router.get('/cart-delete-item', shopController.postCartDeleteItem)
router.get('/checkout', shopController.getCheckout)
router.get('/orders', shopController.getOrders)

module.exports = router
