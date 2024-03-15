
//-----------------variables---------------//

let inputN = document.getElementById("input")
let outputN = document.getElementById("output");

//-----------------function----------------//

function addNumber(numbr){
    inputN.value += numbr;
}

function clearInput(){
  inputN.value = "";
}

function clearInpOut(){
  inputN.value = "";
  outputN.value = "";
}