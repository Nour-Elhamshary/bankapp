accountsRouters = require("express").Router();
const accountcontroller = require("../controllers/accounts.js");
const authMiddleWare = require("../middleware/auth");

accountsRouters.post("",authMiddleWare.checkAuth,account.add);
accountsRouters.post("/login",accountcontroller.login);


module.exports = accountsRouters;