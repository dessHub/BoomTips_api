const PORT = 3000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");
const cors = require('cors');
const passport = require("passport");
const config = require('./config/database');

//Database connection
mongoose.connect(config.database);
mongoose.connection.on('connected', ()=>{
  console.log('Connected to database '+config.database);
});
mongoose.connection.on('error', (err)=>{
  console.log('Database error: '+err);
});

//Routes
const users = require('./routes/users');
const api = require('./routes/api');

//Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/users',users);
app.use('/api', api)
app.use(express.static(path.join(__dirname, 'client')));

//Index route
app.get('/', (req, res) => {
  re.send('Invalid Endpoint');
});

app.listen(PORT, () => {
  console.log('Server started on port ' +PORT);
})
