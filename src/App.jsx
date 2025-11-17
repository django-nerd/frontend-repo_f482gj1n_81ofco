import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Solutions from './components/Solutions';
import Expertise from './components/Expertise';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-200">
      <div className="fixed inset-0 -z-0 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950" />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Solutions />
        <Expertise />
        <Contact />
      </main>
      <footer className="relative border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} GridStore Energy. All rights reserved.</p>
          <div className="text-sm text-slate-400">BESS EPC • 5–100+ MWh • EU & UK</div>
        </div>
      </footer>
    </div>
  )
}

export default App
