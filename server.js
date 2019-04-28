const path = require("path")

const express = require("express")

const HTML_FILE = path.join(__dirname, "dist", "index.html")
const PORT = process.env.PORT || 8080

const app = express()

// serve static files
app.use(express.static(__dirname))

// parse json and urlencoded data into req.body
app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.get("/", (req, res) => {
  res.sendFile(HTML_FILE)
})

app.listen(PORT, () =>
  console.log(`Express server is listening on PORT: ${PORT}`))
