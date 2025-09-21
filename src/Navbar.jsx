import React, { useState, useRef, useEffect } from "react";
import { Home, Box, Info, Mail, Search, User, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = ({ onProductSelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);
  const [isInfoOpen, setIsInfoOpen] = useState(false);
  const [isUserOpen, setIsUserOpen] = useState(false);
  const [isMailOpen, setIsMailOpen] = useState(false);
  const [mailSent, setMailSent] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileInfoOpen, setMobileInfoOpen] = useState(false);
  const [mobileUserOpen, setMobileUserOpen] = useState(false);
  const [mobileMailOpen, setMobileMailOpen] = useState(false);

  const infoRef = useRef();
  const userRef = useRef();
  const productsRef = useRef();
  const mailRef = useRef();
  const mobileMenuRef = useRef();

  const products = [
    { id: "s23", name: "Galaxy S22 Ultra" },
    { id: "buds", name: "Samsung Buds Pro 3" },
    { id: "watch", name: "Galaxy Watch 5" },
    { id: "tab", name: "Galaxy Tab S8 Ultra" }
  ];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (infoRef.current && !infoRef.current.contains(event.target)) setIsInfoOpen(false);
      if (userRef.current && !userRef.current.contains(event.target)) setIsUserOpen(false);
      if (productsRef.current && !productsRef.current.contains(event.target)) setIsProductsOpen(false);
      if (mailRef.current && !mailRef.current.contains(event.target)) setIsMailOpen(false);
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target) && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const handleMailSend = (e) => {
    e.preventDefault();
    setMailSent(true);
    setTimeout(() => {
      setMailSent(false);
      setIsMailOpen(false);
      setMobileMailOpen(false);
    }, 2000);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full bg-[#111] bg-opacity-70 backdrop-blur-md z-50 px-4 py-3 flex justify-between items-center">
        {/* Samsung Logo */}
        <div className="flex items-center">
         <svg
          className="text-white"
          fill="currentColor"
          focusable="false"
          aria-hidden="true"
          width="130"
          height="29"
          viewBox="0 0 130 29"
          role="presentation"
        >
          <g transform="translate(-250 -7)">
            <path d="M0,13.835V12.482H4.609V14.2a1.558,1.558,0,0,0,1.724,1.6A1.509,1.509,0,0,0,8,14.6a2.237,2.237,0,0,0-.03-1.322C7.076,10.976.981,9.931.208,6.333a6.531,6.531,0,0,1-.029-2.4C.654,1.045,3.122,0,6.184,0c2.438,0,5.8.585,5.8,4.458V5.719H7.7V4.612a1.492,1.492,0,0,0-1.605-1.6,1.452,1.452,0,0,0-1.575,1.2,2.468,2.468,0,0,0,.03.922c.5,2.059,7.017,3.167,7.73,6.887a8.481,8.481,0,0,1,.029,2.921C11.892,17.893,9.336,19,6.244,19,3,19,0,17.8,0,13.835Zm55.837-.062V12.421h4.549v1.691a1.533,1.533,0,0,0,1.695,1.6,1.49,1.49,0,0,0,1.665-1.168,2.147,2.147,0,0,0-.029-1.292c-.863-2.274-6.9-3.319-7.671-6.917a6.37,6.37,0,0,1-.03-2.367c.476-2.859,2.944-3.9,5.946-3.9,2.409,0,5.739.615,5.739,4.427v1.23H63.449V4.643a1.485,1.485,0,0,0-1.575-1.6,1.4,1.4,0,0,0-1.546,1.168,2.463,2.463,0,0,0,.029.922C60.832,7.194,67.284,8.27,68,11.959a8.314,8.314,0,0,1,.029,2.89c-.416,2.952-2.943,4.028-6.005,4.028C58.811,18.877,55.837,17.678,55.837,13.773Zm16.293.647A7.18,7.18,0,0,1,72.1,13.25V.523h4.341V13.65a5.023,5.023,0,0,0,.029.677,1.682,1.682,0,0,0,3.271,0,4.852,4.852,0,0,0,.03-.677V.523h4.341V13.25c0,.339-.03.984-.03,1.169-.3,3.319-2.825,4.4-5.976,4.4S72.428,17.739,72.13,14.419Zm35.739-.185a9.539,9.539,0,0,1-.059-1.168V5.6c0-.308.029-.861.059-1.169.386-3.319,2.973-4.365,6.036-4.365,3.033,0,5.708,1.045,6.006,4.365A8.781,8.781,0,0,1,119.94,5.6v.584H115.6V5.2a3.791,3.791,0,0,0-.059-.677,1.777,1.777,0,0,0-3.42,0,3.772,3.772,0,0,0-.059.829v8.117a5.1,5.1,0,0,0,.03.677,1.707,1.707,0,0,0,1.813,1.291,1.633,1.633,0,0,0,1.754-1.291,2.554,2.554,0,0,0,.03-.677V10.883h-1.754V8.3H120v4.765a9.377,9.377,0,0,1-.06,1.168c-.3,3.228-3,4.366-6.036,4.366S108.166,17.462,107.869,14.235Zm-60.5,4.027L47.245,1.845,44.272,18.262H39.931L36.987,1.845l-.118,16.417H32.587L32.943.554h6.988L42.1,14.388,44.272.554h6.987l.386,17.708Zm-22.835,0L22.211,1.845,19.831,18.262H15.194L18.344.554h7.642l3.152,17.708Zm72.665-.184L92.884,3.352l.238,14.726H88.9V.554h6.363l4.044,14.265L99.068.554h4.251V18.078Z" transform="translate(255 12)"></path>
            <path d="M0,13.835V12.482H4.609V14.2a1.558,1.558,0,0,0,1.724,1.6A1.509,1.509,0,0,0,8,14.6a2.237,2.237,0,0,0-.03-1.322C7.076,10.976.981,9.931.208,6.333a6.531,6.531,0,0,1-.029-2.4C.654,1.045,3.122,0,6.184,0c2.438,0,5.8.585,5.8,4.458V5.719H7.7V4.612a1.492,1.492,0,0,0-1.605-1.6,1.452,1.452,0,0,0-1.575,1.2,2.468,2.468,0,0,0,.03.922c.5,2.059,7.017,3.167,7.73,6.887a8.481,8.481,0,0,1,.029,2.921C11.892,17.893,9.336,19,6.244,19,3,19,0,17.8,0,13.835Zm55.837-.062V12.421h4.549v1.691a1.533,1.533,0,0,0,1.695,1.6,1.49,1.49,0,0,0,1.665-1.168,2.147,2.147,0,0,0-.029-1.292c-.863-2.274-6.9-3.319-7.671-6.917a6.37,6.37,0,0,1-.03-2.367c.476-2.859,2.944-3.9,5.946-3.9,2.409,0,5.739.615,5.739,4.427v1.23H63.449V4.643a1.485,1.485,0,0,0-1.575-1.6,1.4,1.4,0,0,0-1.546,1.168,2.463,2.463,0,0,0,.029.922C60.832,7.194,67.284,8.27,68,11.959a8.314,8.314,0,0,1,.029,2.89c-.416,2.952-2.943,4.028-6.005,4.028C58.811,18.877,55.837,17.678,55.837,13.773Zm16.293.647A7.18,7.18,0,0,1,72.1,13.25V.523h4.341V13.65a5.023,5.023,0,0,0,.029.677,1.682,1.682,0,0,0,3.271,0,4.852,4.852,0,0,0,.03-.677V.523h4.341V13.25c0,.339-.03.984-.03,1.169-.3,3.319-2.825,4.4-5.976,4.4S72.428,17.739,72.13,14.419Zm35.739-.185a9.539,9.539,0,0,1-.059-1.168V5.6c0-.308.029-.861.059-1.169.386-3.319,2.973-4.365,6.036-4.365,3.033,0,5.708,1.045,6.006,4.365A8.781,8.781,0,0,1,119.940,5.6v.584H115.6V5.2a3.791,3.791,0,0,0-.059-.677,1.777,1.777,0,0,0-3.42,0,3.772,3.772,0,0,0-.059.829v8.117a5.1,5.1,0,0,0,.03.677,1.707,1.707,0,0,0,1.813,1.291,1.633,1.633,0,0,0,1.754-1.291,2.554,2.554,0,0,0,.03-.677V10.883h-1.754V8.3H120v4.765a9.377,9.377,0,0,1-.06,1.168c-.3,3.228-3,4.366-6.036,4.366S108.166,17.462,107.869,14.235Zm-60.5,4.027L47.245,1.845,44.272,18.262H39.931L36.987,1.845l-.118,16.417H32.587L32.943.554h6.988L42.1,14.388,44.272.554h6.987l.386,17.708Zm-22.835,0L22.211,1.845,19.831,18.262H15.194L18.344.554h7.642l3.152,17.708Zm72.665-.184L92.884,3.352l.238,14.726H88.9V.554h6.363l4.044,14.265L99.068.554h4.251V18.078Z" transform="translate(255 12)"></path>
          </g>
        </svg>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-6">
          <button className="text-white hover:text-cyan-400 transition-colors">
            <Home size={24} />
          </button>

          {/* Products Dropdown */}
          <div className="relative" ref={productsRef}>
            <button
              className="text-white hover:text-cyan-400 transition-colors flex items-center gap-1"
              onClick={() => setIsProductsOpen(!isProductsOpen)}
            >
              <Box size={24} />
              <ChevronDown size={16} />
            </button>
            <AnimatePresence>
              {isProductsOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute top-full left-0 mt-2 w-48 bg-[#111] bg-opacity-90 backdrop-blur-md rounded-lg shadow-xl py-2 z-50"
                >
                  {products.map((product) => (
                    <button
                      key={product.id}
                      className="w-full text-left px-4 py-2 text-sm text-white hover:bg-cyan-500/20 transition-colors"
                      onClick={() => {
                        onProductSelect(product.id);
                        setIsProductsOpen(false);
                      }}
                    >
                      {product.name}
                    </button>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Info Dropdown */}
          <div className="relative" ref={infoRef}>
            <button
              className="text-white hover:text-cyan-400 transition-colors"
              onClick={() => setIsInfoOpen(!isInfoOpen)}
            >
              <Info size={24} />
            </button>
            <AnimatePresence>
              {isInfoOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-80 bg-[#111] bg-opacity-90 backdrop-blur-md text-white rounded-lg shadow-lg p-4 z-50"
                >
                  <h3 className="font-semibold text-lg mb-2">Site Info</h3>
                  <p className="text-sm mb-3">
                    Explore our Samsung products and experience the 3D models interactively.
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {products.map((product) => (
                      <motion.div
                        key={product.id}
                        className="bg-[#222] p-2 rounded-lg cursor-pointer hover:bg-cyan-500/30 transition"
                        whileHover={{ scale: 1.05 }}
                        onClick={() => onProductSelect(product.id)}
                      >
                        <p className="text-white text-sm font-semibold">{product.name} Demo</p>
                        <p className="text-gray-300 text-xs">Click to view 3D model</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mail Icon */}
          <div className="relative" ref={mailRef}>
            <button
              className="mail-icon-btn"
              onClick={() => setIsMailOpen(!isMailOpen)}
            >
              <Mail size={24} />
            </button>

            <AnimatePresence>
              {isMailOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="mail-card futuristic"
                >
                  {!mailSent ? (
                    <form onSubmit={handleMailSend} className="mail-form">
                      <div className="input-group">
                        <input type="text" required />
                        <label>Your Name</label>
                      </div>
                      <div className="input-group">
                        <input type="email" required />
                        <label>Your Email</label>
                      </div>
                      <div className="input-group">
                        <textarea rows={3} required></textarea>
                        <label>Your Message</label>
                      </div>

                      <motion.button
                        type="submit"
                        className="send-btn pulse"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Send ✉️
                      </motion.button>
                    </form>
                  ) : (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                      className="mail-success"
                    >
                      <motion.span
                        initial={{ rotate: -180, opacity: 0 }}
                        animate={{ rotate: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="checkmark"
                      >
                        ✔
                      </motion.span>
                      <p>Message Sent!</p>
                    </motion.div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Search Input */}
          <div className={`relative ${isSearchOpen ? "flex" : "hidden md:flex"}`}>
            <input
              type="text"
              placeholder="Search..."
              className="w-32 md:w-40 bg-transparent border-b border-white focus:outline-none text-white px-2 pr-8 placeholder-gray-300"
            />
            <Search className="absolute right-2 bottom-1 text-white cursor-pointer" size={18} />
          </div>

          {/* Mobile Search Toggle */}
          <button
            className="md:hidden p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <Search className="text-white" size={20} />
          </button>

          {/* User Dropdown */}
          <div className="relative" ref={userRef}>
            <button
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
              onClick={() => setIsUserOpen(!isUserOpen)}
            >
              <User className="text-white" size={20} />
            </button>
            <AnimatePresence>
              {isUserOpen && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="absolute right-0 mt-2 w-48 bg-[#111] bg-opacity-90 backdrop-blur-md rounded-lg shadow-lg p-4 z-50"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                      J
                    </div>
                    <span className="text-white font-semibold">Jatin</span>
                  </div>
                  <button className="w-full text-left py-2 text-white hover:text-cyan-400">Profile</button>
                  <button className="w-full text-left py-2 text-white hover:text-cyan-400">Settings</button>
                  <button className="w-full text-left py-2 text-white hover:text-cyan-400">Logout</button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={20} className="text-white" /> : <Menu size={20} className="text-white" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed top-16 left-0 w-full bg-[#111] bg-opacity-95 backdrop-blur-md z-80 p-4"
             style={{ zIndex: 60 }}
          >
            <div className="flex flex-col gap-4">
              <button className="text-white hover:text-cyan-400 transition-colors flex items-center gap-2 py-2">
                <Home size={20} />
                <span>Home</span>
              </button>
              
              {/* Products Dropdown for Mobile */}
              <div>
                <button
                  className="text-white hover:text-cyan-400 transition-colors flex items-center gap-2 w-full py-2"
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                >
                  <Box size={20} />
                  <span>Products</span>
                  <ChevronDown size={16} className={`transform transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileProductsOpen && (
                  <div className="pl-8 mt-2">
                    {products.map((product) => (
                      <button
                        key={product.id}
                        className="w-full text-left py-2 text-white hover:text-cyan-400 transition-colors"
                        onClick={() => {
                          onProductSelect(product.id);
                          setIsMenuOpen(false);
                          setMobileProductsOpen(false);
                        }}
                      >
                        {product.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Info Dropdown for Mobile */}
              <div>
                <button
                  className="text-white hover:text-cyan-400 transition-colors flex items-center gap-2 w-full py-2"
                  onClick={() => setMobileInfoOpen(!mobileInfoOpen)}
                >
                  <Info size={20} />
                  <span>Info</span>
                  <ChevronDown size={16} className={`transform transition-transform ${mobileInfoOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileInfoOpen && (
                  <div className="pl-8 mt-2 bg-[#222] p-3 rounded-lg">
                    <h3 className="font-semibold text-white text-sm mb-2">Site Info</h3>
                    <p className="text-gray-300 text-xs mb-3">
                      Explore our Samsung products and experience the 3D models interactively.
                    </p>
                    <div className="grid grid-cols-1 gap-2">
                      {products.map((product) => (
                        <div
                          key={product.id}
                          className="bg-[#333] p-2 rounded cursor-pointer hover:bg-cyan-500/30 transition"
                          onClick={() => {
                            onProductSelect(product.id);
                            setIsMenuOpen(false);
                            setMobileInfoOpen(false);
                          }}
                        >
                          <p className="text-white text-xs font-semibold">{product.name} Demo</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Mail Dropdown for Mobile */}
              <div>
                <button
                  className="text-white hover:text-cyan-400 transition-colors flex items-center gap-2 w-full py-2"
                  onClick={() => setMobileMailOpen(!mobileMailOpen)}
                >
                  <Mail size={20} />
                  <span>Contact</span>
                  <ChevronDown size={16} className={`transform transition-transform ${mobileMailOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileMailOpen && (
                  <div className="pl-8 mt-2 bg-[#222] p-3 rounded-lg">
                    {!mailSent ? (
                      <form onSubmit={handleMailSend} className="mail-form-mobile">
                        <div className="input-group-mobile mb-3">
                          <input type="text" required className="w-full bg-[#333] text-white p-2 rounded" placeholder="Your Name" />
                        </div>
                        <div className="input-group-mobile mb-3">
                          <input type="email" required className="w-full bg-[#333] text-white p-2 rounded" placeholder="Your Email" />
                        </div>
                        <div className="input-group-mobile mb-3">
                          <textarea rows={2} required className="w-full bg-[#333] text-white p-2 rounded" placeholder="Your Message"></textarea>
                        </div>

                        <motion.button
                          type="submit"
                          className="send-btn-mobile w-full py-2 rounded bg-cyan-500 text-black font-bold"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          Send Message
                        </motion.button>
                      </form>
                    ) : (
                      <div className="mail-success-mobile text-center py-4">
                        <span className="checkmark text-cyan-500 text-2xl block mb-2">✔</span>
                        <p className="text-white">Message Sent!</p>
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* User Dropdown for Mobile */}
              <div>
                <button
                  className="text-white hover:text-cyan-400 transition-colors flex items-center gap-2 w-full py-2"
                  onClick={() => setMobileUserOpen(!mobileUserOpen)}
                >
                  <User size={20} />
                  <span>Account</span>
                  <ChevronDown size={16} className={`transform transition-transform ${mobileUserOpen ? 'rotate-180' : ''}`} />
                </button>
                {mobileUserOpen && (
                  <div className="pl-8 mt-2 bg-[#222] p-3 rounded-lg">
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                        J
                      </div>
                      <span className="text-white font-semibold text-sm">Jatin</span>
                    </div>
                    <button className="w-full text-left py-2 text-white text-sm hover:text-cyan-400">Profile</button>
                    <button className="w-full text-left py-2 text-white text-sm hover:text-cyan-400">Settings</button>
                    <button className="w-full text-left py-2 text-white text-sm hover:text-cyan-400">Logout</button>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx>{`
        .mail-icon-btn {
          color: white;
          background: transparent;
          border: none;
          cursor: pointer;
          transition: color 0.3s ease;
        }
        .mail-icon-btn:hover {
          color: cyan;
        }

        /* Glassy futuristic card */
        .mail-card.futuristic {
          position: absolute;
          right: 0;
          margin-top: 0.5rem;
          width: 340px;
          background: rgba(17, 25, 40, 0.8);
          backdrop-filter: blur(15px);
          border-radius: 16px;
          padding: 20px;
          border: 1px solid rgba(0, 255, 255, 0.2);
          box-shadow: 0 0 25px rgba(0, 255, 255, 0.2);
          animation: fadeIn 0.4s ease;
        }

        /* Floating label inputs */
        .input-group {
          position: relative;
          margin-bottom: 18px;
        }
        .input-group input,
        .input-group textarea {
          width: 100%;
          background: transparent;
          border: 1px solid #555;
          border-radius: 10px;
          padding: 12px;
          color: white;
          font-size: 14px;
          outline: none;
          transition: all 0.3s ease;
        }
        .input-group label {
          position: absolute;
          left: 12px;
          top: 12px;
          color: #aaa;
          font-size: 14px;
          pointer-events: none;
          transition: 0.3s ease;
        }
        .input-group input:focus,
        .input-group textarea:focus {
          border-color: cyan;
          box-shadow: 0 0 12px rgba(0, 255, 255, 0.6);
        }
        .input-group input:focus + label,
        .input-group input:valid + label,
        .input-group textarea:focus + label,
        .input-group textarea:valid + label {
          top: -8px;
          left: 8px;
          font-size: 12px;
          color: cyan;
          background: rgba(17, 25, 40, 0.9);
          padding: 0 4px;
          border-radius: 6px;
        }

        /* Send button with pulse effect */
        .send-btn {
          width: 100%;
          padding: 12px;
          border: none;
          border-radius: 12px;
          background: linear-gradient(135deg, cyan, #00eaff);
          color: black;
          font-weight: bold;
          font-size: 16px;
          cursor: pointer;
          transition: transform 0.3s ease;
        }
        .send-btn:hover {
          background: linear-gradient(135deg, #00c4c4, cyan);
        }

        /* Pulse animation */
        .pulse {
          animation: pulseGlow 2s infinite;
        }
        @keyframes pulseGlow {
          0% { box-shadow: 0 0 0px rgba(0, 255, 255, 0.7); }
          50% { box-shadow: 0 0 20px rgba(0, 255, 255, 0.9); }
          100% { box-shadow: 0 0 0px rgba(0, 255, 255, 0.7); }
        }

        /* Success message */
        .mail-success {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px;
        }
        .checkmark {
          font-size: 36px;
          color: cyan;
        }
        .mail-success p {
          margin-top: 8px;
          font-size: 16px;
          font-weight: 500;
          color: white;
        }

        /* Fade animation */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </>
  );
};

export default Navbar;