//DEPENDENCIES
const express = require('express');
const app = express();

//MIDDLEWARE
app.use(express.static('./public'));


// Log http requests to console
app.use(function(req, res, next) {
  console.log(`${req.method} request for ${req.url}`);
  next();
})

//ROUTES
app.get('/', (req, res) => {
  res.render('index.html')
})

//SERVER PORT
app.listen(3000, ()=> {
  console.log("Express running on port 3000");
})

module.exports = app;
