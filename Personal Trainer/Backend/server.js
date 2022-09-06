const express = require("express");
const cors = require("cors");


const app =  express();
const port = 3000;

const corsOptions = {
  origin: "http://localhost:5500",
};

app.use(cors(corsOptions));

app.post("/", upload.none(), (request, response) => { 
  console.log(request.body);
  response.json("Vielen Dank!");
})

app.listen(port, () => console.info("Server läuft!"));