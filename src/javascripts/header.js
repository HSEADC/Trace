const pill = document.querySelector(".M_NavPill");
const indicator = document.querySelector(".Q_NavIndicator");
const links = [...document.querySelectorAll(".A_NavLink")];

function moveIndicator(el) {
  const pillRect = pill.getBoundingClientRect();
  const linkRect = el.getBoundingClientRect();

  const pad = pillRect.height * 0.15;

  indicator.style.left = linkRect.left - pillRect.left - pad + "px";

  indicator.style.width = linkRect.width + pad * 2 + "px";
}

const active = document.querySelector(".A_NavLink.is-active") || links[0];
moveIndicator(active);

links.forEach((link) => {
  link.addEventListener("mouseenter", () => moveIndicator(link));
  link.addEventListener("click", () => {
    links.forEach((l) => l.classList.remove("is-active"));
    link.classList.add("is-active");
    moveIndicator(link);
  });
});

window.addEventListener("resize", () => {
  const current = document.querySelector(".A_NavLink.is-active") || links[0];
  moveIndicator(current);
});
