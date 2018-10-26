const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');

// require our db
require('./db/db');

// initialized some middleware
// bodyParser allows us to read the
// contents of a form, or the body of a request
// the app.use sets up what middleware you are using
app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'));

// Require the controller after the middleware
const fruitController = require('./controllers/fruitController');

// This means every route in the fruitController
// now starts with /fruits
app.use('/fruits', fruitController);





app.listen(3000, () => {
  console.log('listening on port 3000');
});
