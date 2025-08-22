"use client";
import { useState, useEffect } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { BiCodeAlt, BiSolidBriefcase } from "react-icons/bi";
import { MdOutlineDesignServices } from "react-icons/md";
import { FaDownload } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const navItems = [
  { id: "home", icon: <AiOutlineHome size={24} />, label: "Home" },
  { id: "about", icon: <CgProfile size={24} />, label: "About Me" },
  { id: "experience", icon: <BiSolidBriefcase size={24} />, label: "Experience" },
  { id: "skills", icon: <BiCodeAlt size={24} />, label: "Skills" },
  { id: "services", icon: <MdOutlineDesignServices size={24} />, label: "Services" },
  { id: "contact", icon: <FiMail size={24} />, label: "Contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 3;
      for (const item of navItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const top = section.offsetTop;
          const bottom = top + section.offsetHeight;
          if (scrollY >= top && scrollY < bottom) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top Navbar */}
      <nav className="hidden min-[420px]:flex fixed top-0 w-full bg-black/70 backdrop-blur-sm shadow z-50">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="flex justify-center h-16 items-center space-x-10 text-white relative">
            {navItems.map(({ id, icon }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`cursor-hover group relative flex flex-col items-center transition ${
                  activeSection === id
                    ? "text-blue-400"
                    : "text-white/70 hover:text-blue-400"
                }`}
              >
                {icon}
                <span
                  className={`mt-1 h-[6px] w-[6px] rounded-full transition-transform duration-300 ${
                    activeSection === id
                      ? "bg-blue-400 scale-100"
                      : "bg-white scale-0 group-hover:scale-100"
                  }`}
                />
              </button>
            ))}

            {/* Download Button (Top Navbar only) */}
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = "/Manoj_M_F.pdf";
                link.download = "Manoj_M_Resume.pdf";
                link.click();
              }}
              className="cursor-hover group relative flex flex-col items-center text-white/70 hover:text-blue-400 transition"
            >
              <FaDownload size={20} />
              <span className="mt-1 h-[6px] w-[6px] rounded-full bg-white scale-0 group-hover:scale-100 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </nav>

      {/* Bottom Navbar */}
      <nav className="flex min-[420px]:hidden fixed bottom-0 w-full bg-black/90 backdrop-blur-sm shadow z-50">
        <div className="max-w-7xl mx-auto px-4 w-full">
          <div className="flex justify-around items-center h-16 text-white">
            {navItems.map(({ id, icon }) => (
              <button
                key={id}
                onClick={() => scrollTo(id)}
                className={`cursor-hover group relative flex flex-col items-center transition ${
                  activeSection === id
                    ? "text-blue-400"
                    : "text-white/70 hover:text-blue-400"
                }`}
              >
                {icon}
                <span
                  className={`mt-1 h-[6px] w-[6px] rounded-full bg-white transition-transform duration-300 ${
                    activeSection === id
                      ? "scale-100"
                      : "scale-0 group-hover:scale-100"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Floating Download Button for Mobile */}
      <button
        onClick={() => {
          const link = document.createElement("a");
          link.href = "/Manoj_M_F.pdf";
          link.download = "Manoj_M_Resume.pdf";
          link.click();
        }}
        className="min-[420px]:hidden fixed bottom-20 left-4 z-50 bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg transition"
        aria-label="Download Resume"
      >
        <FaDownload size={18} />
      </button>
    </>
  );
}
