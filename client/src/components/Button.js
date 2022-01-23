import './Button.css'

function Button(props){
    let btnStyle = props.btnStyle||'';
     

        return(
            <div className={"PositiveBtn "+btnStyle} onClick={props.btnHandler}>
                {props.text}
            </div>
        )    
}
export default Button;