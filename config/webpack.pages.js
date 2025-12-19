const HtmlWebpackPlugin = require("html-webpack-plugin");

function createPages(template, filename) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
  });
}

const htmlPages = [
  createPages("./src/index.html", "./index.html"),
  createPages("./src/pages/style-guide.html", "./pages/style-guide.html"),
  createPages("./src/pages/articles.html", "./pages/articles.html"),
  createPages("./src/pages/game.html", "./pages/game.html"),
  createPages(
    "./src/pages/articals/artical-degree.html",
    "./pages/articals/artical-degree.html"
  ),
  createPages(
    "./src/pages/articals/artical-cup.html",
    "./pages/articals/artical-cup.html"
  ),
  createPages(
    "./src/pages/articals/artical-razer.html",
    "./pages/articals/artical-razer.html"
  ),
  createPages(
    "./src/pages/articals/artical-liquid-or-solid.html",
    "./pages/articals/artical-liquid-or-solid.html"
  ),
];

module.exports = htmlPages;
