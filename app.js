const path = require("path");

const express = require("express");
const csrf = require("csurf");

const db = require("./database/database");
const addCsrfTokenMiddleware = require("./middlewares/csrf-token");
const errorHandleMiddleware = require("./middlewares/error-handler");
const authRoutes = require("./routes/auth.routes");

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));

app.use(csrf());
app.use(addCsrfTokenMiddleware);

app.use(authRoutes);

app.use(errorHandleMiddleware);

db.connectToDatabase()
  .then(function () {
    app.listen(3000);
  })
  .catch(function (error) {
    console.log("Failed to connect to the database");
    console.log(error);
  });
