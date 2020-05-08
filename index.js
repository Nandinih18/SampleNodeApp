const express = require("express"); //requiring in the express library marked as dependency

const app = express(); //using express library to create a new app

app.get("/", function(req, res) {
  res.send("How are you doing");
});

var server = app.listen(5000, function() {
  var host = server.address().address;
  var port = server.address().port;
  console.log("Listening at http://%s:%s', host, port");
});
