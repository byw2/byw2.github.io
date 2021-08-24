// Toggle button
$(document).ready(function () {
    $(".exp-organization")
        .find("i")
        .click(function () {
            $(this).parent().next(".org-descrip").toggle();
        });
});

// Typing for Biography
const texts = ["Hi, I'm Brendan Wang!"];
let count = 0;
let index = "";
let currentText = "";
let letter = "";
let typing = document.querySelector(".typing");

(function type() {
    // compares to count to length of array
    if (count === texts.length) {
        return;
    }
    currentText = texts[count];
    // substring -- adding one more character to value
    letter = currentText.slice(0, ++index);

    typing.textContent = letter;

    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }

    setTimeout(type, 200);
})();
