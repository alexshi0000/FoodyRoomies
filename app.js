var path     = require('path')
var express  = require('express')
var app      = express()
var http    = require('http').Server(app)

var MongoClient = require('mongodb').MongoClient;
var url         = "mongodb://127.0.0.1:27017/";

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.use(express.static('public'));

//add a chore to the database
app.post('/api/add_chore', (req, res) => {
  var data = {
    chore_id: req.query.chore_id,
    name:     req.query.name,
    time:     req.query.time,
    recurr:   req.query.recurr
  };
  console.log("adding chore " + data.chore_id);

  MongoClient.connect(url, (err, db) => {
    if (err)
      throw err;
    var dbo = db.db('foody');
    var new_chore = {
      chore_id: data.chore_id,
      name:     data.name,
      time:     data.time,
      recurr:   data.recurr
    };
    dbo.collection('chores').insertOne(new_chore, (err, result) => {
      if (err) {
        res.status(400).json({error: 'could not add the chore'});
        throw err;
      }

      console.log('chore has been added');
      res.status(200).json(); //success
      db.close();
    });
  });
});

//get chores
app.get('/api/get_chores', (req, res) => {
  console.log("getting chores");
  var name = req.query.name;

  MongoClient.connect(url, (err, db) => {
    if (err)
      throw err;
    var dbo = db.db('foody');

    var query = { name : name };
    if (name === 'all')
      query = {};

    dbo.collection("chores").find(query, {}).toArray((err, result) => {
      if (err) {
        res.status(400).json({error: 'could not retrieve chores'});
        throw err;
      }
      if (result.length === 0) {
        res.status(200).json({"message":"could not find"});
      }
      else {
        console.log('retrieved chores'); //success
        res.status(200).json(result);
        db.close();
      }
    });
  });
});

//do chore
app.post('/api/do_chore', (req, res) => {
  console.log("doing chore");
  var chore_id = req.query.chore_id;
  var name     = req.query.name;

  MongoClient.connect(url, (err, db) => {
    if (err)
      throw err;
    var dbo = db.db('foody');
    var query = {
      chore_id: chore_id,
      name: name
    }
    dbo.collection("chores").remove(query, (err, result) => {
      console.log("removed");
      if (err) {
        res.status(400).json({error: "could not delete this chore"});
        throw err;
      }
      else {
        console.log("deleted");
        res.status(200).json({}); //success
        db.close();
      }
    });
  });
});

//add to groceries list
app.post('/api/add_item', (req, res) => {
  var data = {
    item:  req.query.item,
    quant: req.query.quant
  };
  console.log("adding item " + data.item);

  MongoClient.connect(url, (err, db) => {
    if (err)
      throw err;
    var dbo = db.db('foody');
    var new_item = {
      item:     data.item,
      quant:    data.quant
    };
    dbo.collection('groceries').insertOne(new_item, (err, result) => {
      if (err) {
        res.status(400).json({error: 'could not add the grocery item'});
        throw err;
      }

      console.log('grocery item has been added');
      res.status(200).json(); //success
      db.close();
    });
  });
});

//get groceries
app.get('/api/get_groceries', (req, res) => {
  console.log("getting groceries");

  MongoClient.connect(url, (err, db) => {
    if (err)
      throw err;
    var dbo = db.db('foody');
    var query = {};

    dbo.collection("groceries").find(query, {}).toArray((err, result) => {
      if (err) {
        res.status(400).json({error: 'could not retrieve groceries'});
        throw err;
      }
      if (result.length === 0) {
        res.status(200).json({"message":"could not find"});
      }
      else {
        console.log('retrieved groceries'); //success
        res.status(200).json(result);
        db.close();
      }
    });
  });
});

//remove_grocery
app.post("/api/remove_grocery", (req, res) => {
  console.log("removing grocery");
  var item = req.query.item;

  MongoClient.connect(url, (err, db) => {
    if (err)
      throw err;
    var dbo = db.db('foody');
    var query = {
      item: item
    }
    dbo.collection("groceries").remove(query, (err, result) => {
      console.log("removed");
      if (err) {
        res.status(400).json({error: "could not delete this item"});
        throw err;
      }
      else {
        console.log("deleted");
        res.status(200).json({}); //success
        db.close();
      }
    });
  });
});

http.listen(3000, () => {
    console.log("foodyroomies server started");
});
