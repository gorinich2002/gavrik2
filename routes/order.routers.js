const { Router } = require("express");
const express = require("express");
const Order = require("../models/Order")
const router = Router();
const fs = require('fs');
const authMiddleware = require("../middleware/auth.middleware");
const User = require("../models/User");

router.post(
  "/order",
  authMiddleware,
  express.urlencoded({extended: false}),
  async (req, res) => {
    try {
 
      let order = req.body
      const token = req?.cookies?.token || false;
      const user = await User.findOne({token});
      console.log('user', user)
      if(order.cart && order.cart.length >0 && order.name && order.surname && order.phone && order.email && order.address){
        order  = {
          cart: order.cart,
          buyerInformation:{...order, firstName:order.name}
        }
        delete order.buyerInformation.cart
        delete order.buyerInformation.name

        console.log(order)        
        const newOrder = new Order( {...order, userLogin : user.login});
        newOrder.save();
        res.status(200).json({msgType: "success" ,msg:"Заказ успешно добавлен"});
      }else{
        res.status(200).json({msgType: "error" , msg:"Ошибка при заполнении формы"});

      }
     
    } catch (e) {
      res.status(200).json({msgType: "error" , msg: "Error, reload your page" });
      console.log(e);
    }
  }
);

module.exports = router;
