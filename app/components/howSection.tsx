"use client";
import { motion, Variants } from "framer-motion";
import { Network } from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // This triggers children one by one
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function HowSection() {
  return (
    <motion.section
      className="min-h-screen py-6 px-4 mt-10 lg:mt-20 bg-slate-100"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}>
      <div className="sm:flex mx-auto sm:justify-center gap-2 md:gap-5 lg:gap-10 max-w-xl md:max-w-2xl lg:max-w-4xl mt-28 mb-10">
        <motion.div
          variants={itemVariants}
          id="How-It-Works"
          className="flex-1 justify-items-center sm:justify-items-start text-center sm:text-left">
          <div className="bg-linear-to-b from-[#021F59] to-[#7186FF] p-0.5 rounded-sm shadow-sm w-fit">
            <div className="bg-white rounded-sm px-4 py-2">
              <div className="flex items-center gap-2 text-[#7186FF]">
                <Network className="w-5 h-5" />
                <h3 className="font-normal font-host-grotesk text-xl">
                  How It Works.
                </h3>
              </div>
            </div>
          </div>

          <motion.div className="mt-10 mb-16" variants={itemVariants}>
            <h2 className="font-bold text-2xl md:text-4xl font-fredoka text-[#021F59] mb-1.5 md:mb-4">
              From setup to fully{" "}
              <span className="text-[#7186FF]">operational</span> in minutes.
            </h2>
            <p className="font-host-grotesk font-normal text-lg md:text-xl text-[#475569] max-w-3xl">
              Smart tools that connect teachers, students, and guardians
              seamlessly
            </p>
          </motion.div>
        </motion.div>

        <div className="flex-1">
          {[
            {
              id: "01",
              title: "Onboard",
              text: "Add classes, subjects, and grading schemes.",
            },
            {
              id: "02",
              title: "Register",
              text: "Import students and assign them to guardians.",
            },
            {
              id: "03",
              title: "Teachers Work",
              text: "Teachers mark attendance and scores digitally.",
            },
            {
              id: "04",
              title: "Visibility",
              text: "Admins and parents get real-time dashboards.",
            },
          ].map((step) => (
            <motion.div
              key={step.id}
              className="mb-6 bg-white rounded-md shadow-md p-4 group-hover:shadow-2xl transition-shadow duration-300"
              variants={itemVariants}>
              <div className="mb-2 flex items-center gap-3.5">
                <div className="bg-linear-to-b from-[#021F59] to-[#7186FF] p-0.5 rounded-md shadow-sm">
                  <div className="bg-white rounded-md px-3 py-3">
                    <p className="font-bold font-host-grotesk text-lg md:text-2xl text-[#7186FF] group-hover:text-[#7186FF]/80 transition-colors duration-300">
                      {step.id}
                    </p>
                  </div>
                </div>
                <h3 className="font-host-grotesk font-bold text-lg md:text-2xl text-[#021F59] group-hover:text-[#021F59]/80 transition-colors duration-300">
                  {step.title}
                </h3>
              </div>
              <p className="font-host-grotesk font-normal text-sm md:text-lg text-[#475569] group-hover:text-[#475569]/80 transition-colors duration-300">
                {step.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
