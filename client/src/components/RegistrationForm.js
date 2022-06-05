import { message, Card, Input, Form, Button, Row, Col } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function RegistrationForm() {
    const [formData, setFormData] = useState({});
    function inputChangeHandler({target:{name, value}}){
        setFormData(prev=>{return {...prev, [name]:value}})
    }
    function submitHandler(){
        axios.post('/api/registration', formData).then(res=>{
            if(res.data.msgType == 'err'){
                message.error(res.data.msg)
            }else if(res.data.msgType == 'success'){
                message.success(res.data.msg)
                window.location.pathname = '/signin'
            }else{
                message.info(res.data.msg)
            }
        
        })
    }
    return (
        <Card className='OrderForm'>
            <form>
            <h2>Зарегистрироваться</h2>
                <Form.Item
                    label="Имя"
                    name="name"
                    rules={[{ required: true, message: 'Введите имя' }]}
                >
                    <Input onChange={inputChangeHandler} value={formData['name']} name='name' type="text" />
                </Form.Item>
                <Form.Item
                    label="Логин"
                    name="name"
                    rules={[{ required: true, message: 'Введите логин' }]}
                >
                    <Input onChange={inputChangeHandler} value={formData['name']} name='login' type="text" />
                </Form.Item>
                <Form.Item
                    label="Почта"
                    name="mail"
                    rules={[{ required: true, message: 'Введите почту' }]}
                >
                    <Input onChange={inputChangeHandler} value={formData['email']} name='mail' type="text" />
                </Form.Item>
                {/* <Form.Item
                    label="Телефон"
                    name="phone"
                    rules={[{ required: true, message: 'Введите телефон' }]}
                >
                    <Input onChange={inputChangeHandler} value={formData['phone']} name='phone' type="text" />
                </Form.Item> */}
                {/* <Form.Item
                    label="Адрес"
                    name="address"
                    rules={[{ required: true, message: 'Введите адрес' }]}
                >
                    <Input onChange={inputChangeHandler} value={formData['address']} name='address' type="text" />
                </Form.Item> */}
                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[{ required: true, message: 'Введите пароль' }]}
                >
                    <Input onChange={inputChangeHandler} value={formData['address']} name='password' type="text" />
                </Form.Item>
                <Form.Item
                    label="Повторите пароль"
                    name="password"
                    rules={[{ required: true, message: 'Повторите пароль' }]}
                >
                    <Input onChange={inputChangeHandler} value={formData['address']} name='password' type="text" />
                </Form.Item>

                <div className='btnWrapper'>
                    <Button className='' type='primary' size='large' onClick={submitHandler}>Зарегестрироваться</Button>
                </div>
                <div className='btnWrapper'>
                    <Link to="./signin">Войти</Link>
                </div>
            </form>
        </Card>
    )
}