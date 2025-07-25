@@ .. @@
 export const Input = ({ label, id, type = 'text', register, validation = {}, error, placeholder, className = '' }) => {
 }
-  const inputClasses = `w-full px-4 py-2.5 bg-slate-100 border-2 border-transparent rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:bg-white transition-colors duration-300 ${error ? 'border-red-500 focus:ring-red-500' : ''}`;
+  const inputClasses = `w-full px-4 py-3 bg-slate-50 border-2 border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 focus:bg-white transition-all duration-300 placeholder-slate-400 ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'hover:border-slate-300'}`;

   return (
     <div className={`w-full ${className}`}>
-      {label && <label htmlFor={id} className="block text-sm font-medium text-slate-700 mb-1">{label}</label>}
+      {label && <label htmlFor={id} className="block text-sm font-semibold text-slate-700 mb-2">{label}</label>}
       <input
         id={id}
         type={type}
   )
@@ .. @@
         {error && (
           <motion.p
             initial={{ opacity: 0, y: -10 }}
             animate={{ opacity: 1, y: 0 }}
             exit={{ opacity: 0, y: -10 }}
         )
         }
-            className="mt-1 text-xs text-red-600"
+            className="mt-2 text-xs text-red-600 font-medium"
           >
             {error.message}
           </motion.p>