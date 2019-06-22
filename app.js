var path    = require('path')
var express = require('express')
var app     = express()
var http    = require('http').Server(app)

var MongoClient = require('mongodb').MongoClient;
var url         = "mongodb://localhost:27017/";

http.listen(3000, () => {
    console.log("foodyroomies server started");
});
