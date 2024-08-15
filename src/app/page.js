import Image from "next/image";
import Hero from "./Componets/Hero";
import About from "./Componets/About";
import Skills from "./Componets/Skills";
import Project from "./Componets/Project";
import CTA from "./Componets/CTA";
import Footer from "./Componets/Footer";

export default function Home() {
  return (
    <>
    <div id="home">
    <Hero/>
    </div>
    <div id="about">
    <About />
    </div>
    <div id="skills">
    <Skills/>
    </div>
    <div id="projects">
    <Project/>
    </div>
    <div id='contact'>
<CTA/>
    </div>
    <Footer/>
    </>
  );
}
