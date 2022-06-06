
import { Link } from "react-router-dom";
import { Tabs, Button, message } from 'antd';
import './NavBar.css'
import { useEffect, useState } from 'react';
import checkAuth from '../httpFunctions/checkAuth'
import axios from 'axios'

function NavBar() {
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        checkAuth().then(setAuth)
    }, [])

    function logoutHandler() {
        axios.get('/api/logout').then(res => {
            if (res.data.msgType == 'err') {
                message.error(res.data.msg)
            } else if (res.data.msgType == 'success') {
                message.success(res.data.msg);
                setAuth(false)
            } else {
                message.info(res.data.msg)
            }

        })
    }
    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
                <Button type='text'><Link to="/main">Главная</Link></Button>
                <Button type='text'><Link to="/shop">Каталог</Link></Button>
                <Button type='text'><Link to="/cart">Корзина</Link></Button>
            </div>
            {auth.isAuth ? auth.login : null}
            <div>
                <Button type='text'><Link to="/signin">Вход</Link></Button>
                <Button type='text' onClick={logoutHandler}>Выйти</Button>
            </div>
        </div>

    )
}


export default NavBar