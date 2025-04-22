import { useState } from 'react';
import ProductItem from '../ProductItem/ProductItem';
import useFetchProducts from '../../hooks/useFetchProducts';
import './ProductList.css';

const ProductList = () => {
  const { products, loading, error } = useFetchProducts();
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="product-list">
      <h2>Browse Our Products</h2>

      <input
        type="text"
        placeholder="Search for something..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />

      {loading && <p className="status-message">Loading products...</p>}
      {error && <p className="status-message error">Failed to load products.</p>}

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
