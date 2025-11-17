import { Wrench, Workflow, Cpu, Network } from 'lucide-react';

export default function Expertise() {
  const items = [
    { icon: Wrench, title: 'Engineering Competence', text: 'Multi‑disciplinary team across power systems, civil, HVAC, fire safety and controls.' },
    { icon: Workflow, title: 'Project Experience', text: 'From greenfield to retrofit — proven processes, documentation and QA/QC.' },
    { icon: Cpu, title: 'Control & SCADA', text: 'Integration with EMS, market gateways and utility control rooms.' },
    { icon: Network, title: 'European Coverage', text: 'Delivery capabilities across the EU and UK with local partners.' },
  ];
  return (
    <section className="relative py-20" id="expertise">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, text }) => (
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
