import { Settings, ShieldCheck, LineChart, Cable } from 'lucide-react';

export default function Solutions() {
  const cards = [
    {
      icon: Settings,
      title: 'Turn‑key EPC Delivery',
      text: 'Single partner from engineering and permitting to procurement, construction, commissioning and O&M handover.'
    },
    {
      icon: ShieldCheck,
      title: 'Bankable Engineering',
      text: 'Performance guarantees, cybersecurity-ready architectures, and compliance with EU grid codes and local DSOs.'
    },
    {
      icon: LineChart,
      title: 'Revenue‑Optimized',
      text: 'System design for frequency response, capacity, arbitrage and grid support services to maximize IRR.'
    },
    {
      icon: Cable,
      title: 'Grid Expertise',
      text: 'Connection studies, protection coordination, and SCADA/EMS integration with utility‑grade reliability.'
    }
  ];
  return (
    <section className="relative py-20" id="solutions">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">Solutions built for grid‑scale storage</h2>
          <p className="mt-3 text-slate-300">Modular architectures from 5 MWh pilot sites to 100+ MWh multi‑container plants, tailored to your market and grid.</p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <Icon className="h-6 w-6 text-emerald-300" />
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-2 text-sm text-slate-300">{text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
