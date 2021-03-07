const express = require('express');
const { join } = require('path');
const path = require('path');


const app = express()

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));


// example endpoint
app.get('/api/getData', async (req, res) => {
    let helpStr = req.query.str
    let stringVar = "";

    // Init rando selection
    let helpArr = helpStr.split(",")
    let rando = Math.floor(Math.random() * 5);
    console.log(rando)
    let response = helpArr[rando];

    if (response === "q1") {
        stringVar = "If you want a snack, think about eating a few fruits or vegetables!"
    } 
    else if (response === "q2") {
        stringVar = "Don't forget to exercise a little bit today. I value your health!"
    } else if (response === "q3") {
        stringVar = "Have you eaten today? ... Maybe you should."
    } else if (response === "q4") {
        stringVar = "Feel free to relax from work and do what makes you happy!"
    } else if (response === "q5") {
        stringVar = "Don't just talk to me, express yourself with your friends and family."
    } else if (response === "q6") {
        stringVar = "You're stronger than you know. You can do it!"
    } else if (response === "q7") {
        stringVar = "Spend time with your friends and family. Relaxation is key."
    } else if (response === "q8") {
        stringVar = "If you need help, I'm here for you! Otherwise, contact a friend!!!"
    } else if (response === "q9") {
        stringVar = "Text an old friend you haven't talked to in a long time! :)"
    } else if (response === "q10") {
        stringVar = "This dark room is cool.. but maybe you should go for a walk in nature."
    } else if (response === "q11") {
        stringVar = "Take a five minute break and mediate. It will calm you down!"
    } else if (response === "q12") {
        stringVar = "Make sure you find time today to reflect on how the days gone, or your life.."
    } else if (response === "q13") {
        stringVar = "Feel free to say no to someone if you're already too busy!"
    } else if (response === "q14") {
        stringVar = "Your desk could be cleaner... Maybe you should clean it."
    } else if (response === "q15") {
        stringVar = "Learn something new today and before you know it, you'll be smart like me!"
    }
    console.log(".. Request Made:  " + response)
    res.json(stringVar);
});

// Handles any requests that don't match the ones above
app.get('*', (req, res) =>{
    res.sendFile(path.join(__dirname+'/client/build/index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port);

console.log('App is listening on port ' + port);

