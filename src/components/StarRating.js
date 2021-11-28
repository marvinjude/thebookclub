/**
 * @param {number} rating - The star rating - e.g StarRating(4), StarRating(5)
 * @returns {string}  A template based on the number of rating  passed
 */

function StarRating(rating) {
  const getStar = (filled) => `
      <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.41391 0L8.28908 3.62102L12.4526 4.19917L9.43325 7.01383L10.1484 11L6.41391 9.12863L2.67947 11L3.39458 7.01383L0.375244 4.19917L4.55464 3.62102L6.41391 0Z" fill=${
          filled ? "#EBA430" : "#DDDDDD"
        }><path>
      </svg>`;

  let template = "";

  //Add Filled stars
  for (let i = 0; i < rating; i++) {
    template = template + getStar(true);
  }

  //Add Unfilled stars
  for (let i = 0; i < 5 - rating; i++) {
    template = template + getStar(false);
  }

  return template;
}

export default StarRating;
