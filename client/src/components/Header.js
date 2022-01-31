import { PageHeader } from 'antd';
import './Header.css'

const Header = (props) =>{
   
    return(
        <PageHeader>
            {props.children}
        </PageHeader >
    )
}


export default Header;

