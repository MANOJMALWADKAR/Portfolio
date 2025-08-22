"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 bg-background text-white text-center relative"
    >
      <div className="flex flex-col items-center gap-4">
        {/* Name */}
        <motion.h1
          className="text-7xl font-bold text-blue-400"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}

        >
          Manoj Malwadkar
        </motion.h1>

        {/* Role */}
        <motion.h2
          className="text-3xl text-muted"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          Frontend Developer
        </motion.h2>

        {/* Social Icons */}
        <motion.div
          className="flex space-x-4 mt-3 text-white/80"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="https://github.com/manojmalwadkar"
            target="_blank"
            rel="noreferrer"
            className="cursor-hover"
            whileHover={{
              scale: 1.2,
              boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.5)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaGithub size={32} />
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/manoj-malwadkar-08b5091b4/"
            target="_blank"
            rel="noreferrer"
            className="cursor-hover"
            whileHover={{
              scale: 1.2,
              boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.5)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaLinkedin size={32} />
          </motion.a>

          <motion.a
            href="https://instagram.com/manoj_malwadkar?igsh=aTFhem5rdDZvY29n"
            target="_blank"
            rel="noreferrer"
            className="cursor-hover"
            whileHover={{
              scale: 1.2,
              boxShadow: "0px 0px 20px rgba(0, 255, 255, 0.5)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaInstagram size={32} />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
