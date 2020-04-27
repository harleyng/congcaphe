const express = require('express');
const menuRouter = express.Router();

const menuModel = require('../../models/shop/menu')

menuRouter.get('/', (req, res) => {
    menuModel.find({}, (err, result) => {
        if(err) res.send({ succes: 0, err })
        else res.send({ succes: 1, data: result })
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

module.exports = menuRouter;