var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
'article-one' :{
    title:"Article-One : Harish Mundra",
    heading:"Article-One",
    date:"14th August, 2017",
    content:`<p>
            On 15 February this year, Isro placed 104 satellites into orbit using only a single launch of one vehicle, PSLV-C37. The video of the event, available easily enough on the net, shows the familiar zoom of a rocket entering space, and then little flicks chase one another into the deep distance until the mission is completed. Only three satellites were Indian; 96 were commissioned by two American companies, Planet Laks and Spire Global.
        </p>
        
        <p>
            The acceleration in space, impressive as it is, might be less spectacular than the change taking place on the ground. Prime Minister Narendra Modi has initiated a transformation towards a new India in which historic burdens such as poverty and corruption have been eliminated, and inheritance ills like communalism and casteism are only bad memory. His mission has a calendar; the deadline is 2022, when India celebrates its 75th year of independence.
        </p>`
            },
            
'article-two' : {
    title:"Article-Two : Harish Mundra",
    heading:"Article-Two",
    date:"15th August, 2017",
    content:`<p>
            On 15 February this year, Isro placed 104 satellites into orbit using only a single launch of one vehicle, PSLV-C37. The video of the event, available easily enough on the net, shows the familiar zoom of a rocket entering space, and then little flicks chase one another into the deep distance until the mission is completed. Only three satellites were Indian; 96 were commissioned by two American companies, Planet Laks and Spire Global.
        </p>
        
        <p>
            The acceleration in space, impressive as it is, might be less spectacular than the change taking place on the ground. Prime Minister Narendra Modi has initiated a transformation towards a new India in which historic burdens such as poverty and corruption have been eliminated, and inheritance ills like communalism and casteism are only bad memory. His mission has a calendar; the deadline is 2022, when India celebrates its 75th year of independence.
        </p>`
},

'article-three' : {
    title:"Article-Three : Harish Mundra",
    heading:"Article-Three",
    date:"16th August, 2017",
    content:`<p>
            On 15 February this year, Isro placed 104 satellites into orbit using only a single launch of one vehicle, PSLV-C37. The video of the event, available easily enough on the net, shows the familiar zoom of a rocket entering space, and then little flicks chase one another into the deep distance until the mission is completed. Only three satellites were Indian; 96 were commissioned by two American companies, Planet Laks and Spire Global.
        </p>
        
        <p>
            The acceleration in space, impressive as it is, might be less spectacular than the change taking place on the ground. Prime Minister Narendra Modi has initiated a transformation towards a new India in which historic burdens such as poverty and corruption have been eliminated, and inheritance ills like communalism and casteism are only bad memory. His mission has a calendar; the deadline is 2022, when India celebrates its 75th year of independence.
        </p>`
},

};

function createTemplate(data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    
var htmlTemplate = `
<html>

<head>
    <title>
        ${title}
    </title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/ui/style.css" rel="stylesheet" />
</head>

<body>
    <div class="container">
    <div>
        <a href="/">Home</a>
    </div>
    <hr>
    
    <h3>
    ${heading}
    </h3>
    
    <div> 
    ${date}
    </div>
    
    <div>
        <p>
            This is my first article in an HTML page.
        </p>
        
        ${content}
    </div>
    </div>
</body>
</html>`;
return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendfile(path.join(__dirname, 'ui', 'index.html'));
 });

app.get('/:articleName', function(req, res){
    //articleName = article-one
    //articles[articleName] = {} content object for article one
    res.send(createTemplate(articles[articleName]));
});

app.get('/article-two', function(req, res){
    res.sendfile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function(req, res){
    res.sendfile(path.join(__dirname, 'ui', 'article-three.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
