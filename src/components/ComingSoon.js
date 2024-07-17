// src/components/ComingSoon.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './Button'; // Adjust the path if necessary
import { motion } from 'framer-motion'; // Make sure to install framer-motion

const ComingSoon = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#6a5af9] to-[#d66efd] text-white px-4 py-6 sm:px-8 sm:py-12">
      <motion.h1
        className="text-4xl font-bold mb-4"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Coming Soon
      </motion.h1>
      <motion.p
        className="text-lg mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        We are working hard to bring you this feature. Stay tuned!
      </motion.p>
      <div className="text-center">
        {['Movies', 'Events', 'Travel'].map((section, index) => (
          <motion.div
            key={index}
            className="mb-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 * index }}
          >
            <h2 className="text-xl font-semibold mb-2">{section}</h2>
            <p className="text-lg">
              {section === 'Movies' && 'Sell Your Extra Seats, Buy Your Favorite Shows'}
              {section === 'Events' && 'From Unwanted Tickets to Unforgettable Moments'}
              {section === 'Travel' && 'Swap Extra Tickets for New Adventures'}
            </p>
          </motion.div>
        ))}
      </div>
      <Button
        variant="primary"
        onClick={() => navigate('/')}  
        className="mt-8 px-6 py-3 bg-primary rounded-lg text-white font-semibold hover:bg-primary-dark transition-colors duration-300"
      >
        Go Back
      </Button>
    </div>
  );
};

export default ComingSoon;
