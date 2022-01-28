const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  products: [
    {
      count:{type: Number, required: true},
      imgSrc:{type:String},
      price:{type:Number, required: true},
      productName:{type:String, required:true}
    }
  ],
  userLogin: {type:String, required:true}
});

module.exports = model("Order", schema);
