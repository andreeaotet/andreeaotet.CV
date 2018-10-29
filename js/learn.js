console.info("0");

// var motto, favorite, links;

// motto = document.getElementById("motto");

// console.info(motto);

// motto.innerHTML = "matei";

// favorite = document.getElementsByClassName("favorite");

function sayWelcome() {
  console.info("Salut " + prenume + ", bine ai venit la noi");
}

var nume = "Otet";
var prenume = "Andreea";
var owner = "Andreea's";
var msg1 = 'ai zis "Nick"?';
var msg2 = "Nu, am zis 'Nicolae'";
var template = `text cu ghilimele " sau simple'`;
var skills = ["html", "css", "js"];
sayWelcome();
prenume = "Nick";

console.info("toate variabilele au fost initializate");
console.log("Nume");
console.log(nume);
console.debug("cum te cheama? - " + prenume);

sayWelcome();

//schimb valutar

var cursEUR = 4.5;
var myEUR = 20;
var myRON = 0;
var friendEUR = 10;
var friendRON = 0;

// operatori * / + -
myRON = myEUR * cursEUR;
console.info("eu am " + myRON + " RON");

friendRON = friendEUR * cursEUR;
console.info("el are " + friendRON + " RON");
