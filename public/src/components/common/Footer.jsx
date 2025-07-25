import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Info */}
          <div className="col-span-1 md:col-span-1">
            <img src={logo} alt="Bazaryo" className="h-10 mb-4" />
            <p className="text-slate-500 text-sm">Your daily needs, delivered instantly from local stores.</p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-slate-400 hover:text-cyan-600"><FaGithub size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-cyan-600"><FaTwitter size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-cyan-600"><FaLinkedin size={20} /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-800 tracking-wider uppercase">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/products" className="text-sm text-slate-500 hover:text-cyan-600">All Products</Link></li>
              <li><Link to="/my-orders" className="text-sm text-slate-500 hover:text-cyan-600">My Orders</Link></li>
              <li><Link to="/cart" className="text-sm text-slate-500 hover:text-cyan-600">Shopping Cart</Link></li>
            </ul>
          </div>

          {/* For Partners */}
          <div>
            <h3 className="text-sm font-semibold text-slate-800 tracking-wider uppercase">For Partners</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-slate-500 hover:text-cyan-600">Become a Shopkeeper</a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-cyan-600">Join as Delivery Agent</a></li>
            </ul>
          </div>
          
          {/* Legal */}
           <div>
            <h3 className="text-sm font-semibold text-slate-800 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#" className="text-sm text-slate-500 hover:text-cyan-600">Privacy Policy</a></li>
              <li><a href="#" className="text-sm text-slate-500 hover:text-cyan-600">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-slate-200 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Bazaryo. All rights reserved.
        </div>
      </div>
    </footer>
  );
};