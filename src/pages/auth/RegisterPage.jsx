@@ .. @@
   const containerVariants = {
     hidden: { opacity: 0, y: -20 },
-    visible: { opacity: 1, y: 0, transition: { type: 'spring', damping: 15, stiffness: 100 } },
+    visible: { 
+      opacity: 1, 
+      y: 0, 
+      transition: { 
+        type: 'spring', 
+        damping: 15, 
+        stiffness: 100,
+        staggerChildren: 0.1
+      } 
+    },
   };

+  const itemVariants = {
+    hidden: { opacity: 0, y: 20 },
+    visible: { opacity: 1, y: 0 }
+  };
+
   const fieldVariants = {
     hidden: { opacity: 0, height: 0, y: -10 },
     visible: { opacity: 1, height: 'auto', y: 0, transition: { duration: 0.3 } },
     exit: { opacity: 0, height: 0, y: -10, transition: { duration: 0.2 } }
   };

+  const floatingAnimation = {
+    y: [-10, 10, -10],
+    transition: {
+      duration: 5,
+      repeat: Infinity,
+      ease: "easeInOut"
+    }
+  };

   return (
-    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-cyan-50 py-12 px-4">
+    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-cyan-50 py-12 px-4 relative overflow-hidden">
+      {/* Animated background elements */}
+      <div className="absolute inset-0">
+        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
+        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
+        <motion.div 
+          animate={floatingAnimation}
+          className="absolute top-32 right-20 w-4 h-4 bg-cyan-400 rounded-full opacity-40"
+        ></motion.div>
+        <motion.div 
+          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2.5 } }}
+          className="absolute bottom-40 left-32 w-6 h-6 bg-blue-500 rounded-full opacity-30"
+        ></motion.div>
+      </div>
+
       <motion.div
         variants={containerVariants}
         initial="hidden"
         animate="visible"
-        className="w-full max-w-lg p-8 space-y-6 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-slate-200/50"
+        className="w-full max-w-lg p-10 space-y-8 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 relative z-10"
       >
-        <div className="text-center">
+        <motion.div variants={itemVariants} className="text-center">
           <Link to="/">
-            <img src={logo} alt="Bazaryo" className="mx-auto h-12 mb-4" />
+            <motion.img 
+              src={logo} 
+              alt="Bazaryo" 
+              className="mx-auto h-14 mb-6"
+              whileHover={{ scale: 1.05 }}
+              transition={{ type: 'spring', stiffness: 300 }}
+            />
           </Link>
-          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Create an Account</h2>
-          <p className="text-slate-500 mt-2">Join the Bazaryo community today!</p>
-        </div>
+          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-2">Join Bazaryo</h2>
+          <p className="text-slate-600">Create your account and start shopping locally</p>
+        </motion.div>

-        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
+        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
           {/* User Details */}
-          <Input
-            label="Full Name"
-            id="name"
-            register={register}
-            validation={{ required: 'Your name is required' }}
-            error={errors.name}
-            placeholder="John Doe"
-          />
-          <Input
-            label="Email Address"
-            id="email"
-            type="email"
-            register={register}
-            validation={{ required: 'Email is required' }}
-            error={errors.email}
-            placeholder="you@example.com"
-          />
-          <Input
-            label="Password"
-            id="password"
-            type="password"
-            register={register}
-            validation={{ 
-              required: 'Password is required',
-              minLength: { value: 6, message: 'Password must be at least 6 characters' }
-            }}
-            error={errors.password}
-            placeholder="6+ characters"
-          />
+          <motion.div variants={itemVariants}>
+            <Input
+              label="Full Name"
+              id="name"
+              register={register}
+              validation={{ required: 'Your name is required' }}
+              error={errors.name}
+              placeholder="John Doe"
+            />
+          </motion.div>
+          
+          <motion.div variants={itemVariants}>
+            <Input
+              label="Email Address"
+              id="email"
+              type="email"
+              register={register}
+              validation={{ required: 'Email is required' }}
+              error={errors.email}
+              placeholder="you@example.com"
+            />
+          </motion.div>
+          
+          <motion.div variants={itemVariants}>
+            <Input
+              label="Password"
+              id="password"
+              type="password"
+              register={register}
+              validation={{ 
+                required: 'Password is required',
+                minLength: { value: 6, message: 'Password must be at least 6 characters' }
+              }}
+              error={errors.password}
+              placeholder="6+ characters"
+            />
+          </motion.div>

           {/* Role Selection */}
-          <div>
-            <label className="block text-sm font-medium text-slate-700 mb-2">I am a...</label>
-            <div className="grid grid-cols-2 gap-4">
-              <label className={`flex items-center p-3 rounded-lg border-2 cursor-pointer transition-all ${role === 'customer' ? 'border-cyan-500 bg-cyan-50' : 'border-slate-200'}`}>
-                <input type="radio" value="customer" {...register('role')} className="form-radio text-cyan-600" />
-                <span className="ml-3 text-sm font-medium text-slate-700">Customer</span>
-              </label>
-              <label className={`flex items-center p-3 rounded-lg border-2 cursor-pointer transition-all ${role === 'shopkeeper' ? 'border-cyan-500 bg-cyan-50' : 'border-slate-200'}`}>
-                <input type="radio" value="shopkeeper" {...register('role')} className="form-radio text-cyan-600" />
-                <span className="ml-3 text-sm font-medium text-slate-700">Shopkeeper</span>
-              </label>
+          <motion.div variants={itemVariants}>
+            <div>
+              <label className="block text-sm font-medium text-slate-700 mb-3">I am a...</label>
+              <div className="grid grid-cols-2 gap-4">
+                <motion.label 
+                  whileHover={{ scale: 1.02 }}
+                  whileTap={{ scale: 0.98 }}
+                  className={`flex items-center p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
+                    role === 'customer' 
+                      ? 'border-cyan-500 bg-gradient-to-br from-cyan-50 to-blue-50 shadow-lg' 
+                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
+                  }`}
+                >
+                  <input type="radio" value="customer" {...register('role')} className="form-radio text-cyan-600" />
+                  <span className="ml-3 text-sm font-semibold text-slate-700">Customer</span>
+                </motion.label>
+                <motion.label 
+                  whileHover={{ scale: 1.02 }}
+                  whileTap={{ scale: 0.98 }}
+                  className={`flex items-center p-4 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${
+                    role === 'shopkeeper' 
+                      ? 'border-cyan-500 bg-gradient-to-br from-cyan-50 to-blue-50 shadow-lg' 
+                      : 'border-slate-200 hover:border-slate-300 hover:bg-slate-50'
+                  }`}
+                >
+                  <input type="radio" value="shopkeeper" {...register('role')} className="form-radio text-cyan-600" />
+                  <span className="ml-3 text-sm font-semibold text-slate-700">Shopkeeper</span>
+                </motion.label>
+              </div>
             </div>
-          </div>
+          </motion.div>
           
           {/* Shopkeeper-specific fields */}
           <AnimatePresence>
@@ .. @@
                 animate="visible"
                 exit="exit"
-                className="space-y-4 pt-4 border-t border-slate-200 overflow-hidden"
+                className="space-y-6 pt-6 border-t border-slate-200 overflow-hidden"
               >
-                 <h3 className="text-md font-semibold text-slate-700">Shop Details</h3>
+                 <h3 className="text-lg font-bold text-slate-700 flex items-center">
+                   <div className="w-2 h-2 bg-cyan-500 rounded-full mr-3"></div>
+                   Shop Details
+                 </h3>
                  <Input
                     label="Shop Name"
                     id="shopName"
@@ .. @@
           </AnimatePresence>

-          <div className="pt-2">
-            <Button type="submit" size="lg" className="w-full" disabled={loading}>
+          <motion.div variants={itemVariants} className="pt-4">
+            <Button 
+              type="submit" 
+              size="lg" 
+              className="w-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]" 
+              disabled={loading}
+            >
               {loading ? (
                 <>
                   <Spinner size="sm" className="mr-2" />
@@ -
                 'Create Account'
               )}
             </Button>
-          </div>
+          </motion.div>
         </form>

-        <p className="text-sm text-center text-slate-500">
-          Already have an account?{' '}
-          <Link to="/login" className="font-medium text-cyan-600 hover:text-cyan-500 hover:underline">
-            Sign in
-          </Link>
-        </p>
+        <motion.div variants={itemVariants}>
+          <div className="relative">
+            <div className="absolute inset-0 flex items-center">
+              <div className="w-full border-t border-slate-200"></div>
+            </div>
+            <div className="relative flex justify-center text-sm">
+              <span className="px-4 bg-white text-slate-500">Already have an account?</span>
+            </div>
+          </div>
+          
+          <div className="text-center mt-6">
+            <Link 
+              to="/login" 
+              className="font-semibold text-cyan-600 hover:text-cyan-500 hover:underline transition-colors"
+            >
+              Sign in here →
+            </Link>
+          </div>
+        </motion.div>
       </motion.div>
     </div>
   );