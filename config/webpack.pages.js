const HtmlWebpackPlugin = require("html-webpack-plugin");

function createPages(template, filename) {
  return new HtmlWebpackPlugin({
    template: template,
    filename: filename,
  });
}

const htmlPages = [
  createPages("./src/index.html", "./index.html"),
  createPages("./src/pages/about.html", "./pages/about.html"),
  createPages("./src/pages/articles.html", "./pages/articles.html"),
  createPages("./src/pages/study.html", "./pages/study.html"),
  createPages("./src/pages/map.html", "./pages/map.html"),
];

module.exports = htmlPages;
