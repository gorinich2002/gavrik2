const path = require('path')
const User = require('../models/User')

module.exports = function (req, res, next) {
    const token = req?.cookies?.token || false;
    console.log(req.cookies)
    User.findOne({ token }).then(candidate => {
        if (!candidate || !token) {
        res.status(200).json({auth:'none'})
        } else {
           next();
        }

    })
}