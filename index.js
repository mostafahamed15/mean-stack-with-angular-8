const express = require('express');
const app = express();
const mongoose = require('mongoose');
const config = require('./config/database');
const path = require('path');


app.use(express.static(__dirname + '/client/dist/client/'));
mongoose.Promise = global.Promise;
mongoose.connect(
    config.uri,
     {useNewUrlParser: true,
    useUnifiedTopology: true},
      (err) => {
    if (err) {
        console.log("Cannot connect to DataBase: ", err)
    } else {
        console.log("Connecting to DataBase: " + config.db)
    }
});


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname + '/client/dist/client/index.html'));
});

app.listen(8080, () => {
    console.log('Listening on port 8080')
})