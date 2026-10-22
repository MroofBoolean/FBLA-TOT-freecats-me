/*

CONSTANTS!

*/


let marioButtonDOM = document.getElementbyID('marioButton');
let freddyButtonDOM = doucument.getElementbyID('freddyButton')

/*

EVENT LISTENERS!!

*/

marioButtonDOM.addEventListener("click", function () {
    window.href = 'mario'
});

freddyButtonDOM.addEventListener("click", function () {
    window.href = 'freddy'
});
