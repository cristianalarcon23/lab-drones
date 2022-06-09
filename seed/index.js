// Iteration #1
const mongoose = require('mongoose');
const Drone = require('../models/Drone');


const drones = [
    {
        name: "Mi Drone 4",
        propellers: 4,
        maxSpeed: 32,
    },
    {
        name: "Dji Phantom",
        propellers: 4,
        maxSpeed: 38,
    },
    {
        name: "Parrot 8X",
        propellers: 8,
        maxSpeed: 70,
    },
]

mongoose.connect('mongodb://localhost/lab-express-drones')
.then(x => console.log(`Connected to ${x.connection.name}`))
.then(() => {
  return Drone.create(drones)
})
.catch(e => console.log(e))
.finally(() => {
  mongoose.connection.close()
})