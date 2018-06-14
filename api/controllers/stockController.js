const Drug = require('../models/Drug');

module.exports.getStocks = (drug) => {
        return Drug.find({});
    }
