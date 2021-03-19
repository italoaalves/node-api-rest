const { createServer } = require("http");
const app = require("./app.js");

const port = process.env.PORT || 3000;

const server = createServer(app);
server.listen(port);
