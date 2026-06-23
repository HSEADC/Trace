import React from "react";
import { createRoot } from "react-dom/client";
import ArticleCard from "./react/ArticleCard.jsx";
import articlesData from "./react/articlesData.js";

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("articles-search");
  const filterButtons = document.querySelectorAll("[data-category]");

  let currentCategory = "all";
  let currentSearchValue = "";
  const articlesGrid = document.querySelector(".W-ScreenThree-Art");
  const featuredSection = document.querySelector(".W-ScreenTwo-Art");
  const featuredCards = [1, 2]
    .map((id) => document.getElementById(`article-card-${id}`))
    .filter(Boolean);

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
    const isFiltering =
      currentCategory !== "all" || currentSearchValue.trim() !== "";
    const featuredCardsContainer = document.querySelector(
      ".W-ScreenTwo-Art-Left",
    );
    const articleContainers = articlesData
      .map((article) => ({
        article,
        container: document.getElementById(`article-card-${article.id}`),
      }))
      .filter(({ container }) => container);
    const matchingContainers = articleContainers.filter(({ article }) =>
      articleMatchesFilters(article),
    );
    const topCards = isFiltering
      ? matchingContainers.slice(0, 2).map(({ container }) => container)
      : featuredCards;

    if (articlesGrid && featuredSection && featuredCardsContainer) {
      featuredSection.hidden = false;

      articleContainers.forEach(({ container }) => {
        if (!topCards.includes(container)) articlesGrid.append(container);
      });
      topCards.forEach((container) => featuredCardsContainer.append(container));
    }

    articleContainers.forEach(({ article, container }) => {
      container.style.display =
        !isFiltering || articleMatchesFilters(article) ? "" : "none";
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


