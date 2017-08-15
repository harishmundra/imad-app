console.log('Loaded!');

// Changing the value of HTML text displayed on the screen

var element = document.getElementById('main-text');
element.innerHTML = "Changing the value of HTML from Java Script";

// Move the image on click
var img = document.getElementById('madi');
var marginLeft = 0;

function moveRight(){
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}

img.onclick = function() {
    var interval = setInterval(moveRight,10);
 };