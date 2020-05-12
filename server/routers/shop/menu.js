const express = require('express');
const menuRouter = express.Router();

const menuModel = require('../../models/shop/menu')

// menuRouter.get('/', (req, res) => {
//     menuModel.find({}, (err, result) => {
//         if(err) res.send({ succes: 0, err })
//         else {
//             res.send({ succes: 1, data: result });
//             console.log(result);
//         }
//     })
// });
menuRouter.get('/all', (req, res) => {
    menuModel.find({}, (err, result) => {
        if(err) res.send({ succes: 0, err })
        else {
            res.send({ succes: 1, data: result })
        }
    })
})

menuRouter.get('/:category', (req, res) => {
    const category = req.params.category;
    menuModel.find({ category: category }, (err, result) => {
        if(err) res.send({ succes: 0, err })
        else if (!result) res.send({ succes: 0, err: 'Item not existed' })
        else {
            res.send({ succes: 1, data: result })
        }
    })
})

menuRouter.get('/:category/:id', (req, res) => {
    const category = req.params.category;
    const id = req.params.id;
    if (category == "all") {
        menuModel.find({}, (err, result) => {
            if(err) res.send({ succes: 0, err })
            else {
                menuModel.findById(id, (err, result) => {
                    if(err) res.send({ succes: 0, err })
                    else if (!result) res.send({ succes: 0, err: 'Item not existed' })
                    else res.send({ succes: 1, data: result })
                })
            }
        })
    } else {
        menuModel.find({ category: category }, (err, result) => {
            if(err) res.send({ succes: 0, err })
            else if (!result) res.send({ succes: 0, err: 'Item not existed' })
            else {
                menuModel.findById(id, (err, result) => {
                    if(err) res.send({ succes: 0, err })
                    else if (!result) res.send({ succes: 0, err: 'Item not existed' })
                    else res.send({ succes: 1, data: result })
                })
            }
        })
    }
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
