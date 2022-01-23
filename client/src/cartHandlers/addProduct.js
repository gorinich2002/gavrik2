//local storage 
function addProduct(productPos){
    let cart = localStorage.getItem('cart')
    
    if(!cart ){
        cart = [];
    }else{
        cart = JSON.parse(cart)
    }
    
    cart.push({...productPos, price: +productPos.price})
   

    
    localStorage.setItem('cart', JSON.stringify(cart))
}



module.exports = {addProduct};