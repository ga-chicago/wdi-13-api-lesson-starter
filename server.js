
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
// HINTS: where do we find the data in an incoming post request?  
// What module is making that happen for us?  
// Can that module be configured a little differently?  
// * pretty minimal changes are needed here
// Want more hints? Read this entire page: https://www.npmjs.com/package/body-parser
// Read the response carefully to make sure what you're adding to the database is 
// actually what you think is getting added

// 7. read about CORS and try to set it up in this API -- 
// as basic as possible so that ANY client can talk to your API
    // you may need to do #3 to get #2 to work
    // there is an npm module called "cors" -- try to follow instructions on npm.org
    // page for that module  

// 8. Optional: Now that you've finished everything, let's make a version that's only an API
// and not also a full-stack app.  Make sure you commit any uncommitted changes, and
// checkout a new branch: api-only
// in your api-only branch:
  // delete the /views folder
  // if there were a /public folder, we might delete that now too
  // delete the /fruit controller and unlink it in server.js
  // anything else that only had to do with this being a full stack app could be deleted now.

// 9. Hungry for more re: APIs?  
// See if you can set up some API routes to do pagination!
// a URL for this endpoint might be 
  // GET '/api/fruits/:pageNumber' 
  // GET '/api/fruits/:resultsPerPage/:pageNumber/'
// ----------

// 10. Debug your project 2 app/deployment!  
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

// Middleware
app.use(bodyParser.urlencoded({extended: false})) // <----CHANGE THIS
app.use(methodOverride('_method'));
// USE CORS HERE


// Controllers
const fruitController = require('./controllers/fruitController');
const fruitAPIController = require('./controllers/fruitAPIController');
app.use('/fruits', fruitController);
app.use('/api/fruits', fruitAPIController);


app.listen(3000, () => {
  console.log('listening on port 3000');
});
