import ProductCard from './ProductCard';
import './ProductList.css'

function ProductList(props){
    let prodArray = props.prodArray;

    
    return(
        <>
        <div className = 'ProductList'>
           {prodArray.map(product=>{
               return <ProductCard key={product.productName} product={product} />
               })}
        </div>
        </>
    )

}
export default ProductList;