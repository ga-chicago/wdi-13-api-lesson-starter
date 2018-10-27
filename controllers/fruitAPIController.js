const express = require('express');
const router = express.Router();
const Fruits = require('../models/fruits');

// index route 
router.get('/', (req, res) => {
  // finding every fruit without a search parameter
  Fruits.find({}, (err, allFruits) => {
    if(err){
      const errorResponse = {
        status: 404, // this is probably not the ideal code here
        success: false, // booleans are nice because they let FEDs write
                        // logic easily
        message: "Error with database query",
        error: err
      }
      res.json(errorResponse);
    } else {
      const response = {
        status: 200,
        success: true,
        message: allFruits.length + " fruits found",
        data: allFruits
      }
      res.json(response);
    };
  });
});

// create route
router.post('/', (req, res) => {

  console.log(req, 'this is req.body, should be form info');

  if(req.body.readyToEat === 'on'){
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }

  Fruits.create(req.body, (err, createdFruit)=> {
    if(err){
      const errorResponse = {
        success: false,
        status: 422,
        message: "could not add to database",
        error: err
      }
      res.json(errorResponse);
    } else {
      const response = {
        success: true,
        status: 201,
        message: 'successfully added ' + createdFruit.name,
        data: createdFruit
      }
      res.json(response);
    }
  });
});


// Show Route
router.get('/:id', (req, res) => {
  Fruits.findById(req.params.id, (err, foundFruit) => {
    if(err) {
      const errorResponse = {
        status: 204, // this is probably not the ideal code here
        success: false, // booleans are nice because they let FEDs write
                        // logic easily
        message: "Error with database query",
        error: err
      } 
      res.json(errorResponse);     
    } else {
      const response = {
        success: true,
        status: 200,
        message: "found " + foundFruit.name,
        data: foundFruit
      }
      res.json(response);
    }
  })

});

// update route
router.put('/:id', (req, res) => {

  // If it is hitting the route, I want to see
  console.log(req.body, 'Why: IT tells what is coming from the form')

  if(req.body.readyToEat === 'on'){ // if checked then req.body.readyToEat = 'on'
    req.body.readyToEat = true;
  } else {
    req.body.readyToEat = false;
  }
  // req.body is the updated form info
  //new true, says return to me the updated object, by default it is false
  // things that are default you don't have to specify

  // first argument, is the document you are looking for
  // second argument, is the content you are updating with
  Fruits.findByIdAndUpdate(req.params.id, req.body, {new: true}, (err, updatedFruit) => {
    if(err){
      res.send(err);
    } else {
        // Check to see if it is updating correctly
        console.log(updatedFruit, ' CHeck our model')
        res.redirect('/fruits');
    }
  })

});


// Delete route
router.delete('/:id', (req, res) => {

  // Delete a specific fruit
  console.log(req.params.id, ' this is params in delete')

  Fruits.findByIdAndRemove(req.params.id, (err, deletedFruit) => {
    if(err){
      const errorResponse = {
        success: false,
        status: 418, // teapot
        message: "could not delete",
        error: err
      }
      res.json(errorResponse)
    } else {
      const response = {
        success: true,
        status: 200,
        message: "successfully deleted fruit " + req.params.id,
        deletedFruit: deletedFruit // you may or may not need to do this

      }
      res.json(response);
    }
  });
})



module.exports = router;
