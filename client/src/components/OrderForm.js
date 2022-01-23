import {useRef} from 'react';
import Button from './Button.js';
import './OrderForm.css'

const axios = require('axios')

function OrderForm(){
    let formRef = useRef(null);
    function sendForm(){
        let form = formRef.current;
        let elementsForm = form.elements;

        let formData = {};
        for(let i = 0; i < elementsForm.length;i++){
            let targetEl = elementsForm[i];
           
            formData[targetEl.name] = targetEl.value
        }

        formData.cart = JSON.parse(localStorage.cart);
      
        axios.post('/api/order',formData).then(res=>{
            if(res.status == 400){
                alert('Ошибка при заполнении формы')
            }
            let msg = res.data.messege
          alert(msg)
          if(res.status == 200){
              localStorage.cart = [];
          }
        })
      
    }
    
    return(
        <form method="POST" className="OrderForm" ref={formRef}>
            <input name='name' type="text"  placeholder='Имя'/>
            <input name='surname' type="text"  placeholder='Фамилия'/>
            <input name='phone' type="number"  placeholder='Номер телефона'/>
            <input name='email' type="text"  placeholder='Почта'/>
            <input name='address' type="text"  placeholder='Адресс'/>
            <Button btnHandler={sendForm} text="Отправить"/>
           
        </form>
        
    )
}
export default OrderForm;