// src/pages/Dashboard.jsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export function Dashboard() {
  return (
    <div className="relative z-10 flex items-center justify-center h-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-black/20 backdrop-blur-lg border border-cyan-500/30 rounded-2xl p-8 max-w-2xl w-full mx-4"
      >
        <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-emerald-400 bg-clip-text text-transparent">
          Dashboard
        </h2>
        <p className="text-cyan-200/80 mb-6">
          Your futuristic dashboard will appear here.
        </p>
        <Link to="/">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-cyan-500/10 border border-cyan-500/30 px-6 py-3 rounded-xl text-cyan-300 font-semibold"
          >
            Back Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}