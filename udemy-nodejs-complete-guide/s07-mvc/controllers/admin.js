const Product = require("../models/product")

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title
  const imageUrl = req.body.imageUrl
  const price = req.body.price
  const description = req.body.description
  const product = new Product(title, imageUrl, description, price)
  product.save()
  res.redirect("/")
}

exports.getAddProduct = (req, res, next) => {
  res.render("admin/edit-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product"
  })
}

exports.getEditProduct = (req, res, next) => {
  const editMode = req.query.edit
  const productID = req.params.productID
  if (!editMode) {
    return res.redirect('/')
  }
  Product.fetchProduct(productID, p => {
    res.render("admin/edit-product", {
      pageTitle: "Edit Product",
      path: "/admin/edit-product",
      product: p,
      editing: editMode
    })
  })
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll(products => {
    res.render("admin/products", {
      prods: products,
      pageTitle: "All Products",
      path: "/admin/products"
    })
  })
}
