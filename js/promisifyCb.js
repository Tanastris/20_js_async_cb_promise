"use strict";
console.log("promisifyCb.js file was loaded");

function getHeader() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("<Header/>");
      resolve();
    }, 3000);
  });
}
function getContent() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("<Main Content/>");
      resolve();
    }, 1000);
  });
}
function getFooter() {
  return new Promise((res, rej) => {
    setTimeout(() => {
      console.log("<Footer/>");
      res();
    }, 1000);
  });
}

getHeader()
  .then(() => {
    console.log("gavom header");
    return getContent();
  })
  .then(() => {
    console.log("gavom content");
    return getFooter();
  })
  .then(() => {
    console.log("gavom footer");
  });
// getHeader(() => {
//   getContent(() => {
//     getFooter();
//   });
// });
