import './ProductCard.css'
import addProduct from '../cartHandlers/addProduct';
import { deleteProduct } from '../cartHandlers/deleteProduct';
import { isProductInCart } from '../cartHandlers/isProductInCart';
import { useEffect, useState } from 'react';
import { Counter } from './Counter';
import { Card, Input, Button } from 'antd';
import {Link} from 'react-router-dom'

function ProductCard(props) {
    let product = { ...props.product, price: +props.product.price };
    let isCart = !props.isCart
    let [inCart, setInCart] = useState(isProductInCart(product));
    let [countValue, setCountValue] = useState(1);
    function inputHandler(e) {
        let value = +e.target.value;
        if (value && value >= 0 && value <= 1000) {
            setCountValue(value)
        } else { setCountValue(0) }
    }
    function decrementHandler() {
        if (countValue > 1) {
            setCountValue(countValue - 1)
        }
    }
    function incrementHandler() {
        if (countValue >= 1) {
            setCountValue(countValue + 1)
        }
    }
    useEffect(() => { product.count = countValue }, [countValue])
    return (
        <Card className='productCard'>
            <img src={product.imgSrc} />
            <h3>{product.productName}</h3>
            <h2>{product.price} ₽</h2>
            {isCart ? <>
                <Counter disable={inCart} inputHandler={inputHandler} decrementHandler={decrementHandler} incrementHandler={incrementHandler} countValue={countValue} />
                {inCart ? <Button danger className='actionBtn' onClick={() => { deleteProduct(product); setInCart(false) }} >Удалить из корзины</Button>
                    : <Button className='actionBtn' type="primary" onClick={() => { if (addProduct(product)) { setInCart(true) } }}>В корзину</Button>}
            </>
                : 
                <Button className='actionBtn' type="primary"><Link  to='/shop'>Список товаров</Link></Button>
            }
        </Card>
    )
}
export default ProductCard;