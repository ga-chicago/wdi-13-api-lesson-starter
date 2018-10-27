
// THE MOST IMPORTANT THING THIS WEEKEND IS REACT TUTORIAL AND HELLO WORLD

// 1. READ REACT HELLO WORLD 

// 2. READ REACT HELLO WORLD AGAIN ALL OF IT

// 3. DO THE REACT TUTORIAL -- if you prefer to "learn by doing" you could start with this

// 4. READ REACT HELLO WORLD A THIRD TIME

// ----------

// 5. finish update API route

// 6. make it take POST and PUT requests where the  
// body is JSON instead of x-www-form-urlencoded
// (reminder: in postman choose "Raw" and then JSON from the menu that appears)

// 7. read about CORS and try to set it up in this API -- 
// as basic as possible so that ANY client can talk to your API
    // you may need to do #3 to get #2 to work
    // there is an npm module called "cors" -- try to follow instructions on npm.org
    // page for that module  

// 8. Hungry for more re: APIs?  
// See if you can set up some routes that do pagination!
// a URL for this endpoint might be 
  // GET '/api/fruits/:pageNumber' 
  // GET '/api/fruits/:resultsPerPage/:pageNumber/'
// ----------

// 9. Debug your project 2 app/deployment!  
// Don't add features, just take what you got and 
  // • get rid of all the weird errors and unexpected behavior
  // • spend a little time making it look nice and professional visually



const express        = require('express');
const app            = express();
const bodyParser     = require('body-parser');
const methodOverride = require('method-override');
// REQUIRE CORS HERE


// require our db
require('./db/db');

// initialized some middleware
// bodyParser allows us to read the
// contents of a form, or the body of a request
// the app.use sets up what middleware you are using
app.use(bodyParser.urlencoded({extended: false}))
app.use(methodOverride('_method'));
// USE CORS HERE


// Require the controller after the middleware
const fruitController = require('./controllers/fruitController');
const fruitAPIController = require('./controllers/fruitAPIController');

// This means every route in the fruitController
// now starts with /fruits
app.use('/fruits', fruitController);
app.use('/api/fruits', fruitAPIController);





app.listen(3000, () => {
  console.log('listening on port 3000');
});
