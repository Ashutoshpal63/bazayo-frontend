import React from 'react';
import { motion } from 'framer-motion';

export const Button = ({ children, onClick, type = 'button', variant = 'primary', size = 'md', className = '', disabled = false, icon: Icon, ...props }) => {
  const baseStyle = 'font-semibold rounded-full focus:outline-none focus:ring-4 transition-all duration-300 ease-in-out inline-flex items-center justify-center gap-2';

  const variantStyles = {
    primary: 'bg-cyan-600 text-white hover:bg-cyan-700 focus:ring-cyan-500/50 shadow-md shadow-cyan-500/20 hover:shadow-lg hover:shadow-cyan-500/30',
    secondary: 'bg-slate-200 text-slate-800 hover:bg-slate-300 focus:ring-slate-400/50',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-300/50',
    ghost: 'bg-transparent text-cyan-600 hover:bg-cyan-100/50 focus:ring-cyan-500/20',
    outline: 'bg-transparent border-2 border-cyan-600 text-cyan-600 hover:bg-cyan-600 hover:text-white focus:ring-cyan-500/50'
  };

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base'
  };
  
  const disabledStyle = 'disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none';

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyle} ${variantStyles[variant]} ${sizeStyles[size]} ${disabledStyle} ${className}`}
      {...props}
    >
      {Icon && <Icon className="text-lg" />}
      {children}
    </motion.button>
  );
};