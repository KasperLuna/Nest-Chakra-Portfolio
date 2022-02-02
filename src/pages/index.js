//Components
import Head from "next/head";
import Navbar from "../components/navbar.js";
import Hero from "../components/hero.js";
import About from "../components/about.js";
import Skills from "../components/skills.js";
import Projects from "../components/projects.js";
import Contact from "../components/contact.js";
import Footer from "../components/footer.js";

import { useColorMode } from "@chakra-ui/color-mode";
import { useRef } from "react";
import { useInViewport } from "react-in-viewport";
import { ColorModeScript } from "@chakra-ui/react";
import ColorToggle from "../components/colortoggle.js";
import ScrollToTop from "../components/scrollToTop.js";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const navRef = useRef(null);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const activeHero = useInViewport(heroRef, {
    rootMargin: "-300px",
  }).inViewport;

  return (
    <>
      <Head>
        <title>Kasper Luna</title>
        <meta
          name="description"
          content="I'm Kasper Luna, a software developer based in the Philippines. Experienced in frontend and backend system design, project management, and development."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <ColorModeScript initialColorMode="dark" />
      <div ref={navRef}>
        <Navbar
          scrollToAbout={aboutRef}
          scrollToSkills={skillsRef}
          scrollToProjects={projectsRef}
          scrollToContact={contactRef}
          colormode={colorMode}
        />
      </div>
      <ColorToggle colorMode={colorMode} toggleColorMode={toggleColorMode} />
      <div ref={heroRef}>
        <Hero scrollToAbout={aboutRef} colormode={colorMode} />
      </div>

      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={skillsRef}>
        <Skills />
      </div>
      <div ref={projectsRef}>
        <Projects colormode={colorMode} />
      </div>
      <div ref={contactRef}>
        <Contact />
      </div>
      <ScrollToTop visible={activeHero} scrollToTop={navRef} />
      <Footer colormode={colorMode} />
    </>
  );
}
