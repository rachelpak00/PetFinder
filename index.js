// need to import the data of all the pets from data.js:

const pets = require('./data'); 

// import express.js & initialize app
 const express = require('express'); 
 const app = express(); 

// declare port from localhost
 const PORT = 8080; 

// GET - client homepage
app.get('/', (req, res) => {
//     // server up the public folder as static index.html file
    res.sendFile(__dirname + '/public/index.html');
});

// GET - test route for Hello world
app.get('/api', (req, res) => {
    res.send('Hello World!');
});

// GET - all pets from the database
app.get('/api/v1/pets', (req, res) => {
    res.send(pets);
})

// GET - pet by owner using a query string
app.get('/api/v1/pets/owner', (req, res) => {
  
  const owner = req.params.owner;
  
  const pet = pets.find((pet) => pet.owner === owner);

  res.send(pet);
})

// GET - retrieve a single pet from the database by name parameter
app.get('/api/v1/pets/:name', (req, res) => {
  console.log(req.params.name)

  const singlePet = pets.find(pet => pet.name === req.params.name);
    
    res.send(singlePet);
  });

// pass 'PORT' in as an argument using 'app' and 'listen'
 app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
 }); 

 module.exports = app;