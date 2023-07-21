const express = require("express");
const cors = require("cors");


const app = express();

const userDetails = require("./routes/addUsers");
const usersRouter = require("./routes/users");
const bodyParser = require("body-parser");

app.set("view engine", "ejs");
app.set("views", "views");

app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/addUsers", userDetails.routes);
app.use(usersRouter);

app.use((req, res, next) => {
  res.status(404).render("404", { docTitle: "404" });
});

app.listen(3000);
