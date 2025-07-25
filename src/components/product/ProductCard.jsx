@@ .. @@
 import React from 'react';
 import { Link } from 'react-router-dom';
 import { Card } from '../common/Card';
 import { Button } from '../common/Button';
-import { FiShoppingBag } from 'react-icons/fi';
+import { FiShoppingBag, FiStar, FiMapPin } from 'react-icons/fi';
+import { motion } from 'framer-motion';

-export const ProductCard = ({ product }) => {
+export const ProductCard = ({ product, viewMode = 'grid' }) => {
   // Dummy "Add to Cart" function
   const handleAddToCart = (e) => {
     e.preventDefault(); // Prevent link navigation
     console.log(`Added ${product.name} to cart.`);
     // Here you would call your CartContext's addToCart function
   };

+  if (viewMode === 'list') {
+    return (
+      <Link to={`/products/${product._id}`}>
+        <motion.div
+          whileHover={{ scale: 1.02, y: -5 }}
+          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
+        >
+          <Card className="group overflow-hidden">
+            <div className="flex items-center p-6 gap-6">
+              <div className="flex-shrink-0 w-32 h-32 overflow-hidden rounded-2xl">
+                <img
+                  src={product.imageUrl || 'https://via.placeholder.com/400'}
+                  alt={product.name}
+                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
+                />
+              </div>
+              <div className="flex-grow">
+                <div className="flex items-center gap-2 mb-2">
+                  <span className="text-xs font-semibold text-cyan-600 uppercase tracking-wider bg-cyan-100 px-2 py-1 rounded-full">
+                    {product.category}
+                  </span>
+                  <div className="flex items-center text-yellow-400">
+                    <FiStar className="fill-current" size={14} />
+                    <span className="text-xs text-slate-600 ml-1">4.8</span>
+                  </div>
+                </div>
+                <h3 className="text-xl font-bold text-slate-800 mb-2 group-hover:text-cyan-700 transition-colors">
+                  {product.name}
+                </h3>
+                <div className="flex items-center text-slate-500 mb-3">
+                  <FiMapPin size={14} className="mr-1" />
+                  <span className="text-sm">{product.shopId?.name || 'Local Store'}</span>
+                </div>
+                <p className="text-slate-600 text-sm line-clamp-2 mb-4">
+                  {product.description || 'Fresh and high-quality product from your local store.'}
+                </p>
+              </div>
+              <div className="flex-shrink-0 text-right">
+                <p className="text-2xl font-black text-cyan-600 mb-4">${product.price.toFixed(2)}</p>
+                <Button size="md" onClick={handleAddToCart} icon={FiShoppingBag} className="shadow-lg hover:shadow-xl transition-all duration-300">
+                  Add to Cart
+                </Button>
+              </div>
+            </div>
+          </Card>
+        </motion.div>
+      </Link>
+    );
+  }

   return (
     <Link to={`/products/${product._id}`}>
-      <Card className="group">
-        <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden">
-          <img
-            src={product.imageUrl || 'https://via.placeholder.com/400'}
-            alt={product.name}
-            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
-          />
-        </div>
-        <div className="p-4">
-          <p className="text-xs text-slate-500 uppercase tracking-wider">{product.category}</p>
-          <h3 className="mt-1 text-lg font-semibold text-slate-800 truncate">{product.name}</h3>
-          <div className="flex justify-between items-center mt-4">
-            <p className="text-xl font-bold text-cyan-600">${product.price.toFixed(2)}</p>
-            <Button size="sm" onClick={handleAddToCart} icon={FiShoppingBag}>
-              Add
-            </Button>
+      <motion.div
+        whileHover={{ y: -10, scale: 1.03 }}
+        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
+      >
+        <Card className="group overflow-hidden relative">
+          {/* Product Badge */}
+          <div className="absolute top-4 left-4 z-10">
+            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
+              Fresh
+            </span>
+          </div>
+          
+          {/* Heart Icon */}
+          <div className="absolute top-4 right-4 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
+            <button className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg hover:bg-white transition-colors">
+              <FiStar size={16} className="text-slate-600" />
+            </button>
+          </div>
+
+          <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
+            <img
+              src={product.imageUrl || 'https://via.placeholder.com/400'}
+              alt={product.name}
+              className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
+            />
+            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
+          </div>
+          
+          <div className="p-6">
+            <div className="flex items-center justify-between mb-3">
+              <span className="text-xs font-semibold text-cyan-600 uppercase tracking-wider bg-cyan-100 px-2 py-1 rounded-full">
+                {product.category}
+              </span>
+              <div className="flex items-center text-yellow-400">
+                <FiStar className="fill-current" size={14} />
+                <span className="text-xs text-slate-600 ml-1">4.8</span>
+              </div>
+            </div>
+            
+            <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-cyan-700 transition-colors line-clamp-2">
+              {product.name}
+            </h3>
+            
+            <div className="flex items-center text-slate-500 mb-4">
+              <FiMapPin size={14} className="mr-1" />
+              <span className="text-sm truncate">{product.shopId?.name || 'Local Store'}</span>
+            </div>
+            
+            <div className="flex justify-between items-center">
+              <div>
+                <p className="text-2xl font-black text-cyan-600">${product.price.toFixed(2)}</p>
+                <p className="text-xs text-slate-500">Free delivery</p>
+              </div>
+              <Button 
+                size="sm" 
+                onClick={handleAddToCart} 
+                icon={FiShoppingBag}
+                className="shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
+              >
+                Add
+              </Button>
+            </div>
           </div>
-        </div>
-      </Card>
+        </Card>
+      </motion.div>
     </Link>
   );
 };