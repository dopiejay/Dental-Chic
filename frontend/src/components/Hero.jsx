import { Link } from 'react-router-dom';
import { PhoneIcon, CalendarIcon, MessageCircleIcon } from './Icons';

const heroImage = 'https://images.pexels.com/photos/3845981/pexels-photo-3845981.jpeg?auto=compress&cs=tinysrgb&w=800';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-chic-teal via-chic-green-deep to-chic-teal">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt=""
          className="h-full w-full object-cover opacity-20 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/50 to-transparent" />
      </div>

      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 pt-24 pb-20 lg:grid-cols-[1fr_400px]">
        {/* Left: Copy */}
        <div className="relative z-10">
          <p className="mb-3 text-[0.8rem] font-bold tracking-[0.14em] text-chic-green uppercase">
            Professional dental care in Blantyre
          </p>
          <h1 className="mb-5 font-display text-[clamp(2.4rem,5vw,3.8rem)] font-medium leading-[1.1] text-white">
            Your smile, our<br />
            <span className="italic text-chic-green">passion.</span>
          </h1>
          <p className="mb-8 max-w-lg text-[1.05rem] text-white/70">
            General, cosmetic, and orthodontic dental care in Blantyre — gentle technique, current
            materials, and a family-friendly clinic built around you.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-full bg-chic-green px-7 py-4 text-sm font-bold text-ink transition-all hover:-translate-y-0.5 hover:bg-white hover:text-chic-green-deep"
            >
              <CalendarIcon size={16} />
              Book an appointment
            </Link>
            <a
              href="tel:+265998951880"
              className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-white/30 px-7 py-4 text-sm font-bold text-white transition-colors hover:border-white hover:bg-white/10"
            >
              <PhoneIcon size={16} />
              Call the clinic
            </a>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-6 text-[0.82rem] text-white/60">
            <span className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-chic-green" />
              Since 2013
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-chic-green" />
              Digital X-Ray
            </span>
            <span className="flex items-center gap-2">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-chic-green" />
              Kidney Crescent, Blantyre
            </span>
          </div>
        </div>

        {/* Right: Floating cards */}
        <div className="relative hidden lg:block">
          <div className="relative z-10 rounded-3xl bg-white/10 p-6 backdrop-blur-md">
            <div className="mb-4 flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-chic-green text-ink">
                <PhoneIcon size={18} />
              </div>
              <div>
                <p className="text-[0.78rem] text-white/60">Need an appointment?</p>
                <p className="font-bold text-white">Call +265 998 95 18 80</p>
              </div>
            </div>
            <p className="mb-4 rounded-2xl bg-white/5 p-3.5 text-[0.82rem] text-white/70">
              <span className="font-bold text-chic-green">Accepting RESMAID scheme</span> — ask
              us about your coverage at your next visit.
            </p>
            <a
              href="https://wa.me/265998951880"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-chic-green px-6 py-3 text-sm font-bold text-ink transition-all hover:bg-white hover:text-chic-green-deep"
            >
              <MessageCircleIcon size={16} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Decorative floating element */}
          <div className="absolute -top-4 -right-4 h-24 w-24 rounded-full bg-chic-green/20 blur-2xl" />
          <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full bg-chic-teal/20 blur-3xl" />
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full">
          <path
            d="M0 60C240 20 480 0 720 20C960 40 1200 60 1440 40V80H0V60Z"
            fill="#FAFAF9"
          />
        </svg>
      </div>
    </section>
  );
}
