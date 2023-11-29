"use strict";
console.log("promise.js file was loaded");

// Pirksim lektuvo bilietus

// galimi 3 variantai
// pirkimo rezultatas
// vykdomas - pending
// pavyko - Resolve
// neapvyko - Reject

let pirkimoPazadas = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;

    if (error === false) {
      // console.log("Pirkimas sekmingas");
      resolve();
    } else {
      // console.warn("Nepavyko, ivyko klaida");
      reject();
    }
  }, 2000);
});
console.log("pirkimoPazadas ===", pirkimoPazadas);
// darbas su promiso reiksmem vyksta su .then .catch .finally

pirkimoPazadas
  .then(() => {
    console.log("Pirkimas sekmingas");
  })
  .then((antrasThen) => {
    console.log("antrasThen ===", antrasThen);
  })
  .catch(() => {
    console.warn("nepavyko, ivyko klaida");
  });
