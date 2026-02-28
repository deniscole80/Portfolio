"use client";

import { Hero } from "./Hero";
import { About } from "./About";
import { Skills } from "./Skills";
import { Projects } from "./Projects";
import { Capabilities } from "./Capabilities";
import { Contact } from "./Contact";
import { Footer } from "./Footer";

export default function App() {
  return (
    <div className="size-full">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Capabilities />
      <Contact />
      <Footer />
    </div>
  );
}