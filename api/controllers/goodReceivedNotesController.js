const GRNModal = require('../models/Drug');

var GRNController = function(){
    this.addGRN = (data)=>{
        return new Promise = ((resolve,reject)=>{
            var GRN = new GRNModal({
                noteID=data.noteID,
                supplier: data.supplier,
                date:data.date,
                orderQuantity :data.orderQuantity,
                deliveredQuantity :data.deliveredQuantity,
                amount: data.amount
            });
            GRN.save.then(()=>{
                resolve({status: 200, message: "Succesfully added new GRN"});
            }).catch(err => {
                reject({status: 500, message: "Error:- "+err});
            })
        });
    }    

    this.GetAllGRN = ()=>{
        GRNModal.find().exec().then((GRN)=>{
            resolve({status: 200, data: GRN});
        }).catch(err => {
            reject({status: 500, message: "Error:- " + err});
        })
    }

    this.DeleteAGRN = (id)=>{
        return new Promise((resolve, reject) => {
            GRNModal.remove({_id:id}).then(()=>{
                resolve({status: 200, message: "Successfullt deleted the GRN"});
            }).catch(err => {
                reject({status: 500, message:"Error:- " + err});
            });
        });
    }
}

module.exports = new DrugController();




