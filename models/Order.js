const { Schema, model, Types } = require("mongoose");

const schema = new Schema({
  userId : {type: String, required: true },
  buyerInformation: {
    firstName: { type: String, required: true },
    surname: { type: String, required: true },
    address: { type: String, required: true },
    phone: { type: String, required: true },
    email: { type: String, required: true },
  },
});

module.exports = model("Order", schema);
