const batteryAnimatedBlocks = document.querySelectorAll(
  ".body_article_battery .M-BatteryInfo, .body_article_battery .M-BatteryTextCard, .body_article_battery .M-BatteryVideoCard"
);

if (batteryAnimatedBlocks.length && "IntersectionObserver" in window) {
  const batteryObserver = new IntersectionObserver(
    (entries) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-in-view");
      batteryObserver.unobserve(entry.target);
    }),
    { threshold: 0.16 }
  );

  batteryAnimatedBlocks.forEach((block, index) => {
    block.classList.add("is-motion-ready");
    block.style.setProperty("--battery-delay", `${(index % 3) * 90}ms`);
    batteryObserver.observe(block);
  });
}