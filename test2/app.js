let numberDisplayFirst = document.querySelector("#numberDisplayFirst");
let numberDisplaySecond = document.querySelector("#numberDisplaySecond");
let amountDisplay = document.getElementById("#amountDisplay");
let button = document.getElementById("#button");
numberDisplayFirst.textContent = randomNumberFirst();
numberDisplaySecond.textContent = randomNumberSecond();
amountDisplay.textContent = SumNumbers();

function randomNumberFirst(min = 1, max = 10) {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

function randomNumberSecond(min = 1, max = 10) {
    let rand = min - 0.5 + Math.random() * (max - min + 1)
    rand = Math.round(rand);
    return rand;
}

function SumNumbers(randomNumberFirst, randomNumberSecond) {
    let sum = randomNumberFirst * randomNumberSecond;
    return sum;
}