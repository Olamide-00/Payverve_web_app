// src/components/Navbar/FuturisticNavbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, User, Mail, Home, Sparkles, Menu, X } from 'lucide-react';

export function FuturisticNavbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', icon: Home, label: 'Home' },
    { path: '/about', icon: User, label: 'About' },
    { path: '/contact', icon: Mail, label: 'Contact' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Sticky Header */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            
            {/* Left: Logo & Name */}
            <div className="flex items-center space-x-4">
              {/* Logo */}
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              
              {/* Name with spacing */}
              <div className="w-px h-6 bg-gray-600/50"></div>
              
              <span className="text-xl font-semibold text-white">
                PayVerve
              </span>
            </div>

            {/* Center: Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <NavItem 
                  key={item.path} 
                  item={item} 
                  isActive={isActive(item.path)} 
                />
              ))}
            </div>

            {/* Right: Download Button & Mobile Menu */}
            <div className="flex items-center space-x-4">
              {/* Download Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="hidden md:flex items-center space-x-2 bg-cyan-600 hover:bg-cyan-700 px-6 py-2.5 rounded-lg font-medium text-white transition-colors duration-200"
              >
                <Download className="w-4 h-4" />
                <span>Download</span>
              </motion.button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-gray-800 hover:bg-gray-700 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5 text-white" />
                ) : (
                  <Menu className="w-5 h-5 text-white" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700/50">
            <div className="px-6 py-4 space-y-4">
              {/* Mobile Navigation Items */}
              {navItems.map((item) => (
                <MobileNavItem
                  key={item.path}
                  item={item}
                  isActive={isActive(item.path)}
                  onClick={() => setIsMobileMenuOpen(false)}
                />
              ))}
              
              {/* Mobile Download Button */}
              <button className="w-full flex items-center justify-center space-x-2 bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg font-medium text-white transition-colors">
                <Download className="w-4 h-4" />
                <span>Download App</span>
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div className="h-16" />
    </>
  );
}

// Desktop Nav Item Component
function NavItem({ item, isActive }) {
  const Icon = item.icon;

  return (
    <Link to={item.path}>
      <div className={`relative px-3 py-2 rounded-md transition-colors duration-200 ${
        isActive
          ? 'text-cyan-400 font-medium'
          : 'text-gray-300 hover:text-white'
      }`}>
        <div className="flex items-center space-x-2">
          <Icon className="w-4 h-4" />
          <span>{item.label}</span>
        </div>
        
        {/* Active indicator */}
        {isActive && (
          <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-cyan-400 rounded-full" />
        )}
      </div>
    </Link>
  );
}

// Mobile Nav Item Component
function MobileNavItem({ item, isActive, onClick }) {
  const Icon = item.icon;
  
  return (
    <Link to={item.path} onClick={onClick}>
      <div className={`flex items-center space-x-3 p-3 rounded-lg transition-colors ${
        isActive
          ? 'bg-cyan-500/10 text-cyan-400 border border-cyan-500/20'
          : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
      }`}>
        <Icon className="w-5 h-5" />
        <span className="font-medium">{item.label}</span>
      </div>
    </Link>
  );
}