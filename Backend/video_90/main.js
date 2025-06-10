const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs")
// app.use(express.static("public"))

 //Middleware 1 - Loggar for an application
app.use((req, res, next) => {
    fs.writeFileSync("logs.txt", `${Date.now()} is a ${req.method}`)
    console.log(`${Date.now()} is a ${req.method}`);
    // res.send("Hacked by Middleware 1")
    next();
});
  //Middleware 2
app.use((req, res, next)=> {
    console.log("m2");
    next();
  });

app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.get("/about", (req, res) => {
  res.send("Hello World! About");
});
app.get("/contact", (req, res) => {
  res.send("Hello World! Contact");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
