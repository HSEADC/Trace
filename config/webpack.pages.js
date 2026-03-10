const HtmlWebpackPlugin = require("html-webpack-plugin");

function createPages(template, filename, chunks) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
    chunks: chunks,
  });
}

const htmlPages = [
  createPages("./src/index.html", "./index.html", ["index"]),
  createPages("./src/pages/style-guide.html", "./pages/style-guide.html", [
    "index",
  ]),
  createPages("./src/pages/articles.html", "./pages/articles.html", ["index"]),
  createPages("./src/pages/learn.html", "./pages/learn.html", ["index"]),
  createPages("./src/pages/game.html", "./pages/game.html", ["index"]),
  createPages("./src/pages/about-us.html", "./pages/about-us.html", ["index"]),
  createPages(
    "./src/pages/articals/artical-degree.html",
    "./pages/articals/artical-degree.html",
    ["index"],
  ),
  createPages(
    "./src/pages/articals/artical-cup.html",
    "./pages/articals/artical-cup.html",
    ["index"],
  ),
  createPages(
    "./src/pages/articals/artical-razer.html",
    "./pages/articals/artical-razer.html",
    ["index"],
  ),
  createPages(
    "./src/pages/articals/artical-liquid-or-solid.html",
    "./pages/articals/artical-liquid-or-solid.html",
    ["index"],
  ),
];

module.exports = htmlPages;
