/*

CONSTANTS!

*/


let marioButtonDOM = document.getElementById('marioButton');
let freddyButtonDOM = document.getElementById('freddyButton');
let freddyInputDOM = document.getElementById('freddyInputCode');
let freddyButtonDOM = document.getElementById('freddyCodeSubmit');

/*

EVENT LISTENERS!!

*/

marioButtonDOM!.addEventListener("click", () => {
    window.location = 'mario'
});

freddyButtonDOM!.addEventListener("click", () => {
    window.location = 'freddy'
});

/*

FUNCTION DEFINITIONS!!

*/

function runFreddy() {

    freddyButtonDOM.addEventListener("click", () => {
        console.log(freddyInputDOM.input)
    });

}