"use client";
import { motion } from "framer-motion";
import { CircleAlert } from "lucide-react";
import { problemData } from "../../data/problemData";
import Image from "next/image";

export default function ProblemSection() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen py-6 px-4 mt-10 lg:mt-20">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mx-auto">
          <div className="flex items-center justify-center gap-2 bg-linear-to-b from-[#021F59] to-[#7186FF] p-0.5 rounded-md shadow-sm">
            <div className="bg-white rounded-md px-6 py-2">
              <div className="flex items-center gap-2 text-[#7186FF]">
                <CircleAlert className="w-5 h-5" />
                <h3 className="font-normal font-host-grotesk text-xl">
                  Problem.
                </h3>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mx-auto mt-12 mb-16">
          <h2 className="font-bold text-4xl md:text-5xl 2xl:text-8xl font-fredoka text-[#021F59] mb-4">
            Schools Still Run on <span className="text-[#7186FF]">Paper</span>
          </h2>
          <p className="font-host-grotesk font-normal text-lg md:text-xl text-[#475569] max-w-3xl mx-auto">
            Accountability gaps and manual errors slow school growth and student
            success
          </p>
        </motion.div>

        {/* Problem Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-sm sm:max-w-xl md:max-w-4xl xl:max-w-5xl mx-auto mb-20">
          {problemData.map((problem, index) => (
            <motion.div
              key={problem.id}
              initial={{ y: 50, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                delay: 0.2 * index,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group">
              <div className="bg-linear-to-b from-[#021F59] to-[#7186FF] p-0.5 rounded-2xl h-full">
                <div className="bg-white rounded-2xl p-6 h-full hover:bg-gray-50 transition-colors duration-300">
                  <div className="flex flex-col h-full">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                      className="mb-6">
                      <Image
                        src={`/${problem.image}`}
                        alt={problem.alt}
                        width={300}
                        height={200}
                        className="w-full h-48 object-cover rounded-lg shadow-sm"
                      />
                    </motion.div>

                    <div className="flex-1 font-host-grotesk">
                      <h3 className="text-xl font-bold text-[#021F59] mb-3 group-hover:text-[#7186FF] transition-colors duration-300">
                        {problem.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {problem.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
}
