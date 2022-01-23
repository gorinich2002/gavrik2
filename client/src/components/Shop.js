import getProducts from '../httpFunctions/getProducts'
import ProductList from './ProductList'
import React, { useContext, useEffect, useMemo, useRef,useState     
} from "react";

import './Shop.css'



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
            let pagCount =  Math.ceil( prodList.data.count/15)
            setPaginationCount(pagCount);
            setLoaded(true);

        })
    },[paginationNum])
   
    if(isLoaded){
    return(
        <>
            <h3 className='routeName'>Shop</h3>
            <ProductList prodArray={productList} />
           
            
                <ul className='prodcuctPagination'>
                    <li className="prodcuctPagination__punkt" onClick={paginationDecrementHandler}>{"<"}</li>
                    {paginationArray.map((e)=>{
                        
                        return <li className={e-1==paginationNum?"prodcuctPagination__punkt prodcuctPagination__punkt_active":"prodcuctPagination__punkt"} onClick={paginationHandler}>{e}</li>
                        })}
                    <li className="prodcuctPagination__punkt"  onClick={paginationIncrementHandler}>{">"}</li>

                </ul> 
            
        </>
    )
    }else{
        return 'Загрузка'
    }
}
export default Shop;