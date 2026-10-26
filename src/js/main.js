/*

CONSTANTS!

*/

let inputDOM = document.getElementById('codeInput');
let submitDOM = document.getElementById('codeSubmit');

submitDOM.addEventListener("click", () => {
    inputValue = toLowerCase(inputDOM.value);

    if (inputValue == '1985' || inputValue == 'scare') {
        console.log('happy');
    } else {
        console.log('scare the user!');
    }
});