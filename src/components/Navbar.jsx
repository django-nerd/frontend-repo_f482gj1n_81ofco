import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 backdrop-blur-xl bg-slate-900/50 border border-white/10 rounded-2xl px-4 sm:px-6 py-3 flex items-center justify-between shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
          <a href="#" className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-md bg-gradient-to-tr from-blue-500 via-cyan-400 to-emerald-400 shadow-[0_0_30px_-5px_rgba(34,197,94,0.7)]" />
            <span className="font-semibold tracking-tight text-white">GridStore Energy</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-slate-200/80 text-sm">
            <a href="#solutions" className="hover:text-white transition">Solutions</a>
            <a href="#expertise" className="hover:text-white transition">Expertise</a>
            <a href="#coverage" className="hover:text-white transition">Coverage</a>
          </nav>
          <div className="flex items-center gap-2">
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-emerald-400 text-slate-900 font-medium px-3.5 py-2 hover:bg-emerald-300 transition shadow-[0_10px_30px_-10px_rgba(16,185,129,0.7)]">
              Request a Proposal
            </a>
            <button className="md:hidden h-9 w-9 grid place-items-center rounded-lg bg-white/5 border border-white/10 text-slate-200">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
