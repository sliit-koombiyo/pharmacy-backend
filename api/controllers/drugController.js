const DrugModal = require('../models/Drug');

var DrugController = function () {
    this.addDrug = (data) => {
        return new Promise((resolve, reject) => {
            var drug = new DrugModal({
                drugID: data.drugID,
                supplier: data.supplier,
                name: data.name,
                stock: data.stock,
                type: data.type,
                price: data.price,
                dangerlevel: data.dangerlevel,
                reorderLevel: data.reorderLevel
            });
            drug.save().then(() => {
                resolve({ status: 200, message: "Succesfully added new drug" });
            }).catch(err => {
                reject({ status: 500, message: "Error:- " + err });
            })
        });
    }

    this.UpdateDrug = (id, data) => {
        return new Promise((resolve, reject) => {
            DrugModal.update({ _id: id }, data).then(() => {
                resolve({ status: 200, message: "succesfully updated the drug" });
            }).catch(err => {
                reject({ status: 500, message: "Error:- " + err });
            });
        });
    }

    this.GetAllDrugs = () => {
        return new Promise((resolve, reject) => {
            DrugModal.find({}).exec().then((drugs) => {
                resolve({ status: 200, data: drugs });
            }).catch(err => {
                reject({ status: 500, message: "Error:- " + err });
            })
        })
    }

    this.findADrug = (id) => {
        return new Promise((resolve, reject) => {
            DrugModal.find({ _id: id }).exec().then((drug) => {
                resolve({ status: 200, data: drug });
            }).catch(err => {
                reject({ status: 500, message: "Error:- " + err });
            })
        })
    }

    this.DeleteADrug = (id) => {
        return new Promise((resolve, reject) => {
            DrugModal.remove({ _id: id }).then(() => {
                resolve({ status: 200, message: "Successfullt deleted the drug" });
            }).catch(err => {
                reject({ status: 500, message: "Error:- " + err });
            });
        });
    }
}

module.exports = new DrugController();





