import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../common/Card';
import { Button } from '../common/Button';
import { FiShoppingBag } from 'react-icons/fi';

export const ProductCard = ({ product }) => {
  // Dummy "Add to Cart" function
  const handleAddToCart = (e) => {
    e.preventDefault(); // Prevent link navigation
    console.log(`Added ${product.name} to cart.`);
    // Here you would call your CartContext's addToCart function
  };

  return (
    <Link to={`/products/${product._id}`}>
      <Card className="group">
        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
          <img
            src={product.imageUrl || 'https://via.placeholder.com/400'}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
          />
        </div>
        <div className="p-4">
          <p className="text-xs text-slate-500 uppercase tracking-wider">{product.category}</p>
          <h3 className="mt-1 text-lg font-semibold text-slate-800 truncate">{product.name}</h3>
          <div className="flex justify-between items-center mt-4">
            <p className="text-xl font-bold text-cyan-600">${product.price.toFixed(2)}</p>
            <Button size="sm" onClick={handleAddToCart} icon={FiShoppingBag}>
              Add
            </Button>
          </div>
        </div>
      </Card>
    </Link>
  );
};