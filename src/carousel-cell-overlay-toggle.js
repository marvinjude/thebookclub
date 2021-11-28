/**
 * Handles showing and hiding of overlay on each featured book
 */

document.addEventListener("DOMContentLoaded", function () {
  setTimeout(() => {
    const cells = document.querySelectorAll(".carousel-cell");

    for (const cell of cells) {
      cell.querySelector("*[data-overlay-opener=true]").onclick = () => {
        cell.querySelector(".carousel-cell__overlay").style.display =
          "block";
      };
      cell.querySelector("*[data-overlay-closer=true]").onclick = () => {
        cell.querySelector(".carousel-cell__overlay").style.display = "none";
      };
    }
  });
});
