const express = require("express");
const path = require("path");

const app = express();

app.set("view engine","pug");
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) =>
  //res.sendFile(path.join(__dirname, "/views/index.html"))
  res.render("home", {title:"Danny Test"})
);

app.listen(8080, () => console.log(`port listening on localhost:8080`));
