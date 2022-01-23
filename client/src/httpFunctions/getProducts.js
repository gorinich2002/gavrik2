const axios = require('axios');

async function getProducts(pageNum=0, pageLength= 15){
    let productList = await axios.get('/api/products?pagenum='+pageNum +'&pagelength='+pageLength).catch(function (error) {
        // handle error
        console.log(error);
      })
    return productList;
    
}
export default getProducts;