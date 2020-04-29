const express = require('express');
const groceryRouter = express.Router();

const groceryModel = require('../../models/shop/grocery')

groceryRouter.get('/', (req, res) => {
    groceryModel.find({}, (err, result) => {
        if(err) res.send({ succes: 0, err })
        else {
            res.send({ succes: 1, data: result });
            console.log(result);
        }
    })
});

groceryRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    groceryModel.findById(id, (err, result) => {
        if(err) res.send({ succes: 0, err })
        else if (!result) res.send({ succes: 0, err: 'Item not existed' })
        else res.send({ succes: 1, data: result })
    })
})

groceryRouter.post('/', (req, res) => {
	groceryModel.create(req.body, (err, result) => {
		if(err) res.send({ success: false, err })
		else res.send({ success: true, data: result });
	});
});

module.exports = groceryRouter;