const express = require('express');
var router = express.Router();

var blogctg  = require('../models/blogctg');
const { ObjectId } = require('mongodb');
var blog_ctg = "blogctg";
// get all ctg  localhost:9000/ctg_crud/ctg_list
router.get('/ctg_list', (req, res) => {
    blogctg.find((err, data) => {
        if(err)
        {
            console.log('Error in retriving the categories' + JSON.stringify(err, undefined, 2));
        }
        else
        {
            res.json(data);
        }
    });
});

// get single data
router.get('/:id', (req, res) => {
    blogctg.findById(req.params.id, (err, data) => {
        if(err)
        {
            console.log('Error in retriving the categories' + JSON.stringify(err, undefined, 2));
            return res.send(`No category with given id: ${req.params.id}`);
        }
        else
        {
            res.json(data);
        }
    });
});


// post ctg
router.post('/addctg', (req, res) => {
    var ctg = new blogctg();
    // ({
        ctg.category = req.body.category;
        ctg.category_id = req.body.category_id;
    // });
    ctg.save((err, data) => {
        if(err)
        {
            console.log('Error in adding the categories' + JSON.stringify(err, undefined, 2));
        }
        else
        {
            res.json(data);
        }
    })
    
});

// update the ctg
router.put('/:id', (req, res) => {
    mongoose.set('useFindAndModify', false);  
    if(!ObjectId.isValid(req.params.id))
      return res.status(400).send(`No category with given id: ${res.params.id}`);

      var ctg = {
          category: req.body.category,
          category_id: req.body.category_id
        }

        blogctg.findByIdAndUpdate(req.params.id, { $set: ctg }, {new:true}, (err, data) => {
            if(err)
            {
                console.log('Error in updating the categories' + JSON.stringify(err, undefined, 2));
            }
            else
            {
                res.json(data);
            }
        });
});

// delete the ctg
router.delete('/:id', (req, res) => {
    if(!ObjectId.isValid(req.params.id))
    return res.status(400).send(`No category with given id: ${res.params.id}`);

    blogctg.findByIdAndRemove(req.params.id, (err, data) => {
        if(err)
        {
            console.log('Error in deleting the categories' + JSON.stringify(err, undefined, 2));
        }
        else
        {
            res.json(data);
        }
    })
})


module.exports = router;