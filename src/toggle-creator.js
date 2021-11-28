/**
 * if you need to simply hide show or hide an element when another element is clicked, this handles that
 * Usage: pass the `id` of the element to toggle in a data-toggle attribute
  @example <button data-toggle='id-of-element-to-toggle'>...</button>
 */

/**
 * Sets `toggler` as a toggler for `elementToToggle`
 * @param {Element} toggler - The element to be used a toggler to show/hide another element
 * @param {Element} elementToToggle  - The element to be toggled
 */
function toggleHandler(toggler, elementToToggle) {
  toggler.onclick = () => {
    const isVisible =
      elementToToggle.style.display == "" ||
      elementToToggle.style.display == "block";
    const isHidden = elementToToggle.style.display == "none";

    if (isHidden) {
      elementToToggle.style.display = "block";
      return;
    }

    if (isVisible) {
      elementToToggle.style.display = "none";
      return;
    }
  };
}

document.addEventListener("DOMContentLoaded", function () {
  const togglers = document.querySelectorAll("*[data-toggle]");

  for (const togglerElem of togglers) {
    const elementToToggle = document.querySelector(
      `#${togglerElem.getAttribute("data-toggle")}`
    );
    toggleHandler(togglerElem, elementToToggle);
  }
});
