"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { SendHorizontal } from "lucide-react";

export default function CTASection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative min-h-screen py-20 px-4 bg-slate-100 overflow-hidden flex items-center justify-center">
      {/* Soft Glow in the background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-150 bg-slate-200/60 blur-[120px] rounded-full" />

      <div className="relative z-10 flex flex-col justify-center items-center w-full max-w-4xl">
        {/* DONUT AND CONTENT WRAPPER */}
        <div className="relative flex items-center justify-center w-full">
          {/* THE DONUT (Background Layer) */}
          <div className="relative">
            <div className="bg-[#7186FF] backdrop-blur-3xl rounded-full h-50 w-50 md:h-112.5 md:w-112.5 border border-white/40 shadow-sm flex items-center justify-center opacity-50">
              {/* Inner hole matches the gradient of your brand */}
              <div className="bg-slate-100 rounded-full h-30 w-30 md:h-65 md:w-65 border border-white/20"></div>
            </div>
            {/* Purple Light Leak behind donut */}
            <div className="absolute -inset-10 bg-[#7186FF]/80 blur-[250px] -z-10 rounded-full"></div>
          </div>

          {/* THE CONTENT (Overlay Layer) */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}>
              <h2 className="text-[#021F59] font-fredoka text-4xl md:text-6xl font-medium xl:font-bold mb-6 leading-tight">
                Ready to take your school digital?
              </h2>
              <p className="text-[#475569] font-host-grotesk text-lg md:text-xl max-w-md mx-auto font-normal xl:font-medium">
                Join our early deployment phase and help shape the future of
                education management in your region.
              </p>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="flex flex-col sm:flex-row gap-12 justify-center items-center mt-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="">
                  <Button
                    variant="primary"
                    size="lg"
                    className="group text-lg hover:scale-105 transition-transform duration-300 border border-white">
                    Request Early Access
                    <span className="bg-white rounded-md ml-2 p-1">
                      <SendHorizontal className="h-4 w-4 text-black" />
                    </span>
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="">
                  <Button
                    variant="secondary"
                    size="lg"
                    className="font-medium text-lg border border-black">
                    Contact the Team
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
