import { Card, Input, Form, Button,Row, Col } from 'antd';
import { useRef } from 'react';
import './OrderForm.css'

const axios = require('axios')

function OrderForm() {
    let formRef = useRef(null);
    function sendForm() {
        let form = formRef.current;
        let elementsForm = form.elements;

        let formData = {};
        for (let i = 0; i < elementsForm.length; i++) {
            let targetEl = elementsForm[i];

            formData[targetEl.name] = targetEl.value
        }

        formData.cart = JSON.parse(localStorage.cart);

        axios.post('/api/order', formData).then(res => {
            if (res.status == 400) {
                alert('Ошибка при заполнении формы')
            }
            let msg = res.data.messege
            alert(msg)
            if (res.status == 200) {
                localStorage.cart = [];
            }
        })

    }

    return (
        <Card className='OrderForm'>
            <form method="POST" ref={formRef}>
                <Form.Item
                    label="Имя"
                    name="name"
                    rules={[{ required: true, message: 'Введите имя' }]}
                >
                    <Input name='name' type="text" />
                </Form.Item>
                <Form.Item
                    label="Фамилия"
                    name="surname"
                    rules={[{ required: true, message: 'Введите имя' }]}
                >
                    <Input name='surname' type="text" />
                </Form.Item>
                <Form.Item
                    label="Почта"
                    name="email"
                    rules={[{ required: true, message: 'Введите почту' }]}
                >
                    <Input name='email' type="text" />
                </Form.Item>
                <Form.Item
                    label="Телефон"
                    name="phone"
                    rules={[{ required: true, message: 'Введите телефон' }]}
                >
                    <Input name='phone' type="text" />
                </Form.Item>
                <Form.Item
                    label="Адрес"
                    name="address"
                    rules={[{ required: true, message: 'Введите адрес' }]}
                >
                    <Input name='address' type="text" />
                </Form.Item>
                {/* <Input name='surname' type="text" placeholder='Фамилия' />
                <Input name='phone' type="number" placeholder='Номер телефона' />
                <Input name='email' type="text" placeholder='Почта' />
    <Input name='address' type="text" placeholder='Адресс' /> */}
                <div className='btnWrapper'>
                    <Button className='' type='primary' size='large' onClick={sendForm}>Отправить</Button>
                </div>


            </form>
        </Card>

    )
}
export default OrderForm;