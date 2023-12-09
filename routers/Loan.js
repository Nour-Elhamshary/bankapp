loanRouters = require("express").Router();
const { required } = require("joi");
const loansControllers = require("../controllers/Loan");
//const authMiddleWare = require("../middleware/auth");

loanRouters.get("", loansControllers.display);
loanRouters.post("", loansControllers.add);
loanRouters.put("", loansControllers.update);
loanRouters.delete("", loansControllers.delete);

module.exports = loanRouters;