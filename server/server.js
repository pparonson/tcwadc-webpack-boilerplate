const path = require("path")

const express = require("express")

const PORT = 3000
const app = express()

// serve static files
const publicPath = path.resolve(__dirname, "../public")
app.use(express.static(publicPath))

// parse json and urlencoded data into req.body
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.listen(PORT, () => {
  console.log(`Express server is listening on PORT: ${PORT}`)
})
