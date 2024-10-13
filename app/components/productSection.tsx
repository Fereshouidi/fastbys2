import { useEffect, useState } from 'react';
import '../ProductSection.css'
import {getAllProducts} from '../crud.mjs'
import { log } from 'console';






const ProductSection = () => {

    const [allProducts, setAllProducts] = useState([null])

    useEffect(() => {
    
      const getProducts = async() => {
        const data = await getAllProducts();
        
        setAllProducts(data)
        console.log(data);
        
      }
      getProducts()
      
    }, [])

    return (
        <div id="Product-Section-Component">
          <h2 className='section-props'>Latest Products</h2>
            {allProducts? allProducts.map((product) => {
                return product? <div className='product-card' key={product._id}>
                <div className='product-img'>
                <img src={product.images[0]} alt=""/>
                </div>
                <div className='product-info'>
                <h2 className='name'>{product.name}</h2>
                <div className='price-div'>
                  <span className='price'>{product.price}</span>
                  <span>TND</span>
                </div>
                </div>
            </div>
            :null
            }):null}
        </div>
    )
}
export default ProductSection;