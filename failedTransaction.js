transRoute = require("express").Router();
const { required } = require("joi");
const tCont = require("../controllers/failedTransaction");
const authMiddleWare = require("../middleware/auth");


transRoute.get("", tCont.display);
transRoute.post("", tCont.add);
transRoute.put("", tCont.update);
transRoute.delete("", tCont.delete);

module.exports = transRoute;
