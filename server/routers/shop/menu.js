const express = require('express');
const menuRouter = express.Router();

const menuModel = require('../../models/shop/menu')

menuRouter.get('/', (req, res) => {
    menuModel.find({}, (err, result) => {
        if(err) res.send({ succes: 0, err })
        else {
            res.send({ succes: 1, data: result });
            console.log(result);
        }
    })
});

menuRouter.get('/:id', (req, res) => {
    const id = req.params.id;
    menuModel.findById(id, (err, result) => {
        if(err) res.send({ succes: 0, err })
        else if (!result) res.send({ succes: 0, err: 'Item not existed' })
        else res.send({ succes: 1, data: result })
    })
})

menuRouter.post('/', (req, res) => {
	menuModel.create(req.body, (err, result) => {
		if(err) res.send({ success: false, err })
		else res.send({ success: true, data: result });
	});
});



menuRouter.post('/:id', (req, res) => {
    menuModel.findById(id, (err, result) => {
        if(err) res.send({ succes: 0, err })
        else if (!result) res.send({ succes: 0, err: 'Item not existed' })
        else {
            menuModel.create(req.body, (err, result) => {
                if(err) res.send({ success: false, err })
                else res.send({ success: true, data: result });
            });
        };
    })
});

module.exports = menuRouter;