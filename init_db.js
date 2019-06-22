var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/foody";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("foody app db created!");

  var dbo = db.db("foody");

  //callback hell here, do not enter this zone
  var create_fridge_collection = () => {
    dbo.createCollection("fridge", (err, res) => {
      if (err)
        throw err;
      console.log('fridge collection created!');
    });
    db.close();
  };

  var create_expenses_collection = () => {
    dbo.createCollection("expenses", (err, res) => {
      if (err)
        throw err;
      console.log('expenses collection created!');
      create_fridge_collection();
    });
  };

  var create_groceries_collection = () => {
    dbo.createCollection("groceries", (err, res) => {
      if (err)
        throw err;
      console.log('groceries collection created!');
      create_expenses_collection();
    })
  };

  dbo.createCollection("chores", function(err, res) {
    if (err)
      throw err;
    console.log("chores collection created!");
    create_groceries_collection();
  });
});
