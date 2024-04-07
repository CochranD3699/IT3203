const express = require('express');
const app = express();
const port = 5500;

app.set("port", port);
app.use (express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(express.static(__dirname + '/public'));


//send the webpage to the website waiting on the submit button 
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

//once submitted this grabs the data and processes it, I added require to the form to clean up the validation, since user/passwords is not required for my website.
app.post('/contactForm', (req, res, next) => {
    console.log('Got body:', req.body);
    next();
  
});

//using the grabbed data to supply a confirmation page that the information was recieved.
app.post('/contactForm', (req, res, next) => {
    res.send("<h2><br>Thank you for submitting your form " + req.body.firstname + " " + req.body.lastname + ".<br><br>I will contact you at " + req.body.email + ". I can't wait to talk about " + req.body.message + ". </h2>");  
});

//client side waiting for the submit so it can process server side 
app.listen (port, function(err) {
    if (err) console.log(err);
    console.log("Server is listening on PORT" + port)
});



