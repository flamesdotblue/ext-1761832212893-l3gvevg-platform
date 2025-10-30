import React from 'react';

const projects = [
  {
    title: 'TaskFlow',
    description:
      'A Kanban-style task manager with drag-and-drop, JWT auth, and optimistic UI updates.',
    stack: ['React', 'TypeScript', 'Express', 'MongoDB', 'Tailwind'],
    links: {
      demo: '#',
      code: '#',
    },
  },
  {
    title: 'DevNotes',
    description:
      'Markdown note-taking app with full-text search, tags, and offline sync.',
    stack: ['Vite', 'React', 'IndexedDB', 'Zod', 'Tailwind'],
    links: {
      demo: '#',
      code: '#',
    },
  },
  {
    title: 'ShopLite API',
    description:
      'RESTful API for a minimal e-commerce store featuring pagination, filters, and rate limiting.',
    stack: ['Node.js', 'Express', 'PostgreSQL', 'Prisma'],
    links: {
      demo: '#',
      code: '#',
    },
  },
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold text-white">Projects</h2>
      <p className="mt-3 text-neutral-300">A selection of recent builds that highlight my skills across the stack.</p>

      <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, idx) => (
          <article key={idx} className="group rounded-xl border border-white/10 bg-white/5 p-5 hover:border-white/20 transition">
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-lg font-semibold text-white">{p.title}</h3>
              <span className="text-[10px] px-2 py-1 rounded bg-white/10 text-neutral-200 border border-white/10">{p.stack[0]}</span>
            </div>
            <p className="mt-2 text-sm text-neutral-300">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <span key={s} className="text-xs px-2 py-1 rounded bg-neutral-900 border border-white/10 text-neutral-200">{s}</span>
              ))}
            </div>
            <div className="mt-5 flex items-center gap-3">
              <a href={p.links.demo} className="text-sm font-medium text-white hover:underline">Demo</a>
              <span className="text-neutral-600">•</span>
              <a href={p.links.code} className="text-sm text-neutral-300 hover:text-white hover:underline">Code</a>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
