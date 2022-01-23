import './ProductCard.css'
import Button from './Button'
import {addProduct} from '../cartHandlers/addProduct';
import {deleteProduct} from '../cartHandlers/deleteProduct';
import {isProductInCart} from '../cartHandlers/isProductInCart';
import { useEffect, useState } from 'react';
import {Counter} from './Counter';


function ProductCard(props){
    let product = props.product;
    
    let [inCart,setInCart] = useState(isProductInCart(product));
    let [countValue,setCountValue] = useState(1);

    function inputHandler(e){
        let value = +e.target.value;
        if(value&&value>=0&& value<=1000){
            setCountValue(value)
        }else{setCountValue(0)}
    }
    function decrementHandler(){
        if(countValue>1){
            setCountValue(countValue -1)
        }
    }
    function incrementHandler(){
        if(countValue>=1){
            setCountValue(countValue +1)
        }
    }
    useEffect(()=>{product.count=countValue},[countValue])
    // console.log(inCart)
    return(
        <div className='productCard'>
            <img src={product.imgSrc}/>
            <span>{product.productName}</span>
            <b>{product.price} ₽</b>
            
            {inCart?<Button btnHandler={()=>{deleteProduct(product);setInCart(false)}} text="Удалить из корзину"/>
            :<><Counter inputHandler={inputHandler} decrementHandler={decrementHandler} incrementHandler={incrementHandler} countValue={countValue}/>
            <Button btnHandler={()=>{addProduct(product);setInCart(true)}} text="В корзину"/></> }
            {/* <PositiveBtn btnHandler={()=>{deleteProduct(product)}} text="Удалить из корзину"/> */}
        </div>
    )
}
export default ProductCard;