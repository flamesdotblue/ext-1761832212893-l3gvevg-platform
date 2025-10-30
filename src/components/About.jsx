import React from 'react';

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-3 gap-10">
        <div className="md:col-span-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">About Me</h2>
          <p className="mt-4 text-neutral-300 leading-relaxed">
            I'm Meet, a recent graduate and an enthusiastic full stack developer. I enjoy turning ideas into scalable products using modern JavaScript frameworks. I value clean code, strong UX, and thoughtful architecture. When I'm not building, I'm learning — exploring system design, DevOps basics, and performance optimization.
          </p>
          <p className="mt-3 text-neutral-300 leading-relaxed">
            I am currently seeking an entry-level role or internship where I can contribute to a collaborative team, grow my skills, and ship features that make a difference.
          </p>
          <div className="mt-6">
            <a href="#contact" className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-white/15 text-white hover:bg-white/10 transition">
              Get in Touch
            </a>
          </div>
        </div>
        <div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <h3 className="font-semibold text-white">Core Skills</h3>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300">
              <li>Frontend: React, Vite, Tailwind, TypeScript</li>
              <li>Backend: Node.js, Express, REST APIs</li>
              <li>Database: MongoDB, PostgreSQL basics</li>
              <li>Tools: Git, GitHub, Vercel, Docker basics</li>
              <li>Testing: Jest, React Testing Library basics</li>
            </ul>
            <div className="mt-4 grid grid-cols-3 gap-2 text-xs">
              <span className="px-2 py-1 rounded bg-emerald-400/10 text-emerald-300 border border-emerald-400/20">Clean Code</span>
              <span className="px-2 py-1 rounded bg-sky-400/10 text-sky-300 border border-sky-400/20">Performance</span>
              <span className="px-2 py-1 rounded bg-fuchsia-400/10 text-fuchsia-300 border border-fuchsia-400/20">Accessibility</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
