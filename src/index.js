const express = require("express")

const productControlar = require("./controlars/productControlar")

const app = express()

app.use(express.json())

app.use("/products",productControlar)

module.exports = app