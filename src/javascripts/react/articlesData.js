import articles from "../../data/articles.json";

const articleImages = {
  "articles/30degree_article_img.png": require("../../img/articles/30degree_article_img.png"),
  "articles/A-BenefitCardImg.png": require("../../img/articles/A-BenefitCardImg.png"),
  "articles/A-icon-batteries.png": require("../../img/articles/A-icon-batteries.png"),
  "articles/A-icon-bottle.png": require("../../img/articles/A-icon-bottle.png"),
  "articles/A-icon-drying.png": require("../../img/articles/A-icon-drying.png"),
  "articles/A-icon-food.png": require("../../img/articles/A-icon-food.png"),
  "articles/A-icon-lunchbox.png": require("../../img/articles/A-icon-lunchbox.png"),
  "articles/A-icon-paper towels.png": require("../../img/articles/A-icon-paper towels.png"),
  "articles/A-icon-shirt.png": require("../../img/articles/A-icon-shirt.png"),
  "articles/A-icon-shoe-covers.png": require("../../img/articles/A-icon-shoe-covers.png"),
  "articles/A-icon-soap.png": require("../../img/articles/A-icon-soap.png"),
  "articles/A-icon-sponge.png": require("../../img/articles/A-icon-sponge.png"),
  "articles/A-icon-toothbrush.png": require("../../img/articles/A-icon-toothbrush.png"),
  "articles/A-CupCardImg.png": require("../../img/articles/A-CupCardImg.png"),
  "articles/A-FoodCardImg.png": require("../../img/articles/A-FoodCardImg.png"),
  "articles/A-LampCardImg.png": require("../../img/articles/A-LampCardImg.png"),
  "articles/A-RazerCardImg.png": require("../../img/articles/A-RazerCardImg.png"),
  "articles/A-ShampoCardImg.png": require("../../img/articles/A-ShampoCardImg.png"),
  "articles/First block art degree img.png": require("../../img/articles/First block art degree img.png"),
  "articles/cup/Cover_video_ artical_cup.png": require("../../img/articles/cup/Cover_video_ artical_cup.png"),
  "articles/cup/First block art cup img.png": require("../../img/articles/cup/First block art cup img.png"),
  "articles/cup/infografica_3_cup.png": require("../../img/articles/cup/infografica_3_cup.png"),
  "articles/cup/infografica_4_cup.png": require("../../img/articles/cup/infografica_4_cup.png"),
  "articles/cup/infographic_1_cup.png": require("../../img/articles/cup/infographic_1_cup.png"),
  "articles/cup/infographic_2_cup.png": require("../../img/articles/cup/infographic_2_cup.png"),
  "articles/infografica_2_30degree_img.svg": require("../../img/articles/infografica_2_30degree_img.svg"),
  "articles/infografica_3_30degree_img.svg": require("../../img/articles/infografica_3_30degree_img.svg"),
  "articles/infografica_4_30degree_img.svg": require("../../img/articles/infografica_4_30degree_img.svg"),
  "articles/liquid_article/card_infographic_1_liquid.png": require("../../img/articles/liquid_article/card_infographic_1_liquid.png"),
  "articles/liquid_article/card_infographic_2_liquid.png": require("../../img/articles/liquid_article/card_infographic_2_liquid.png"),
  "articles/liquid_article/card_infographic_3_liquid.png": require("../../img/articles/liquid_article/card_infographic_3_liquid.png"),
  "articles/liquid_article/card_infographic_4_liquid.png": require("../../img/articles/liquid_article/card_infographic_4_liquid.png"),
  "articles/liquid_article/cover_First block.png": require("../../img/articles/liquid_article/cover_First block.png"),
  "articles/liquid_article/infographic_1_liquid.png": require("../../img/articles/liquid_article/infographic_1_liquid.png"),
  "articles/liquid_article/infographic_2_liquid.png": require("../../img/articles/liquid_article/infographic_2_liquid.png"),
  "articles/liquid_article/infographic_3_liquid.png": require("../../img/articles/liquid_article/infographic_3_liquid.png"),
  "articles/liquid_article/infographic_4_liquid.png": require("../../img/articles/liquid_article/infographic_4_liquid.png"),
  "articles/razer_artical/First block art razer img.png": require("../../img/articles/razer_artical/First block art razer img.png"),
  "articles/razer_artical/card_infographic_1_razer.png": require("../../img/articles/razer_artical/card_infographic_1_razer.png"),
  "articles/razer_artical/card_infographic_2_razer.png": require("../../img/articles/razer_artical/card_infographic_2_razer.png"),
  "articles/razer_artical/card_infographic_3_razer.png": require("../../img/articles/razer_artical/card_infographic_3_razer.png"),
  "articles/razer_artical/card_infographic_4_razer.png": require("../../img/articles/razer_artical/card_infographic_4_razer.png"),
  "articles/razer_artical/infographic_1_razer.png": require("../../img/articles/razer_artical/infographic_1_razer.png"),
  "articles/razer_artical/infographic_2_razer.png": require("../../img/articles/razer_artical/infographic_2_razer.png"),
  "articles/razer_artical/infographic_3_razer.png": require("../../img/articles/razer_artical/infographic_3_razer.png"),
  "articles/razer_artical/infographic_4_razer.png": require("../../img/articles/razer_artical/infographic_4_razer.png"),
  "articles/video_30degree_artical_cover.png": require("../../img/articles/video_30degree_artical_cover.png"),
};
const imageFields = new Set(["image", "heroImage", "cover"]);

function resolveArticleImages(value, key) {
  if (Array.isArray(value)) {
    return value.map((item) => resolveArticleImages(item));
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([entryKey, entryValue]) => [
        entryKey,
        resolveArticleImages(entryValue, entryKey),
      ]),
    );
  }

  if (typeof value === "string" && imageFields.has(key)) {
    return articleImages[value] || value;
  }

  return value;
}

export default articles.map((article) => resolveArticleImages(article));

