const express = require("express");
const app = express();
const expressEjsLayouts = require("express-ejs-layouts");
const PORT = process.env.PORT || 4000;
const path = require("path");
const ejs = require("ejs");

const methodOverride = require("method-override");

const sneakerController = require("./controllers/sneaker");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

app.use(expressEjsLayouts);
app.use("/sneaker", sneakerController);

app.use(express.static("public"));
app.use("/static", express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/public/views"));

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(PORT, () => {
  console.log("listening on port", PORT);
});
