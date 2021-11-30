# BookClub

A minimal book store site built in Pure JS, HTML & CSS

<!-- Screenshot -->
![image](.github/images/screenshot.png)


## Demo

https://dbookclub.netlify.app/

## Installation

Start by installing the dependencies with yarn or npm

npm

```
$ npm install
```

yarn

```
$ yarn
```

## Run Application

This application uses parcel bundler, to test this app you can spin up a development server by running:

```
yarn dev
```

The app should be live on [http://localhost:1234](http://localhost:1234) 🎉

**Note**: Make sure you have gone through the installation process explained above 👆

## Build for Producion

You can build this app for production by running

```
yarn build
```

## Notes

I'm a huge fan of components especially because they are easy to reason about when building apps. This application does some form of componentization.. Somtething like a React component. I wrote components like `Book`, `FeaturedBook` ...

Here's an example of one of them - `StarRating.js`

```
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
```
