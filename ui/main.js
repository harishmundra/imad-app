console.log('Loaded!');

// Changing the value of HTML text displayed on the screen

var element = document.getElementById('main-text');
element.innerHTML = "Changing the value of HTML from Java Script";

// Move the image on click
var img = document.getElementById('madi');
img.onClick = function() {
   img.style.margin-left = '100px';
};