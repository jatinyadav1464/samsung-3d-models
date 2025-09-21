import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Plus, MessageCircle, Share, Info } from "lucide-react";

const FloatingButtons = () => {
  const [showCard, setShowCard] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const isVisible = showCard || hovered;

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="fixed right-4 bottom-4 md:right-6 md:bottom-6 flex flex-col gap-3 z-50 items-end">
      {/* Main action buttons */}
      <AnimatePresence>
        {expanded && (
          <>
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              transition={{ duration: 0.2 }}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-cyan-500 text-white flex items-center justify-center shadow-lg hover:shadow-cyan-400/50 hover:scale-110 active:scale-95 transition-all duration-300"
            >
              <Share size={20} />
            </motion.button>
            
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              transition={{ duration: 0.2, delay: 0.1 }}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg hover:shadow-blue-400/50 hover:scale-110 active:scale-95 transition-all duration-300"
            >
              <MessageCircle size={20} />
            </motion.button>
            
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              transition={{ duration: 0.2, delay: 0.2 }}
              className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-purple-500 text-white flex items-center justify-center shadow-lg hover:shadow-purple-400/50 hover:scale-110 active:scale-95 transition-all duration-300"
            >
              <Info size={20} />
            </motion.button>
          </>
        )}
      </AnimatePresence>

      {/* Heart Button with Hover + Click */}
      <div className="relative">
        <motion.button
          onClick={() => setShowCard(!showCard)}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-pink-500 text-white flex items-center justify-center shadow-lg hover:shadow-pink-400/50 transition-all duration-300"
        >
          <Heart size={20} fill="currentColor" />
        </motion.button>

        {/* Animated Card */}
        <AnimatePresence>
          {isVisible && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="absolute right-14 bottom-0 bg-white text-gray-800 rounded-xl shadow-xl px-4 py-3 w-56"
            >
              <p className="font-semibold text-sm md:text-base text-center">
                Made by <span className="text-pink-500">Jatin </span>with ❤️.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Main Plus Button */}
      <motion.button
        onClick={toggleExpanded}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: expanded ? 45 : 0 }}
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-cyan-600 text-white flex items-center justify-center shadow-lg hover:shadow-cyan-400/50 transition-all duration-300"
      >
        <Plus size={24} />
      </motion.button>
    </div>
  );
};

export default FloatingButtons;