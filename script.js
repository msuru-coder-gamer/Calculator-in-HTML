//The variables required
let no1 = "";
let no2 = "";
let whichNo;
let symbolPressed;
let bracket = 0;

//Setting the starting number to number 1
whichNo = "no1";

//Finding the number so it can be printed onto the screen
const print = document.getElementById("answer");

//Creating the functions
function sym(symbolthatwaspressed) {
  if (no2 == "") {
  symbolPressed = symbolthatwaspressed;
  whichNo = "no2";
}
  print.innerHTML += symbolthatwaspressed;

  if (bracket == 1) {
    no2 += symbolthatwaspressed;
  }
    console.log(no2);
}

function num(numberPressed) {
  if (whichNo == "no1") {
    no1 += numberPressed;
  print.innerHTML = no1;
 }

    if (whichNo == "no2") {
    no2 += numberPressed;
    print.innerHTML = no1;
    print.innerHTML += symbolPressed;
if (bracket == 1) {
    print.innerHTML += "(";
    }
    print.innerHTML += no2;
  }

    if (whichNo == "no3") {
    
    no2 += numberPressed;
    print.innerHTML = no1;
    print.innerHTML += symbolPressed;
    if (bracket == 1) {
    print.innerHTML += "(";
    }
    print.innerHTML += no2;
  if (bracket == 2) {
    print.innerHTML += ")";
   }
  }
}

function equals() {

  let num1 = Number(no1);
  let num2;
  if (whichNo == "no3") {
    num2 = eval(no2);
  }
  else {
    num2 = Number(no2);
  }

  if (symbolPressed == "+") {
    print.innerHTML = num1 + num2;
    no1 = num1 + num2;
    whichNo = "no1";
    no2 = "";
  }
  else if (symbolPressed == "-") {
    print.innerHTML = num1 - num2;
        no1 = num1 - num2;
    whichNo = "no1";
    no2 = "";
  }
   else if (symbolPressed == "/") {
    print.innerHTML = num1 / num2;
        no1 = num1 / num2;
    whichNo = "no1";
    no2 = "";
  }
   else if (symbolPressed == "*") {
    print.innerHTML = num1 * num2;
        no1 = num1 * num2;
    whichNo = "no1";
    no2 = "";
  }
}

function decimal() {
    if (whichNo == "no1") {
    no1 += '.';
  print.innerHTML = no1;
 }
    else if (whichNo == "no2") {
    no2 += '.';
  print.innerHTML = no1;
  print.innerHTML += symbolPressed;
  print.innerHTML += no2;
 }

}

function brackets() {
  bracket++;
  if (bracket == 1) {
  print.innerHTML += "(";
  }
  else if (bracket == 2) {
   print.innerHTML += ")";
  whichNo = "no3";
  bracket = 0;
  }
}
