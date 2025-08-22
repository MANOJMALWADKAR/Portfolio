"use client";

import { motion } from "framer-motion";
import { FaBuilding, FaCertificate } from "react-icons/fa";
import { BsFillLightningFill, BsFillGearFill } from "react-icons/bs";
import { MdComputer } from "react-icons/md";
import "./FloatingBackground.css";

// Optional: Floating background icons
const floatingIcons = [
  {
    icon: <BsFillGearFill size={40} className="text-blue-500 opacity-20" />,
    style: "absolute top-[10%] left-[5%] floating-icon",
  },
  {
    icon: (
      <BsFillLightningFill size={40} className="text-yellow-400 opacity-20" />
    ),
    style: "absolute bottom-[10%] right-[5%] floating-icon",
  },
];

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className="relative py-24 px-6 min-h-screen bg-[#0d0d0d] text-white overflow-hidden"
    >
      {/* Floating Icons */}
      {floatingIcons.map((item, idx) => (
        <div key={idx} className={`floating-icon ${item.style}`}>
          {item.icon}
        </div>
      ))}

      <div className="max-w-5xl mx-auto space-y-24 relative z-10">
        {/* --------- Work Experience --------- */}
        <div>
          <h2 className="text-5xl font-bold text-blue-400 text-center mb-12">
            Work Experience
          </h2>
          <div className="relative pl-6 space-y-12 before:absolute before:top-0 before:bottom-0 before:left-1.5 before:w-1 before:bg-gradient-to-b before:from-blue-500 before:via-purple-500 before:to-pink-500">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="pl-2">
                <div className="flex items-center gap-3">
                  <FaBuilding className="text-cyan-400" size={24} />
                  <h3 className="text-2xl font-semibold">Software Trainee</h3>
                </div>
                <p className="text-gray-300 text-xl mb-1">
                  Trinesis Technologies Pvt Ltd
                </p>
                <p className="text-gray-400 text-lg italic">
                  Aug 2024 – Present
                </p>
                <ul className="list-disc pl-5 text-gray-300 mt-2 space-y-1">
                  <li className="text-lg">
                    Built responsive UIs using Bootstrap and Tailwind CSS
                  </li>
                  <li className="text-lg">
                    Integrated REST APIs using Axios and managed state with
                    Redux/Context API
                  </li>
                  <li className="text-lg">
                    Worked with WebRTC and WebSockets for real-time interactions
                  </li>
                  <li className="text-lg">
                    Used Git, GitHub and participated in code reviews
                  </li>
                  <li className="text-lg">
                    Created Docker containers and deployed apps
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* --------- Certifications Timeline --------- */}
        <div>
          <h3 className="text-5xl font-bold text-blue-400 text-center mb-12">
            Certifications
          </h3>
          <div className="relative pl-6 space-y-12 before:absolute before:top-0 before:bottom-0 before:left-1.5 before:w-1 before:bg-gradient-to-b before:from-yellow-400 before:via-cyan-400 before:to-pink-400">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="pl-2">
                <div className="flex items-center gap-3">
                  <FaCertificate className="text-yellow-400" size={24} />
                  <h4 className="text-2xl font-semibold">
                    The Complete JavaScript Course
                  </h4>
                </div>
                <p className="text-gray-300 text-xl mb-1">Udemy</p>
                <p className="text-gray-400 text-lg italic">Online</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="pl-2">
                <div className="flex items-center gap-3">
                  <MdComputer className="text-green-400" size={24} />
                  <h4 className="text-2xl font-semibold">
                    The Ultimate React Course
                  </h4>
                </div>
                <p className="text-gray-300 text-xl mb-1">Udemy</p>
                <p className="text-gray-400 text-lg italic">Online</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
