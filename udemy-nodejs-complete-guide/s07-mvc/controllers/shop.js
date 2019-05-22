const Product = require("../models/product")
const Cart = require("../models/cart")

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "All Products",
      path: "/products",
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    })
  })
}

exports.getProduct = (req, res, next) => {
  const productID = req.params.productID
  Product.fetchProduct(productID, product => {
    res.render("shop/product-detail", {
      product: product,
      pageTitle: product.title,
      path: "/products"
    })
  })
}

exports.getIndex = (req, res, next) => {
  Product.fetchAll(products => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Shop",
      path: "/"
    })
  })
}

exports.getCart = (req, res, next) => {
  Cart.getCart(cart => {
    Product.fetchAll(products => {
      const cartProducts = []
      for (product of products) {
        const cartProductData = cart.products.find(
          prod => prod.id === product.id
        )
        if (cartProductData) {
          cartProducts.push({
            cartProductData: product,
            qty: cartProductData.qty
          })
        }
      }
      res.render("shop/cart", {
        path: "/cart",
        pageTitle: "Your Cart",
        products: cartProducts
      })
    })
  })
}

exports.postCart = (req, res, next) => {
  const prodID = req.body.productID
  Product.fetchProduct(prodID, product => {
    Cart.addProduct(prodID, product.price)
  })
  res.redirect("/cart")
}

exports.postCartDeleteItem = (req, res, next) => {
  const prodID = req.body.productID
  Product.fetchProduct(prodID, product => {
    Cart.deleteProduct(prodID, product.price)
    res.redirect('/cart')
  })
}

exports.getOrders = (req, res, next) => {
  res.render("shop/orders", {
    path: "/orders",
    pageTitle: "Your Orders"
  })
}

exports.getCheckout = (req, res, next) => {
  res.render("shop/checkout", {
    path: "/checkout",
    pageTitle: "Checkout"
  })
}
