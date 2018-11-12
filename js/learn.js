console.info("0");

// var motto, favorite, links;

// motto = document.getElementById("motto");

// console.info(motto);

// motto.innerHTML = "matei";

// favorite = document.getElementsByClassName("favorite");

//learn variables

function learnVariables() {
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
}

//schimb valutar

var cursEUR = 4.5;
var myEUR = 20;
var myRON = 0;
var friendEUR = 100;
var friendRON = 0;

// operatori * / + -
myRON = myEUR * cursEUR;
console.info("eu am " + myRON + " RON");

cursEUR = (friendEUR * cursEUR * 1) / 100;
friendEUR = friendRON * cursEUR;
console.info("el are " + friendRON + " RON");

var ATMFunds = 10000;
var funds = 5000;

function getExtractFee(amount) {
  var comision = amount * 0.01;
  if (comision < 2.5) {
    comision = 2.5;
    console.warn("comision minim aplicat");
  }
  return comision;
}

// To Do implement
function checkExtractPermissions() {
  return true;
}

function extractfromATM(amount) {
  console.info("==== ==== ==== ==== ====");
  console.info("suma extrasa este: " + amount);
  var comision = getExtractFee(amount);

  var totalExtract = amount + comision;

  if (totalExtract > funds) {
    console.error("insufficient funds");
    return 0;
  }
  if (ATMFunds < totalExtract) {
    console.error("Fonduri insuficiente ATM");
  }

  funds = funds - totalExtract;
  // ATMFunds = ATMFunds - amount;
  ATMFunds -= amount;
  console.info("Sold curent " + funds);
  console.info("comision aplicat: " + comision);
  console.info("==== ==== ==== ==== ====");
}

extractfromATM(1005); // nu e multiplu de 10
extractfromATM(100000); // solduri insuficiente
extractfromATM(100);
extractfromATM(3000);
extractfromATM(3000);
extractfromATM(20000);
extractfromATM(0); // sa nu ia comision



x = sumAll(7, 13, 46, 21);

function sumAll() {
  var i;
  var sum = 0;
  for (i = 0; i < arguments.length; i++) {
      sum += arguments[i];
  }
  return sum;
}
