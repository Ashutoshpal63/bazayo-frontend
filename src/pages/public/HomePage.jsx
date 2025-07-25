import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiShoppingBag, FiMapPin, FiSmile, FiSearch, FiShoppingCart, FiTruck, FiBox, FiStar, FiHeart, FiZap } from 'react-icons/fi';
import { Button } from '../../components/common/Button';
import { MainLayout } from '../../components/layout/MainLayout';

// Enhanced feature card component with better animations
const FeatureCard = ({ icon: Icon, title, description, delay, gradient }) => {
  const itemVariants = {
    hidden: { y: 30, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { 
        type: 'spring', 
        stiffness: 100, 
        damping: 15,
        delay 
      }
    }
  };

  return (
    <motion.div 
      variants={itemVariants} 
      whileHover={{ 
        y: -10, 
        scale: 1.05,
        transition: { type: 'spring', stiffness: 300, damping: 20 }
      }}
      className="relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/20 to-blue-600/20 rounded-3xl blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
      <div className="relative text-center p-8 bg-white/80 backdrop-blur-sm rounded-3xl shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-500">
        <div className={`flex items-center justify-center h-20 w-20 rounded-2xl bg-gradient-to-br ${gradient} text-white mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
          <Icon size={36} />
        </div>
        <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-cyan-700 transition-colors">{title}</h3>
        <p className="text-slate-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

// Enhanced testimonial component
const TestimonialCard = ({ name, role, content, avatar, rating, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.6 }}
      className="bg-white/90 backdrop-blur-sm p-8 rounded-3xl shadow-lg border border-white/50 hover:shadow-2xl transition-all duration-500"
    >
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <FiStar key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400 fill-current' : 'text-slate-300'}`} />
        ))}
      </div>
      <p className="text-slate-700 mb-6 italic leading-relaxed">"{content}"</p>
      <div className="flex items-center">
        <img src={avatar} alt={name} className="w-12 h-12 rounded-full object-cover mr-4 ring-2 ring-cyan-200" />
        <div>
          <h4 className="font-semibold text-slate-800">{name}</h4>
          <p className="text-sm text-slate-500">{role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export const HomePage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const heroItem = {
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  };

  return (
    <MainLayout>
      <div className="bg-gradient-to-br from-slate-50 via-white to-cyan-50 overflow-hidden">
        {/* Enhanced Hero Section */}
        <motion.header
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative py-32 md:py-40 overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-cyan-400/30 to-blue-600/30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-400/20 to-pink-600/20 rounded-full blur-3xl"></div>
            <motion.div 
              animate={floatingAnimation}
              className="absolute top-32 right-20 w-4 h-4 bg-cyan-400 rounded-full opacity-60"
            ></motion.div>
            <motion.div 
              animate={{ ...floatingAnimation, transition: { ...floatingAnimation.transition, delay: 1 } }}
              className="absolute bottom-40 left-32 w-6 h-6 bg-blue-500 rounded-full opacity-40"
            ></motion.div>
          </div>

          <div className="container mx-auto px-4 text-center relative z-10">
            <motion.div
              variants={heroItem}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-100 to-blue-100 rounded-full text-cyan-700 font-semibold text-sm mb-8 shadow-lg"
            >
              <FiZap className="mr-2" />
              Welcome to the Future of Local Shopping
            </motion.div>
            
            <motion.h1
              variants={heroItem}
              className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-tight"
            >
              Your Daily Needs, <br/> 
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 animate-pulse">
                Delivered Instantly
              </span>.
            </motion.h1>
            
            <motion.p
              variants={heroItem}
              className="max-w-3xl mx-auto text-xl text-slate-600 mb-10 leading-relaxed"
            >
              Bazaryo connects you with local shops for groceries, food, and more. 
              Experience lightning-fast delivery, premium quality, and unmatched convenience.
            </motion.p>
            
            <motion.div variants={heroItem} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/products">
                <Button size="lg" className="shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg">
                  <FiShoppingBag className="inline-block mr-3" />
                  Start Shopping Now
                </Button>
              </Link>
              <Button size="lg" variant="ghost" className="px-8 py-4 text-lg hover:bg-white/50 backdrop-blur-sm">
                <FiHeart className="inline-block mr-3" />
                Explore Local Stores
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div 
              variants={heroItem}
              className="flex flex-wrap justify-center items-center gap-8 mt-16 opacity-70"
            >
              <div className="flex items-center text-slate-600">
                <FiStar className="text-yellow-400 mr-2" />
                <span className="font-semibold">4.9/5 Rating</span>
              </div>
              <div className="flex items-center text-slate-600">
                <FiTruck className="text-green-500 mr-2" />
                <span className="font-semibold">30min Delivery</span>
              </div>
              <div className="flex items-center text-slate-600">
                <FiShoppingBag className="text-blue-500 mr-2" />
                <span className="font-semibold">1000+ Products</span>
              </div>
            </motion.div>
          </div>
        </motion.header>

        {/* Enhanced How It Works Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-50/50 to-cyan-50/30"></div>
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4">
                Get Started in 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600"> 3 Easy Steps</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                From browsing your favorite local stores to getting items delivered to your door, 
                we've made the process simple and delightful.
              </p>
            </motion.div>

            <div className="relative grid md:grid-cols-3 gap-12">
              {/* Enhanced connecting line */}
              <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 -translate-y-12">
                <div className="w-full h-full bg-gradient-to-r from-cyan-200 via-blue-300 to-purple-200 rounded-full opacity-50"></div>
              </div>

              {/* Enhanced steps */}
              {[
                {
                  number: 1,
                  title: "Discover & Browse",
                  description: "Explore a curated selection of products from trusted local shops in your neighborhood.",
                  icon: FiSearch,
                  gradient: "from-cyan-500 to-blue-600"
                },
                {
                  number: 2,
                  title: "Order & Pay",
                  description: "Add items to your cart and checkout securely with our streamlined payment system.",
                  icon: FiShoppingCart,
                  gradient: "from-blue-500 to-purple-600"
                },
                {
                  number: 3,
                  title: "Track & Receive",
                  description: "Follow your delivery in real-time and receive fresh products at your doorstep.",
                  icon: FiTruck,
                  gradient: "from-purple-500 to-pink-600"
                }
              ].map((step, index) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.8 }}
                  whileHover={{ y: -10 }}
                  className="relative text-center group"
                >
                  <div className="relative z-10 mb-8">
                    <div className={`relative mx-auto w-28 h-28 rounded-3xl bg-gradient-to-br ${step.gradient} text-white shadow-2xl group-hover:shadow-3xl transition-all duration-500 flex items-center justify-center`}>
                      <span className="text-3xl font-black">{step.number}</span>
                      <div className="absolute -top-2 -right-2 w-12 h-12 bg-white rounded-2xl shadow-lg flex items-center justify-center">
                        <step.icon className="text-slate-700" size={20} />
                      </div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-slate-800 group-hover:text-cyan-700 transition-colors">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed max-w-sm mx-auto">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Features Section */}
        <section className="py-24 bg-gradient-to-br from-slate-50 to-cyan-50 relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-cyan-300/20 to-blue-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-br from-purple-300/20 to-pink-500/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto px-4 relative">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4">
                Why Choose 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600"> Bazaryo</span>?
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Experience the perfect blend of convenience, quality, and community support.
              </p>
            </motion.div>
            
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="grid md:grid-cols-3 gap-8"
            >
              <FeatureCard 
                icon={FiMapPin} 
                title="Hyperlocal Focus" 
                description="We bring your neighborhood stores online, supporting local businesses and ensuring the freshest products reach your doorstep." 
                delay={0.1}
                gradient="from-cyan-500 to-blue-600"
              />
              <FeatureCard 
                icon={FiShoppingBag} 
                title="Endless Variety" 
                description="From daily groceries to gourmet meals and electronics, discover everything you need in one convenient marketplace."
                delay={0.2}
                gradient="from-blue-500 to-purple-600"
              />
              <FeatureCard 
                icon={FiSmile} 
                title="Seamless Experience" 
                description="Enjoy intuitive browsing, secure payments, real-time tracking, and exceptional customer service every step of the way." 
                delay={0.3}
                gradient="from-purple-500 to-pink-600"
              />
            </motion.div>
          </div>
        </section>

        {/* New Testimonials Section */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-4">
                What Our 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600"> Customers Say</span>
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Join thousands of satisfied customers who've made Bazaryo their go-to shopping platform.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              <TestimonialCard
                name="Sarah Johnson"
                role="Busy Mom"
                content="Bazaryo has been a lifesaver! I can get fresh groceries delivered while juggling work and kids. The quality is always top-notch."
                avatar="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
                rating={5}
                delay={0.1}
              />
              <TestimonialCard
                name="Mike Chen"
                role="Local Business Owner"
                content="As a shopkeeper, Bazaryo helped me reach more customers and grow my business. The platform is easy to use and very effective."
                avatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
                rating={5}
                delay={0.2}
              />
              <TestimonialCard
                name="Emily Rodriguez"
                role="College Student"
                content="Perfect for my busy schedule! I love supporting local businesses while getting everything delivered quickly to my dorm."
                avatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
                rating={5}
                delay={0.3}
              />
            </div>
          </section>

        {/* Enhanced CTA Section */}
        <section className="relative py-32 bg-slate-900 overflow-hidden">
           <div 
             className="absolute inset-0 bg-cover bg-center"
             style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1974&auto=format&fit=crop')" }}
           ></div>
           <div className="absolute inset-0 bg-gradient-to-br from-slate-900/90 via-cyan-900/80 to-blue-900/90"></div>

           <div className="container mx-auto px-4 text-center relative text-white">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <h2 className="text-4xl md:text-6xl font-black tracking-tight mb-6">
                      Connecting Communities, <br/>
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                        One Delivery at a Time
                      </span>
                  </h2>
                  <p className="max-w-4xl mx-auto mt-6 text-xl text-slate-300 leading-relaxed mb-12">
                      Our mission is simple: empower local businesses and provide unparalleled convenience to our customers. 
                      Every order you place on Bazaryo supports a local shopkeeper and strengthens your community.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                    <Link to="/products">
                      <Button size="lg" className="px-10 py-4 text-lg shadow-2xl shadow-cyan-500/30 hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300">
                        <FiShoppingBag className="mr-3" />
                        Start Shopping Today
                      </Button>
                    </Link>
                    <Link to="/register">
                      <Button size="lg" variant="outline" className="px-10 py-4 text-lg !text-white !border-white hover:!bg-white hover:!text-slate-800 transform hover:scale-105 transition-all duration-300">
                        <FiHeart className="mr-3" />
                        Join Our Community
                      </Button>
                    </Link>
                  </div>
                </motion.div>
           </div>
        </section>
      </div>
    </MainLayout>
  );
};