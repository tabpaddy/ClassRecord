"use client";
import { motion } from "framer-motion";
import { CircleQuestionMark, School } from "lucide-react";
import Image from "next/image";

export default function WhySection() {
  return (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="min-h-screen py-6 px-4 mt-10 lg:mt-20 bg-slate-50">
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex justify-center mx-auto">
          <div className="flex items-center justify-center gap-2 bg-linear-to-b from-[#021F59] to-[#7186FF] p-0.5 rounded-md shadow-sm">
            <div className="bg-white rounded-md px-6 py-2">
              <div className="flex items-center gap-2 text-[#7186FF]">
                <CircleQuestionMark className="w-5 h-5" />
                <h3 className="font-normal font-host-grotesk text-xl">
                  Why ClassRecord.
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
          <h2 className="font-bold text-4xl md:text-5xl 2xl:text-8xl font-fredoka text-[#0F172A] mb-4">
            One system for everything{" "}
            <span className="text-[#7186FF]">schools</span> need
          </h2>
          <p className="font-host-grotesk font-normal text-lg md:text-xl px-16 text-[#475569] max-w-3xl mx-auto">
            Accountability gaps and manual errors slow school growth and student
            success
          </p>
        </motion.div>

        {/* For Schools */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="my-12 md:flex md:items-center md:gap-8 mx-auto max-w-sm sm:max-w-xl md:max-w-4xl xl:max-w-5xl">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="md:flex-1 mb-6 md:mb-0 order-2 md:order-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#7186FF] rounded-lg p-3">
                <School className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium font-host-grotesk text-xl md:text-2xl text-[#021F59]">
                For Schools
              </h3>
            </div>
            <h3 className="font-fredoka font-bold text-2xl md:text-3xl text-[#0F172A] mb-3">
              Total Control & Transparency
            </h3>
            <p className="font-normal font-host-grotesk text-base text-[#475569] leading-relaxed">
              Digitized records, automated compliance reporting, and real‑time
              oversight across academics, finance, and operations.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="md:flex-1 order-1 md:order-2"
            whileHover={{ scale: 1.02 }}>
            <Image
              src={"/images/why1.png"}
              alt="Schools can manage everything from one platform"
              width={437}
              height={271}
              className="shadow-lg rounded-xl w-full h-auto md:w-full md:h-auto border-2 border-[#7186FF]"
            />
          </motion.div>
        </motion.div>

        {/* For Teachers */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="my-12 md:flex md:items-center md:gap-8 mx-auto max-w-5xl">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="md:flex-1 mb-6 md:mb-0 order-1 md:order-2 ">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#7186FF] rounded-lg p-3">
                <School className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium font-host-grotesk text-xl md:text-2xl text-[#021F59]">
                For Teachers
              </h3>
            </div>
            <h3 className="font-fredoka font-bold text-2xl md:text-3xl text-[#0F172A] mb-3">
              Simplified Workflows
            </h3>
            <p className="font-normal font-host-grotesk text-base text-[#475569] leading-relaxed">
              Instant attendance marking, easy grade entry, and reduced admin
              load on any device — so teaching stays the focus.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            className="md:flex-1 mb-6 md:mb-0 order-2 md:order-1">
            <Image
              src={"/images/why2.png"}
              alt="Teachers can streamline their workflow with instant attendance and grading"
              width={437}
              height={271}
              className="shadow-lg rounded-xl w-full h-auto md:w-full md:h-auto border-2 border-[#7186FF]"
            />
          </motion.div>
        </motion.div>

        {/* For Parents & Students */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="my-12 md:flex md:items-center md:gap-8 mx-auto max-w-5xl mb-8">
          <motion.div
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="md:flex-1 mb-6 md:mb-0 order-2 md:order-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-[#7186FF] rounded-lg p-3">
                <School className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-medium font-host-grotesk text-xl md:text-2xl text-[#021F59]">
                For Parents & Students
              </h3>
            </div>
            <h3 className="font-fredoka font-bold text-2xl md:text-3xl text-[#0F172A] mb-3">
              Connected Learning
            </h3>
            <p className="font-normal font-host-grotesk text-base text-[#475569] leading-relaxed">
              Real‑time alerts, performance tracking, and direct access to
              classroom progress for stronger engagement and support.
            </p>
          </motion.div>
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
            className="md:flex-1 order-1 md:order-2"
            whileHover={{ scale: 1.02 }}>
            <Image
              src={"/images/why3.png"}
              alt="Parents and students stay connected with real-time updates"
              width={437}
              height={271}
              className="shadow-lg rounded-xl w-full h-auto md:w-full md:h-auto border-2 border-[#7186FF]"
            />
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  );
}
