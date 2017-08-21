module.exports={
  entry:__dirname + "/app/main.js",
  output:{
    path:__dirname + "/public",
    filename: "bundle.js"
  },
  devtool:'eval-source-map',
  devServer:{
    contentBase:"./public",
    historyApiFallback:true,
    inline:true
  },
  module: {
    loaders: [
      {
        test:/\.json$/,
        loader:"json-loader"
      },
      {
        test:/\.js$/,
        loader:'babel-loader',
        exclude:/node_modules/
      }
    ]
  }
}