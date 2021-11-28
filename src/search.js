import hideOnClickOutside from "./handleClickOutside";
import books from "./data/books";
import FeaturedBook from "./components/FeaturedBook";

/**
 * A seach result component
 * @param {*} param0 - book object
 * @returns
 */
function SearchResult({ title, authors, searchTerm }) {
  const text = `${title} - ${authors.join(", ")}`;
  const textWithHighlightedSearchTerm = text
    .toLowerCase()
    .replace(searchTerm.toLowerCase(), `<strong>${searchTerm}</strong>`);

  return `
    <div class="search__dropdown-box__item">
      ${textWithHighlightedSearchTerm}  
    </div>
 `;
}

const searchHandler = (searchDropBox) => ({
  target: { value: searchTerm },
}) => {
  const normalPageViewContainer = document.querySelector(
    "#normal-page-view-container"
  );
  const seachResultViewContainer = document.querySelector(
    "#search-result-view-cntainer"
  );

  if (searchTerm.trim() === "") {
    searchDropBox.style.display = "none";
    seachResultViewContainer.style.display = "none";
    normalPageViewContainer.style.display = "block";
    return;
  }

  const result = books.filter(
    ({ title }) =>
      title.toLowerCase().indexOf(String(searchTerm).toLowerCase()) !== -1
  );

  if (result.length === 0) {
    searchDropBox.style.display = "none";
    return;
  }

  searchDropBox.onclick = () => (searchDropBox.style.display = "none");

  searchDropBox.style.display = "block";

  hideOnClickOutside(
    searchDropBox,
    [],
    (elem) => (elem.style.display = "none")
  );

  //show auto complete in dropdown
  searchDropBox.innerHTML = result
    .map(({ title, authors }) =>
      SearchResult({
        title,
        authors,
        searchTerm,
      })
    )
    .join(" ");

  //Rerender fetured items with new data list
  const matchingitem = books
    .filter(
      (book) => book.title.toLowerCase() == searchTerm.trim().toLowerCase()
    )
    .map((book) => {
      const showOverlay =
        book.title.toLowerCase() == searchTerm.trim().toLowerCase();
      return FeaturedBook(book, showOverlay);
    });

  if (matchingitem.length > 0) {
    normalPageViewContainer.style.display = "none";
    seachResultViewContainer.innerHTML = matchingitem.join(" ");
    seachResultViewContainer.style.display = "block";
    searchDropBox.style.display = "none";
  } else {
    seachResultViewContainer.style.display = "none";
    normalPageViewContainer.style.display = "block";
  }
};

document.addEventListener("DOMContentLoaded", function () {
  let searchInputs = document.querySelectorAll(".search-input");
  let searchDropBoxes = document.querySelectorAll(".search-dropdown-box");

  for (let i = 0; i < searchInputs.length; i++) {
    const searchInput = searchInputs[i];
    const searchDropBox = searchDropBoxes[i];

    searchInput.onkeyup = searchHandler(searchDropBox);
  }
});
