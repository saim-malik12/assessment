import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectCategories } from '../store/CartSlice';
import { add } from '../store/CartSlice';
const Categories = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.cart.selectCategories);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://fakestoreapi.com/products');
        const data = await res.json();
        setProducts(data);
        setLoading(false); 
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false); 
      }
    };

    fetchProducts();
  }, []);

  const handleCatClick = (category) => {
    dispatch(selectCategories(category));
  };

  const filteredProducts =
    selectedCategory === 'All'
      ? products 
      : products.filter((product) => product.category.toLowerCase() === selectedCategory.toLowerCase());

  if (loading) {
    return <p>Loading...</p>;
  }
  const handleAdd=(product)=>{
    dispatch(add(product))
 }
  return (
    <>
      <div
        className="buton"
        style={{ display: 'flex', justifyContent: 'center', margin: '30px' }}
      >
       <button
          type="button"
          onClick={() => handleCatClick('All')}
          className={`btn btn-primary ${selectedCategory === 'All' ? 'active' : ''}`}
          style={{ margin: '0 15px' }}
         
        >
          All
        </button>
        <button
          type="button"
          onClick={() => handleCatClick(`men's clothing`)}
          className={`btn btn-primary ${
            selectedCategory === `men's clothing` ? 'active' : ''
          }`}
          style={{ margin: '0 15px' }}
        >
            
          Men Outfits
        </button>
        <button
          type="button"
          onClick={() => handleCatClick('jewelery')}
          className={`btn btn-primary ${selectedCategory === 'jewelery' ? 'active' : ''}`}
          style={{ margin: '0 15px' }}
        >
          Rings
        </button>
        <button
          type="button"
          onClick={() => handleCatClick(`women's clothing`)}
          className={`btn btn-primary ${
            selectedCategory === 'women clothing' ? 'active' : ''
          }`}
          style={{ margin: '0 15px' }}
        >
          Women Outfits
        </button>
        <button
          type="button"
          onClick={() => handleCatClick('electronics')}
          className={`btn btn-primary ${
            selectedCategory === 'electronics' ? 'active' : ''
          }`}
          style={{ margin: '0 15px' }}
        >
          Electronics
        </button>
        <button
          type="button"
          onClick={() => handleCatClick('women bags')}
          className={`btn btn-primary ${selectedCategory === 'women bags' ? 'active' : ''}`}
          style={{ margin: '0 15px' }}
        >
          Ladies Bags
        </button>
      </div>
      <div className="productsWrapper">
  {filteredProducts.map((product) => (
    <div className="productCard" key={product.id}>
      <img className="productImage" src={product.image} alt={product.title} />
      <h3 className="productTitle">{product.title}</h3>
      <p className="productPrice">{product.price}</p>
      <button onClick={() => handleAdd(product)} className="addToCartButton">Add to Cart</button>
    </div>
  ))}
</div>

    </>
  );
};

export default Categories;
