"use strict";

const elOpen = document.querySelector("#open");
const elClose = document.querySelector("#close");
const container = document.querySelector(".container");

elOpen.addEventListener("click", () => {
  container.classList.add("show-nav");
});

elClose.addEventListener("click", () => {
  container.classList.remove("show-nav");
});
