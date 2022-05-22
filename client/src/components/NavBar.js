
import { Link } from "react-router-dom";
import { Tabs, Button } from 'antd';
import './NavBar.css'


function NavBar(props) {
    return (
        <>
            <Button type='text'><Link to="/main">Главная</Link></Button>
            <Button type='text'><Link to="/shop">Каталог</Link></Button>
            <Button type='text'><Link to="/cart">Корзина</Link></Button>
            <Button type='text'><a href='./api/logout'>Выйти</a></Button>

        </>

        // <nav className='nagationList'>

        // <Link to="/main">Главная</Link>
        // <Link to="/shop">Каталог</Link>
        // <Link to="/cart">Корзина</Link>



        // </nav>

    )
}


export default NavBar