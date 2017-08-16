console.log('Loaded!');


// Changing the value of HTML text displayed on the screen

/*
 var element = document.getElementById('main-text');
 element.innerHTML = "Changing the value of HTML from Java Script";

// Move the image on click
 var img = document.getElementById('madi');
 var marginLeft = 0;

 function moveRight(){
     marginLeft = marginLeft + 1;
 img.style.marginLeft = marginLeft + 'px';
 }

 img.onclick = function() {
 var interval = setInterval(moveRight,500);
  };
  
 WILL BE WRITING ANOTHER PIECE OF CODE HERE 
  
*/  
  
  
  // Code to call the Counter iincrement from server.js
  
  

  
  var button = document.getElementById('counter');
  var counter = 0;
  
  button.onClick = function(){
      
      // Make a request to the counter increment code
      
      // Capture the response and store it in a variable
      
      // Render the output in correct span
      counter++;
      var span = document.getElementById('count');
      span.innerHTML = counter.toString();
      
  };