const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const menuApiRouter = require('./routers/shop/menu')
const groceryApiRouter = require('./routers/shop/grocery')

mongoose.connect(
    'mongodb://localhost/congcaphe',
    { useUnifiedTopology: true, useNewUrlParser: true },
    (err) => {
    if (err) console.log(err);
    else {
        console.log('Connect to DB success')
        const app = express();

        app.use(cors({
            origin: 'http://localhost:3000'
        }));
        app.use(bodyParser.json());
        app.use(bodyParser.urlencoded({ extended:false }));

        app.use('/api/menu', menuApiRouter);
        app.use('/api/grocery', groceryApiRouter);

        const port = process.env.PORT || 3001
        app.listen(port, (err) => {
            if (err) console.log(err);
            else console.log('Server start success');
        })
    }
})