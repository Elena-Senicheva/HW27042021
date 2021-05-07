"use strict";

const form = document.getElementById("root-form");
const list = document.getElementById("root-list");

form.addEventListener("submit", submitHandler);

let arr = [];

function submitHandler(event) {
  event.preventDefault();
  const {
    target,
    target: {
      elements: { email },
    },
  } = event;
  //console.dir(email.value);
  if (email.value) {
    arr.push(email.value);
    list.append(creatListItems(email.value));
    target.reset();
  }
}

function creatListItems(value) {
  const listItem = document.createElement("li");
  listItem.innerText = value;
  return listItem;
}
