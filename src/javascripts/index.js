import "../stylesheets/style.css";

// sunshine

// window.addEventListener("load", () => {
//   const overlay = document.getElementById("loadSweep");

//   const onAnimationEnd = (e) => {
//     if (e.target !== overlay && e.animationName === "sweep") {
//       overlay.classList.add("done");
//     }
//   };
//   overlay.addEventListener("animationend", onAnimationEnd, { once: true });

//   overlay.addEventListener(
//     "transitionend",
//     () => {
//       overlay.remove();
//     },
//     { once: true }
//   );

//   setTimeout(() => {
//     overlay.classList.add("done");
//     setTimeout(() => overlay.remove(), 350);
//   }, 1600);
// });

// noise
function generateNoise(opacity = 0.45, density = 0.1, size = 130) {
  const canvas = document.createElement("canvas");
  const ctx = canvas.getContext("2d");
  const w = (canvas.width = 100);
  const h = (canvas.height = 100);

  const imgData = ctx.createImageData(w, h);
  for (let i = 0; i < imgData.data.length; i += 4) {
    const alpha = Math.random() < density ? 260 * opacity : 0;
    imgData.data[i] = 99;
    imgData.data[i + 1] = 99;
    imgData.data[i + 2] = 99;
    imgData.data[i + 3] = alpha;
  }
  ctx.putImageData(imgData, 0, 0);
  document.body.style.backgroundImage = `url(${canvas.toDataURL()})`;
  document.body.style.backgroundSize = `${size}px ${size}px`;
}
generateNoise();
