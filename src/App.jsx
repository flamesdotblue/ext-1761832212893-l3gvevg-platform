import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 antialiased">
      <header className="fixed top-0 inset-x-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-neutral-950/50 border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#home" className="font-semibold tracking-tight text-white">Meet • Full Stack Developer</a>
          <nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-300">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#projects" className="hover:text-white transition">Projects</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="pt-16">
          <Hero />
        </section>
        <section id="about">
          <About />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>

      <footer className="border-t border-white/10 mt-12">
        <div className="max-w-6xl mx-auto px-4 py-8 text-sm text-neutral-400 flex flex-col sm:flex-row items-center justify-between">
          <p>© {new Date().getFullYear()} Meet. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-3 sm:mt-0">
            <a className="hover:text-white transition" href="#projects">Projects</a>
            <a className="hover:text-white transition" href="#contact">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
