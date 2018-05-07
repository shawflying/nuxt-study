var express = require('express');
var app = express();
var port = 8089

app.get("/list", function (req, res) {
  let data = [
    "HunYan", "HunShaSheYing", "HunQing"
  ];
  res.json({ code: 1, msg: 'success', data: data });
});

app.listen(port, function () {
  console.log(`http://127.0.0.1:${port}/list`);
})