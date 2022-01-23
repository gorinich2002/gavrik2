function isProductInCart(product){
    
    let cart = localStorage.getItem('cart')
   let prodStr = JSON.stringify({...product,  price: +product.price});
    let returnBool = false
    if(!cart){
        cart = [];
    }else{
        cart = JSON.parse(cart)
    }
    cart.forEach(el => {
        let copyEl = JSON.parse(JSON.stringify(el))
        
        if(copyEl.count){
            delete copyEl.count;
        }
        copyEl = JSON.stringify(copyEl)
        console.log(copyEl)
        console.log(prodStr)

        if(copyEl == prodStr){
            returnBool = true;
        }
    });
   
    return returnBool;
}
export {isProductInCart};