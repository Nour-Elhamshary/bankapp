virtualRouters = require("express").Router();
const virtualControllers = require("../controllers/virtualCard");


virtualRouters.get("", virtualControllers.display);
virtualRouters.post("", virtualControllers.add);



module.exports = virtualRouters;
