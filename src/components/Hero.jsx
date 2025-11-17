import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center" id="home">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DAWBaaySM7FLUKpn/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/50 to-slate-950/80 pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl py-28 sm:py-40">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-slate-200">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Turn‑key EPC for Grid‑Scale Energy Storage
          </div>
          <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">
            Flexible Battery Energy Storage Systems from 5 MWh to 100+ MWh
          </h1>
          <p className="mt-5 text-slate-300 text-base sm:text-lg">
            We design, engineer, procure and construct bankable BESS assets with grid compliance and performance guarantees across Europe.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#contact" className="inline-flex items-center justify-center rounded-lg bg-emerald-400 text-slate-900 font-medium px-5 py-3 hover:bg-emerald-300 transition shadow-[0_20px_60px_-15px_rgba(16,185,129,0.7)]">
              Get a Proposal
            </a>
            <a href="#solutions" className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white font-medium px-5 py-3 hover:bg-white/10 transition">
              Explore Solutions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
