/*

CONSTANTS!

*/


let marioButtonDOM = document.getElementById('marioButton');
let freddyButtonDOM = document.getElementById('freddyButton')

/*

EVENT LISTENERS!!

*/

marioButtonDOM.addEventListener("click", function () {
    window.href = 'mario'
});

freddyButtonDOM.addEventListener("click", function () {
    window.href = 'freddy'
});
