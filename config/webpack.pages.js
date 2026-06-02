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
  createPages("./src/pages/articles.html", "./pages/articles.html", ["index"]),
  createPages("./src/pages/learn.html", "./pages/learn.html", ["index"]),
  createPages("./src/pages/game.html", "./pages/game.html", ["index"]),
  createPages("./src/pages/about-us.html", "./pages/about-us.html", ["index"]),
  createPages("./src/pages/404.html", "./pages/404.html", ["index"]),
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
  createPages(
    "./src/pages/articals/artical-refill.html",
    "./pages/articals/artical-refill.html",
    ["index"],
  ),
  createPages(
    "./src/pages/articals/artical-battery-charge.html",
    "./pages/articals/artical-battery-charge.html",
    ["index"],
  ),
  createPages(
    "./src/pages/articals/artical-reusable-paper-towels.html",
    "./pages/articals/artical-reusable-paper-towels.html",
    ["index"],
  ),
  createPages(
    "./src/pages/articals/artical-sponges-saving.html",
    "./pages/articals/artical-sponges-saving.html",
    ["index"],
  ),
  createPages(
    "./src/pages/articals/artical-water-saving.html",
    "./pages/articals/artical-water-saving.html",
    ["index"],
  ),
  createPages(
    "./src/pages/articals/artical-reusable-shoe-covers.html",
    "./pages/articals/artical-reusable-shoe-covers.html",
    ["index"],
  ),
  createPages(
    "./src/pages/articals/artical-toothbrush-saving.html",
    "./pages/articals/artical-toothbrush-saving.html",
    ["index"],
  ),
  createPages(
    "./src/pages/articals/artical-air-drying-laundry.html",
    "./pages/articals/artical-air-drying-laundry.html",
    ["index"],
  ),
  createPages(
    "./src/pages/articals/artical-food-storage.html",
    "./pages/articals/artical-food-storage.html",
    ["index"],
  ),
  createPages(
    "./src/pages/articals/artical-old-clothes-rags.html",
    "./pages/articals/artical-old-clothes-rags.html",
    ["index"],
  ),
  createPages(
    "./src/pages/articals/artical-food-waste.html",
    "./pages/articals/artical-food-waste.html",
    ["index"],
  ),
];

module.exports = htmlPages;
