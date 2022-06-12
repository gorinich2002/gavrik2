import { Typography, Image, Button, Carousel, Col, Row  } from 'antd';
import { Link } from "react-router-dom";
import { PhoneOutlined, MailOutlined, CarOutlined,ShoppingCartOutlined,
    ExportOutlined,
    HomeOutlined,
    ReadOutlined,
    ImportOutlined } from '@ant-design/icons'

import './Footer.css'
function Footer(props) {
    return (
        <footer>
            <div className='col'>
                <Button  type="text"><Link to="/main">Главная</Link></Button>
                <Button  type="text"><Link to="/shop">Каталог</Link></Button>
                <Button  type="text"><Link to="/cart"> Корзина</Link></Button>
                <Button  type="text"><Link to="/signin">Вход</Link></Button>

            </div>
            <div className='col'>
                <Button size='large' type="text"><a href='tel:+7 (980) 371-51-32'><PhoneOutlined />+7 (980) 371-51-32 </a></Button>
                <Button size='large' type="text"><a href='tel:+7 (472) 240-88-87'><PhoneOutlined />+7 (472) 240-88-87 </a></Button>
                <Button size='large' type="text"><a href='mailto:glekstroi31@mail.ru'><MailOutlined /> glekstroi31@mail.ru</a></Button>
                <Button size='large' type="text"><a href='https://goo.gl/maps/wciYWMbzHvc5uddx7'><CarOutlined /> Богдана Хмельницкого просп., 80</a></Button>
            </div>
            <div className='col'>
                <span>Понедельник: с 8.00 до 18.00 </span>
                <span>Вторник: с 8.00 до 18.00 </span>
                <span>Среда: с 8.00 до 18.00 </span>
                <span>Четверг: с 8.00 до 18.00 </span>
                <span>Пятница: с 8.00 до 18.00 </span>
                <span>Суббота: с 8.30 до 15.00 </span>
                <span>Воскресенье: выходной</span>
            </div>
        </footer>
    )
}
export default Footer;