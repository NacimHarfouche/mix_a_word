// button that mix the word
const buttonMixElt = document.getElementById("mixButton");

// array contain the lenght of the word & string contain the mixed word
let count = [];
let stock = "";

// copy button & input mixed word
const buttonCopyElt = document.getElementById("copy");
const inputOutElt = document.getElementById("mixWord");

// give un random number between 0 -> length of the word enter
function randomNum(wordLength) {
    return Math.floor(Math.random() * (wordLength - 0) + 0);
}

// clear all stats
function clearAll() {
    count = [];
    stock = [];
    inputOutElt.value = "";
}

// event on clik the mix button
buttonMixElt.addEventListener("click", () => {
    // clear All stats to prevent infinite loop
    clearAll();
    const inputEnterElt = document.getElementById("inputEnter").value;

    // fill an array with number (the length of the word)
    for (let i = 0; i < inputEnterElt.length; i++) {
        count.push(i);
    }

    // loop until stock is the same length as the enter word
    while (true) {
        // generate a random number and stock it
        let position = randomNum(inputEnterElt.length);
        // if position is bigger than 0 you need to remove 1 (- 1), because of the position of the lettres
        if (position > 0) position - 1;
        // verif that the response is not -1, because that mean the number is not in the array
        if (count.indexOf(position) === -1) {
            continue;
        } else {
            // set into the stock word, the lettre equal of position (the number) in the array
            stock += inputEnterElt.charAt(position);
            // then remove it from the array
            count.splice(count.indexOf(position), 1);
        }

        // break the loop when stock length is equal to the enter word length
        if (stock.length === inputEnterElt.length) break;
    }

    // set the value in the input
    inputOutElt.value = stock;
});

// event to copy the mixed word
buttonCopyElt.addEventListener("click", function() {
    inputOutElt.select();
    document.execCommand("copy");
});