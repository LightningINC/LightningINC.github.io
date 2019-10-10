"use strict";
import "./sass/main.scss";
const app = () => {
  _addEventListeners();
  _paintArticleBorders();
};

const _paintArticleBorders = () => {
  let items = document.querySelectorAll("Article");
  items.forEach((current, index) => {
    if (index % 2 === 0) {
        current.setAttribute("style", "border-top-color:#FFC700;"); 
    } else {
      current.setAttribute("style", "border-top-color:#B28B00; ");
    }
  });
};

const _addEventListeners = () => {
  let items = document.querySelectorAll("[data-switchPane-list]");

  items.forEach((currentNode, index, parent) => {
    currentNode.addEventListener("click", () => {
      switchPaneHandler(currentNode, index, parent);
    });
  });
};

const switchPaneHandler = (clickedNode, index, parent) => {
  console.log("why");
  let content = document.querySelectorAll("[data-switchPane-content] div");
  parent.forEach((currentNode, index) => {
    if (currentNode.classList.contains("active")) {
      currentNode.classList.remove("active");
      content[index].classList.add("hidden");
    }
    if (currentNode === clickedNode) {
      currentNode.classList.add("active");
      content[index].classList.remove("hidden");
    }
  });
};

window.addEventListener("DOMContentLoaded", () => {
  app();
});
