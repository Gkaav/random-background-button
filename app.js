const express = require('express');
const app = express();
const path = require('path');



app.set('view engine', 'ejs');
app.use(express.static('public'));



app.get('/main', (req, res) => {
  res.render('index');
});



app.listen(5050, () => {
  console.log('listening on port 5050');
});
