import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  Send, 
  Download, 
  Wifi, 
  Lightbulb, 
  Tv, 
  BookOpen,
  Smartphone,
  Shield,
  Zap,
  ArrowRight,
  Users,
  TrendingUp,
  Star,
  Award,
  Clock,
  Lock,
  Globe,
  Heart,
  Sparkles,
  CreditCard,
  Layers,
  Cpu,
  FileText,
  ExternalLink
} from 'lucide-react';
import './style.css';
import banner from "../../assets/banner.png";

// Privacy Policy Component (can be in same file or separate)
const PrivacyPolicy = ({ onClose }) => {
  const lastUpdated = "January 20, 2024";
  
  const sections = [
    {
      icon: FileText,
      title: "Information We Collect",
      content: `
        <strong>Personal Information:</strong>
        <ul>
          <li>Name and contact details (email, phone number)</li>
          <li>Account credentials</li>
          <li>Device information (model, operating system)</li>
          <li>Network operator details</li>
        </ul>
        
        <strong>Transaction Information:</strong>
        <ul>
          <li>Airtime purchase history</li>
          <li>Data bundle purchases</li>
          <li>Bill payment records</li>
          <li>Transaction timestamps and amounts</li>
        </ul>
        
        <strong>Technical Information:</strong>
        <ul>
          <li>IP address and location data</li>
          <li>App usage statistics</li>
          <li>Device permissions granted</li>
          <li>Crash reports and error logs</li>
        </ul>
      `
    },
    {
      icon: Shield,
      title: "How We Use Your Information",
      content: `
        We use collected information to:
        <ul>
          <li>Process your VTU transactions (airtime, data, bill payments)</li>
          <li>Provide customer support and troubleshoot issues</li>
          <li>Improve app performance and user experience</li>
          <li>Send important notifications about service updates</li>
          <li>Detect and prevent fraudulent activities</li>
          <li>Comply with legal obligations</li>
        </ul>
      `
    },
    {
      icon: Lock,
      title: "Data Security",
      content: `
        We implement industry-standard security measures:
        <ul>
          <li>End-to-end encryption for all transactions</li>
          <li>Secure socket layer (SSL) technology</li>
          <li>Regular security audits and testing</li>
          <li>Access controls and authentication</li>
          <li>Data anonymization where possible</li>
          <li>Secure server infrastructure</li>
        </ul>
      `
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-2xl mb-6">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-400 text-lg">
            Last Updated: {lastUpdated}
          </p>
        </div>

        {/* Main Content */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div 
              key={index}
              className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-800 hover:border-cyan-500/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-6 h-6 text-cyan-400" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">{section.title}</h2>
                  <div 
                    className="text-gray-300 space-y-3"
                    dangerouslySetInnerHTML={{ __html: section.content }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact & Additional Info */}
        <div className="mt-12 p-8 bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl border border-cyan-500/30">
          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p className="text-gray-300">privacy@payverve.com</p>
          
          <div className="mt-8 pt-6 border-t border-gray-700">
            <h3 className="font-semibold text-cyan-400 mb-3">Changes to Privacy Policy</h3>
            <p className="text-gray-300">
              We may update this privacy policy periodically. Continued use of the 
              app after changes constitutes acceptance of the updated policy.
            </p>
          </div>
        </div>

        {/* Back Button */}
        {onClose && (
          <div className="mt-12 text-center">
            <button 
              onClick={onClose}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-xl font-semibold transition-all duration-300"
            >
              Back to Home
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 300], [0, 100]);
  const y2 = useTransform(scrollY, [0, 300], [0, -100]);

  // Open Privacy Policy in new tab
  const openPrivacyInNewTab = () => {
    const privacyHTML = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>PayVerve - Privacy Policy</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          body { font-family: 'Inter', sans-serif; }
        </style>
      </head>
      <body class="bg-gradient-to-b from-gray-900 to-black text-white min-h-screen">
        ${document.getElementById('privacy-policy-content')?.innerHTML || ''}
      </body>
      </html>
    `;
    
    const newWindow = window.open();
    newWindow.document.write(privacyHTML);
    newWindow.document.close();
  };

  // Open Privacy Policy as PDF
  const openPrivacyPDF = () => {
    window.open('/privacy-policy.pdf', '_blank');
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const services = [
    {
      icon: Send,
      title: "Send & Receive Money",
      description: "Instant transfers to anyone, anywhere in Nigeria",
      gradient: "from-cyan-500 via-blue-500 to-purple-500",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=400&h=300&fit=crop"
    },
    {
      icon: Smartphone,
      title: "Airtime & Data",
      description: "Recharge all networks instantly with best rates",
      gradient: "from-purple-500 via-pink-500 to-rose-500",
      image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=300&fit=crop"
    },
    {
      icon: Lightbulb,
      title: "Electricity Bills",
      description: "Pay PHCN, AEDC, EKEDC and other disco bills",
      gradient: "from-orange-500 via-yellow-500 to-amber-500",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=300&fit=crop"
    },
    {
      icon: Tv,
      title: "TV Subscription",
      description: "DSTV, GOTV, Startimes & Showmax payments",
      gradient: "from-green-500 via-emerald-500 to-teal-500",
      image: "https://images.unsplash.com/photo-1522869635100-9f4c5e86aa37?w=400&h=300&fit=crop"
    },
    {
      icon: BookOpen,
      title: "Exam Pins",
      description: "WAEC, NECO, JAMB and other exam pins",
      gradient: "from-red-500 via-rose-500 to-pink-500",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=400&h=300&fit=crop"
    },
    {
      icon: Wifi,
      title: "Internet Bills",
      description: "ISP payments and broadband subscriptions",
      gradient: "from-indigo-500 via-blue-500 to-cyan-500",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop"
    }
  ];

  const features = [
    { icon: Shield, title: "Bank-Level Security", description: "Your money is safe with our advanced security systems" },
    { icon: Zap, title: "Lightning Fast", description: "Transactions completed in seconds, not minutes" },
    { icon: Clock, title: "24/7 Available", description: "Round-the-clock service, anytime you need it" },
    { icon: Lock, title: "PIN Protection", description: "Secure your transactions with personal PIN" },
    { icon: Globe, title: "Nationwide", description: "Available to everyone across Nigeria" },
    { icon: Heart, title: "User Friendly", description: "Simple and intuitive interface for everyone" }
  ];

  const stats = [
    { number: "1M+", label: "Happy Users" },
    { number: "₦10M+", label: "Processed" },
    { number: "99.9%", label: "Uptime" },
    { number: "24/7", label: "Support" }
  ];

  const testimonials = [
    {
      name: "Olamide Oladele",
      role: "Business Owner",
      content: "PayVerve has made running my business so much easier. Bill payments that used to take hours now happen in seconds!",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
    },
    {
      name: "Femi Gabriel",
      role: "Engineer",
      content: "As a engineer, PayVerve helps me manage my expenses. Buying data and paying for subscriptions has never been easier.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
    },
    {
      name: "Mr. Johnson",
      role: "Retired Civil Servant",
      content: "I was skeptical about digital payments, but PayVerve made it simple. Now I pay all my bills from home.",
      rating: 5,
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop"
    }
  ];

  const FloatingCard = ({ children, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ 
        opacity: 1, 
        y: 0,
        rotateX: (mousePosition.y - window.innerHeight / 2) / 50,
        rotateY: (mousePosition.x - window.innerWidth / 2) / 50,
      }}
      transition={{ 
        duration: 0.5, 
        delay,
        type: "spring",
        stiffness: 100
      }}
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </motion.div>
  );

  return (
    <>
      <div className="home-container">
        {/* Hidden Privacy Policy content for new tab */}
        <div id="privacy-policy-content" style={{ display: 'none' }}>
          <PrivacyPolicy />
        </div>

        {/* Privacy Policy Modal */}
        {showPrivacyModal && (
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="fixed inset-0 bg-black/80 backdrop-blur-sm" onClick={() => setShowPrivacyModal(false)} />
            <div className="relative min-h-screen flex items-center justify-center p-4">
              <div className="relative bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                <button
                  onClick={() => setShowPrivacyModal(false)}
                  className="absolute top-4 right-4 z-10 p-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                <PrivacyPolicy onClose={() => setShowPrivacyModal(false)} />
              </div>
            </div>
          </div>
        )}

        {/* Animated Background */}
        <div className="animated-bg">
          <div className="animated-bg-base" />
          <motion.div 
            className="animated-glow"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 182, 212, 0.3) 0%, transparent 50%)`
            }}
          />
          {/* Animated Grid */}
          <div className="animated-grid" />
        </div>

        {/* Hero Section */}
        <section className="section-container">
          <div className="max-w-container">
            <div className="grid-1-col lg:grid-2-col">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, type: "spring" }}
              >
                <motion.div 
                  className="hero-badge"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Award className="w-6 h-6 text-cyan-400" />
                  <span className="hero-badge-content">
                    Nigeria's Fastest Growing Fintech
                  </span>
                </motion.div>

                <h1 className="hero-title">
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="block"
                  >
                    The Future of
                  </motion.span>
                  <motion.span 
                    className="gradient-text block"
                    animate={{ 
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    transition={{ duration: 5, repeat: Infinity }}
                  >
                    Digital Payments
                  </motion.span>
                </h1>
                
                <p className="hero-description">
                  Experience the next generation of financial services. Send money instantly, 
                  pay bills seamlessly, and manage your finances with cutting-edge technology.
                </p>

                <div className="button-group">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(6, 182, 212, 0.6)" }}
                    whileTap={{ scale: 0.95 }}
                    className="primary-button"
                  >
                    <span className="primary-button-content">
                      <span>Start Your Journey</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                    </span>
                    <motion.div
                      className="absolute inset-0 bg-linear-to-r from-blue-600 to-purple-600"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="secondary-button"
                  >
                    <a
                      href="https://github.com/Olamide-00/Payverve_web_app/releases/download/payverve100/Payverve100.apk"
                      download
                      className="relative flex items-center justify-center space-x-3 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all"
                    >
                      <Download className="w-6 h-6" />
                      <span>Download App Now</span>
                    </a>
                  </motion.button>
                </div>

                {/* Animated Stats */}
                <div className="grid-stats">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.1, type: "spring" }}
                      whileHover={{ scale: 1.1, y: -5 }}
                      className="stat-card-group"
                    >
                      <div className="stat-card-glow" />
                      <div className="stat-card">
                        <motion.div 
                          className="stat-number"
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
                        >
                          {stat.number}
                        </motion.div>
                        <div className="stat-label">{stat.label}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right - 3D Phone Mockup */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
                style={{ y: y1 }}
                className="phone-container"
              >
                <motion.div
                  animate={{ 
                    rotateY: [0, 10, 0, -10, 0],
                    rotateX: [0, 5, 0, -5, 0],
                  }}
                  transition={{ duration: 10, repeat: Infinity }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="relative mb-20"
                >
                  {/* Glow effect */}
                  <div className="phone-glow" />
                  
                  {/* Phone Frame */}
                  <div className="phone-frame">
                    <div className="phone-screen">
                      {/* Notch */}
                      <div className="phone-notch" />
                      
                      {/* Screen Content */}
                      <div className="relative space-y-13 ">
                        {/* Header */}
                        <motion.div 
                          className="flex items-center justify-between"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 3, repeat: Infinity }}
                        >
                          <div className="flex items-center space-x-5">
                            <div className="w-10 h-10 bg-linear-to-br from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center">
                              <Sparkles className="w-5 h-5 text-white" />
                            </div>
                            <span className="font-bold text-lg">PayVerve</span>
                          </div>
                          <CreditCard className="w-6 h-6 text-cyan-400" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
                {/* image banner */}
                <div className="w-full flex justify-center">
                  <img
                    src={banner}
                    alt="Banner"
                    className="w-full max-w-4xl h-auto rounded-2xl object-contain"
                  />
                </div>
                {/* Floating Elements */}
                <motion.div
                  animate={{ y: [0, -20, 0], rotate: [0, 360] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="absolute -top-10 -right-10 w-20 h-20 bg-linear-to-br from-cyan-500 to-blue-500 rounded-3xl blur-xl opacity-60"
                />
                <motion.div
                  animate={{ y: [0, 20, 0], rotate: [0, -360] }}
                  transition={{ duration: 8, repeat: Infinity }}
                  className="absolute -bottom-10 -left-10 w-32 h-32 bg-linear-to-br from-purple-500 to-pink-500 rounded-full blur-2xl opacity-40"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Services Section with 3D Cards */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="inline-block mb-6"
              >
                <Layers className="w-16 h-16 text-cyan-400 mx-auto" />
              </motion.div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
                Everything You Need
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Experience seamless bill payments and financial transactions with our comprehensive suite of services
              </p>
            </motion.div>

            <div className="grid-services">
              {services.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 50, rotateX: -30 }}
                  whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ 
                    y: -10, 
                    rotateY: 5,
                    scale: 1.05,
                    transition: { duration: 0.3 }
                  }}
                  style={{ transformStyle: "preserve-3d" }}
                  className="service-card-group"
                >
                  {/* Glow Effect */}
                  <div className={`service-card-glow ${service.gradient}`} />
                  
                  {/* Card */}
                  <div className="service-card">
                    {/* Image Section */}
                    <div className="service-image">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className={`absolute inset-0 bg-linear-to-br ${service.gradient} opacity-60 mix-blend-overlay`} />
                      
                      {/* Icon */}
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: index * 0.2 }}
                        className="absolute top-4 right-4"
                      >
                        <div className={`service-icon ${service.gradient}`}>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Content */}
                    <div className="service-content">
                      <h3 className="service-title">
                        {service.title}
                      </h3>
                      <p className="service-description">
                        {service.description}
                      </p>
                      <motion.button 
                        whileHover={{ x: 5 }}
                        className="service-button group/btn"
                      >
                        <span>Explore</span>
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-2 transition-transform" />
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-container">
            <div className="grid-1-col lg:grid-2-col gap-16 items-center">
              {/* Left - Features Grid */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 6, repeat: Infinity }}
                  className="inline-block mb-6"
                >
                  <Cpu className="w-16 h-16 text-cyan-400" />
                </motion.div>
                <h2 className="text-4xl md:text-5xl font-bold mb-12 gradient-text">
                  Built for the Future
                </h2>
                
                <div className="grid-features">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="feature-card-group"
                    >
                      <div className="feature-card-glow" />
                      <div className="feature-card">
                        <motion.div
                          animate={{ rotate: [0, 360] }}
                          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                          className="feature-icon"
                        >
                          <feature.icon className="w-7 h-7 text-white" />
                        </motion.div>
                        <h3 className="feature-title">{feature.title}</h3>
                        <p className="feature-description">{feature.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Right - Animated Illustration */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="relative">
                  {/* Center Circle */}
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="mx-auto w-64 h-64 rounded-full bg-linear-to-br from-cyan-500 via-blue-500 to-purple-500 flex items-center justify-center shadow-2xl"
                    style={{ animation: "glow 3s ease-in-out infinite" }}
                  >
                    <Smartphone className="w-32 h-32 text-white" />
                  </motion.div>

                  {/* Orbiting Elements */}
                  {[Shield, Zap, Lock, Globe].map((Icon, i) => (
                    <motion.div
                      key={i}
                      animate={{ rotate: 360 }}
                      transition={{ 
                        duration: 10 + i * 2, 
                        repeat: Infinity, 
                        ease: "linear"
                      }}
                      className="absolute top-1/2 left-1/2 w-full h-full"
                      style={{ transformOrigin: "0 0" }}
                    >
                      <motion.div
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
                        className="absolute -translate-x-1/2 -translate-y-1/2"
                        style={{ 
                          left: `${Math.cos((i * Math.PI) / 2) * 150}px`,
                          top: `${Math.sin((i * Math.PI) / 2) * 150}px`
                        }}
                      >
                        <div className="w-16 h-16 backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20 flex items-center justify-center shadow-lg">
                          <Icon className="w-8 h-8 text-cyan-400" />
                        </div>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-container">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
                Loved by Millions
              </h2>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Join over 2 million satisfied users across Nigeria
              </p>
            </motion.div>

            <div className="grid-testimonials">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.name}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="testimonial-card-group"
                >
                  <div className="testimonial-card-glow" />
                  <div className="testimonial-card">
                    {/* Stars */}
                    <div className="testimonial-stars">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          initial={{ scale: 0, rotate: -180 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          transition={{ delay: index * 0.2 + i * 0.1 }}
                        >
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                    
                    <p className="testimonial-content">
                      "{testimonial.content}"
                    </p>
                    
                    <div className="testimonial-author">
                      <div className="author-avatar">
                        <div className="author-avatar-glow" />
                        <img 
                          src={testimonial.avatar} 
                          alt={testimonial.name}
                          className="author-avatar-img"
                        />
                      </div>
                      <div className="author-info">
                        <div className="author-name">{testimonial.name}</div>
                        <div className="author-role">{testimonial.role}</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-32 px-4 sm:px-6 lg:px-8 z-10">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="cta-container"
            >
              {/* Animated Border */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="cta-border"
              />
              
              <div className="cta-content">
                <motion.div
                  animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="cta-icon"
                >
                  <div className="cta-icon-circle">
                    <Sparkles className="w-10 h-10 text-white" />
                  </div>
                </motion.div>

                <h2 className="cta-title">
                  Ready to Transform Your Finances?
                </h2>
                
                <p className="cta-description">
                  Join over 2 million Nigerians experiencing the future of digital payments. 
                  Get ₦500 free credit on your first transaction!
                </p>

                <div className="cta-buttons">
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(6, 182, 212, 0.8)" }}
                    whileTap={{ scale: 0.95 }}
                    className="cta-primary-button"
                  >
                    <motion.div
                      animate={{ x: ["-100%", "100%"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                      className="cta-shine"
                    />
                    <a
                      href="https://github.com/Olamide-00/Payverve_web_app/releases/download/payverve100/Payverve100.apk"
                      download
                      className="relative flex items-center justify-center space-x-3 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-all"
                    >
                      <Download className="w-6 h-6" />
                      <span>Download App Now</span>
                    </a>
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cta-secondary-button"
                    onClick={() => setShowPrivacyModal(true)}
                  >
                    View Privacy Policy
                  </motion.button>
                </div>

                {/* Trust Indicators */}
                <div className="trust-indicators">
                  {[
                    { icon: Shield, text: "Bank-Grade Security" },
                    { icon: Zap, text: "Instant Processing" },
                    { icon: Users, text: "24/7 Support" }
                  ].map((item, i) => (
                    <motion.div
                      key={item.text}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="trust-item"
                    >
                      <item.icon className="w-5 h-5" />
                      <span className="trust-text">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="max-w-container">
            <div className="text-center mb-12">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="footer-logo"
              >
                <div className="footer-logo-circle">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </motion.div>
              
              <h3 className="footer-title">PayVerve</h3>
              <p className="footer-description">
                Pioneering the future of digital payments in Nigeria. Fast, secure, and accessible for everyone.
              </p>
            </div>

            <div className="footer-links">
              {[
                { title: "Product", links: ["Features", "Pricing", "Security", "Updates"] },
                { title: "Company", links: ["About Us", "Careers", "Press", "Partners"] },
                { title: "Resources", links: ["Blog", "Help Center", "Contact", "FAQ"] },
                { 
                  title: "Legal", 
                  links: [
                    <button key="privacy" onClick={() => setShowPrivacyModal(true)} className="footer-link">
                      Privacy Policy
                    </button>,
                    <button key="terms" onClick={() => {
                      // Open Terms in new tab
                      window.open('#terms', '_blank');
                    }} className="footer-link flex items-center gap-1">
                      Terms <ExternalLink className="w-3 h-3" />
                    </button>,
                    "Compliance",
                    "Licenses"
                  ]
                }
              ].map((section, i) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  <h4 className="footer-section-title">{section.title}</h4>
                  <ul className="footer-links-list">
                    {section.links.map((link, index) => (
                      <li key={index}>
                        {typeof link === 'string' ? (
                          <a href="#" className="footer-link">
                            {link}
                          </a>
                        ) : (
                          link
                        )}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <div className="footer-bottom">
              <p className="footer-copyright">
                © 2024 PayVerve. All rights reserved. Building the future of finance.
              </p>
              
              {/* Quick Privacy Link */}
              <div className="mt-6">
                <button 
                  onClick={() => setShowPrivacyModal(true)}
                  className="text-sm text-cyan-400 hover:text-cyan-300 flex items-center gap-1 mx-auto"
                >
                  <Shield className="w-4 h-4" />
                  View Privacy Policy
                </button>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}