"use client";
import { motion, Variants } from "framer-motion";

const footerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Faster stagger for better feel
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function FooterSection() {
  // Dynamically get the current year
  const currentYear = new Date().getFullYear();

  return (
    <motion.footer
      className="w-full bg-white pt-16 pb-6 md:pb-0 px-4 overflow-hidden relative flex flex-col items-center justify-center"
      initial="hidden"
      whileInView="visible" // Animates when it scrolls into view
      viewport={{ once: true }}
      variants={footerVariants}>
      {/* Logo and Tagline */}
      <motion.div
        className="flex flex-col items-center gap-4 mt-20 mb-1 font-host-grotesk"
        variants={itemVariants}>
        <h2 className="font-bold text-4xl xl:text-5xl text-black">
          Class<span className="text-[#7186FF]">Record</span>
        </h2>
        <p className="text-slate-600 font-normal max-w-md text-sm text-center px-6">
          School Management & Student Engagement Platform. Built for emerging
          markets.
        </p>
      </motion.div>

      <motion.div
        className="w-full max-w-6xl h-px bg-linear-to-r from-transparent via-[#7186FF] to-transparent opacity-50 my-10"
        variants={itemVariants}
      />

      {/* Copyright with Dynamic Date */}
      <motion.div className="font-host-grotesk mb-10" variants={itemVariants}>
        <p className="text-slate-500 text-sm text-center">
          © {currentYear} ClassRecord. All rights reserved.
        </p>
      </motion.div>

      {/* Giant Background Text */}
      <motion.div
        className="flex justify-center items-center w-full md:overflow-hidden"
        variants={itemVariants}>
        <h2 className="translate-y-10 font-fredoka font-bold text-[12vw] leading-none text-black/80 select-none whitespace-nowrap">
          Class<span className="text-[#7186FF]/80">Record</span>
        </h2>
      </motion.div>
    </motion.footer>
  );
}
