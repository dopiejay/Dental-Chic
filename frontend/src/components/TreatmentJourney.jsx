const steps = [
  { num: '01', title: 'Consultation', desc: 'We start by understanding your dental needs and concerns.' },
  { num: '02', title: 'Diagnosis', desc: 'A thorough examination, with digital X-ray on site if needed.' },
  { num: '03', title: 'Treatment', desc: 'A personalised plan carried out with minimally invasive technique.' },
  { num: '04', title: 'Follow-Up', desc: 'Continuous care so your treatment lasts and heals well.' },
];

export default function TreatmentJourney() {
  return (
    <section className="bg-stone px-6 py-24">
      <div className="mx-auto mb-16 max-w-xl text-center">
        <p className="mb-3 text-[0.8rem] font-bold tracking-[0.14em] text-chic-green-deep uppercase">How it works</p>
        <h2 className="font-display text-[clamp(1.8rem,3vw,2.6rem)] font-medium">Your treatment journey</h2>
      </div>

      <div className="relative mx-auto max-w-6xl">
        <svg
          className="pointer-events-none absolute top-6 left-0 hidden w-full md:block"
          viewBox="0 0 900 10"
          preserveAspectRatio="none"
          height="2"
          aria-hidden="true"
        >
          <line x1="0" y1="1" x2="900" y2="1" stroke="#D8DAD3" strokeWidth="2" />
        </svg>

        <div className="relative grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          {steps.map((s) => (
            <div key={s.num} className="text-center">
              <div className="relative z-10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full border-2 border-chic-teal bg-white font-display text-sm font-medium text-chic-teal">
                {s.num}
              </div>
              <h4 className="mb-1.5 font-display text-[1.05rem] font-medium">{s.title}</h4>
              <p className="text-[0.88rem] text-slate">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
