app.use(express.json());

// importing packages
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

// declare static path
let staticPath = path.join(__dirname, "public");

//intializing express.js
const app = express();

//middlewares
app.use(express.static(staticPath));

app.listen(3000, () => {
    console.log('listening on port 3000.......');
})

//routes
//home route
app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
})

app.post('/signup', (req, res) => {
    let { username, email, password, terms } = req.body;

    // form validations
    if(username.length < 3){
        return res.json({'alert': 'το όνομα πρέπει να είναι τουλάχιστον 3 χαρακτήρες'});
    } else if(!email.length){
        return res.json({'alert': 'δώστε το email'});
    } else if(password.length < 8){
        return res.json({'alert': 'ο κωδικός πρέπει να είναι τουλάχιστον 8 χαρακτήρες'});
    } else if(!terms){
        return res.json({'alert': 'πρέπει να αποδεχτείτε τους όρους χρήσης'});
    }       
})

// 404 route
app.get('/404', (req, res) => {
    res.sendFile(path.join(staticPath, "404.html"));
})

app.use((req, res) => {
    res.redirect('/404');
})

//signup route
app.get('/signup', (req, res) => {
    res.sendFile(path.join(staticPath, "signup.html"));
})
