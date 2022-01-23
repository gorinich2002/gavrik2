
import { Link } from "react-router-dom";
import './NavBar.css'


function NavBar(props){
    return(
        <nav className='nagationList'>
            
            <Link to="/main">Главная</Link>
            <Link to="/shop">Каталог</Link>
            <Link to="/cart">Корзина</Link>
          


        </nav>
    )
}


export default NavBar