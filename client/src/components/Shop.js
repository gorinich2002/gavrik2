import getProducts from '../httpFunctions/getProducts'
import ProductList from './ProductList'
import React, {
    useContext, useEffect, useMemo, useRef, useState
} from "react";

import './Shop.css'
import { Pagination, Input, Button } from 'antd';
import {SearchOutlined} from '@ant-design/icons';


function Shop(props) {
    let [paginationNum, setPaginationNum] = useState(0);
    let [searchValue, setSearchValue] = useState('');
    let [priceValue, setPriceValue] = useState({top:Infinity, bottom: 0});
    let [productList, setProductList] = useState([]);
    let [isLoaded, setLoaded] = useState(false);
    let [paginationCount, setPaginationCount] = useState(0);

    let [paginationArray, setPaginationArray] = useState([]);


    useEffect(() => {
        let paginationArray = [];

        for (let i = 0; i < paginationCount; i++) {
            paginationArray.push(i + 1)
        }
        setPaginationArray(paginationArray)
    }, [paginationCount])

    const getList = ()=>{
        getProducts(paginationNum, 15, { searchValue: searchValue, top:priceValue.top, bottom: priceValue.bottom}).then(prodList => {
            setProductList(prodList.data.pageList);
            let pagCount = Math.ceil(prodList.data.count)
            setPaginationCount(pagCount);
            setLoaded(true);

        })
    }

    useEffect(() => {
        getList()
    }, [paginationNum])

    if (isLoaded) {
        return (
            <>
                <div style={{display:'flex', width:600, marginLeft:'auto', marginRight:'auto'}}>
                    <Input placeholder='Поиск' value={searchValue} onChange={e=>setSearchValue(e.target.value)}/>
                    <Input placeholder='От' type='number' value={priceValue.bottom || null} 
                    onChange={e => setPriceValue(prev=>{return {...prev, bottom: e.target.value}})}/>
                    <Input  placeholder='До' type='number'  value={priceValue.top || null} 
                    onChange={e => setPriceValue(prev=>{return {...prev, top: e.target.value}})}/>
                    <Button  type="primary" onClick={getList}><SearchOutlined /></Button>
                </div>
                <ProductList prodArray={productList} />

                <Pagination className='prodcuctPagination' current={paginationNum + 1} total={paginationCount - 1} pageSize={15} onChange={(page => { setPaginationNum(page - 1) })} />


            </>
        )
    } else {
        return 'Загрузка'
    }
}
export default Shop;