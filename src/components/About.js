"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FaMapMarkerAlt, FaLaptopCode, FaRegSmileBeam } from "react-icons/fa";
import { PiMedalDuotone } from "react-icons/pi";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.15,
        duration: 0.6,
        ease: "easeOut",
      },
    }),
  };

  const highlights = [
    {
      icon: FaMapMarkerAlt,
      title: "Location",
      text: "Based in India",
      color:
        "bg-cyan-900/30 border-cyan-400 hover:shadow-cyan-400/30 text-cyan-400",
    },
    {
      icon: PiMedalDuotone,
      title: "Experience",
      text: "2+ years of development",
      color:
        "bg-yellow-900/30 border-yellow-400 hover:shadow-yellow-400/30 text-yellow-400",
    },
    {
      icon: FaLaptopCode,
      title: "Expertise",
      text: "UI/UX & frontend tech",
      color:
        "bg-green-900/30 border-green-400 hover:shadow-green-400/30 text-green-400",
    },
    {
      icon: FaRegSmileBeam,
      title: "Availability",
      text: "Freelance-ready & open to collabs",
      color:
        "bg-pink-900/30 border-pink-400 hover:shadow-pink-400/30 text-pink-400",
    },
  ];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-4 bg-[#0d0d0d] text-gray-300"
    >
      <motion.div
        ref={ref}
        className="max-w-6xl w-full space-y-12 text-center"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeUp}
      >
        {/* Heading */}
        <motion.h2
          className="text-5xl font-bold text-blue-400"
          variants={fadeUp}
          custom={0}
        >
          About Me
        </motion.h2>

        {/* Bio */}
        <motion.p
          className="text-xl leading-relaxed max-w-3xl mx-auto text-gray-300"
          variants={fadeUp}
          custom={1}
        >
          Hey there! 👋 I’m{" "}
          <span className="text-cyan-400 font-semibold">Manoj</span>, a frontend
          developer who loves turning creative ideas into seamless web
          experiences. I specialize in building responsive and engaging
          interfaces using <span className="text-white font-medium">React</span>
          , <span className="text-white font-medium">Next.js</span>, and{" "}
          <span className="text-white font-medium">Tailwind CSS</span>. I'm all
          about clean code, sleek UI, and collaborating to bring ideas to life.
        </motion.p>

        {/* Highlights */}
        <motion.div
          className="grid sm:grid-cols-2 gap-6 max-w-4xl mx-auto"
          variants={fadeUp}
          custom={2}
        >
          {highlights.map((item, index) => (
            <motion.div
              key={index}
              className={`flex items-center gap-4 px-6 py-5 border rounded-xl ${item.color} shadow-md transition transform hover:scale-105 hover:shadow-lg`}
              variants={fadeUp}
              custom={3 + index}
              whileHover={{ rotate: 1 }}
            >
              <motion.div
                whileHover={{ scale: 1.3, rotate: 8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {<item.icon size={28} className={item.color.split(" ")[2]} />}
              </motion.div>
              <div className="text-left">
                <div className="font-semibold text-lg text-white text-base">
                  {item.title}
                </div>
                <div className="text-md text-gray-300">{item.text}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
