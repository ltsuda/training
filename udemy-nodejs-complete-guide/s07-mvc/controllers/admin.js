const Product = require("../models/product");

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title
  const imageURL = req.body.imageURL
  const price = req.body.price
  const description = req.body.description
  const product = new Product(title, imageURL, price, description)
  product.save()
  res.redirect("/")
};

exports.getAddProduct = (req, res, next) => {
  res.render("admin/add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
    activeAdd: true,
    formsCSS: true,
    productCSS: true
  });
};

exports.getProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.render("admin/products", {
          prods: products,
          pageTitle: "All Products",
          path: "/admin/products",
        });
      });
};
