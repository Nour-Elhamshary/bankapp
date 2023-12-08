clientsRouters = require("express").Router();
const clientcontroller = require("../controllers/clients.js");
const authMiddleWare = require("../middleware/auth");

clientsRouters.post("",authMiddleWare.checkAuth,clientcontroller.add);
clientsRouters.post("/login",clientcontroller.login);


module.exports = clientsRouters;