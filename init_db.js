var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/marketplace";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  console.log("Marketplace created!");

  var dbo = db.db("marketplace");

  var callback = () => {
    dbo.createCollection('shoppingCart', (err, res) => {
      if (err)
        throw err;
      console.log('shopping cart listing created!');
      db.close();
    })
  };

  dbo.createCollection("products", function(err, res) {
    if (err)
      throw err;
    console.log("product collection created!");
    callback();
  });
});
