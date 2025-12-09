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
  createPages("./src/pages/tests.html", "./pages/tests.html"),
  createPages("./src/pages/artical-degree.html", "./pages/artical-degree.html"),
  createPages("./src/pages/artical-cup.html", "./pages/artical-cup.html"),
  createPages("./src/pages/artical-razer.html", "./pages/artical-razer.html"),
];

module.exports = htmlPages;
