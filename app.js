const express = require("express");
const cors = require("cors");
const path = require("path");
const bodyParser = require("body-parser");


const app = express();

const authRoutes = require("./routes/auth");


app.set("view engine", "ejs");
app.set("views", "views");

const corsOptions = {credential: true, origin : process.env.URL || '*'};
app.use(cors(corsOptions));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

app.use(authRoutes);

app.listen(3000);
