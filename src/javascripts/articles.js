import React from "react";
import { createRoot } from "react-dom/client";
import ArticleCard from "./react/ArticleCard.jsx";
import articlesData from "./react/articlesData.js";

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("articles-search");
  const filterButtons = document.querySelectorAll("[data-category]");

  let currentCategory = "all";
  let currentSearchValue = "";

  articlesData.forEach((article) => {
    const container = document.getElementById(`article-card-${article.id}`);

    if (!container) return;

    const root = createRoot(container);
    root.render(<ArticleCard article={article} />);
  });

  function articleMatchesFilters(article) {
    const matchesCategory =
      currentCategory === "all" || article.category.includes(currentCategory);

    const searchText = currentSearchValue.trim().toLowerCase();

    const matchesSearch =
      searchText === "" ||
      article.title.toLowerCase().includes(searchText) ||
      article.description.toLowerCase().includes(searchText);

    return matchesCategory && matchesSearch;
  }

  function updateVisibleArticles() {
    articlesData.forEach((article) => {
      const container = document.getElementById(`article-card-${article.id}`);

      if (!container) return;

      if (articleMatchesFilters(article)) {
        container.style.display = "";
      } else {
        container.style.display = "none";
      }
    });
  }

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      currentCategory = button.dataset.category;

      filterButtons.forEach((btn) => {
        btn.classList.remove("is-active-button");
      });

      button.classList.add("is-active-button");

      updateVisibleArticles();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (event) => {
      currentSearchValue = event.target.value;
      updateVisibleArticles();
    });
  }

  updateVisibleArticles();
});
