//local storage 
function deleteProduct(productPos){
    let cart = localStorage.getItem('cart')
    let productIndex;

    if(!cart){
        cart = [];
    }else{
        cart = JSON.parse(cart)
    }
    
    try {
        cart.forEach((el,i) => {
        
            if(JSON.stringify(el)==JSON.stringify(productPos)){
                cart.splice(i,1);
                localStorage.setItem('cart', JSON.stringify(cart))
                productIndex = i;
                throw '123';    

            }
                  
        });
       
    } catch (error) {
        
        if(error!='123') throw error;
        return productIndex
    }

  
}



module.exports = {deleteProduct};