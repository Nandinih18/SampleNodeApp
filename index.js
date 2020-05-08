const express = require("express"); //requiring in the express library marked as dependency

const app = express(); //using express library to create a new app

app.get("/", (req, res) => {
  res.send("How are you doing");
});

app.listen(5000, () => {
  console.log("Listening on port 5000");
});
