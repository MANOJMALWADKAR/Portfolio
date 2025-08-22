"use client";

import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaInstagram,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Contact() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const contactRef = useRef(null);
  const isInView = useInView(contactRef, { once: true });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-between bg-[#0d0d0d] text-white px-4 py-20"
      ref={contactRef}
    >
      <div className="flex-grow flex items-center justify-center">
        <div className="w-full mx-auto text-center space-y-14">
          {/* Heading */}
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="text-5xl font-bold text-blue-400"
          >
            Contact Me
          </motion.h2>

          {/* Contact Info Badges */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-6 text-lg"
          >
            <div className="bg-white/10 border border-blue-400 px-6 py-4 rounded-full text-base sm:text-xl flex items-center gap-3 shadow-md">
              <FaEnvelope className="text-blue-400" />
              manojmalwadkar2611@gmail.com
            </div>
            <div className="bg-white/10 border border-green-400 px-6 py-4 rounded-full text-base sm:text-xl flex items-center gap-3 shadow-md">
              <FaPhoneAlt className="text-green-400" /> +91-9021154287
            </div>
            <div className="bg-white/10 border border-pink-400 px-6 py-4 rounded-full text-base sm:text-xl flex items-center gap-3 shadow-md">
              <FaMapMarkerAlt className="text-pink-400" /> Pune, Maharashtra,
              India
            </div>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            transition={{ delay: 0.4 }}
            className="flex justify-center gap-6 pt-6"
          >
            {[
              {
                href: "https://github.com/manojmalwadkar",
                icon: <FaGithub />,
              },
              {
                href: "https://www.linkedin.com/in/manoj-malwadkar-08b5091b4/",
                icon: <FaLinkedin />,
              },
              {
                href: "https://instagram.com/manoj_malwadkar?igsh=aTFhem5rdDZvY29n",
                icon: <FaInstagram />,
              },
            ].map(({ href, icon }, idx) => (
              <motion.a
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.3, rotate: 10 }}
                whileTap={{ scale: 0.9 }}
                className="text-white text-xl sm:text-3xl hover:text-blue-400 transition"
              >
                {icon}
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 text-center text-sm text-gray-400 border-t border-white/10 pt-6 relative">
        {/* Scroll to Top */}
        {showScrollTop && (
          <motion.button
            whileHover={{ scale: 1.2, rotate: 12 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed right-6 bottom-20 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <FaArrowUp size={18} />
          </motion.button>
        )}

        <footer className="text-center py-8 text-sm px-4">
          <div className="flex flex-col items-center gap-2 sm:flex-row sm:justify-center sm:gap-4">
            <span className="text-sm sm:text-base md:text-lg text-gray-400">
              © {new Date().getFullYear()} Manoj Malwadkar. All rights reserved.
            </span>
            <SiNextdotjs
              size={22}
              className="text-white animate-pulse my-1 sm:my-0"
            />
            <span className="text-sm sm:text-base md:text-lg italic text-blue-400 text-center">
              The speed of <span className="text-white"> Next.js </span> meets the soul of <span className="text-white"> Framer Motion.</span>
            </span>
          </div>
        </footer>
      </div>
    </section>
  );
}
