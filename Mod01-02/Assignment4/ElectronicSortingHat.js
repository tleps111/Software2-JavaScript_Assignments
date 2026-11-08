"use strict";
const username = prompt("Enter your name: ");

function getRandomInt() {
  return Math.floor(Math.random() * 4) + 1;
}

const houseNumber = getRandomInt();
if (houseNumber === 1) {
  document.querySelector("#target").innerHTML =
    username + ", " + "you are Gryffindor.";
}

if (houseNumber === 2) {
  document.querySelector("#target").innerHTML =
    username + ", " + "you are Slytherin.";
}

if (houseNumber === 3) {
  document.querySelector("#target").innerHTML =
    username + ", " + "you are Hufflepuff.";
}

if (houseNumber === 4) {
  document.querySelector("#target").innerHTML =
    username + ", " + "you are Ravenclaw.";
}
