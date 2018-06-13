const Drug = require('../models/Drug');

module.exports.addDrug = (drug) => {
        return Drug.create(drug);
    }
