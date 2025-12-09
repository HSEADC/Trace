/******/ (() => { // webpackBootstrap
/******/ 	"use strict";


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
function generateNoise() {
  var opacity = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0.45;
  var density = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.1;
  var size = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 130;
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  var w = canvas.width = 100;
  var h = canvas.height = 100;
  var imgData = ctx.createImageData(w, h);
  for (var i = 0; i < imgData.data.length; i += 4) {
    var alpha = Math.random() < density ? 260 * opacity : 0;
    imgData.data[i] = 99;
    imgData.data[i + 1] = 99;
    imgData.data[i + 2] = 99;
    imgData.data[i + 3] = alpha;
  }
  ctx.putImageData(imgData, 0, 0);
  document.body.style.backgroundImage = "url(".concat(canvas.toDataURL(), ")");
  document.body.style.backgroundSize = "".concat(size, "px ").concat(size, "px");
}
generateNoise();
/******/ })()
;