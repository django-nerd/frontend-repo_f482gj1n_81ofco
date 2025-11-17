import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const base = import.meta.env.VITE_BACKEND_URL || '';
      const res = await fetch(`${base}/lead`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: e.target.name.value,
          email: e.target.email.value,
          company: e.target.company.value,
          message: e.target.message.value,
        }),
      });
      if (!res.ok) throw new Error('Request failed');
      setStatus('Thank you — we will reach out shortly.');
      e.target.reset();
    } catch (err) {
      setStatus('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="relative py-20" id="contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-semibold text-white">Request a proposal</h2>
          <p className="mt-2 text-slate-300">Tell us about your project and we’ll come back with a tailored configuration.</p>
          <form onSubmit={onSubmit} className="mt-6 grid gap-4 sm:grid-cols-2">
            <input name="name" required placeholder="Full name" className="rounded-lg bg-transparent border border-white/15 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50" />
            <input name="email" type="email" required placeholder="Work email" className="rounded-lg bg-transparent border border-white/15 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50" />
            <input name="company" placeholder="Company" className="rounded-lg bg-transparent border border-white/15 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 col-span-full sm:col-span-1" />
            <textarea name="message" required placeholder="Project scope, location, target COD, and desired MWh capacity" className="rounded-lg bg-transparent border border-white/15 px-3 py-2 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 col-span-full min-h-[120px]" />
            <div className="col-span-full flex items-center gap-4">
              <button className="inline-flex items-center justify-center rounded-lg bg-emerald-400 text-slate-900 font-medium px-5 py-2.5 hover:bg-emerald-300 transition">
                Send request
              </button>
              <span className="text-sm text-slate-300">{status}</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
