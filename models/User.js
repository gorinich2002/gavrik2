const { Schema, model, Types } = require("mongoose");
const schema = new Schema({
    name: { type: String, required: true },
    login: { type: String, required: true },
    mail: { type: String, required: true },
    password: { type: String, required: true },
    token: {type: String} 
});
module.exports = model("User", schema);