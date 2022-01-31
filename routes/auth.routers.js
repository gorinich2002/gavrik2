const { Router } = require("express");
const express = require("express");
const Order = require("../models/Order")
const router = Router();
const fs = require('fs');


router.post(
  "/auth",
  express.urlencoded({extended: false}),
  async (req, res) => {
    try {
 
      let order = req.body

    
      if(order.cart && order.cart.length >0 && order.name && order.surname && order.phone && order.email && order.address){
        order  = {
          cart: order.cart,
          buyerInformation:{...order, firstName:order.name}
        }
        delete order.buyerInformation.cart
        delete order.buyerInformation.name


        const newOrder = new Order( order);
        newOrder.save(order);
        res.status(200).json({messege:"Заказ успешно добавлен"});
      }else{
        res.status(400).json({messege:"Ошибка при заполнении формы"});

      }

      //res.send(req.body)
      // let pageNum = req.query["pagenum"] ||  0;
     
      // let onePageCount =req.query["pagelength"];

      
      // fs.readFile('products.json',(err,productsData)=>{
      //   let fullList = JSON.parse(productsData);
        
      

      //   let pageList = fullList.slice(pageNum*onePageCount, pageNum*onePageCount+ +onePageCount)
       
      //   res.json({pageList,  count:fullList.length})
      // });
     
    } catch (e) {
      res.status(500).json({ message: "Error, reload your page" });
      console.log(e);
    }
  }
);

module.exports = router;
