"use strict";
console.log("posts.js file was loaded");

// taikomes
const els = {
  ulApp: document.getElementById("app"),
};

const posts = [
  { title: "Post One", body: "This is post One body" },
  { title: "Post Two", body: "This is post Two body" },
];

function printPosts() {
  els.ulApp.innerHTML = "";
  // sugeneruoti li elmenentus su antraste title, ir textu body
  posts.forEach((obj) => {
    const liEl = document.createElement("li");
    const h2El = document.createElement("h2");
    const pEl = document.createElement("p");

    liEl.append(h2El, pEl);
    els.ulApp.append(liEl);

    h2El.textContent = obj.title;
    pEl.textContent = obj.body;
  });
}
// printPosts();

function createPost(newPostObj, cb) {
  setTimeout(() => {
    posts.push(newPostObj);
    console.log("created Post");
    cb();
  }, 500);
}

function getPosts() {
  setTimeout(() => {
    printPosts();
  }, 400);
}

//app eiga
const thirdPost = { title: "Post Three", body: "This is post Three body" };
// createPost(thirdPost);
// getPosts();

// callback sprendimas
createPost(thirdPost, getPosts);
