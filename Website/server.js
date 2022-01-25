app.use(express.json());

// importing packages
const express = require('express');
const admin = require('firebase-admin');
const bcrypt = require('bcrypt');
const path = require('path');

//firebase admin setup
let serviceAccount = require("./e-commerce-tech-website-firebase-adminsdk-4sk1q-5c7da58cbd.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
}); 

let db = admin.firestore();

// declare static path
let staticPath = path.join(__dirname, "public");

//intializing express.js
const app = express();

//middlewares
app.use(express.static(staticPath));
app.use(express.json());

app.listen(3000, () => {
    console.log('listening on port 3000.......');
})

//routes
//home route
app.get("/", (req, res) => {
    res.sendFile(path.join(staticPath, "index.html"));
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
    
    // store user in db
    db.collection('users').doc(email).get()
    .then(user => {
        if(user.exists){
            return res.json({'alert': 'το email υπάρχει'});
        } else{
            // encrypt the password before storing it.
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(password, salt, (err, hash) => {
                    req.body.password = hash;
                    db.collection('users').doc(email).set(req.body)
                    .then(data => {
                        res.json({
                            username: req.body.username,
                            email: req.body.email,
                        })
                    })
                })
            })
        }
    })
        
    res.json('data recieved');
})
