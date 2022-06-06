const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  cart: Array,
  buyerInformation:{
    surname:{type:String},
    email:{type:String},
    phone:{type:String},
    address:{type:String},
    firstName:{type:String}
  },
  userLogin: {type:String, required:true}
});

module.exports = model("Order", schema);
