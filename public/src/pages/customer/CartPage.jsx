import React, { useMemo, useState } from 'react';
import { useCart } from '../../contexts/CartContext';
import { createOrder } from '../../api/orderApi';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '../../components/common/Button';
import { Spinner } from '../../components/common/Spinner';
import { Card } from '../../components/common/Card';
import { FaTrash, FaShoppingBag } from 'react-icons/fa';
import toast from 'react-hot-toast';

export const CartPage = () => {
  const { cart, cartTotal, removeFromCart, loading: cartLoading } = useCart();
  const [placingOrder, setPlacingOrder] = useState(false);
  const navigate = useNavigate();

  // Group cart items by their shop ID
  const groupedCart = useMemo(() => {
    if (!cart) return {};
    return cart.reduce((acc, item) => {
      const shopId = item.productId.shopId._id;
      if (!acc[shopId]) {
        acc[shopId] = {
          shopName: item.productId.shopId.name,
          items: [],
          total: 0,
        };
      }
      acc[shopId].items.push(item);
      acc[shopId].total += item.quantity * item.productId.price;
      return acc;
    }, {});
  }, [cart]);

  const handlePlaceOrder = async (shopId) => {
    setPlacingOrder(true);
    try {
      const response = await createOrder(shopId);
      toast.success('Order placed successfully!');
      navigate(`/orders/${response.data.data._id}/track`);
    } catch (error) {
      toast.error(error.response?.data?.message || 'Failed to place order.');
    } finally {
      setPlacingOrder(false);
    }
  };

  if (cartLoading) {
    return (
      <div className="flex justify-center items-center h-64">
        <Spinner size="lg" />
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <FaShoppingBag className="mx-auto text-5xl text-slate-300" />
        <h1 className="mt-4 text-3xl font-bold text-slate-800">Your Cart is Empty</h1>
        <p className="mt-2 text-slate-500">Looks like you haven't added anything to your cart yet.</p>
        <Link to="/products" className="mt-6 inline-block">
          <Button size="lg">Start Shopping</Button>
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-slate-100 min-h-screen py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-slate-800 mb-8">Your Shopping Cart</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items Section */}
          <div className="lg:col-span-2 space-y-6">
            {Object.entries(groupedCart).map(([shopId, shopData]) => (
              <Card key={shopId} className="p-6">
                <div className="flex justify-between items-center mb-4 pb-4 border-b">
                  <h2 className="text-xl font-bold text-slate-700">{shopData.shopName}</h2>
                  <Button 
                    size="md"
                    onClick={() => handlePlaceOrder(shopId)}
                    disabled={placingOrder}
                  >
                    {placingOrder ? <Spinner size="sm" /> : `Checkout from this Shop ($${shopData.total.toFixed(2)})`}
                  </Button>
                </div>
                <ul className="divide-y divide-slate-200">
                  {shopData.items.map((item) => (
                    <li key={item.productId._id} className="flex py-4 items-center">
                      <img
                        src={item.productId.imageUrl || 'https://via.placeholder.com/150'}
                        alt={item.productId.name}
                        className="h-20 w-20 rounded-lg object-cover"
                      />
                      <div className="ml-4 flex-1">
                        <h3 className="text-md font-semibold text-slate-800">{item.productId.name}</h3>
                        <p className="text-sm text-slate-500">
                          {item.quantity} x ${item.productId.price.toFixed(2)}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <p className="text-md font-semibold text-slate-900 mr-4">
                          ${(item.quantity * item.productId.price).toFixed(2)}
                        </p>
                        <button onClick={() => removeFromCart(item.productId._id)} className="text-slate-400 hover:text-red-500">
                          <FaTrash />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <Card className="p-6 sticky top-24">
              <h2 className="text-xl font-bold border-b pb-4 mb-4">Order Summary</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-slate-600">Subtotal</span>
                  <span className="font-semibold">${cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-600">Delivery Fee</span>
                  <span className="font-semibold">Calculated at checkout</span>
                </div>
                <div className="flex justify-between text-lg font-bold pt-4 border-t mt-4">
                  <span>Grand Total</span>
                  <span>${cartTotal.toFixed(2)}</span>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};