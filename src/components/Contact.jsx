import React, { useState } from 'react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const mailto = () => {
    const subject = encodeURIComponent('Hello Meet — Let\'s Connect');
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.location.href = `mailto:meet@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-10">
        <div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Contact</h2>
          <p className="mt-3 text-neutral-300">
            I'm available for full-time roles, internships, or collaboration. Reach out and let's build something impactful.
          </p>
          <div className="mt-6 space-y-2 text-sm text-neutral-300">
            <p><span className="text-neutral-400">Email:</span> meet@example.com</p>
            <p><span className="text-neutral-400">Location:</span> Open to remote and on-site opportunities</p>
          </div>
        </div>
        <div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5">
            <label className="block text-sm text-neutral-300">Your Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="mt-1 w-full px-3 py-2 rounded-md bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <label className="block text-sm text-neutral-300 mt-4">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="mt-1 w-full px-3 py-2 rounded-md bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <label className="block text-sm text-neutral-300 mt-4">Message</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell me about your project or opportunity..."
              className="mt-1 w-full px-3 py-2 rounded-md bg-neutral-900 border border-white/10 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20"
            />
            <div className="mt-5 flex gap-3">
              <button onClick={mailto} className="px-4 py-2 rounded-md bg-white text-neutral-900 font-medium hover:bg-neutral-200 transition">
                Send Email
              </button>
              <a href="/Meet_Resume.pdf" className="px-4 py-2 rounded-md border border-white/15 text-white hover:bg-white/10 transition">
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
