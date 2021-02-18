var express = require('express');
var router = express.Router();
const path = require('path');
const MongoClient = require('mongodb').MongoClient;
var data;
//Non fonctionnel avec et sans authentification
//MongoClient.connect('mongodb://admin:password@192.168.1.11:55555/titi',{useUnifiedTopology:true}, (err, client) => {
//Sans authentification>
//AVEC authentification>
MongoClient.connect('mongodb://192.168.1.11:55555/titi',{useUnifiedTopology:true}, (err, client) => {
    if (err) return console.error(err);
    console.log(err);
    console.log('Connected to Database');
    const db = client.db('titi');
    const quotesCollection = db.collection('restaurants').find();
    //console.log(quotesCollection)
    quotesCollection.toArray().then((res)=>{console.log(res);data=res})
    
    router.get('/', function(req, res, next) {
        //res.sendFile(path.join( __dirname, "../Pages/index.html"));
        
        //Test pour renvoyer le contenu de Mongo à un client via JSON
        res.send(data);
    });
    router.post('/', (req, res) => {
        console.log('Hellooooooooooooooooo!');
        res.sendFile(path.join( __dirname, "../Pages/index.html"));
      })
})

module.exports = router;
