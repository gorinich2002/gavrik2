const { Router } = require("express");
const router = Router();
const fs = require('fs');

router.get(
  "/products",
  async (req, res) => {
    try {
      let pageNum = req.query["pagenum"] ||  0;
      let onePageCount =req.query["pagelength"];
      let top =req.query["top"] || Infinity;
      let bottom = req.query["bottom"] || 0;
      let search =req.query["search"] || '';
      fs.readFile('products.json',(err,productsData)=>{
        let fullList = JSON.parse(productsData);
        let filterList = fullList.filter(procudct => procudct.productName.toLowerCase().indexOf(search.toLowerCase()) != -1 && +procudct.price <= +top && +procudct.price >= +bottom )
        let pageList = filterList.slice(pageNum*onePageCount, pageNum*onePageCount+ +onePageCount)
        res.json({pageList,  count:filterList.length})
      });
    } catch (e) {
      res.status(500).json({ message: "Error, reload your page" });
      console.log(e);
    }
  }
);

module.exports = router;
