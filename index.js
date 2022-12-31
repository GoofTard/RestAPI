const express = require("express");
const bodyParser = require("body-parser");
const { init } = require("./db");
const routes = require("./routes");
const cors = require("cors");

const PORT = 9000;

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(routes);

init();

console.log(`starting server on port ${PORT}`);
app.listen(PORT);
