import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <div className="relative h-[88vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/20 via-neutral-950/30 to-neutral-950 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 text-xs font-medium px-3 py-1 rounded-full bg-white/10 text-white border border-white/10 backdrop-blur">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" /> Open to Work
          </span>
          <h1 className="mt-4 text-4xl sm:text-6xl font-extrabold tracking-tight text-white">
            Hi, I'm Meet
          </h1>
          <p className="mt-3 text-lg sm:text-xl text-neutral-200">
            A fresher full stack developer passionate about building fast, accessible, and delightful web apps.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#projects" className="px-5 py-2.5 rounded-md bg-white text-neutral-900 font-medium hover:bg-neutral-200 transition">
              View Projects
            </a>
            <a href="#contact" className="px-5 py-2.5 rounded-md border border-white/20 text-white hover:bg-white/10 transition">
              Contact Me
            </a>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-xs text-neutral-300">
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">React</span>
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">Node.js</span>
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">Express</span>
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">MongoDB</span>
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">Tailwind</span>
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10">TypeScript</span>
          </div>
        </div>
      </div>
    </div>
  );
}
