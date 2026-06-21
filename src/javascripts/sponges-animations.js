const animatedBlocks = document.querySelectorAll(
  ".body_article_sponges .M-SpongesInfo, .body_article_sponges .M-SpongesTextCard, .body_article_sponges .M-SpongesVideoCard"
);

if (animatedBlocks.length && "IntersectionObserver" in window) {
  const revealBlock = (entry) => {
    entry.target.classList.add("is-in-view");
    observer.unobserve(entry.target);
  };

  const observer = new IntersectionObserver(
    (entries) => entries.filter((entry) => entry.isIntersecting).forEach(revealBlock),
    { threshold: 0.16 }
  );

  animatedBlocks.forEach((block, index) => {
    block.classList.add("is-motion-ready");
    block.style.setProperty("--sponges-reveal-delay", `${(index % 3) * 90}ms`);
    observer.observe(block);
  });
}