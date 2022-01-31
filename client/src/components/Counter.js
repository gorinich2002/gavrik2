import { Button, Input } from 'antd';
import './Counter.css';
function Counter(props){
    const disable = props.disable;

    return(
        <div className='Counter'>
            <Button disabled={disable} onClick={disable? ()=>{} : props.decrementHandler}>-</Button>
            <Input min='0' max="100" onChange={disable? ()=>{} : props.inputHandler} value={props.countValue} align='middle'/>
            <Button disabled={disable}  onClick={disable? ()=>{} : props.incrementHandler}>+</Button>

        </div>
    )
}
export {Counter};