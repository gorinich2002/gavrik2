import { Button } from 'antd';
import { deleteProduct } from '../cartHandlers/deleteProduct'
import { useState } from 'react';
import { Link } from "react-router-dom";
import './Cart.css';

function Cart() {
    //const [totalPrice,setTotalPrice] = useState(0);
    const [stateToggle, setState] = useState(true);
    try {
        let totalPrice = 0;
        function delElFromProductlist(elNum) {
            deleteProduct(elNum)
            checkProductList()
        }
        let [productList, setProductList] = useState(JSON.parse(localStorage.cart).map(e => {
            totalPrice += +e.price * +e.count
            return <CartRow product={e} delFunc={delElFromProductlist} />
        }))
        function checkProductList() {
            setProductList(JSON.parse(localStorage.cart).map(e => {
                totalPrice += +e.price * +e.count
                return <CartRow product={e} delFunc={delElFromProductlist} />
            }))
        }




        //const cartList = JSON.parse(localStorage.cart);



        if (productList.length > 0) {
            return (
                <>
                    <table width="90%">
                        {productList}
                        <tr>
                            <td></td>
                            <td></td>
                            <td></td>
                            <td>Итого:</td>
                            <td><h3>{totalPrice} ₽</h3></td>
                        </tr>
                    </table>
                    <div className='btnWrapper'>
                        <Button className='tacBtn' type='primary' size='large'><Link to="/order" >Оформить заказ</Link></Button>
                    </div>
                </>
            )
        } else {
            return (
                <h2>Корзина пуста</h2>
            )
        }
    } catch (e) {
        return (
            <h2>Корзина пуста</h2>
        )
    }
}
function CartRow(props) {
    //const [visible, setVisible] = useState(true);
    function deleteBtnHandler() {
        props.delFunc(props.product)
        //setVisible(false)
    }

    //if(visible){
    return (
        <tr>
            <td><img width='50' height='50' src={props.product.imgSrc} /></td>
            <td><span>{props.product.productName}</span></td>
            <td><span>{props.product.price} ₽</span></td>
            <td><span>{props.product.count} шт.</span></td>
            <td><Button onClick={deleteBtnHandler} type='danger'>Удалить</Button></td>

        </tr>
    )
    // }else{
    //     return(
    //         <>
    //     </>
    //     )
    // }
}
export default Cart;