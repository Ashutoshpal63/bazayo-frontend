@@ .. @@
 import React, { useState, useEffect, useCallback } from 'react';
 import { useSearchParams } from 'react-router-dom';
 import { getProducts } from '../../api/productApi';
 import { ProductCard } from '../../components/product/ProductCard';
 import { Spinner } from '../../components/common/Spinner';
 import { Button } from '../../components/common/Button';
 import { Input } from '../../components/common/Input';
 import { useForm } from 'react-hook-form';
+import { motion } from 'framer-motion';
+import { FiFilter, FiGrid, FiList, FiSearch } from 'react-icons/fi';

 export const ProductsPage = () => {
   const [products, setProducts] = useState([]);
   const [pagination, setPagination] = useState({});
   const [loading, setLoading] = useState(true);
+  const [viewMode, setViewMode] = useState('grid');
   const [searchParams, setSearchParams] = useSearchParams();
   const { register, handleSubmit, reset } = useForm();

@@ .. @@
   const handlePageChange = (newPage) => {
       const currentParams = Object.fromEntries(searchParams.entries());
       setSearchParams({ ...currentParams, page: newPage });
   };

+  const containerVariants = {
+    hidden: { opacity: 0 },
+    visible: {
+      opacity: 1,
+      transition: { staggerChildren: 0.1 }
+    }
+  };
+
+  const itemVariants = {
+    hidden: { opacity: 0, y: 20 },
+    visible: { opacity: 1, y: 0 }
+  };

   return (
-    <div className="container mx-auto px-4 py-8">
-      <h1 className="text-4xl font-extrabold text-slate-800 mb-8">Explore Products</h1>
+    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-cyan-50">
+      <div className="container mx-auto px-4 py-12">
+        {/* Enhanced Header */}
+        <motion.div
+          initial={{ opacity: 0, y: -20 }}
+          animate={{ opacity: 1, y: 0 }}
+          className="text-center mb-12"
+        >
+          <h1 className="text-5xl md:text-6xl font-black text-slate-800 mb-4">
+            Explore 
+            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600"> Products</span>
+          </h1>
+          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
+            Discover amazing products from local stores in your neighborhood
+          </p>
+        </motion.div>

-      {/* Filters and Search Bar */}
-      <div className="mb-8 p-6 bg-white rounded-2xl shadow-md">
-        <form onSubmit={handleSubmit(onFilterSubmit)} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
-          <Input
-            label="Search by Name"
-            id="name"
-            register={register}
-            placeholder="e.g., Fresh Milk"
-          />
-          <Input
-            label="Filter by Category"
-            id="category"
-            register={register}
-            placeholder="e.g., Grocery"
-          />
-          <Button type="submit" className="w-full md:w-auto">Apply Filters</Button>
-        </form>
-      </div>
+        {/* Enhanced Filters and Search Bar */}
+        <motion.div
+          initial={{ opacity: 0, y: 20 }}
+          animate={{ opacity: 1, y: 0 }}
+          transition={{ delay: 0.2 }}
+          className="mb-12 p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-xl border border-white/50"
+        >
+          <div className="flex items-center justify-between mb-6">
+            <div className="flex items-center gap-2 text-slate-700">
+              <FiFilter className="text-cyan-600" />
+              <h3 className="text-lg font-semibold">Filter & Search</h3>
+            </div>
+            <div className="flex items-center gap-2 bg-slate-100 rounded-full p-1">
+              <button
+                onClick={() => setViewMode('grid')}
+                className={`p-2 rounded-full transition-all ${viewMode === 'grid' ? 'bg-cyan-600 text-white shadow-lg' : 'text-slate-600 hover:bg-white'}`}
+              >
+                <FiGrid size={18} />
+              </button>
+              <button
+                onClick={() => setViewMode('list')}
+                className={`p-2 rounded-full transition-all ${viewMode === 'list' ? 'bg-cyan-600 text-white shadow-lg' : 'text-slate-600 hover:bg-white'}`}
+              >
+                <FiList size={18} />
+              </button>
+            </div>
+          </div>
+          <form onSubmit={handleSubmit(onFilterSubmit)} className="grid grid-cols-1 md:grid-cols-3 gap-6 items-end">
+            <div className="relative">
+              <Input
+                label="Search by Name"
+                id="name"
+                register={register}
+                placeholder="e.g., Fresh Milk"
+                className="pl-12"
+              />
+              <FiSearch className="absolute left-4 top-9 text-slate-400" size={20} />
+            </div>
+            <Input
+              label="Filter by Category"
+              id="category"
+              register={register}
+              placeholder="e.g., Grocery"
+            />
+            <Button type="submit" className="w-full md:w-auto shadow-lg hover:shadow-xl transition-all duration-300">
+              <FiFilter className="mr-2" />
+              Apply Filters
+            </Button>
+          </form>
+        </motion.div>

-      {/* Products Grid */}
-      {loading ? (
-        <div className="flex justify-center items-center h-64"><Spinner size="lg" /></div>
-      ) : products.length > 0 ? (
-        <>
-          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
-            {products.map(product => (
-              <ProductCard key={product._id} product={product} />
-            ))}
-          </div>
+        {/* Products Grid/List */}
+        {loading ? (
+          <div className="flex justify-center items-center h-64">
+            <div className="text-center">
+              <Spinner size="lg" />
+              <p className="mt-4 text-slate-600">Loading amazing products...</p>
+            </div>
+          </div>
+        ) : products.length > 0 ? (
+          <>
+            <motion.div
+              variants={containerVariants}
+              initial="hidden"
+              animate="visible"
+              className={`grid gap-8 ${
+                viewMode === 'grid' 
+                  ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4' 
+                  : 'grid-cols-1'
+              }`}
+            >
+              {products.map((product, index) => (
+                <motion.div
+                  key={product._id}
+                  variants={itemVariants}
+                  transition={{ delay: index * 0.05 }}
+                >
+                  <ProductCard product={product} viewMode={viewMode} />
+                </motion.div>
+              ))}
+            </motion.div>

-          {/* Pagination Controls */}
-          <div className="mt-12 flex justify-center items-center space-x-2">
-            <Button onClick={() => handlePageChange(pagination.page - 1)} disabled={pagination.page <= 1}>
-              Previous
-            </Button>
-            <span className="text-slate-600 font-medium">
-              Page {pagination.page} of {pagination.pages}
-            </span>
-            <Button onClick={() => handlePageChange(pagination.page + 1)} disabled={pagination.page >= pagination.pages}>
-              Next
-            </Button>
-          </div>
-        </>
-      ) : (
-        <div className="text-center py-16">
-          <p className="text-xl text-slate-500">No products found matching your criteria.</p>
-        </div>
-      )}
-    </div>
+            {/* Enhanced Pagination Controls */}
+            <motion.div
+              initial={{ opacity: 0 }}
+              animate={{ opacity: 1 }}
+              transition={{ delay: 0.5 }}
+              className="mt-16 flex justify-center items-center space-x-4"
+            >
+              <Button 
+                onClick={() => handlePageChange(pagination.page - 1)} 
+                disabled={pagination.page <= 1}
+                variant="outline"
+                className="shadow-lg hover:shadow-xl transition-all duration-300"
+              >
+                Previous
+              </Button>
+              <div className="flex items-center space-x-2">
+                {[...Array(Math.min(5, pagination.pages))].map((_, i) => {
+                  const pageNum = i + 1;
+                  return (
+                    <button
+                      key={pageNum}
+                      onClick={() => handlePageChange(pageNum)}
+                      className={`w-10 h-10 rounded-full font-semibold transition-all duration-300 ${
+                        pageNum === pagination.page
+                          ? 'bg-cyan-600 text-white shadow-lg'
+                          : 'bg-white text-slate-600 hover:bg-cyan-100 shadow-md'
+                      }`}
+                    >
+                      {pageNum}
+                    </button>
+                  );
+                })}
+              </div>
+              <Button 
+                onClick={() => handlePageChange(pagination.page + 1)} 
+                disabled={pagination.page >= pagination.pages}
+                variant="outline"
+                className="shadow-lg hover:shadow-xl transition-all duration-300"
+              >
+                Next
+              </Button>
+            </motion.div>
+          </>
+        ) : (
+          <motion.div
+            initial={{ opacity: 0, y: 20 }}
+            animate={{ opacity: 1, y: 0 }}
+            className="text-center py-20"
+          >
+            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/50 max-w-md mx-auto">
+              <FiSearch className="mx-auto text-6xl text-slate-300 mb-6" />
+              <h3 className="text-2xl font-bold text-slate-800 mb-4">No Products Found</h3>
+              <p className="text-slate-600 mb-6">We couldn't find any products matching your criteria. Try adjusting your filters.</p>
+              <Button onClick={() => reset()} className="shadow-lg hover:shadow-xl transition-all duration-300">
+                Clear Filters
+              </Button>
+            </div>
+          </motion.div>
+        )}
+      </div>
+    </div>
   );
 };