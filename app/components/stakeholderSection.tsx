"use client";
import { motion, Variants } from "framer-motion";
import { Cog, GraduationCap, UserCog, UserRoundPen, Users } from "lucide-react";

// Use these for the staggered pop-in effect
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function StakeholderSection() {
  const stakeholders = [
    {
      title: "Administrators",
      icon: <UserCog />,
      items: [
        "Institutional oversight",
        "Financial tracking",
        "Staff management",
      ],
    },
    {
      title: "Teachers",
      icon: <UserRoundPen />,
      items: ["Reduced paperwork", "Easy grading", "Lesson planning"],
    },
    {
      title: "Parents",
      icon: <Users />,
      items: ["Real-time progress", "Instant alerts", "Fee transparency"],
    },
    {
      title: "Students",
      icon: <GraduationCap />,
      items: ["Performance tracking", "Digital access", "Personal records"],
    },
  ];

  return (
    <section id="roles" className="min-h-screen py-16 px-4 my-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="flex justify-center mb-8">
          <div className="bg-linear-to-b from-[#021F59] to-[#7186FF] p-0.5 rounded-md shadow-sm">
            <div className="bg-white rounded-md px-3 py-1.5 sm:px-6 sm:py-2 flex items-center gap-2 text-[#7186FF]">
              <Cog className="w-5 h-5" />
              <h3 className="font-host-grotesk text-lg sm:text-xl">
                Built for Every Stakeholder.
              </h3>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-center mb-16">
          <h2 className="font-bold text-3xl sm:text-4xl md:text-6xl font-fredoka text-[#0F172A] mb-6 leading-tight">
            One platform. Every role. <br /> No{" "}
            <span className="text-[#7186FF]">confusion.</span>
          </h2>
          <p className="font-host-grotesk text-lg md:text-xl text-[#475569] max-w-2xl mx-auto">
            Empowering every role with oversight, planning, grading, and
            transparent records.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-10">
          {stakeholders.map((person, index) => (
            <motion.div key={index} variants={cardVariants} className="h-full">
              <div className="h-full flex flex-col bg-linear-to-b from-[#021F59] to-[#7186FF] p-0.5 rounded-sm shadow-md">
                <div className="bg-white rounded-sm p-8 h-full flex flex-col">
                  <div className="bg-[#7186FF] rounded-md shadow-lg p-3 text-white w-fit mb-6">
                    {person.icon}
                  </div>
                  <h3 className="font-bold text-2xl text-[#0F172A] mb-4 font-host-grotesk">
                    {person.title}
                  </h3>
                  <ul className="space-y-3 mt-auto mb-14">
                    {person.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-[#475569] text-sm font-host-grotesk">
                        <span className="text-[#7186FF] mt-1.5 h-1.5 w-1.5 rounded-full bg-[#7186FF] shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
