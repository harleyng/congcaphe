const express = require('express');
const postRouter = express.Router();

const postModel = require('../models/post')

postRouter.get('/all', (req, res) => {
    postModel.find({}, (err, result) => {
        if(err) res.send({ succes: 0, err })
        else {
            res.send({ succes: 1, data: result })
        }
    })
})

postRouter.get('/:category', (req, res) => {
    const category = req.params.category;
    postModel.find({ category: category }, (err, result) => {
        if(err) res.send({ succes: 0, err })
        else if (!result) res.send({ succes: 0, err: 'Item not existed' })
        else {
            res.send({ succes: 1, data: result })
        }
    })
})

postRouter.post('/', (req, res) => {
	postModel.create(req.body, (err, result) => {
		if(err) res.send({ success: false, err })
		else res.send({ success: true, data: result });
	});
});

module.exports = postRouter;