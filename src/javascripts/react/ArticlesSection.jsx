import React from "react";
import ArticleCard from "./ArticleCard.jsx";
import articlesData from "./articlesData.js";

export default function ArticlesSection() {
  return (
    <div className="articles-list">
      {articlesData.map((article) => (
        <ArticleCard key={article.id} article={article} />
      ))}
    </div>
  );
}
