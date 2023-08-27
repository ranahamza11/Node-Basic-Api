const express = require("express");
const mongoose = require('mongoose');
const app = express();



app.get('/', (req, res) => {
    res.send('Hello world');
});

app.get('/blog', (req, res) => {
    res.send('Hello Blog from youu');
});



mongoose.connect("mongodb+srv://drovisfrovis:donno123@cluster0.39jyplo.mongodb.net/Node-API?retryWrites=true&w=majority")
.then(() => {
        console.log("connected to database");
        app.listen(3000, () => console.log('listen to the 3000'));
    })
    .catch(() => console.log(error));