document.addEventListener("DOMContentLoaded", () => {
  const revealTargets = document.querySelectorAll(
    [
      ".W-ScreenOne",
      ".W-ScreenTwo",
      ".W-ScreenThree",
      ".W-Screen-Four",
      ".W-ScreenOne-Art",
      ".W-ScreenTwo-Art",
      ".W-ScreenThree-Art",
      ".W-ScreenOne-Learn",
      ".W-ScreenTwo-Learn",
      ".W-ScreenThree-Learn",
      ".C_Card",
      ".O-article-card",
      ".M_ArticlesCard",
      ".O-Card-Lesson-Two-Information",
      ".O-Card-Lesson-Two-Swipe",
    ].join(", "),
  );

  if (!revealTargets.length) return;

  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)",
  ).matches;

  revealTargets.forEach((target, index) => {
    target.classList.add("u-reveal");
    target.style.transitionDelay = `${Math.min(index * 35, 180)}ms`;
  });

  if (prefersReducedMotion || !("IntersectionObserver" in window)) {
    revealTargets.forEach((target) => {
      target.classList.add("is-visible");
      target.style.transitionDelay = "";
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("is-visible");
        entry.target.style.transitionDelay = "";
        observer.unobserve(entry.target);
      });
    },
    {
      rootMargin: "0px 0px -10% 0px",
      threshold: 0.08,
    },
  );

  revealTargets.forEach((target) => observer.observe(target));
});
