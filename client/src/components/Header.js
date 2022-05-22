import { PageHeader } from 'antd';
import './Header.css'
import {useEffect} from 'react';

const Header = (props) =>{

    return(
        <PageHeader>
            {props.children}
        </PageHeader >
    )
}


export default Header;

