const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const menuApiRouter = require('./routers/shop/menu');
const groceryApiRouter = require('./routers/shop/grocery');
const postApiRouter = require('./routers/post');

const config = require('./config');

mongoose.connect(
    "mongodb+srv://congadmin:11223344@congcaphe-e0q94.mongodb.net/test?retryWrites=true&w=majority",
    { useUnifiedTopology: true, useNewUrlParser: true },
    (err) => {
    if (err) console.log(err);
    else {
        console.log('Connect to DB success')
        const app = express();

        app.use(cors({
            origin: config.clientUrl,
            credentials: true
        }));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended:false }));

        app.use('/api/menu', menuApiRouter);
        app.use('/api/grocery', groceryApiRouter);
        app.use('/api/post', postApiRouter);

        const port = process.env.PORT || 5000;
        app.listen(port, (err) => {
            if (err) console.log(err);
            else console.log(`Server listen on port ${port}`);
        })
    }
})