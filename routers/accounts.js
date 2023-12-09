accountsRouters = require("express").Router();
const accountController = require("../controllers/accounts.js");
//const authMiddleWare = require("../middleware/auth");

accountsRouters.post("",accountController.add);
accountsRouters.get("",accountController.display);
accountsRouters.put("",accountController.update);
accountsRouters.delete("",accountController.delete);
//accountsRouters.post("/login",accountcontroller.login);


module.exports = accountsRouters;