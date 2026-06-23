const towelsAnimatedBlocks = document.querySelectorAll(
  ".body_article_towels .M-TowelsInfo, .body_article_towels .M-TowelsTextCard"
);

if (towelsAnimatedBlocks.length && "IntersectionObserver" in window) {
  const towelsObserver = new IntersectionObserver(
    (entries) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-in-view");
      towelsObserver.unobserve(entry.target);
    }),
    { threshold: 0.16 }
  );

  towelsAnimatedBlocks.forEach((block, index) => {
    block.classList.add("is-motion-ready");
    block.style.setProperty("--towels-delay", `${(index % 3) * 90}ms`);
    towelsObserver.observe(block);
  });
}