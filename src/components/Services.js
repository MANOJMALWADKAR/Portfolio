"use client";
import { FaLaptopCode, FaMobileAlt, FaRocket, FaPalette,  FaAngellist, FaGripfire } from "react-icons/fa";
import {  motion } from "framer-motion";
import "./Services.css";

const services = [
  {
    icon: <FaLaptopCode size={28} />,
    title: "Web Development",
    description:
      "Crafting responsive websites with React, Next.js, and modern UI trends.",
    color: "text-cyan-400",
  },
  {
    icon: <FaMobileAlt size={28} />,
    title: "Mobile Optimization",
    description:
      "Ensuring smooth experiences across all screen sizes and devices.",
    color: "text-green-400",
  },
  {
    icon: <FaPalette size={28} />,
    title: "UI/UX Design",
    description:
      "Focusing on clean layouts, accessibility, and user-friendly flows.",
    color: "text-fuchsia-400",
  },
  {
    icon: <FaRocket size={28} />,
    title: "Performance Boost",
    description:
      "Optimizing load times, SEO, and smooth animations for better engagement.",
    color: "text-yellow-400",
  },
  {
    icon:<FaGripfire size={28}/>,
    title:'Real-Time Apps',
    description:"Building real-time chat, interview platforms, dashboards using WebSocket, WebRTC, and event-driven architecture.",
    color: "text-orange-400"
  },
  {
    icon: <FaAngellist size={28} />,
    title:"Portfolio & Personal Branding Sites",
    description:"Showcase yourself or your product with a sleek and modern portfolio site.",
    color: "text-cyan-400"
  }
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative min-h-screen flex items-center justify-center bg-[#0d0d0d] text-white overflow-hidden px-4 py-20"
    >
      {/* Floating Blobs */}
      <div className="floating-blob top-[-80px] left-[-60px]" />
      <div className="floating-blob bottom-[-80px] right-[-60px] bg-pink-500/20" />

      <div className="max-w-5xl mx-auto relative z-10">
        <h2 className="text-6xl font-bold text-blue-400 text-center mb-12">
          Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.1, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group p-6 rounded-xl border border-transparent bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm text-white transition transform"
            >
              {/* Animated gradient border */}
              <div className="absolute inset-0 rounded-xl z-[-1] border-2 border-transparent group-hover:border-blue-500 group-hover:animate-gradient-border" />

              {/* Icon + Title */}
              <div className="flex items-center space-x-4 mb-3">
                <motion.div
                  variants={{
                    initial: { scale: 1, rotate: 0 },
                    hover: { scale: 1.4, rotate: 10 },
                  }}
                  initial="initial"
                  whileHover="hover"
                  className={`inline-block transition-all duration-300 ${service.color}`}
                >
                  {service.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-gray-300">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
