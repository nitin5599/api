const mongoose = require('mongoose');
const express = require('express');
const bodyparser = require('body-parser');
cors = require('cors');
// MongoDB Databse url
var mongoDatabase = 'mongodb+srv://useradmin:admin@123@myappcluster.ccmkj.mongodb.net/myapp?retryWrites=true&w=majority';
mongoose.Promise = global.Promise;

// Connect Mongodb Database
mongoose.connect(mongoDatabase, { useNewUrlParser: true, useUnifiedTopology: true  }).then(
 () => { console.log('Database is connected') },
 err => { console.log('There is problem while connecting database ' + err) }
);


// const { mongoose } = require('./db');
var ctg_crud = require('./controllers/ctg_crud');

var app = express();

app.use(bodyparser.json());

app.use(bodyparser.urlencoded({
    extended: false
}));

app.use(cors({}));

// app.listen(3300, () => console.log('express server started at: 3300'));

// PORT
const port = process.env.PORT || 9000;

app.listen(port, () => {
    console.log('Connected to port ' + port)
  })
  
app.use('/ctg_crud', ctg_crud);

// post the blog ctg
app.post('/addctg', ctg_crud);

//  get the list of all blog ctg
app.get('/ctg_list', ctg_crud);