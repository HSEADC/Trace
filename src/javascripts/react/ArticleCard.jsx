import React from "react";

export default function ArticleCard({ article }) {
  return (
    <a className="O-article-card" href={article.link}>
      <div className="M-article-card-top">
        <h3 className="A-article-card-title">{article.title}</h3>
        <span className="A-article-card-icon">↗</span>
      </div>

      <div className="W-article-card-img">
        <img
          className="A-article-card-img"
          src={article.image}
          alt={article.title}
        />
      </div>

      <div className="M-article-card-bottom">
        <p className="A-article-card-description">{article.description} </p>
      </div>
    </a>
  );
}
