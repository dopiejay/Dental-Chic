import { ConsultIcon, PlanIcon, TreatIcon, ReviewIcon } from './Icons';

const steps = [
  { num: '01', icon: ConsultIcon, title: 'Consult', desc: 'Discuss your concerns, goals, and medical history in a relaxed setting.' },
  { num: '02', icon: PlanIcon, title: 'Diagnose', desc: 'Digital X-ray and clinical examination to understand your dental health.' },
  { num: '03', icon: TreatIcon, title: 'Treat', desc: 'Gentle, minimally invasive treatment tailored to your needs.' },
  { num: '04', icon: ReviewIcon, title: 'Follow Up', desc: 'Ongoing care to keep your smile healthy and confident.' },
];

export default function TreatmentJourney() {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 text-[0.8rem] font-bold tracking-[0.14em] text-chic-green-deep uppercase">How it works</p>
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-medium">
            Your journey to a <span className="italic text-chic-teal">healthier smile</span>.
          </h2>
        </div>

        <div className="relative">
          {/* Connecting line */}
          <div className="absolute top-16 left-0 right-0 hidden h-0.5 bg-gradient-to-r from-chic-teal/20 via-chic-teal/40 to-chic-teal/20 lg:block" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div key={step.num} className="relative group">
                  {/* Step number badge */}
                  <div className="mb-5 flex items-center gap-4">
                    <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-chic-teal to-chic-green-deep text-white shadow-lg shadow-chic-teal/20 transition-transform group-hover:scale-110">
                      <Icon size={24} />
                      <span className="absolute -top-2 -right-2 flex h-6 w-6 items-center justify-center rounded-full bg-ink text-[0.65rem] font-bold text-white">
                        {step.num}
                      </span>
                    </div>
                    {i < steps.length - 1 && (
                      <div className="hidden h-0.5 flex-1 bg-gradient-to-r from-chic-teal/30 to-transparent lg:block" />
                    )}
                  </div>
                  <h3 className="mb-2 font-display text-xl font-medium text-ink">{step.title}</h3>
                  <p className="text-[0.9rem] text-slate leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
