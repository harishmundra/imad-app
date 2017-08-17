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

  
  button.onclick = function(){
      
      // Create  a requet
      
      var request = new XMLHttpRequest();
      
      // Capture the response and store it in a variable
      
      request.onreadystatechange = function(){
          
          if (request.readyState === XMLHttpRequest.DONE){
              if (request.status === 200){
                  var counter = request.responseText;
                  var span = document.getElementById('count');
                  span.innerHTML = counter.toString();
                  
              }
              //Take some action
          }
          
          // else Leave it for now
      };

    // Make a request
    
      request.open('GET', 'http://harishmundra.imad.hasura-app.io/counter', true);
      request.send(null);
  };
  
  // Get name from HTML and submit to server
  
  var nameInput = document.getElementById('name');
  var name1 = nameInput.value;
  var submit = document.getElementById('submit_btn');
  submit.onclick = function(){
      // make a request to the server with name
      
      //Capture and render the name list
      var names = ['name1', 'name2', 'name3', 'name4'];
      var list = '';
      for (var i = 0; i < names.length; i++) {
          list += '<li>' + names[i] + '</li>';
          
      }
      
      var ul = document.getElementById('namelist');
      ul.innerHTML = list;
  };