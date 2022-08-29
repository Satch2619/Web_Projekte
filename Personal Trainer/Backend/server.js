const express = require("express");
const cors = require("cors");

const app =  express();
const port = 3000;

app.post("/", (request, response) => { 
  response.json("Vielen Dank!");
})

app.listen(port, () => console.info("Server läuft!"));