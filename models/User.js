const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
    firstName: { type: String, required: true },
    surname: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
    login: {type:String, required:true},
    password: {type:String, required:true},
    tokens:{type: Array}

});

module.exports = model("User", schema);
