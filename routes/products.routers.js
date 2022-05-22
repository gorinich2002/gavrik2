const { Router } = require("express");
const router = Router();
const fs = require('fs');
const authMiddleware = require("../middleware/auth.middleware")

router.get(
  "/products",
  authMiddleware,
  async (req, res) => {
    try {
      let pageNum = req.query["pagenum"] ||  0;
     
      let onePageCount =req.query["pagelength"];

      
      fs.readFile('products.json',(err,productsData)=>{
        let fullList = JSON.parse(productsData);
        
      

        let pageList = fullList.slice(pageNum*onePageCount, pageNum*onePageCount+ +onePageCount)
       
        res.json({pageList,  count:fullList.length})
      });
     
    } catch (e) {
      res.status(500).json({ message: "Error, reload your page" });
      console.log(e);
    }
  }
);

module.exports = router;
