import { Typography, Image } from 'antd';

const { Title, Paragraph } = Typography;

function Main(props) {
    return <>
        <Title level={2}>О нас</Title>
        <Paragraph>Интернет-магазин — сайт, торгующий товарами в интернете. Позволяет пользователям сформировать заказ на покупку, выбрать способ оплаты и доставки заказа в сети Интернет. </Paragraph>
        <Paragraph>Выбрав необходимые товары или услуги, пользователь обычно имеет возможность тут же на сайте выбрать метод оплаты и доставки. Совокупность отобранных товаров, способ оплаты и доставки представляют собой законченный заказ, который оформляется на сайте путем сообщения минимально необходимой информации о покупателе. Информация о покупателе может храниться в базе данных магазина если бизнес-модель магазина рассчитана на повторные покупки, или же отправляться разово. Магазин ПродамКирпич уже много лет специализируется на продаже строительных материалов.</Paragraph>
        <div className='picBlock'>
            <Image width='33%' src="https://burobiz-a.akamaihd.net/uploads/images/51652/large_img-1195-m.jpg" />
            <Image width='33%' src="https://cdnn1.img.sputnik.az/img/40473/86/404738699_0:0:1300:866_1440x900_80_0_1_be0ba6a3035456f937823f4fbee60d3e.jpg.webp?source-sid=rian_photo" />
            <Image width='33%' src="https://www.bustroy.ru/images/trade_in_construction_materials_bustroy.jpg" />

            <Image width='33%' src="https://inbusiness.kz/uploads/55/images/GIOSA71q.jpg" />

            <Image width='33%' src="https://cdn-st1.rtr-vesti.ru/vh/pictures/xw/294/989/0.jpg" />
            <Image width='33%' src="https://cdnn21.img.ria.ru/images/07e4/07/10/1574433299_0:176:3013:1871_1920x0_80_0_0_cc7eba30c242d92ce9111d821a3729bd.jpg" />

        </div>

        <Paragraph> Компания имеет шведские корни и поддерживает имидж шведской компании во всех маркетинговых коммуникациях. Основана в 1943 году в Швеции.

            Основатель компании начал торговать, когда ему исполнилось 5 лет, когда купил спички оптом в Стокгольме и продал их в своей небольшой деревне в розницу; впоследствии разносил товары лично и посылал их по почте, тогда это были ручки, карандаши, кошельки, рамки. В 1948 году в ассортименте впервые появилась мебель, а уже в 1958 году открылся первый магазин ПродамКирпич в Швеции. Сеть магазинов стала разрастаться, в 1963 году ПродамКирпич вышла на международный рынок, начав с Норвегии.</Paragraph>

       
        <iframe className='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d40520.15302614466!2d36.54433646588814!3d50.59906830091176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x41266ae4774af22b%3A0x8be8e5556da2fa1a!2z0JHQmNCaLCDQkdC10LvQs9C-0YDQvtC00YHQutC40Lkg0LjQvdC00YPRgdGC0YDQuNCw0LvRjNC90YvQuSDQutC-0LvQu9C10LTQtiDQuNC80LXQvdC4INCS0LDQtNC40LzQsCDQkdGD0YDRhtC10LLQsA!5e0!3m2!1sru!2sru!4v1654588320677!5m2!1sru!2sru" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"/>
    
    </>
}
export default Main;