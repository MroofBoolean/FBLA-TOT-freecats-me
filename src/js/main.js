/*

CONSTANTS!

*/

let inputDOM = document.getElementById('codeInput');
let submitDOM = document.getElementById('codeSubmit');
let imageDOM = document.getElementById('scareImage')


/* 

MAIN LOGIC!

*/

submitDOM.addEventListener("click", () => {
    inputValue = inputDOM.value.toLowerCase();

    if (inputValue === '1985') {
        renderHint('LM');
    } else if (inputValue === 'scare') {
        renderHint('FNAF');
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

function renderHint(type) {
    if (type == 'LM') {
        imageDOM.src = 'https://i.pinimg.com/originals/63/fe/96/63fe969d3adb10c19cb5d6999e3e5ec8.gif'
        flashImage()
    } else if (type === 'FNAF') {
        imageDOM.src = 'https://media.tenor.com/BWB9cDCdCaUAAAAM/fnaf-five-nights-at-freddy%27s.gif'
        flashImage()
    }
}

function flashImage() { // USE THE DRY PRINCIPLE!!
    imageDOM.hidden = false;

    setTimeout(() => {
        imageDOM.hidden = true;
    }, 1000);
}

function renderScare() {
    console.log('renderscare')
}