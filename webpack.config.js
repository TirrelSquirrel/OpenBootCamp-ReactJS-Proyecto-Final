/*eslint-disable*/
const path = require("path");

//PLUGINS Y MINIFICADORES DE CSS Y SASS
//Para reducir el tamaño de las hojas de nuestro proyecto

const HtmlWebPackPlugin = require("html-webpack-plugin"); //Para el template de html que usará webpack
const MiniCssExtractPlugin = require("mini-css-extract-plugin"); //Para reducir los css
const { SourceMapDevToolPlugin } = require("webpack"); //Para conocer el source map de nuestro proyecto

//Configuración del puerto
const port = process.env.PORT || 3000;

//Exportar configuración de webpack
module.exports = {
  entry: "./src/index.jsx",
  output: {
    path: path.join(__dirname, "/dist"),
    filename: "bundle.[hash].js",
    publicPath: "/",
  },
  context: path.resolve(__dirname),
  devServer: {
    port,
    static: true,
    historyApiFallback: true,
  },
  devtool: "eval-source-map",
  module: {
    rules: [
      //Reglas para archivos js y jsx
      //Tienen que pasar el LINTING para poder pasar
      {
        enforce: "pre",
        test: /(\.js|\.jsx)$/,
        exclude: /node_modules/,
        use: [{ loader: "source-map-loader" }],
      },
      //Reglas para archivo js y jsx
      //Reglas de Babel ES y JSX

      {
        test: /\.m?js$|\.m?jsx$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [["@babel/preset-env", { targets: "defaults" }]],
          },
        },
      },
      //Reglas para archivos css y scss (minificarlos y cargarlos en el bundle)
      {
        test: /(\.css|\.scss|\.sass)$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ],
      },
      //Imágenes
      {
        test: /(\.png|\.jpe?g|\.gif)$/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  plugins: [
    //Template html
    new HtmlWebPackPlugin({
      template: "./public/index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "./css/styles.css",
    }),
    new SourceMapDevToolPlugin({
      filename: "[file].map",
    }),
  ],
  resolve: {
    extensions: [".js", ".jsx", ".css", ".scss", ".sass"],
    modules: ["node_modules"],
  },
};
