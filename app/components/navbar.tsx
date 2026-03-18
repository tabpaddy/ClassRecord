"use client";

import { Button } from "../ui/button";
import { GraduationCap, Menu, X, SendHorizontal } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("");
  const [scroll, setScroll] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 40) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isMenuOpen]);

  // Close menu on click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        isMenuOpen &&
        !(e.target as Element).closest(".mobile-menu-container")
      ) {
        closeMenu();
      }
    };
    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const sections = ["features", "How-It-Works", "roles"]; // IDs of your sections

    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Detects when section is in the middle 20% of screen
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveNav(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      // FIXED: Only use 'fixed' on mobile when scrolling. Large screens stay 'absolute'.
      className={`${
        scroll ? "fixed md:absolute" : "absolute"
      } top-0 md:top-10 left-0 right-0 z-50 transition-all duration-300`}>
      <div
        className={`mx-auto px-4 py-2 md:py-0 sm:px-6 lg:px-8 transition-all duration-500
      ${
        scroll
          ? "bg-[#021F59E5]/90 backdrop-blur-2xl rounded-b-xl md:bg-white md:rounded-2xl" // Mobile: Blue/Scrolled | Desktop: Always White
          : "bg-transparent md:bg-white md:rounded-2xl"
      } 
      md:shadow-lg md:max-w-182.5 lg:max-w-4xl 2xl:max-w-6xl md:border md:border-[#7186FF]/20 md:backdrop-blur-sm`}>
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center">
            <div className="shrink-0 flex items-center">
              <GraduationCap className="h-8 w-8 text-white/80 md:text-black" />
              <span className="ml-2 text-xl lg:text-2xl font-medium text-white/80 md:text-black">
                Class<span className="text-[#7186FF]">Record</span>
              </span>
            </div>
          </motion.div>

          {/* Desktop menu - Centered */}
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:flex items-center absolute left-1/2 transform -translate-x-1/2">
            <div className="flex space-x-8 md:space-x-2 lg:space-x-8 relative">
              {[
                { name: "Features", href: "#features", id: "features" },
                {
                  name: "How It Works",
                  href: "#How-It-Works",
                  id: "How-It-Works",
                },
                { name: "Roles", href: "#roles", id: "roles" },
              ].map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setActiveNav(link.id)}
                  className={`relative px-2 py-1 transition-colors duration-300 hover:text-[#7186FF] ${
                    activeNav === link.id ? "text-[#7186FF]" : "text-black"
                  }`}>
                  {link.name}

                  {/* The Magic Sliding Underline */}
                  {activeNav === link.id && (
                    <motion.div
                      layoutId="activeUnderline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#7186FF]"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Desktop CTA Button - Right */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden md:flex items-center">
            <Button
              variant="primary"
              size="sm"
              className="group text-lg md:text-md lg:text-lg">
              Get Early Access
              <span className="bg-white rounded-md ml-2 p-1">
                <SendHorizontal className="h-4 w-4 text-black" />
              </span>
            </Button>
          </motion.div>

          {/* Mobile menu button */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="bg-white/20 backdrop-blur-sm text-white hover:text-[#7186FF] focus:outline-none p-3 rounded-lg border border-white/20 hover:border-[#7186FF]/50 transition-all duration-300">
              <motion.div
                animate={{ rotate: isMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}>
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </motion.div>
            </button>
          </motion.div>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden">
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="absolute top-20 left-4 right-4 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-[#7186FF]/20 mobile-menu-container">
                <div className="px-6 py-6 space-y-4">
                  <motion.a
                    href="#features"
                    onClick={closeMenu}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                    className={`${
                      activeNav === "features" ? "text-[#7186FF]" : "text-black"
                    } block hover:text-[#7186FF] transition-colors py-3 text-lg font-medium`}>
                    Features
                  </motion.a>
                  <motion.a
                    href="#How-It-Works"
                    onClick={closeMenu}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className={`${
                      activeNav === "How-It-Works" ? "text-[#7186FF]" : "text-black"
                    } block hover:text-[#7186FF] transition-colors py-3 text-lg font-medium`}>
                    How It Works
                  </motion.a>
                  <motion.a
                    href="#roles"
                    onClick={closeMenu}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 }}
                    className={`${
                      activeNav === "roles" ? "text-[#7186FF]" : "text-black"
                    } block hover:text-[#7186FF] transition-colors py-3 text-lg font-medium`}>
                    Roles
                  </motion.a>
                  
                  <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 0.4 }}
                    className="pt-4 border-t border-gray-200">
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full group text-lg py-8"
                      onClick={closeMenu}>
                      Get Early Access
                      <span className="bg-white rounded-md ml-3 p-1">
                        <SendHorizontal className="h-5 w-5 text-black" />
                      </span>
                    </Button>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
