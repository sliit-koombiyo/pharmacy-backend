const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const router = require('./api/routes/index')

const PORT = process.env.PORT || 5000

mongoose.connect('mongodb://ants:ants%40123@ds147450.mlab.com:47450/koombiyo-af');
mongoose.connection.on('error', console.error.bind(console, 'connection error:'));
mongoose.connection.once('open', function() {
  console.log('database connection established ')
});

app.use(bodyParser.json());
app.use(cors());
app.use('/', router);

app.listen(PORT, (err) => {
    if(err) {
        process.exit(-1);
    }

    console.log('Pharmacy Server started on port ' + PORT);
})