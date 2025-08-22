"use client";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiRedux,
  SiReactquery,
  SiGit,
  SiDocker,
  SiVercel,
  SiNetlify,
  SiPostman,
  SiFigma,
  SiFramer,
  SiAxios,
} from "react-icons/si";

const skills = [
  { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "React", icon: <SiReact className="text-cyan-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-white" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "Redux", icon: <SiRedux className="text-purple-400" /> },
  { name: "Axios", icon: <SiAxios /> },
  { name: "React Query", icon: <SiReactquery className="text-pink-400" /> },
  { name: "Git", icon: <SiGit className="text-orange-500" /> },
  { name: "Docker", icon: <SiDocker className="text-blue-300" /> },
  { name: "Vercel", icon: <SiVercel className="text-white" /> },
  { name: "Netlify", icon: <SiNetlify className="text-green-400" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-400" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
  { name: "Framer Motion", icon: <SiFramer className="text-white" /> },
];

const badgeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
      ease: "easeOut",
    },
  }),
};

export default function SkillSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-4 bg-[#0d0d0d] text-gray-300"
    >
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-blue-400 mb-12">Areas of Expertise</h2>

        <div ref={ref} className="flex flex-wrap justify-center gap-5">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              variants={badgeVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              custom={index}
              className="flex items-center gap-2 px-5 py-2 rounded-full bg-white/10 text-white/90 text-base border border-transparent hover:border-blue-400 hover:bg-blue-500/10 transition-all hover:scale-105 cursor-default shadow-md"
            >
              <span className="text-xl">{skill.icon}</span>
              <span>{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 