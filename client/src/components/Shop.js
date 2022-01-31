import getProducts from '../httpFunctions/getProducts'
import ProductList from './ProductList'
import React, { useContext, useEffect, useMemo, useRef,useState     
} from "react";

import './Shop.css'
import { Pagination } from 'antd';



function Shop(props){
    let [paginationNum,setPaginationNum] = useState(0);
    let [productList,setProductList] = useState([]);
    let [isLoaded, setLoaded] = useState(false);
    let [paginationCount,setPaginationCount] = useState(0);
    
    let [paginationArray,setPaginationArray] = useState([]);

    function paginationIncrementHandler(){
        if(paginationNum +1 >=paginationCount) return
        setPaginationNum(prev=>{setPaginationNum(paginationNum +1)})
    }
    function paginationDecrementHandler(){
        if(paginationNum <=0) return
        setPaginationNum(prev=>{setPaginationNum(paginationNum -1)})
    }




    function paginationHandler(e){
        setPaginationNum(+e.target.innerText-1)
        setProductList([])
        setLoaded(false)
    }

    useEffect(()=>{
        let paginationArray = [];
        
        for (let i = 0; i < paginationCount; i++) {
            paginationArray.push(i+1)
        }
        setPaginationArray(paginationArray)
    },[paginationCount])

    useEffect(()=>{
        getProducts(paginationNum).then(prodList=>{
            setProductList(prodList.data.pageList);
            let pagCount =  Math.ceil( prodList.data.count)
            setPaginationCount(pagCount);
            setLoaded(true);

        })
    },[paginationNum])
   
    if(isLoaded){
    return(
        <>
            <ProductList prodArray={productList} />
           
            <Pagination className='prodcuctPagination' current={paginationNum+1} total={paginationCount -1} pageSize={15} onChange={(page=>{setPaginationNum(page-1)})} />
            
            
        </>
    )
    }else{
        return 'Загрузка'
    }
}
export default Shop;