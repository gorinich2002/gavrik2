const axios = require('axios');

async function getProducts(pageNum=0, pageLength= 15, options = { searchValue: '', top: Infinity, bottom: 0}){
    let productList = await axios.get(`/api/products?pagenum=${pageNum}&pagelength=${pageLength}&top=${options.top}&bottom=${options.bottom}&search=${options.searchValue}`).catch(function (error) {
        // handle error
        console.log(error);
      })
    return productList;
    
}
export default getProducts;