const yearStr = prompt("Enter a year: ");
const year = Number(yearStr);

if (year % 400 === 0) {
  document.querySelector("#target").innerHTML = "This is a Leap Year";
} else if (year % 100 === 0) {
  document.querySelector("#target").innerHTML = "This is not a Leap Year";
} else if (year % 4 === 0) {
  document.querySelector("#target").innerHTML = "This is a Leap Year";
} else {
  document.querySelector("#target").innerHTML = "This is not a Leap Year";
}
