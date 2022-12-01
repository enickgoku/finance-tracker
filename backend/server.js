const { PORT = 5001 } = process.env

const cors = require("cors")
const express = require('express')

require('dotenv/config')

const app = express()
app.use(cors())

const listener = () => {
  console.log("it works")
}

app.listen(PORT, listener)
