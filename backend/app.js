const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");

// importation des routes que l'on met dans un index.js
const router = require("./routes/index");

// connecting to the data base
mongoose
  .connect(
    "mongodb+srv://renaud_77:Monsters77@cluster0.1gtrq.mongodb.net/test?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log("Connexion à MongoDB réussie !"))
  .catch(() => console.log("Connexion à MongoDB échouée !"));

const app = express();

// CORS
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

//méthode .json qui va transformer notre requête en objet JSON lisible
app.use(bodyParser.json());

// Serve static files
app.use("/images", express.static(path.join(__dirname, "images")));

// on recupere nos routes
app.use("/api", router);

module.exports = app;
