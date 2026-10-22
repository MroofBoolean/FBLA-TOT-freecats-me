/*

CONSTANTS!

*/


let marioButtonDOM = document.getElementById('marioButton');
let freddyButtonDOM = document.getElementById('freddyButton')
let freddyInputDOM = document.getElementById('freddyInputCode')

/*

EVENT LISTENERS!!

*/

marioButtonDOM.addEventListener("click", () => {
    window.location = 'mario'
});

freddyButtonDOM.addEventListener("click", () => {
    window.location = 'freddy'
});

/*

FUNCTION DEFINITIONS!!

*/

function runFreddy() {

    freddyInputDOM.addEventListener("click", () => {
        console.log(freddyInputDOM.input)
    });

}