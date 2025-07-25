import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiShoppingBag, FiMapPin, FiSmile, FiSearch, FiShoppingCart, FiTruck, FiBox } from 'react-icons/fi';
import { Button } from '../../components/common/Button';
import { MainLayout } from '../../components/layout/MainLayout';

// A reusable feature card component
const FeatureCard = ({ icon: Icon, title, description, delay }) => {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, delay }
    }
  };

  return (
    <motion.div variants={itemVariants} className="text-center p-8 bg-white rounded-2xl shadow-lg">
      <div className="flex items-center justify-center h-16 w-16 rounded-full bg-cyan-100 text-cyan-600 mx-auto mb-4 ring-4 ring-cyan-100/50">
        <Icon size={32} />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-slate-800">{title}</h3>
      <p className="text-slate-500">{description}</p>
    </motion.div>
  );
};

export const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const heroItem = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <MainLayout>
      <div className="bg-slate-50">
        {/* Hero Section */}
        <motion.header
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative py-24 md:py-32 bg-white overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-50 to-blue-100 opacity-50 z-0"></div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.h1
              variants={heroItem}
              className="text-4xl md:text-6xl font-extrabold text-slate-900 mb-4 tracking-tight"
            >
              Your Daily Needs, <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">Delivered Instantly</span>.
            </motion.h1>
            <motion.p
              variants={heroItem}
              className="max-w-2xl mx-auto text-lg text-slate-600 mb-8"
            >
              Bazaryo connects you with local shops for groceries, food, and more. Fast, reliable, and right at your doorstep.
            </motion.p>
            <motion.div variants={heroItem}>
              <Link to="/products">
                <Button size="lg" className="shadow-lg shadow-cyan-500/30">
                  <FiShoppingBag className="inline-block mr-2" />
                  Start Shopping Now
                </Button>
              </Link>
            </motion.div>
          </div>
        </motion.header>

        {/* --- NEW: How It Works Section --- */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-2 text-slate-800">Get Started in 3 Easy Steps</h2>
            <p className="text-center text-slate-500 mb-16 max-w-xl mx-auto">From browsing your favorite local stores to getting items delivered to your door, we've made the process simple and seamless.</p>
            <div className="relative grid md:grid-cols-3 gap-10">
              {/* Dashed line for desktop view */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-px -translate-y-12">
                <svg width="100%" height="2">
                  <line x1="0" y1="1" x2="100%" y2="1" stroke="#cbd5e1" strokeWidth="2" strokeDasharray="8, 8"/>
                </svg>
              </div>

              {/* Step 1 */}
              <div className="relative text-center">
                <div className="relative z-10 flex items-center justify-center h-24 w-24 rounded-full bg-cyan-500 text-white mx-auto mb-4 text-3xl font-bold shadow-lg shadow-cyan-500/30">1</div>
                <h3 className="text-xl font-semibold mb-2">Find Your Items</h3>
                <p className="text-slate-500">Browse a wide variety of products from the local shops you know and love.</p>
              </div>
              {/* Step 2 */}
              <div className="relative text-center">
                <div className="relative z-10 flex items-center justify-center h-24 w-24 rounded-full bg-cyan-500 text-white mx-auto mb-4 text-3xl font-bold shadow-lg shadow-cyan-500/30">2</div>
                <h3 className="text-xl font-semibold mb-2">Place Your Order</h3>
                <p className="text-slate-500">Add items to your cart and checkout in just a few clicks with our secure payment system.</p>
              </div>
              {/* Step 3 */}
              <div className="relative text-center">
                <div className="relative z-10 flex items-center justify-center h-24 w-24 rounded-full bg-cyan-500 text-white mx-auto mb-4 text-3xl font-bold shadow-lg shadow-cyan-500/30">3</div>
                <h3 className="text-xl font-semibold mb-2">Track & Receive</h3>
                <p className="text-slate-500">Follow your delivery in real-time and get it delivered to your doorstep, fast.</p>
              </div>
            </div>
          </div>
        </section>

        {/* --- NEW: Our Commitment (Motto/CTA) Section --- */}
        <section className="relative py-24 bg-slate-800 bg-fixed">
           <div 
             className="absolute inset-0 bg-cover bg-center"
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop')" }}
           ></div>
           <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"></div>

           <div className="container mx-auto px-4 text-center relative text-white">
                <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
                    Connecting Communities, One Delivery at a Time.
                </h2>
                <p className="max-w-3xl mx-auto mt-4 text-lg text-slate-300">
                    Our motto is simple: empower local businesses and provide unparalleled convenience to our customers. Every order you place on Bazaryo supports a local shopkeeper and strengthens your community.
                </p>
                 <Link to="/products" className="mt-8 inline-block">
                    <Button size="lg" variant="outline" className="!text-white !border-white hover:!bg-white hover:!text-slate-800">
                        Explore Local Shops
                    </Button>
                </Link>
           </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-slate-800">Why Choose Bazaryo?</h2>
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="grid md:grid-cols-3 gap-8"
            >
              <FeatureCard 
                icon={FiMapPin} 
                title="Hyperlocal Focus" 
                description="We bring your neighborhood stores online, supporting local businesses and ensuring fresh products." 
                delay={0.1}
              />
              <FeatureCard 
                icon={FiShoppingBag} 
                title="Wide Variety" 
                description="From daily groceries to delicious meals and electronics, find everything you need in one place."
                delay={0.2}
              />
              <FeatureCard 
                icon={FiSmile} 
                title="Seamless Experience" 
                description="Enjoy easy browsing, secure payments, and live order tracking from the shop to your door." 
                delay={0.3}
              />
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};