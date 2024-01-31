import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { add } from '../store/CartSlice';

const Products = () => {
    const dispatch=useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchProducts();
  }, []);
const handleAdd=(product)=>{
   dispatch(add(product));
   
}
  return (
    <div className='productsWrapper'>
      {/* Check if products array is not empty before rendering */}
      {products.length > 0 ? (
        products.map((product) => (
          <div className="productCard" key={product.id}>
            <img className='productImage' src={product.image} alt="" />
            <h4 className='productTitle'>{product.title}</h4>
            
            <p className='productPrice'>{product.price}</p>
            <button onClick={()=>handleAdd(product)} className="btn">Add to Cart</button>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Products;
