@@ .. @@
 export const LoginPage = () => {
   const { register, handleSubmit, formState: { errors } } = useForm();
   const { login } = useAuth();
   const navigate = useNavigate();
   const location = useLocation();
   const [loading, setLoading] = useState(false);

   const from = location.state?.from?.pathname || null;

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
+  const floatingAnimation = {
+    y: [-10, 10, -10],
+    transition: {
+      duration: 4,
+      repeat: Infinity,
+      ease: "easeInOut"
+    }
+  };

   return (
-    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-cyan-50 p-4">
+    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-cyan-50 p-4 relative overflow-hidden">
+      {/* Animated background elements */}
+      <div className="absolute inset-0">
+        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-full blur-3xl"></div>
+        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/10 to-pink-600/10 rounded-full blur-3xl"></div>
+        <motion.div 
+          animate={floatingAnimation}
+          className="absolute top-32 right-20 w-4 h-4 bg-cyan-400 rounded-full opacity-40"
+        ></motion.div>
+        <motion.div 
+          animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 2 } }}
+          className="absolute bottom-40 left-32 w-6 h-6 bg-blue-500 rounded-full opacity-30"
+        ></motion.div>
+      </div>
+
       <motion.div
         variants={containerVariants}
         initial="hidden"
         animate="visible"
-        className="w-full max-w-md p-8 space-y-8 bg-white/80 backdrop-blur-lg rounded-2xl shadow-xl border border-slate-200/50"
+        className="w-full max-w-md p-10 space-y-8 bg-white/90 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/50 relative z-10"
       >
-        <div className="text-center">
+        <motion.div variants={itemVariants} className="text-center">
             <Link to="/">
-                <img src={logo} alt="Bazaryo" className="mx-auto h-12 mb-4" />
+                <motion.img 
+                  src={logo} 
+                  alt="Bazaryo" 
+                  className="mx-auto h-14 mb-6"
+                  whileHover={{ scale: 1.05 }}
+                  transition={{ type: 'spring', stiffness: 300 }}
+                />
             </Link>
-          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">Welcome Back!</h2>
-          <p className="text-slate-500 mt-2">Sign in to continue to Bazaryo.</p>
-        </div>
+          <h2 className="text-3xl font-black text-slate-800 tracking-tight mb-2">Welcome Back!</h2>
+          <p className="text-slate-600">Sign in to continue your shopping journey</p>
+        </motion.div>

-        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
-          <Input
-            label="Email Address"
-            id="email"
-            type="email"
-            register={register}
-            validation={{ 
-              required: 'Email is required',
-              pattern: {
-                value: /^\S+@\S+$/i,
-                message: "Invalid email address"
-              }
-            }}
-            error={errors.email}
-            placeholder="you@example.com"
-          />
-          <Input
-            label="Password"
-            id="password"
-            type="password"
-            register={register}
-            validation={{ required: 'Password is required' }}
-            error={errors.password}
-            placeholder="••••••••"
-          />
-          <Button type="submit" size="lg" className="w-full" disabled={loading}>
-            {loading ? (
-              <>
-                <Spinner size="sm" className="mr-2" />
-                Signing In...
-              </>
-            ) : (
-              'Sign In'
-            )}
-          </Button>
+        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
+          <motion.div variants={itemVariants}>
+            <Input
+              label="Email Address"
+              id="email"
+              type="email"
+              register={register}
+              validation={{ 
+                required: 'Email is required',
+                pattern: {
+                  value: /^\S+@\S+$/i,
+                  message: "Invalid email address"
+                }
+              }}
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
+              validation={{ required: 'Password is required' }}
+              error={errors.password}
+              placeholder="••••••••"
+            />
+          </motion.div>
+          
+          <motion.div variants={itemVariants}>
+            <Button 
+              type="submit" 
+              size="lg" 
+              className="w-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]" 
+              disabled={loading}
+            >
+              {loading ? (
+                <>
+                  <Spinner size="sm" className="mr-2" />
+                  Signing In...
+                </>
+              ) : (
+                'Sign In'
+              )}
+            </Button>
+          </motion.div>
         </form>

-        <p className="text-sm text-center text-slate-500">
-          Don't have an account?{' '}
-          <Link to="/register" className="font-medium text-cyan-600 hover:text-cyan-500 hover:underline">
-            Sign up here
-          </Link>
-        </p>
+        <motion.div variants={itemVariants}>
+          <div className="relative">
+            <div className="absolute inset-0 flex items-center">
+              <div className="w-full border-t border-slate-200"></div>
+            </div>
+            <div className="relative flex justify-center text-sm">
+              <span className="px-4 bg-white text-slate-500">New to Bazaryo?</span>
+            </div>
+          </div>
+          
+          <div className="text-center mt-6">
+            <Link 
+              to="/register" 
+              className="font-semibold text-cyan-600 hover:text-cyan-500 hover:underline transition-colors"
+            >
+              Create your account →
+            </Link>
+          </div>
+        </motion.div>
       </motion.div>
     </div>
   );