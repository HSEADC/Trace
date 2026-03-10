import React from "react";
import { createRoot } from "react-dom/client";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("articles-cards-root");

  if (!container) return;

  const root = createRoot(container);
  root.render(<ArticlesSection />);
});
