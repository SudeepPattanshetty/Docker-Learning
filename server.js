let express = require('express');
let path = require('path');
let fs = require('fs');
let app = express();

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
  });

// Example in Express: Make sure the path matches exactly
// app.get('/get-profile', (req, res) => {
//     res.json({ name: "John Doe" }); 
// });


app.get('/profile-picture', function (req, res) {
  let img = fs.readFileSync(path.join(__dirname, "images/profile-1.jpg"));
  res.writeHead(200, {'Content-Type': 'image/jpg' });
  res.end(img, 'binary');
});

app.listen(3000, function () {
  console.log("app listening on port 3000!");
});
