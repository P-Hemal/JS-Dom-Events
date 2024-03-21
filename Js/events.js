console.log('This is separate Js file')
// Option 1 : add onclick function.

//<button onclick="console.log('I`m busy now')">Another Button</button>
//<button onclick="document.body.style.backgroundColor='yellow'">Warning</button>

// Option 2 : add onclick function. Important [We will use this sometimes]
function makeRed() {
    document.body.style.backgroundColor = 'red';
}

// Option 3 : add onclick function.
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue() {
    document.body.style.backgroundColor = 'blue';
}


// Option 4 : add onclick function.
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple() {
    document.body.style.backgroundColor = 'purple';
}

// Option 5 : add Event Listener function.

const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink);
function makePink() {
    document.body.style.backgroundColor = 'pink';
}

// Option 6 : add Event Listener function.

const makeGreen = document.getElementById('make-green');
makeGreen.addEventListener('click', function makeGreen() {
    document.body.style.backgroundColor = 'green';
});

// Option 7 : add Event Listener function Final.  Important [We will use this sometimes]

document.getElementById('make-goldenrod').addEventListener('click', function () {
    document.body.style.backgroundColor = 'goldenrod'
})