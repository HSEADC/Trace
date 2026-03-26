const modal = document.getElementById("mapModal");
const openMapButtons = document.querySelectorAll("[data-open-map]");
const closeMapButtons = document.querySelectorAll("[data-close-map]");

let mapLoaded = false;

function openMapModal() {
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";

  if (!mapLoaded) {
    loadYandexMap();
    mapLoaded = true;
  }
}

function closeMapModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

function loadYandexMap() {
  const script = document.createElement("script");
  script.src =
    "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A19b954d53263774b4dc99cbc9beb5219bb66fad85e57f0e24f9625b9ae64c8f5&width=100%25&height=100%25&lang=ru_RU&scroll=true";
  script.async = true;
  script.charset = "utf-8";

  document.getElementById("yandex-map-container").appendChild(script);
}

openMapButtons.forEach((button) => {
  button.addEventListener("click", openMapModal);
});

closeMapButtons.forEach((button) => {
  button.addEventListener("click", closeMapModal);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeMapModal();
  }
});
