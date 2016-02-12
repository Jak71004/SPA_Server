var express = require('express');
var app = express();
var path = require('path');
var wager = require('./model/wagerModel.js');
var server;

app.set('port', 3000);

app.use(express.static(path.join(__dirname, 'public')));

app.get('*', function(req, res){
    console.log("GET the homepage");
    res
        .status(200)
        .sendFile(path.join(__dirname, 'public','index.html'));
}); 

//get all wagers
app.get('/api/wagers', function(req, res) {

        // use mongoose to get all wagers in the database
        wager.find(function(err, wagers) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            res.json(wagers); // return all wagers in JSON format
        });
    });

//get one wager
app.get('/api/wagers/wager/:email/:publicKey', function(req, res) {

        // use mongoose to get all wagers in the database
        wager.find(function(err, wager) {

            // if there is an error retrieving, send the error. nothing after res.send(err) will execute
            if (err)
                res.send(err)

            //code that looks for specific wager//
            res.json(wager); // return all wagers in JSON format
        });
    });

//create a wager
app.post('/api/wagers/wager', function(res,req){
    wager.create({
        email:'',
        amount:'',
        //...
    });
});

//delete a wager
app.delete('/api/wagers/wager/:email/:publicKey', function (){
    wager.remove({email: req.params.email});
});

/*app.get('/', function(req, res){
    console.log("GET the homepage");
    res
        .status(200)
        .sendFile(path.join(__dirname, 'public','index.html'));
});*/

app.get('/jsonRoute', function(req, res){
    console.log("GET the json");
    res
        .status(200)
        .json({"text": "hello"});
});

app.get('/file', function(req, res){
    console.log("GET the file");
    res
        .status(200)
        .sendFile(path.join(__dirname, 'app.js'));
});

server = app.listen(app.get('port'), function(){
    var port = server.address().port;
    console.log("Listening to port " + port);
});
