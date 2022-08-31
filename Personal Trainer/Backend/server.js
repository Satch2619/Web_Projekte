const express = require("express");
const cors = require("cors");

const app =  express();
const port = 3000;

const corsOptions = {
  origin: "https://localhost:5500",
};

app.use(cors({origin:'*'}));

app.post("/", (request, response) => { 
  response.json("Vielen Dank!");
})

app.listen(port, () => console.info("Server läuft!"));