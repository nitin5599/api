const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// blog category schema
let ctg = new Schema({
    
 category: { type: String, required: true },
 category_id: { type: String, required: true }

});

module.exports = mongoose.model('blogctg', ctg, 'blog_ctg');