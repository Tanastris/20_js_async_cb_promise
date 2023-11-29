"use strict";
console.log("callback.js file was loaded");

// setTimeout(() => {
//   // confirm("ar tirkai?");
// }, 5000);

// function sum(n1, n2, callBack) {
//   let suma = n1 + n2;
//   callBack(suma);
// }
// function makeCurrency(val) {
//   console.log(`$${val.toFixed(2)}`);
// }
// sum(15, 20, makeCurrency);

console.log("1");
setTimeout(() => {
  console.log("2");
}, 0);
console.log("3");
function getHeader(callBack) {
  setTimeout(() => {
    console.log("<Header/>");
    callBack();
  }, 3000);
}
function getContent(callBack) {
  setTimeout(() => {
    console.log("<Main Content/>");
    callBack();
  }, 1000);
}
function getFooter() {
  setTimeout(() => {
    console.log("<Footer/>");
  }, 1000);
}

getHeader(() => {
  getContent(() => {
    getFooter();
  });
});
