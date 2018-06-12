const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = process.env.PORT || 5000

app.use(bodyParser.json());
app.use(cors());
app.use('/', (req, res)  => {
    res.status(404).send("Sorry Koombiyo-Pharmacy couldn't find that page");
})

app.listen(PORT, (err) => {
    if(err) {
        process.exit(-1);
    }

    console.log('Pharmacy Server started on port ' + PORT);
})