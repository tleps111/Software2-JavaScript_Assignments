"use strict";

const number1Str = prompt("Enter the first number: ");
const number1 = Number(number1Str);

const number2Str = prompt("Enter the second number: ");
const number2 = Number(number2Str);

const number3Str = prompt("Enter the third number: ");
const number3 = Number(number3Str);

const sum = number1 + number2 + number3;
const product = number1 * number2 * number3;
const average = sum / 3;

document.querySelector("#target").innerHTML =
  "Total: " + sum + " " + "Product: " + product + " " + "Average: " + average;
