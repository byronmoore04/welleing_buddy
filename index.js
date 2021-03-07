const express = require('express');
const path = require('path');

require('dotenv/config');

const app = express()

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


// example endpoint
app.get('/api/getData', (req, res) => {
    console.log(".. Request Made")
    res.json({ message: 'Hi I\'m chad bro. what up bro.'});
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port);

console.log('App is listening on port ' + port);