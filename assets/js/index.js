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
      elements: { email: {value:emailValue }},
    },
  } = event;
  //console.dir(email.value);

  const value = emailValue.trim();
  if (value) {
    arr.push(value);
    list.append(creatListItems(value));
    target.reset();
  }
}

function creatListItems(value) {
  const listItem = document.createElement("li");
  listItem.innerText = value;
  return listItem;
}
