import './Counter.css';
function Counter(props){
    

    return(
        <div className='Counter'>
            <div className='minusBtn'onClick={props.decrementHandler}>-</div>
            <input min='0' max="100" onChange={props.inputHandler} value={props.countValue} align='middle'/>
            <div className='plusBtn' onClick={props.incrementHandler}>+</div>

        </div>
    )
}
export {Counter};