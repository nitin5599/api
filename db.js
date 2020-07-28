const mongoose = require('mongoose');

// MongoDB Databse url
var mongoDatabase = 'mongodb+srv://useradmin:admin@123@myappcluster.ccmkj.mongodb.net/myapp?retryWrites=true&w=majority';
mongoose.Promise = global.Promise;

// Connect Mongodb Database
mongoose.connect(mongoDatabase, { useNewUrlParser: true, useUnifiedTopology: true  }).then(
 () => { console.log('Database is connected') },
 err => { console.log('There is problem while connecting database ' + err) }
);

module.exports = mongoose;