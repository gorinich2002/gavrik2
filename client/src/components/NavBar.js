
import { Link } from "react-router-dom";
import { Button, message } from 'antd';
import './NavBar.css'
import axios from 'axios'
import {
    ShoppingCartOutlined,
    ExportOutlined,
    HomeOutlined,
    ReadOutlined,
    ImportOutlined
  } from '@ant-design/icons';


function NavBar({auth, setAuth}) {

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
                <Button type='text'><Link to="/main"><HomeOutlined/>Главная</Link></Button>
                <Button type='text'><Link to="/shop"><ReadOutlined/>Каталог</Link></Button>
                <Button type='text'><Link to="/cart"> <ShoppingCartOutlined/> Корзина</Link></Button>
            </div>
            <b>{auth.isAuth ? auth.login : null}</b>
            <div>
                <Button type='text'><Link to="/signin"><ExportOutlined style={{marginRight:10}}/>Вход</Link></Button>
                <Button type='text' onClick={logoutHandler}><ImportOutlined/>Выйти</Button>
            </div>
        </div>

    )
}


export default NavBar