//local storage 
function addProduct(productPos){
    if(productPos.count < 1){
        return false
    }
    let cart = localStorage.getItem('cart')
    
    if(!cart ){
        cart = [];
    }else{
        cart = JSON.parse(cart)
    }
    
    cart.push({...productPos, price: +productPos.price})
   

    
    localStorage.setItem('cart', JSON.stringify(cart))
    return true
}



module.exports = {addProduct};