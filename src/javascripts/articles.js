import React from "react";
import { createRoot } from "react-dom/client";
import ArticleCard from "./react/ArticleCard.jsx";
import articlesData from "./react/articlesData.js";

document.addEventListener("DOMContentLoaded", () => {
  articlesData.forEach((article) => {
    const container = document.getElementById(`article-card-${article.id}`);

    if (!container) return;

    const root = createRoot(container);
    root.render(<ArticleCard article={article} />);
  });
});
