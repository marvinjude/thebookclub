import Flickity from "flickity";
import "../node_modules/flickity/css/flickity.css";
import "./search";
import "./sidebar";
import "./carousel-cell-overlay-toggle.js";
import "./toggle-creator";
import './handleClickOutside'

import books from "./data/books";
import Book from "./components/Book";
import FeaturedBook from "./components/FeaturedBook";

document.addEventListener("DOMContentLoaded", function () {
  /**
   * Add Books to various catrogries
   */
  const allBooksContainer = document.querySelector("#all-books");

  const recentlyAddedBooksContainer = document.querySelector(
    "#recently-add-books"
  );

  const carousel = document.querySelector("#main-carousel");

  allBooksContainer.innerHTML = books.map((book) => Book(book)).join("");

  recentlyAddedBooksContainer.innerHTML = books
    .filter(({ recent }) => recent === true)
    .map((book) => Book(book))
    .join(" ");

  carousel.innerHTML = books
    .filter(({ featured }) => featured === true)
    .map((book) => FeaturedBook(book))
    .join(" ");

  /**
   * Runs asyncrounously so that the element will gain content before this mutation runs
   */
  setTimeout(() => {
    new Flickity(carousel, {
      wrapAround: true,
      cellAlign: "left",
      contain: true,
      pageDots: true,
      adaptiveHeight: true,
    });

    /**
     * Flickity adds an icon to buttons by default, Let's replace that with some SVG element
     * 
     * Select Navigation buttons and replace innerHTML with preferred SVG element
     */

    const navigationButtons = document.querySelectorAll(".flickity-button");

    for (const navigationButton of navigationButtons) {
      navigationButton.innerHTML = `
      <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M5.5 11.0577L5.49846 0.673065L0.5 5.86537L5.5 11.0577Z" fill="black"/>
      </svg>
    `;
    }
  });
});
