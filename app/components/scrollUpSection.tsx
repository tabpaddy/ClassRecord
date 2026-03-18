"use client";

import { motion, Variants, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function ScrollUpSection() {
  const [isVisible, setIsVisible] = useState(false);

  // Parent Variants: Controls entrance and exit
  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 50, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { type: "spring", stiffness: 260, damping: 20 },
    },
    // Adding an empty hover variant here allows child variants to trigger
    hover: { scale: 1.1 },
  };

  // Child Variants: Controls the icon floating
  const iconVariants: Variants = {
    hover: {
      y: [0, -5, 0],
      transition: {
        repeat: Infinity,
        duration: 1.2,
        ease: "easeInOut",
      },
    },
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY >= 560);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.a
          drag
          onClick={scrollToTop}
          href="#"
          className="fixed bottom-15 right-6 md:right-10 z-50"
          variants={buttonVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          whileHover="hover"
          whileTap={{ scale: 0.9 }}
          role="button"
          aria-label="Scroll to top">
          <motion.div
            variants={iconVariants}
            className="bg-[#021F59] text-[#7186FF] p-3 md:p-4 rounded-xl shadow-2xl border border-white/10 backdrop-blur-sm flex items-center justify-center">
            <ArrowUp className="w-6 h-6 md:w-7 md:h-7" strokeWidth={3} />
          </motion.div>
        </motion.a>
      )}
    </AnimatePresence>
  );
}
