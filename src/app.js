/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  //write your code here
  console.log("Hello World!");
};

const suitsArray = ["♠", "♦", "♥", "♣"];

function randomGenerator() {
  const randomIndex = Math.floor(Math.random() * suitsArray.length);
  return suitsArray[randomIndex];
}

const selectedItem = randomGenerator();
document.getElementById("topLeftIcon").innerText = selectedItem;
document.getElementById("bottomRightIcon").innerText = selectedItem;

// Set the color based on the suit
if (selectedItem === "♦" || selectedItem === "♥") {
  document.getElementById("topLeftIcon").style.color = "red";
  document.getElementById("bottomRightIcon").style.color = "red";
} else {
  document.getElementById("topLeftIcon").style.color = "black";
  document.getElementById("bottomRightIcon").style.color = "black";
}

const numberArray = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "Q", "K"];

function randomGeneratorNumber() {
  const randomIndex = Math.floor(Math.random() * numberArray.length);
  return numberArray[randomIndex];
}

const middleNumber = randomGeneratorNumber();
document.getElementById("middleNumber").innerText = middleNumber;
