import React from "react";

export default function ArticleCard({ article }) {
  return (
    <a className="article-card" href={article.link}>
      <div className="article-card__top">
        <h3 className="article-card__title">{article.title}</h3>
        <span className="article-card__icon">↗</span>
      </div>

      <div className="article-card__image-wrapper">
        <img
          className="article-card__image"
          src={article.image}
          alt={article.title}
        />
      </div>

      <div className="article-card__bottom">
        <p className="article-card__description">{article.description}</p>
        <span className="article-card__more">читать далее</span>
      </div>
    </a>
  );
}
