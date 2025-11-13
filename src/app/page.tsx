'use client';

import Navigation from '@/components/Navbar/Navbar';
import About from '@/components/About/About';
import Projects from '@/components/Projects/Projects';
import Skills from '@/components/Skills/Skills';
import Experience from '@/components/Experience/Experience';
import Education from '@/components/Education/Education';
import Contact from '@/components/Contact/Contact';

export default function Home() {
  return (
    <div>
      <Navigation />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Education />
      <Contact />
    </div>
  );
}