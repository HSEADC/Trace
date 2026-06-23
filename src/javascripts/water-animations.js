const waterAnimatedBlocks = document.querySelectorAll(
  ".body_article_water .M-WaterTextCard, .body_article_water .M-WaterVideoCard"
);
if (waterAnimatedBlocks.length && "IntersectionObserver" in window) {
  const waterObserver = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-in-view");
    waterObserver.unobserve(entry.target);
  }), { threshold: 0.16 });
  waterAnimatedBlocks.forEach((block, index) => {
    block.classList.add("is-motion-ready");
    block.style.setProperty("--water-delay", `${(index % 3) * 90}ms`);
    waterObserver.observe(block);
  });
}