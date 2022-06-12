import React, { useEffect, useState } from "react";
import getProducts from "../httpFunctions/getProducts";
import ProductCard from "./ProductCard";

export default function Slider() {
    let [prodcuctList, setProdcuctList] = useState([]);
    let [productCount, setProductCount] = useState(0);
    let [slide, setSlide] = useState(0);
    useEffect(() => {

        getProducts(1, 15).then(prodList => {
            setProdcuctList(prodList.data.pageList);
            setProductCount(prodList.data.pageList.length)
        })
    }, [])

    useEffect(()=>{
        let intervalID = setInterval(()=>{
            console.log(slide, prodcuctList.length - 3)
            setSlide(prev=>{
                if(prev >= 14 -3){
                    return 0
                }else{
                 return prev + 1
                }
            })
            
        },2000)
        return ()=>clearInterval(intervalID )
    },[])

    return (
        <div className="slider">
            <div className="sliderTape"  style={{ width: productCount * 322, transform: `translateX(-${slide*322}px)` }}>
                {prodcuctList.map(e => {
                    return <ProductCard product={e} isCart={true} />
                }
                )}
            </div>
        </div>
    )
}