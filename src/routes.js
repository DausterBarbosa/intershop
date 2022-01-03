const {Router} = require("express");

const ProductController = require("./controllers/ProductController");

const Routes = Router();

Routes.get("/nacionais", ProductController.national);
Routes.get("/internacionais", ProductController.international);
Routes.get("/exclusivas", ProductController.exclusive);

module.exports = Routes;