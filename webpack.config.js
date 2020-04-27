const path = require("path");

module.exports = {
  entry: ["./client/index.js"],
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
  },
  devServer: {
    host: "localhost",
    port: 9090,
    // match the output path
    contentBase: path.resolve(__dirname, "client"),
    // enable HMR on the devServer
    hot: true,
    // math the output 'publicPath'
    publicPath: "/build",
    // fallback to root for other urls
    historyApiFallback: true,
    inline: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    /**
     * proxy is required in order to make api calls to
     * express server while using hot-reload webpack server
     * routes api fetch request from localhost:9090/api/* (webpack dev server)
     * to localhost:5000/api/* (where your express server is running)
     */
    proxy: {
      "/api/**": "http://localhost:5000",
    },
  },
  modele: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },
};
