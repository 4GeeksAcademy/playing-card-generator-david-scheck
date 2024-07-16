/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  console.log("Hello World!");
};
const suitsArray = ["♠", "♦", "♥", "♣"];

function randomGenerator1() {
  const randomIndex = Math.floor(Math.random() * suitsArray.length);
  return suitsArray[randomIndex];
}

const selectedItem1 = randomGenerator1();
document.getElementById("topLeftIcon").innerText = selectedItem1;

// Set the color based on the suit
if (selectedItem1 === "♦" || selectedItem1 === "♥") {
  topLeftIcon.style.color = "red";
} else {
  topLeftIcon.style.color = "black";
}

const suitsArray2 = ["♠", "♦", "♥", "♣"];

function randomGenerator2() {
  const randomIndex = Math.floor(Math.random() * suitsArray.length);
  return suitsArray2[randomIndex];
}

const selectedItem2 = randomGenerator2();
document.getElementById("bottomRightIcon").innerText = selectedItem2;

if (selectedItem2 === "♦" || selectedItem2 === "♥") {
  bottomRightIcon.style.color = "red";
} else {
  bottomRightIcon.style.color = "black";
}

// number and Queen or King generator

const numberArray = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Q", "K"];

function randomGenerator3() {
  const randomIndex = Math.floor(Math.random() * numberArray.length);
  return numberArray[randomIndex];
}

const middleNumber = randomGenerator3();
document.getElementById("middleNumber").innerText = middleNumber;
