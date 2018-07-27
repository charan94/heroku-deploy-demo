const express = require('express');
const path = require('path');

const app = express();

app.use(bodyParser.json());

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/heroku-deploy-demo'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/heroku-deploy-demo/index.html'));
});


// Start the app by listening on the default Heroku port
var port = process.env.PORT || 8080;

app.listen(port, ()=>{
    console.log(`express running in ${port}`);
});
