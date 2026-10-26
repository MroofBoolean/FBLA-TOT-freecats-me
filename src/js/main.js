/*

CONSTANTS!

*/

let inputDOM = document.getElementById('codeInput');
let submitDOM = document.getElementById('codeSubmit');

/* 

MAIN LOGIC!

*/

submitDOM.addEventListener("click", () => {
    inputValue = inputDOM.value.toLowerCase();

    if (inputValue == '1985' || inputValue == 'scare') {
        renderHint();
    } else {
        renderScare();
    }

});

document.addEventListener("keydown", function(event) {
    if (event.key === "^") {
        console.log("^ was pressed!");
    }
});

/*

FUNCTION DECLORATIONS!

*/

function renderHint() {
    console.log('hint')
}

function renderScare() {
    console.log('renderscare')
}