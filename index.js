const http = require("http");
const app = require("./app");
const port = process.env.port ||3000;

http.createServer(app).listen(port);