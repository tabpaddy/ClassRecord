"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { SendHorizontal } from "lucide-react";
import { Fredoka } from "next/font/google";
import Image from "next/image";

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  style: ["normal"],
});

export default function HeroSection() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-linear-to-b from-[#021F59E5] to-[#7186FF] text-white flex items-center relative overflow-hidden">
        {/* Donut Background */}
        <div className="absolute top-10 md:top-25 lg:top-50  inset-0 flex justify-center items-center">
          {/* Outer donut circle */}
          <div className="relative">
            <div className="bg-[#DCC8FD] rounded-full h-100 w-100 md:h-200 md:w-200  shadow-2xl opacity-50">
              {/* Inner hole - gradient background */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-linear-to-b from-[#021F59E5] to-[#7186FF] rounded-full h-62.5 w-62.5 md:h-125 md:w-125 shadow-inner"></div>
            </div>
            {/* Dark overlay layer */}
            <div className="absolute inset-0 bg-black/20 rounded-full"></div>
          </div>
        </div>

        <div className="container mx-auto px-4 py-10 relative z-10">
          <div className="text-center max-w-4xl mx-auto mt-10 md:mt-32 lg:mt-60">
            <motion.h1
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className={`${fredoka.variable} text-4xl md:text-6xl 2xl:text-8xl font-bold mt-15 mb-6`}>
              Every School. Every Student.{" "}
              <span className="text-[#ECC238]">One Platform</span>
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="text-xl lg:text-2xl mb-8 text-white/90 leading-relaxed">
              ClassRecord helps schools in emerging markets run smoothly by
              digitizing attendance, scores, parent updates, and results
              printing, all in one platform
            </motion.p>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                variant="primary"
                size="lg"
                className="group text-lg hover:scale-105 transition-transform duration-300 border border-white">
                Get Early Access
                <span className="bg-white rounded-md ml-2 p-1">
                  <SendHorizontal className="h-4 w-4 text-black" />
                </span>
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="font-medium text-lg border border-black">
                See How it works
              </Button>
            </motion.div>
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
              className="mt-12 relative z-20 -bottom-20 md:-bottom-25 mx-auto">
              <Image
                src="/images/hero-image.png"
                alt="ClassRecord platform demonstration"
                width={1007}
                height={674}
                className="rounded-md shadow-lg mx-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
