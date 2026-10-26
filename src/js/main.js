/*

CONSTANTS!

*/

let inputDOM = document.getElementById('codeInput');
let submitDOM = document.getElementById('codeSubmit');

submitDOM.addEventListener("click", () => {
    console.log(inputDOM.value)
});