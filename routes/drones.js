const express = require('express');
const router = express.Router();
const Drone = require('../models/Drone')
// require the Drone model here

router.get('/drones', async (req, res, next) => {
  try {
    const drones = await Drone.find({});
    res.render('drones/list', { drones })
  } catch (error) {
    next(error)
  }
});

router.get('/drones/create', async (req, res, next) => {
  try {
    res.render('drones/create-form')
  } catch (error) {
    next(error)
  }
});

router.post('/drones/create', async (req, res, next) => {
const {name,propellers,maxSpeed} = req.body;
const parsedPropellers = parseInt(propellers);
const parsedMaxSpeed = parseInt(maxSpeed);
try {
  await Drone.create({ name, propellers: parsedPropellers, maxSpeed: parsedMaxSpeed });
  res.redirect('/drones');
} catch (error) {
  res.render('/drones/create-form')
  next(error)
}
});

router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
});

router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
});

module.exports = router;
