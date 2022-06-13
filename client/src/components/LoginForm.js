import { message, Card, Input, Form, Button, Row, Col } from "antd";
import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginForm() {
    const [formData, setFormData] = useState({});
    function inputChangeHandler({target:{name, value}}){
        setFormData(prev=>{return {...prev, [name]:value}})
    }
    function submitHandler(){
        axios.post('/api/login', formData).then(res=>{
            if(res.data.msgType == 'err'){
                message.error(res.data.msg)
            }else if(res.data.msgType == 'success'){
                message.success(res.data.msg)
                window.location.pathname = '/main'
            }else{
                message.in(res.data.msg)
            }
        })
    }
    return (
        <Card className='OrderForm'>
            <form>
            <h2>Войти</h2>
                <Form.Item
                    label="Логин"
                    name="name"
                    rules={[{ required: true, message: 'Введите логин' }]}
                >
                    <Input onChange={inputChangeHandler} value={formData['name']} name='login' type="text" />
                </Form.Item>
                <Form.Item
                    label="Пароль"
                    name="password"
                    rules={[{ required: true, message: 'Введите пароль' }]}
                >
                    <Input onChange={inputChangeHandler} value={formData['address']} name='password' type="text" />
                </Form.Item>

                <div className='btnWrapper'>
                    <Button className='' type='primary' size='large' onClick={submitHandler}>Войти</Button>
                </div>
                <div className='btnWrapper'>
                    <Link to="./signup">Зарегестрироваться</Link>
                </div>
            </form>
        </Card>
    )
}