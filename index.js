const express = require('express');
const mongoose = require('mongoose');
const cookieSession = require('cookie-session');
const passport = require('passport')
var keys = require('./config/keys.js');
require('./models/user.js')
require('./services/passport.js');

mongoose.connect(keys.mongoUri)

const app = express();

app.use (
    cookieSession ({
        maxAge: 30 * 24 * 60 * 60 * 1000,
        keys:[keys.cookieKey]
    })
);

app.use(passport.initialize());
app.use(passport.session());  

require('./routes/authRoutes.js')(app);

app.get('/', (req,res) => {
    res.send({hi: 'there'})
});

const PORT = process.env.PORT || 5000;
app.listen(PORT)