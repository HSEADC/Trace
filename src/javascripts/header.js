document.addEventListener("DOMContentLoaded", () => {
  const burgerButton = document.getElementById("burgerButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const headerFrame = document.querySelector(".W-HeaderFrame");

  const desktopLinks = document.querySelectorAll(".A-NavItem");
  const mobileLinks = document.querySelectorAll(".A-MobileNavItem");

  function normalizePath(path) {
    if (!path) return "/";

    let normalized = path.toLowerCase();

    normalized = normalized.replace(/index\.html$/, "");
    normalized = normalized.replace(/\/+$/, "");

    if (normalized === "") normalized = "/";

    return normalized;
  }

  function setActiveLinks() {
    const currentPath = normalizePath(window.location.pathname);

    const allLinks = [...desktopLinks, ...mobileLinks];

    allLinks.forEach((link) => {
      link.classList.remove("is-active");

      const linkUrl = new URL(link.href, window.location.origin);
      const linkPath = normalizePath(linkUrl.pathname);

      if (linkPath === currentPath) {
        link.classList.add("is-active");
      }
    });

    if (![...allLinks].some((link) => link.classList.contains("is-active"))) {
      allLinks.forEach((link) => {
        const linkUrl = new URL(link.href, window.location.origin);
        const linkPath = normalizePath(linkUrl.pathname);

        if (linkPath === "/" || linkPath.endsWith("/trace")) {
          if (currentPath === "/" || currentPath.endsWith("/trace")) {
            link.classList.add("is-active");
          }
        }
      });
    }
  }

  function openMenu() {
    if (!burgerButton || !mobileMenu || !headerFrame) return;

    mobileMenu.classList.add("is-open");
    burgerButton.classList.add("is-open");
    headerFrame.classList.add("is-open");
    burgerButton.setAttribute("aria-expanded", "true");
  }

  function closeMenu() {
    if (!burgerButton || !mobileMenu || !headerFrame) return;

    mobileMenu.classList.remove("is-open");
    burgerButton.classList.remove("is-open");
    headerFrame.classList.remove("is-open");
    burgerButton.setAttribute("aria-expanded", "false");
  }

  function toggleMenu() {
    if (!mobileMenu) return;

    if (mobileMenu.classList.contains("is-open")) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  if (burgerButton && mobileMenu && headerFrame) {
    burgerButton.addEventListener("click", toggleMenu);

    mobileLinks.forEach((link) => {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 768) {
        closeMenu();
      }
    });
  }

  setActiveLinks();
});
