import BookStat from "./BookStat";

/***
 * Featured Book
 * @param {object} param0 - a book object
 * @returns {string} returns a book template, it's mostly used in the app's main carousl for rendering featured books
 */

function FeaturedBook(
  { title, status, reads, likes, rating, image },
  isOverlayOpened
) {
  const statusClassName = String(status).toLowerCase().split(" ").join("-");

  return `
    <div class="carousel-cell">
    <div class="carousel-cell__inner" style="background-image: url(${image})">
      <button class="control-button open-button sm-hidden" data-overlay-opener='true'>
        <svg
         data-overlay-opener='true'
          focusable="false"
          width="3"
          height="15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 1.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM0 7.5a1.5 1.5 0 103 0 1.5 1.5 0 00-3 0zM1.5 15a1.5 1.5 0 110-3 1.5 1.5 0 010 3z"
            fill="#999"
          />
        </svg>
      </button>
      <div class="carousel-cell__overlay fade-in ${
        isOverlayOpened && `block`
      }" data-overlay-closer='true'>
        <div class="carousel-cell__overlay__inner">
          <button class="control-button close-button sm-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="feather feather-x"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
          <div>
            <p class="status status--${statusClassName}">${status}</p>
            <p class="title">${title}</p>
            <p class="authors">Jim Collins, Jude Agboola 2001</p>
            <div class="mt-1">
              <p><strong>Genre</strong>: Motivational</p>
              <p><strong>Label</strong>: Creative Worship</p>
            </div>
            ${BookStat({ rating, reads, likes }, true)}
          </div>
        </div>
      </div>
    </div>
  </div>
    `;
}

export default FeaturedBook;
