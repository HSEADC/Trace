const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const HtmlWebpackPartialsPlugin = require("html-webpack-partials-plugin");

const htmlPages = require("./webpack.pages.js");
const path = require("path");

module.exports = {
  entry: {
    index: "./src/javascripts/index.js",
  },

  output: {
    filename: "[name].js",
    path: path.resolve(".", "docs"),
    clean: true, // чистит docs перед сборкой (не обязательно, но удобно)
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
          },
        },
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/i,
        type: "asset/resource",
        generator: {
          filename: "images/[hash][ext][query]",
        },
      },
      {
        test: /\.(ttf|otf|woff|woff2)$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[hash][ext][query]",
        },
      },
    ],
  },

  plugins: [
    new MiniCssExtractPlugin(),

    ...htmlPages,

    // partials: header / footer / card / button
    new HtmlWebpackPartialsPlugin([
      {
        path: "./src/components/header/header.html",
        location: "header",
        template_filename: "*",
      },
      {
        path: "./src/components/footer/footer.html",
        location: "footer",
        template_filename: "*",
      },

      // components UI
      {
        path: "./src/components/card/card.html",
        location: "card",
        template_filename: "*",
      },
      {
        path: "./src/components/button/button.html",
        location: "button",
        template_filename: "*",
      },
    ]),
  ],

  optimization: {
    minimize: true,
    minimizer: ["...", new CssMinimizerPlugin()],
  },

  resolve: {
    fallback: {
      stream: require.resolve("stream-browserify"),
    },
  },
};
