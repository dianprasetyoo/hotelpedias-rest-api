const jwt = require('jsonwebtoken')
const models = require('../models')
const customer = models.customers


//get semua Room
exports.getCustomer = (req, res) => {
    customer.findAll().then(item=>res.send(item));
}

 //CREATE MY Room
 exports.storeCustomer = (req, res) => {
    const {name, identity_number, phone_number, image} = req.body;
    customer.create({
        name,
        identity_number,
        phone_number,
        image
    }).then(result => res.send(result));
}

//UPDATE MY CUSTOMER
exports.updateCustomer = (req, res) => {
    const {name, identity_number, phone_number, image} = req.body
    customer.update({
        name,
        identity_number,
        phone_number,
        image
    },
    {
        where:{id: req.params.id_customer},
    }).then(res.send(req.body))
}

//Uoload Image Customer
exports.uploadImage = (req, res) => {
//    res.status(200).json({
//        filePath: req.file.path,
//        message : "success"
//    })
    res.send({
        filePath: req.file.path,
       message : "success"
    })
}

//DELETE Custumer
exports.deleteCustomer = (req, res) => {
    const {customer_id} = req.params
    customer.destroy({
        where : {id: customer_id}
    }).then(result => res.send({
        id: customer_id,
        message : "Customer dihapus"
    })
    )
}
