export default function Hero() {
  return (
    <section id="top" className="pt-18 pb-16">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1.05fr_0.95fr]">
        <div>
          <p className="mb-3 text-[0.8rem] font-bold tracking-[0.14em] text-chic-green-deep uppercase">
            Kidney Crescent, Blantyre &nbsp;·&nbsp; Est. 2013
          </p>
          <h1 className="font-display text-[clamp(2.6rem,5vw,4.2rem)] leading-[1.04] font-medium tracking-tight">
            Where beautiful
            <br />
            <span className="font-display text-chic-teal italic">smiles</span> begin.
          </h1>
          <p className="mt-5 mb-8 max-w-md text-lg text-slate">
            Gentle, modern dental care for the whole family — general dentistry, cosmetic
            treatments, and orthodontics from Dr. Shabana Yusuf and the Dental Chic team.
          </p>

          <div className="mb-11 flex flex-wrap gap-3.5">
            <a
              href="#book"
              className="rounded-full bg-ink px-7.5 py-4 text-base font-bold text-white transition-all hover:-translate-y-px hover:bg-chic-green-deep"
            >
              Book an Appointment
            </a>
            <a
              href="tel:+265998951880"
              className="rounded-full border-[1.5px] border-ink px-7.5 py-4 text-base font-bold transition-colors hover:bg-ink hover:text-white"
            >
              Call 0998 95 18 80
            </a>
          </div>

          <div className="flex items-center gap-5">
            <Trust value="12+" label="years in practice" />
            <div className="h-8 w-px bg-stone" />
            <Trust value="100%" label="patient recommend rate" />
            <div className="h-8 w-px bg-stone" />
            <Trust value="Digital" label="X-ray on site" />
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-[420px]" aria-hidden="true">
          <svg className="absolute inset-0 text-ink" viewBox="0 0 520 520" width="100%" height="100%">
            <circle cx="260" cy="260" r="210" fill="none" stroke="#EDEEEA" strokeWidth="1.5" />
            <path
              className="draw-arc"
              d="M90 300 Q260 430 430 300"
              fill="none"
              stroke="#5FBF4D"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <path
              className="draw-arc arc-teal"
              d="M120 200 Q260 90 400 200"
              fill="none"
              stroke="#2CB4C0"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <g transform="translate(160,150)">
              <path
                d="M100 6c-20 0-30 10-40 10s-15-5-25-5c-15 0-20 15-20 30 0 30 15 50 20 80 3 15 8 25 17 25 10 0 10-20 15-40 3-13 7-20 13-20s10 7 13 20c5 20 5 40 15 40 9 0 14-10 17-25 5-30 20-50 20-80 0-15-5-30-20-30-10 0-15 5-25 5s-20-10-40-10z"
                fill="none"
                stroke="#1B1F1D"
                strokeWidth="3.5"
                strokeLinejoin="round"
              />
            </g>
          </svg>
          <div className="absolute bottom-[6%] left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-stone bg-white px-4.5 py-2.5 text-sm font-bold shadow-[0_10px_30px_rgba(27,31,29,0.06)]">
            <span className="h-2 w-2 rounded-full bg-chic-green" />
            Accepting RESMAID scheme
          </div>
        </div>
      </div>
    </section>
  );
}

function Trust({ value, label }) {
  return (
    <div className="flex flex-col">
      <strong className="font-display text-[1.3rem]">{value}</strong>
      <span className="text-[0.78rem] text-slate">{label}</span>
    </div>
  );
}
