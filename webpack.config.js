const path = require("path")

module.exports = {
  entry: "./public/app.js"
  , devtool: "#source-map" //inline-source-map
  , output: {
    path: path.resolve(__dirname, "dist")
    , filename: "./bundle.js"
  }
  , resolve: {
    extensions: [".js", ".jsx"]
  }
  , mode: "none"
  , module: {
    rules: [
      {
        test: /\.js$/
        , exclude: /node_modules/
        , use: {
          loader: "babel-loader"
          , options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ]
  }
}
