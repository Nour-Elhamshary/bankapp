productsRouters = require("express").Router();
const { required } = require("joi");
const productsControllers = require("../controllers/products");
const authMiddleWare = require("../middleware/auth");

productsRouters.get("", productsControllers.display);
productsRouters.post("",authMiddleWare.checkAuth, productsControllers.add);
productsRouters.put("", productsControllers.update);
productsRouters.delete("", productsControllers.delete);

module.exports = productsRouters;
