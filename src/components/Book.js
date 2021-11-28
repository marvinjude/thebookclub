import BookStat from "./BookStat";

/***
 * Book Component
 * @param {object} param0 - a book object
 * @returns {string} returns a book template, it's mostly used as a grid item
 */
function Book({
  title,
  status,
  authors,
  year,
  rating,
  tags,
  reads,
  likes,
  image,
}) {
  const statusClassName = String(status).toLowerCase().split(" ").join("-");

  return `
      <div class="book">
        <div class="book__image">
          <img src="${image}" alt="image" />
        </div>
        <div>
          <p class="book__status status--${statusClassName}">${status}</p>
          <p class="book__title">${title}</p>
          <p class="book__authors">${authors.join(", ")} - ${year}</p>
          <p class="book__authors">${tags.join(", ")} - ${year}</p>
          ${BookStat({ rating, reads, likes })}
        </div>
      </div>
    `;
}

export default Book;
