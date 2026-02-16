import Airtable from "airtable";

console.log("ARTICLES MODULE loaded");

const token =
  "patBdU5EFXdZYEbFR.0b858b82c978d598c52a08e6613a284ad5b80fc611b058a1279424a2f0c51521";

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: token,
});

const base = Airtable.base("appVVuOIFrxBWLZtB");

console.log("articles.js loaded");

document.addEventListener("DOMContentLoaded", () => {
  const root = document.querySelector(".O_ArticleTeasers");
  if (!root) {
    console.log("No .O_ArticleTeasers on this page — skip");
    return;
  }

  getArticlesTeasers()
    .then((content) => {
      console.log("Airtable content:", content);
      updateInfo(root, content);
    })
    .catch((err) => console.error("Airtable error:", err));
});

function getArticlesTeasers() {
  return new Promise((resolve, reject) => {
    const content = [];

    base("trace")
      .select({ maxRecords: 100 })
      .firstPage()
      .then((result) => {
        result.forEach((record) => {
          content.push({
            id: record.id,
            title: record.fields["Title"] ?? "",
            description: record.fields["Description"] ?? "",
            tags: record.fields["Tags"] ?? [],
            image: record.fields["Images"]?.[0]?.url,
            url: record.fields["URL"] ?? "#",
          });
        });

        resolve(content);
      })
      .catch(reject);
  });
}

function updateInfo(root, content) {
  root.innerHTML = "";
  content.forEach((stroke) => {
    root.appendChild(createArticleTeaserCard(stroke));
  });
}

function createArticleTeaserCard(stroke) {
  const { title, description, image, url } = stroke;

  // card wrapper
  const card = document.createElement("a");
  card.href = url || "#";
  card.classList.add("M_ArticlesCard");

  // top bar
  const top = document.createElement("div");
  top.classList.add("W_ArticlesCard-Title");

  const header = document.createElement("h3");
  header.classList.add("A_ArticlesCard-Title");
  header.textContent = title;

  const arrow = document.createElement("span");
  arrow.classList.add("A_ArrowIcon");
  arrow.textContent = "↗";

  top.appendChild(header);
  top.appendChild(arrow);

  // image block
  const media = document.createElement("div");
  media.classList.add("W_ArticlesCard-img");
  if (image) {
    media.style.backgroundImage = `url(${image})`;
  }

  // bottom text
  const bottom = document.createElement("div");
  bottom.classList.add("W_ArticlesCard-Bottom");

  const text = document.createElement("p");
  text.classList.add("A_ArticlesCard-Text");
  text.textContent = description;

  const cta = document.createElement("span");
  cta.classList.add("A_ReadFurther");
  cta.textContent = "читать далее";

  bottom.appendChild(text);
  bottom.appendChild(cta);

  card.appendChild(top);
  card.appendChild(media);
  card.appendChild(bottom);

  return card;
}
