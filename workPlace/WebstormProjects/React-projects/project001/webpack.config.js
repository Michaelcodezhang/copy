module.exports={
  devtool: 'eval-source-map',
  entry:__dirname + "/app/src/main.js",
  output:{
    path:__dirname + "/dist",
    filename: "bundle.js"
  },
  devServer:{
    contentBase:"./app/public",
    historyApiFallback:true,
    inline:true
  },
  module:{
    loaders:[
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