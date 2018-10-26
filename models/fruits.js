const mongoose = require('mongoose');


const fruitSchema = new mongoose.Schema({
  name: String,
  color: String,
  readyToEat: Boolean
});


// Exporting the whole fruits array
// and it will be named whatever we require as
module.exports = mongoose.model('Fruit', fruitSchema);
