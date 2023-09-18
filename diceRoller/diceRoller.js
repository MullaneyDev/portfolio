var rollButton = document.getElementById("button");
const d4Button = document.getElementById("d4");
const d6Button = document.getElementById("d6");
const d8Button = document.getElementById("d8");
const d10Button = document.getElementById("d10");
const d100Button = document.getElementById("d100");
const d12Button = document.getElementById("d12");
const d20Button = document.getElementById("d20");
const diceValue = document.getElementById("diceValue");
const placeholder = document.getElementById("placeholder");
const diceAmount = document.getElementById("diceAmount");
const rolledDice = document.getElementById("rolledDice");

rollButton.disabled = true;

const dice = {
  sides: 6,
  roll: function () {
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  },
};

const rolledString = (rolls, total) => {
  let stringLog = "";
  let stringLog2 = "";
  let stringFinished = "";
  for (let i = 0; i < rolls.length; i++) {
    stringLog += rolls[i] + " + ";
    stringLog2 = stringLog.substring(0, stringLog.length - 2);
    stringFinished = stringLog2 + " = " + total;
  }
  return stringFinished;
};

const printNumber = (number) => {
  placeholder.innerHTML = number;
};
const printRolledDice = (rolls, total) => {
  rolledDice.innerHTML = rolledString(rolls, total);
};

rollButton.onclick = () => {
  let total = 0;
  let rolls = [];
  for (let amount = 0; amount < diceAmount.value; amount++) {
    let thisRoll = dice.roll();
    rolls.push(thisRoll);
    total += thisRoll;
  }
  printNumber(total);
  printRolledDice(rolls, total);
};

d4Button.onclick = () => {
  placeholder.innerHTML = "";
  diceValue.innerHTML = "D4";
  dice.sides = 4;
  rollButton.disabled = false;
};

d6Button.onclick = () => {
  placeholder.innerHTML = "";
  diceValue.innerHTML = "D6";
  dice.sides = 6;
  rollButton.disabled = false;
};

d8Button.onclick = () => {
  placeholder.innerHTML = "";
  diceValue.innerHTML = "D8";
  dice.sides = 8;
  rollButton.disabled = false;
};

d10Button.onclick = () => {
  placeholder.innerHTML = "";
  diceValue.innerHTML = "D10";
  dice.sides = 10;
  rollButton.disabled = false;
};

d100Button.onclick = () => {
  placeholder.innerHTML = "";
  diceValue.innerHTML = "D100";
  dice.sides = 100;
  rollButton.disabled = false;
};

d12Button.onclick = () => {
  placeholder.innerHTML = "";
  diceValue.innerHTML = "D12";
  dice.sides = 12;
  rollButton.disabled = false;
};

d20Button.onclick = () => {
  placeholder.innerHTML = "";
  diceValue.innerHTML = "D20";
  dice.sides = 20;
  rollButton.disabled = false;
};
