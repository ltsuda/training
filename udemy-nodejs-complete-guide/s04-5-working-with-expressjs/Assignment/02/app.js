const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");

const mainRoute = require("./routes/main.js");
const usersRoute = require("./routes/users.js");
const rootDir = require("./util/path.js");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(mainRoute);
app.use(usersRoute);

app.listen(3000);
