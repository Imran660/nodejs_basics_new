//import statements
const express = require("express");

//config

//app init
const app = express();

//app middlewares

//app routes

//post- create   C  - 201 OK,created
//app - get or read R -200 OK (By default)
//put/patch - update U - 200 OK
//delete - delete  D -200 OK

//status codes from response or server
//304 -- Not modified (By default)
//400 -- Bad request
//401 -- Unauthorised (By Default)
//404 -- resource or service not found (By Default)
//500 -- Internal server error

app.get("/", (req, res) => {
  console.log("Hey this is home route");
  res.send("Hey this is home route !....");
});

app.get("/user/:name", (req, res) => {
  console.log(req.params);
  res.status(400).send(`Hey user ${req.params.name}`);
});

app.get("/user", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});
//app start
app.listen(8001, () => console.log("server started successfully"));
