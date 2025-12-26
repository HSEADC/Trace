const pill = document.querySelector(".M_NavPill");
const indicator = document.querySelector(".Q_NavIndicator");
const links = Array.from(document.querySelectorAll(".A_NavLink"));

if (pill && indicator && links.length) {
  const PILL_PAD_VW = 0.375;

  const vwToPx = (vw) => (vw / 100) * window.innerWidth;

  const normalizePath = (p) => {
    if (!p) return "/";
    return p.replace(/\/+$/, "").toLowerCase();
  };

  const currentPath = normalizePath(window.location.pathname);

  function findActiveLink() {
    let best = null;

    links.forEach((a) => {
      const href = a.getAttribute("href") || "";
      const urlPath = normalizePath(href.split("#")[0].split("?")[0]);

      if (urlPath && currentPath.endsWith(urlPath)) best = a;

      if (!best) {
        const isHome =
          currentPath === "" ||
          currentPath === "/" ||
          currentPath.endsWith("/index.html");
        if (isHome && (urlPath.endsWith("/index.html") || urlPath === "/")) {
          best = a;
        }
      }
    });

    return best || links[0];
  }

  function moveIndicator(el) {
    const padPx = vwToPx(PILL_PAD_VW);
    const left = el.offsetLeft - padPx;
    const width = el.offsetWidth + padPx * 2;

    indicator.style.left = `${left}px`;
    indicator.style.width = `${width}px`;
  }

  function showIndicator() {
    indicator.style.opacity = "1";
  }

  function hideIndicator() {
    indicator.style.opacity = "0";
  }

  const activeLink = findActiveLink();
  links.forEach((l) => l.classList.remove("is-active"));
  activeLink.classList.add("is-active");

  moveIndicator(activeLink);
  showIndicator();

  links.forEach((link) => {
    link.addEventListener("mouseenter", () => {
      moveIndicator(link);
      showIndicator();
    });

    link.addEventListener("focus", () => {
      moveIndicator(link);
      showIndicator();
    });
  });

  pill.addEventListener("mouseleave", () => {
    moveIndicator(activeLink);
    showIndicator();
  });

  pill.addEventListener("focusout", (e) => {
    if (!pill.contains(e.relatedTarget)) {
      moveIndicator(activeLink);
      showIndicator();
    }
  });

  window.addEventListener("resize", () => {
    moveIndicator(activeLink);
  });
}

const burger = document.querySelector(".A_HeaderBurger");
const nav = document.querySelector(".M_HeaderNav");

if (burger && nav) {
  burger.addEventListener("click", () => {
    burger.classList.toggle("is-active");
    nav.classList.toggle("is-open");
  });

  document.querySelectorAll(".A_NavLink").forEach((link) => {
    link.addEventListener("click", () => {
      burger.classList.remove("is-active");
      nav.classList.remove("is-open");
    });
  });
}
