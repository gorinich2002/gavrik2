import { Typography, Image, Button, Carousel,List } from 'antd';
import { PhoneOutlined, MailOutlined, CarOutlined, HomeOutlined } from '@ant-design/icons'
import Slider from './Slider';

const { Title } = Typography;

function Main(props) {
    return <div id="Main">
        {/* <Title level={1}>О нас</Title>
        <p>Компания «ИП Гавриленков Г.В.» занимается продажами строительных материалов высокого качества и на рынке находится с 2010 года. За годы существования компания сотрудничает только с проверенными и надежными поставщиками и партнерами. Мы предлагаем целый комплекс строительных материалов, благодаря которому позволяет вам выбрать материал для всего вашего строительного объекта и вы будете уверены, что в строительстве используются качественные материалы. Мы поможем сделать точные расчеты, что позволит вам экономить средства при строительстве. В нашей работе нет мелочей, ведь учитывая незначительные, на первый взгляд, детали, нам удается построить дом, идеальный во всем!</p> */}
             <div className='doubledBlock'>
            <div className='logoBlock'>
                <div className='logo'>
                    <HomeOutlined style={{ color: 'white', fontSize: 80 }} />
                </div>
            </div>

            <p >
            Компания «ИП Гавриленков Г.В.» занимается продажами строительных материалов высокого качества и на рынке находится с 2010 года. За годы существования компания сотрудничает только с проверенными и надежными поставщиками и партнерами. Мы предлагаем целый комплекс строительных материалов, благодаря которому позволяет вам выбрать материал для всего вашего строительного объекта и вы будете уверены, что в строительстве используются качественные материалы. Мы поможем сделать точные расчеты, что позволит вам экономить средства при строительстве. В нашей работе нет мелочей, ведь учитывая незначительные, на первый взгляд, детали, нам удается построить дом, идеальный во всем!
            </p>
        </div>
        <Title level={2}>Новинки</Title>
        <Slider />
        <Title level={2}>Стройматериалы в Белгороде</Title>

        <p>Выбирая стройматериалы, важно найти качественные товары, отличающиеся надежностью, прочностью, долговечностью. В нашем магазине стройматериалов в Белгороде вы можете найти более 20 000 товаров. За годы существования компания сотрудничает только с проверенными и надежными поставщиками и партнерами. Мы предлагаем целый комплекс строительных материалов, благодаря которому позволяет вам выбрать материал для всего вашего строительного объекта и вы будете уверены, что в строительстве используются качественные материалы. Мы поможем сделать точные расчеты, что позволит вам экономить средства при строительстве. В нашей работе нет мелочей, ведь учитывая незначительные, на первый взгляд, детали, нам удается построить дом, идеальный во всем!</p>

        <div className='picBlock'>
            <Image width='33%' src="https://burobiz-a.akamaihd.net/uploads/images/51652/large_img-1195-m.jpg" />
            <Image width='33%' src="https://cdnn1.img.sputnik.az/img/40473/86/404738699_0:0:1300:866_1440x900_80_0_1_be0ba6a3035456f937823f4fbee60d3e.jpg.webp?source-sid=rian_photo" />
            <Image width='33%' src="https://www.bustroy.ru/images/trade_in_construction_materials_bustroy.jpg" />

            <Image width='33%' src="https://inbusiness.kz/uploads/55/images/GIOSA71q.jpg" />

            <Image width='33%' src="https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/294/989/0.jpg" />
            <Image width='33%' src="https://cdnn21.img.ria.ru/images/07e4/07/10/1574433299_0:176:3013:1871_1920x0_80_0_0_cc7eba30c242d92ce9111d821a3729bd.jpg" />

        </div>



   

        <Title level={2}>В ассортименте можно найти:</Title>
        <List style={{marginRight:'10%',marginLeft:'10%'}}>
            <List.Item>
            Гипсокартон и комплектующие для установки листов
            </List.Item>
            <List.Item>
            Строительные блоки и кирпичи
            </List.Item>
            <List.Item>
            Продукцию металлопроката
            </List.Item>
            <List.Item>
            Пластиковую арматуру
            </List.Item>
            <List.Item>
            Листовые изделия (ДСП, МДФ, фанера)
            </List.Item>
            <List.Item>
            Пиломатериалы
            </List.Item>
            <List.Item>
            Цемент, штукатурку и другие сыпучие смеси
            </List.Item>
            <List.Item>
            Теплоизоляцию
            </List.Item>
            <List.Item>
            Гидроизоляцию
            </List.Item>
            <List.Item>
            Цемент, штукатурку и другие сыпучие смеси
            </List.Item>
            <List.Item>
            Строительную химию
            </List.Item>
            
        </List>
       
        <Title level={2}>Схема проезда</Title>

        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40520.15302614466!2d36.54433646588814!3d50.59906830091176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41266ae4774af22b%3A0x8be8e5556da2fa1a!2z0JHQmNCaLCDQkdC10LvQs9C-0YDQvtC00YHQutC40Lkg0LjQvdC00YPRgdGC0YDQuNCw0LvRjNC90YvQuSDQutC-0LvQu9C10LTQtiDQuNC80LXQvdC4INCS0LDQtNC40LzQsCDQkdGD0YDRhtC10LLQsA!5e0!3m2!1sru!2sru!4v1654588320677!5m2!1sru!2sru" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
    </div>
}
export default Main;