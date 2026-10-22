/*

CONSTANTS!

*/


let marioButtonDOM = document.getElementbyID('marioButton');
let luigiButtonDOM = doucument.getElementbyID('luigiButton')

/*

EVENT LISTENERS!!

*/

marioButtonDOM.addEventListener("click", function () {
    window.href = 'mario'
});

luigiButtonDOM.addEventListener("click", function () {
    window.href = 'luigi'
});
