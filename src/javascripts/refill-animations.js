const refillAnimatedBlocks = document.querySelectorAll(
  ".body_article_refill .M-RefillInfo, .body_article_refill .M-RefillTextCard, .body_article_refill .M-RefillVideoCard"
);

if (refillAnimatedBlocks.length && "IntersectionObserver" in window) {
  const refillObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-in-view");
        refillObserver.unobserve(entry.target);
      });
    },
    { threshold: 0.16 }
  );

  refillAnimatedBlocks.forEach((block, index) => {
    block.classList.add("is-motion-ready");
    block.style.setProperty("--refill-reveal-delay", `${(index % 3) * 90}ms`);
    refillObserver.observe(block);
  });
}