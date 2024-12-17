let inputVisible = document.getElementById("inputVisible");
let numberSept = document.getElementById("numberSept");
let numbernumberHuit = document.getElementById("numberHuit");
let numberNeuf = document.getElementById("numberNeuf");
let numberQuatre = document.getElementById("numberQuatre");
let numberCinq = document.getElementById("numberCinq");
let numberSix = document.getElementById("numberSix");
let numberUn = document.getElementById("numberUn");
let numberDeux = document.getElementById("numberDeux");
let numberTrois = document.getElementById("numberTrois");
let numberZero = document.getElementById("numberZero");
let numberDeuxZero = document.getElementById("numberDeuxZero");

let division = document.getElementById("division");
let AC = document.getElementById("AC");
let multiplication = document.getElementById("multiplication");
let moins = document.getElementById("moins");
let plus = document.getElementById("plus");
let point = document.getElementById("point");
let equal = document.getElementById("equal");

document.getElementById('inputVisible').addEventListener('input', function(event) {
  
  let value = event.target.value;

  
  value = value.replace(/[^0-9+\-*/.]/g, "");

  // On met à jour la valeur de l'input avec la chaîne filtrée
  event.target.value = value;
});

function displayElementInTheInputVisible(inputVisible, valeur) {
  inputVisible.value += `${valeur}`;
}

numberSept.addEventListener("click", () => {
  displayElementInTheInputVisible(inputVisible, '7');
});

numbernumberHuit.addEventListener("click", () => {
  displayElementInTheInputVisible(inputVisible, '8');
});

numberNeuf.addEventListener("click", () => {
  displayElementInTheInputVisible(inputVisible, '9');
});
numberQuatre.addEventListener("click", () => {
  displayElementInTheInputVisible(inputVisible, '4');
});

numberCinq.addEventListener("click", () => {
  displayElementInTheInputVisible(inputVisible, '5');
});

numberSix.addEventListener("click", () => {
  displayElementInTheInputVisible(inputVisible, '6');
});

numberUn.addEventListener("click", () => {
  displayElementInTheInputVisible(inputVisible, '1');
});

numberDeux.addEventListener("click", () => {
  displayElementInTheInputVisible(inputVisible, '2');
});

numberTrois.addEventListener("click", () => {
  displayElementInTheInputVisible(inputVisible, '3');
});

numberZero.addEventListener("click", () => {
  displayElementInTheInputVisible(inputVisible, '0');
});
numberDeuxZero.addEventListener("click", () => {
  displayElementInTheInputVisible(inputVisible, '00');
});
division.addEventListener("click", () => {
  displayElementInTheInputVisible(inputVisible, '/');
});
multiplication.addEventListener("click", () => {
  displayElementInTheInputVisible(inputVisible, '*');
});
moins.addEventListener("click", () => {
  displayElementInTheInputVisible(inputVisible, '-');
});
plus.addEventListener("click", () => {
  displayElementInTheInputVisible(inputVisible, '+');
});
point.addEventListener("click", () => {
  displayElementInTheInputVisible(inputVisible, '.');
});
equal.addEventListener("click", () => {
  inputVisible.value = eval(inputVisible.value); 
});


AC.addEventListener("click", () => {
  inputVisible.value = "";
});

C.addEventListener("click", () => {
  inputVisible.value = inputVisible.value.slice(0, -1);
});
