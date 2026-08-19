const details = [
  { label: 'Address', value: 'Kidney Crescent, Blantyre, Malawi' },
  { label: 'Phone', value: '0998 95 18 80' },
  { label: 'Email', value: 'dentalchic@outlook.com' },
  { label: 'Hours', value: 'Mon–Fri, 9:00 – 16:00 · Closed weekends' },
];

export default function FindUs() {
  return (
    <section id="find-us" className="bg-stone px-6 py-24">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
        <div>
          <p className="mb-3 text-[0.8rem] font-bold tracking-[0.14em] text-chic-green-deep uppercase">Visit the clinic</p>
          <h2 className="mb-6 font-display text-[clamp(1.8rem,3vw,2.4rem)] font-medium">Find us on Kidney Crescent</h2>

          <ul className="mb-7 flex flex-col gap-3.5">
            {details.map((d) => (
              <li key={d.label} className="flex flex-col gap-0.5">
                <strong className="text-[0.78rem] font-normal tracking-[0.08em] text-slate uppercase">{d.label}</strong>
                <span className="font-bold">{d.value}</span>
              </li>
            ))}
          </ul>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://wa.me/265998951880"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-ink px-6 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-px hover:bg-chic-green-deep"
            >
              Message on WhatsApp
            </a>
            <a
              href="tel:+265998951880"
              className="rounded-full border-[1.5px] border-ink px-6 py-3.5 text-sm font-bold transition-colors hover:bg-ink hover:text-white"
            >
              Call the clinic
            </a>
          </div>
        </div>

        <div className="relative aspect-4/3 overflow-hidden rounded-3xl" aria-hidden="true">
          <svg viewBox="0 0 400 300" width="100%" height="100%">
            <rect width="400" height="300" fill="#EDEEEA" />
            <path d="M0 220 Q100 180 200 210 T400 190" stroke="#fff" strokeWidth="14" fill="none" />
            <path d="M0 260 Q120 240 220 260 T400 250" stroke="#fff" strokeWidth="10" fill="none" />
            <circle cx="230" cy="150" r="10" fill="#5FBF4D" />
            <path d="M230 150 v-30" stroke="#5FBF4D" strokeWidth="3" />
          </svg>
          <span className="absolute bottom-3.5 left-3.5 rounded-full bg-white px-3 py-1.5 text-[0.72rem] font-bold text-slate">
            Map placeholder — embed Google Maps here
          </span>
        </div>
      </div>
    </section>
  );
}
