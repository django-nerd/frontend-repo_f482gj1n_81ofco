export default function Stats() {
  const items = [
    { value: '1GW+', label: 'Pipeline Experience' },
    { value: '5–100+ MWh', label: 'Flexible System Sizes' },
    { value: '10+ years', label: 'Grid Integration' },
    { value: 'EU‑wide', label: 'Project Delivery' },
  ];
  return (
    <section className="relative py-20" id="stats">
      <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(16,185,129,0.15),transparent)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.label} className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
              <div className="text-2xl sm:text-3xl font-semibold text-white tracking-tight">{it.value}</div>
              <div className="mt-1 text-slate-300 text-sm">{it.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
