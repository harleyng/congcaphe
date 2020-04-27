const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const menuApiRouter = require('./routers/shop/menu')

mongoose.connect(
    'mongodb+srv://congadmin:11223344@congcaphe-e0q94.mongodb.net/test?retryWrites=true&w=majority',
    { useUnifiedTopology: true, useNewUrlParser: true },
    (err) => {
    if (err) console.log(err);
    else {
        console.log('Connect to DB success')
        const app = express();

        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended:false }));

        app.use('/api/menu', menuApiRouter);

        app.listen(3001, (err) => {
            if (err) console.log(err);
            else console.log('Server listen on port 3001');
        })
    }
})