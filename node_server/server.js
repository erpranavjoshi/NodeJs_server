const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json())

const dbConfig = require('/home/pranav/node_server/config/config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to database.', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({"message": "Welcome to Nodejs"});
});


require('./app/routes/routes.js')(app);

//let port = 3333;
// app.listen(port, () => {
//    console.log('Server is running on port number ' + port);
// });
//
app.listen(3333, '0.0.0.0', function() {
    console.log('Listening to port:  ' + 3333);
});
