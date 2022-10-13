require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(
    express.urlencoded({
        extended: true
    })
)

app.use(express.json());

/* ROTAS API */

const personRouter = require("./routes/personRoutes");

app.use("/person", personRouter)

/* ROTA INICIAL / END POINT */

app.get("/", (request, response) => {
    response.json({
        message: "TESTE EXPRESS"
    })
})

const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@apicluster.zjg7epe.mongodb.net/?retryWrites=true&w=majority`)
    .then(() => {
        console.log("Conectado ao MongoDB!")
        app.listen(3000);
    })
    .catch()

