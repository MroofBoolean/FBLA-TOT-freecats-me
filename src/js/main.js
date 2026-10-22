/*

CONSTANTS!

*/


let marioButtonDOM = document.getElementById('marioButton');
let freddyButtonDOM = document.getElementById('freddyButton');
let freddyInputDOM = document.getElementById('freddyInputCode');
let freddySubmitDOM = document.getElementById('freddyCodeSubmit');

/*

FUNCTION DEFINITIONS!!

*/

function runHomepage() {

    marioButtonDOM.addEventListener("click", () => {
        window.location = 'mario'
    });

    freddyButtonDOM.addEventListener("click", () => {
        window.location = 'freddy'
    });

}

function runFreddy() {

    freddySubmitDOM.addEventListener("click", () => {
        console.log(freddyInputDOM.input)
    });

}