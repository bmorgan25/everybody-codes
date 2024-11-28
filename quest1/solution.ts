import { readFileSync } from "fs";

// part 1: Fun little one line solution
function findPotions() {
  return readFileSync("./part1.txt", "utf-8")
    .split("")
    .reduce((acc, creat) => (acc += creat === "B" ? 1 : creat === "C" ? 3 : 0));
}

//console.log(findPotions());

function readInput2() {
  return readFileSync("./part2.txt", "utf-8").split("");
}

function findPotions2() {
  const creatToPot: { [key: string]: number } = {
    A: 0,
    B: 1,
    C: 3,
    D: 5,
    x: 0,
  };
  const input = readInput2();

  const attacks: string[][] = [];

  for (let i = 0; i < input.length - 1; i += 2) {
    attacks.push([input[i], input[i + 1]]);
  }

  return attacks.reduce((acc, attack) => {
    if (attack[0] === "x" || attack[1] === "x") {
      return acc + creatToPot[attack[0]] + creatToPot[attack[1]];
    } else {
      return acc + creatToPot[attack[0]] + creatToPot[attack[1]] + 2;
    }
  }, 0);
}

//console.log(findPotions2());

function readInput3() {
  return readFileSync("./part3.txt", "utf-8").split("");
}

function findPotions3() {
  const creatToPot: { [key: string]: number } = {
    A: 0,
    B: 1,
    C: 3,
    D: 5,
    x: 0,
  };
  const input = readInput3();

  const attacks: string[][] = [];

  for (let i = 0; i < input.length - 1; i += 3) {
    attacks.push([input[i], input[i + 1], input[i + 2]]);
  }

  return attacks.reduce((acc, attack) => {
    let numOfX = 0;
    attack.forEach((val) => (numOfX += val === "x" ? 1 : 0));
    if (numOfX === 0) {
      return (
        acc +
        creatToPot[attack[0]] +
        creatToPot[attack[1]] +
        creatToPot[attack[2]] +
        6
      );
    } else if (numOfX === 1) {
      return (
        acc +
        creatToPot[attack[0]] +
        creatToPot[attack[1]] +
        creatToPot[attack[2]] +
        2
      );
    } else {
      return (
        acc +
        creatToPot[attack[0]] +
        creatToPot[attack[1]] +
        creatToPot[attack[2]]
      );
    }
  }, 0);
}

console.log(findPotions3());
