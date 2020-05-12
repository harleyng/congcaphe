const express = require('express');
const groceryRouter = express.Router();

const groceryModel = require('../../models/shop/grocery')

groceryRouter.get('/:category/:id', (req, res) => {
    const category = req.params.category;
    const id = req.params.id;
    if (category == "all") {
        groceryModel.find({}, (err, result) => {
            if(err) res.send({ succes: 0, err })
            else {
                groceryModel.findById(id, (err, result) => {
                    if(err) res.send({ succes: 0, err })
                    else if (!result) res.send({ succes: 0, err: 'Item not existed' })
                    else res.send({ succes: 1, data: result })
                })
            }
        })
    } else {
        groceryModel.find({ category: category }, (err, result) => {
            if(err) res.send({ succes: 0, err })
            else if (!result) res.send({ succes: 0, err: 'Item not existed' })
            else {
                groceryModel.findById(id, (err, result) => {
                    if(err) res.send({ succes: 0, err })
                    else if (!result) res.send({ succes: 0, err: 'Item not existed' })
                    else res.send({ succes: 1, data: result })
                })
            }
        })
    }
})

groceryRouter.get('/:category', (req, res) => {
    const category = req.params.category;
    if (category == "all") {
        groceryModel.find({}, (err, result) => {
            if(err) res.send({ succes: 0, err })
            else {
                res.send({ succes: 1, data: result });
                console.log(result);
            }
        })
    } else {
        groceryModel.find({ category: category }, (err, result) => {
            if(err) res.send({ succes: 0, err })
            else if (!result) res.send({ succes: 0, err: 'Item not existed' })
            else {
                res.send({ succes: 1, data: result })
            }
        })
    }
})

groceryRouter.post('/', (req, res) => {
	groceryModel.create(req.body, (err, result) => {
		if(err) res.send({ success: false, err })
		else res.send({ success: true, data: result });
	});
});

module.exports = groceryRouter;