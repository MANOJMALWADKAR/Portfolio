"use-client"

import About from "@/components/About";
import Contact from "@/components/Contact";
import ExperienceCertificates from "@/components/ExperienceCertificates";
import Home from "@/components/Home";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

export default function Page() {
  return (
    <main>
      <Home    />
      <About />
      <ExperienceCertificates />
      <Skills />
      <Services />
      <Contact /> 
    </main>
  );
}