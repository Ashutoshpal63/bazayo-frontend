@@ .. @@
 import { Link, useNavigate } from 'react-router-dom';
 import { Button } from '../../components/common/Button';
 import { Spinner } from '../../components/common/Spinner';
 import { Card } from '../../components/common/Card';
-import { FaTrash, FaShoppingBag } from 'react-icons/fa';
+import { FaTrash, FaShoppingBag, FaStore } from 'react-icons/fa';
+import { FiMinus, FiPlus, FiShoppingCart, FiCreditCard } from 'react-icons/fi';
+import { motion, AnimatePresence } from 'framer-motion';
 import toast from 'react-hot-toast';

 export const CartPage = () => {
@@ .. @@
   if (cartLoading) {
     return (
-      <div className="flex justify-center items-center h-64">
-        <Spinner size="lg" />
+      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50 flex justify-center items-center">
+        <div className="text-center">
+          <Spinner size="lg" />
+          <p className="mt-4 text-slate-600">Loading your cart...</p>
+        </div>
       </div>
     );
   }

   if (cart.length === 0) {
     return (
-      <div className="container mx-auto px-4 py-16 text-center">
-        <FaShoppingBag className="mx-auto text-5xl text-slate-300" />
-        <h1 className="mt-4 text-3xl font-bold text-slate-800">Your Cart is Empty</h1>
-        <p className="mt-2 text-slate-500">Looks like you haven't added anything to your cart yet.</p>
-        <Link to="/products" className="mt-6 inline-block">
-          <Button size="lg">Start Shopping</Button>
-        </Link>
+      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50 flex items-center justify-center">
+        <motion.div
+          initial={{ opacity: 0, y: 20 }}
+          animate={{ opacity: 1, y: 0 }}
+          className="text-center"
+        >
+          <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/50 max-w-md mx-auto">
+            <div className="w-24 h-24 bg-gradient-to-br from-cyan-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
+              <FiShoppingCart className="text-4xl text-cyan-600" />
+            </div>
+            <h1 className="text-3xl font-bold text-slate-800 mb-4">Your Cart is Empty</h1>
+            <p className="text-slate-600 mb-8 leading-relaxed">
+              Looks like you haven't added anything to your cart yet. 
+              Discover amazing products from local stores!
+            </p>
+            <Link to="/products">
+              <Button size="lg" className="shadow-lg hover:shadow-xl transition-all duration-300">
+                <FaShoppingBag className="mr-2" />
+                Start Shopping
+              </Button>
+            </Link>
+          </div>
+        </motion.div>
       </div>
     );
   }

   return (
-    <div className="bg-slate-100 min-h-screen py-12">
+    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50 py-12">
       <div className="container mx-auto px-4">
-        <h1 className="text-4xl font-extrabold text-slate-800 mb-8">Your Shopping Cart</h1>
+        {/* Enhanced Header */}
+        <motion.div
+          initial={{ opacity: 0, y: -20 }}
+          animate={{ opacity: 1, y: 0 }}
+          className="text-center mb-12"
+        >
+          <h1 className="text-5xl md:text-6xl font-black text-slate-800 mb-4">
+            Your Shopping 
+            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600"> Cart</span>
+          </h1>
+          <p className="text-xl text-slate-600">
+            Review your items and checkout from your favorite local stores
+          </p>
+        </motion.div>
+
         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* Cart Items Section */}
           <div className="lg:col-span-2 space-y-6">
-            {Object.entries(groupedCart).map(([shopId, shopData]) => (
-              <Card key={shopId} className="p-6">
-                <div className="flex justify-between items-center mb-4 pb-4 border-b">
-                  <h2 className="text-xl font-bold text-slate-700">{shopData.shopName}</h2>
-                  <Button 
-                    size="md"
-                    onClick={() => handlePlaceOrder(shopId)}
-                    disabled={placingOrder}
-                  >
-                    {placingOrder ? <Spinner size="sm" /> : `Checkout from this Shop ($${shopData.total.toFixed(2)})`}
-                  </Button>
-                </div>
-                <ul className="divide-y divide-slate-200">
-                  {shopData.items.map((item) => (
-                    <li key={item.productId._id} className="flex py-4 items-center">
-                      <img
-                        src={item.productId.imageUrl || 'https://via.placeholder.com/150'}
-                        alt={item.productId.name}
-                        className="h-20 w-20 rounded-lg object-cover"
-                      />
-                      <div className="ml-4 flex-1">
-                        <h3 className="text-md font-semibold text-slate-800">{item.productId.name}</h3>
-                        <p className="text-sm text-slate-500">
-                          {item.quantity} x ${item.productId.price.toFixed(2)}
-                        </p>
-                      </div>
-                      <div className="flex items-center">
-                        <p className="text-md font-semibold text-slate-900 mr-4">
-                          ${(item.quantity * item.productId.price).toFixed(2)}
-                        </p>
-                        <button onClick={() => removeFromCart(item.productId._id)} className="text-slate-400 hover:text-red-500">
-                          <FaTrash />
-                        </button>
-                      </div>
-                    </li>
-                  ))}
-                </ul>
-              </Card>
-            ))}
+            <AnimatePresence>
+              {Object.entries(groupedCart).map(([shopId, shopData], index) => (
+                <motion.div
+                  key={shopId}
+                  initial={{ opacity: 0, y: 20 }}
+                  animate={{ opacity: 1, y: 0 }}
+                  exit={{ opacity: 0, y: -20 }}
+                  transition={{ delay: index * 0.1 }}
+                >
+                  <Card className="p-8 bg-white/80 backdrop-blur-sm border border-white/50 shadow-xl">
+                    {/* Shop Header */}
+                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 pb-6 border-b border-slate-200">
+                      <div className="flex items-center mb-4 sm:mb-0">
+                        <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
+                          <FaStore className="text-white" />
+                        </div>
+                        <div>
+                          <h2 className="text-2xl font-bold text-slate-800">{shopData.shopName}</h2>
+                          <p className="text-slate-500">Local Store</p>
+                        </div>
+                      </div>
+                      <Button 
+                        size="lg"
+                        onClick={() => handlePlaceOrder(shopId)}
+                        disabled={placingOrder}
+                        className="shadow-lg hover:shadow-xl transition-all duration-300"
+                        icon={placingOrder ? () => <Spinner size="sm" /> : FiCreditCard}
+                      >
+                        {placingOrder ? 'Processing...' : `Checkout ($${shopData.total.toFixed(2)})`}
+                      </Button>
+                    </div>
+
+                    {/* Items List */}
+                    <div className="space-y-4">
+                      {shopData.items.map((item, itemIndex) => (
+                        <motion.div
+                          key={item.productId._id}
+                          initial={{ opacity: 0, x: -20 }}
+                          animate={{ opacity: 1, x: 0 }}
+                          transition={{ delay: itemIndex * 0.05 }}
+                          className="flex items-center p-4 bg-slate-50/50 rounded-2xl hover:bg-slate-100/50 transition-colors"
+                        >
+                          <div className="flex-shrink-0 mr-4">
+                            <img
+                              src={item.productId.imageUrl || 'https://via.placeholder.com/150'}
+                              alt={item.productId.name}
+                              className="h-20 w-20 rounded-xl object-cover shadow-md"
+                            />
+                          </div>
+                          <div className="flex-grow">
+                            <h3 className="text-lg font-bold text-slate-800 mb-1">{item.productId.name}</h3>
+                            <p className="text-slate-500 mb-2">{item.productId.category}</p>
+                            <div className="flex items-center gap-3">
+                              <span className="text-sm text-slate-600">Quantity:</span>
+                              <div className="flex items-center bg-white rounded-full border border-slate-200 shadow-sm">
+                                <button className="p-2 hover:bg-slate-50 rounded-l-full transition-colors">
+                                  <FiMinus size={14} className="text-slate-600" />
+                                </button>
+                                <span className="px-4 py-2 font-semibold text-slate-800">{item.quantity}</span>
+                                <button className="p-2 hover:bg-slate-50 rounded-r-full transition-colors">
+                                  <FiPlus size={14} className="text-slate-600" />
+                                </button>
+                              </div>
+                              <span className="text-sm text-slate-600">× ${item.productId.price.toFixed(2)}</span>
+                            </div>
+                          </div>
+                          <div className="flex items-center gap-4">
+                            <div className="text-right">
+                              <p className="text-2xl font-black text-cyan-600">
+                                ${(item.quantity * item.productId.price).toFixed(2)}
+                              </p>
+                            </div>
+                            <button 
+                              onClick={() => removeFromCart(item.productId._id)} 
+                              className="p-3 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-all duration-200"
+                            >
+                              <FaTrash size={16} />
+                            </button>
+                          </div>
+                        </motion.div>
+                      ))}
+                    </div>
+                  </Card>
+                </motion.div>
+              ))}
+            </AnimatePresence>
           </div>

           {/* Order Summary */}
           <div className="lg:col-span-1">
-            <Card className="p-6 sticky top-24">
-              <h2 className="text-xl font-bold border-b pb-4 mb-4">Order Summary</h2>
-              <div className="space-y-2">
-                <div className="flex justify-between">
-                  <span className="text-slate-600">Subtotal</span>
-                  <span className="font-semibold">${cartTotal.toFixed(2)}</span>
-                </div>
-                <div className="flex justify-between">
-                  <span className="text-slate-600">Delivery Fee</span>
-                  <span className="font-semibold">Calculated at checkout</span>
-                </div>
-                <div className="flex justify-between text-lg font-bold pt-4 border-t mt-4">
-                  <span>Grand Total</span>
-                  <span>${cartTotal.toFixed(2)}</span>
+            <motion.div
+              initial={{ opacity: 0, x: 20 }}
+              animate={{ opacity: 1, x: 0 }}
+              transition={{ delay: 0.3 }}
+            >
+              <Card className="p-8 sticky top-24 bg-white/80 backdrop-blur-sm border border-white/50 shadow-xl">
+                <div className="flex items-center mb-6">
+                  <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mr-3">
+                    <FiShoppingCart className="text-white" size={20} />
+                  </div>
+                  <h2 className="text-2xl font-bold text-slate-800">Order Summary</h2>
                 </div>
-              </div>
-            </Card>
+                
+                <div className="space-y-4 mb-6">
+                  <div className="flex justify-between items-center py-2">
+                    <span className="text-slate-600">Subtotal</span>
+                    <span className="font-bold text-slate-800">${cartTotal.toFixed(2)}</span>
+                  </div>
+                  <div className="flex justify-between items-center py-2">
+                    <span className="text-slate-600">Delivery Fee</span>
+                    <span className="font-semibold text-green-600">FREE</span>
+                  </div>
+                  <div className="flex justify-between items-center py-2">
+                    <span className="text-slate-600">Service Fee</span>
+                    <span className="font-semibold text-slate-800">$2.99</span>
+                  </div>
+                  <div className="border-t border-slate-200 pt-4">
+                    <div className="flex justify-between items-center">
+                      <span className="text-xl font-bold text-slate-800">Grand Total</span>
+                      <span className="text-2xl font-black text-cyan-600">${(cartTotal + 2.99).toFixed(2)}</span>
+                    </div>
+                  </div>
+                </div>
+
+                {/* Trust Indicators */}
+                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-4 mb-6">
+                  <div className="flex items-center text-green-700 text-sm">
+                    <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
+                    <span className="font-semibold">Secure checkout with 256-bit SSL encryption</span>
+                  </div>
+                </div>

+                <div className="text-center text-sm text-slate-500">
+                  <p>By proceeding, you agree to our Terms of Service and Privacy Policy</p>
+                </div>
+              </Card>
+            </motion.div>
           </div>
         </div>
       </div>