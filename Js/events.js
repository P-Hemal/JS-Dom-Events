console.log('This is separate Js file')
// Option 2 : add onclick function.
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
purpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple';
}