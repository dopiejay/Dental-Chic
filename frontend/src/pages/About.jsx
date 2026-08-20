import { Link } from 'react-router-dom';
import { HeartIcon, AwardIcon, GemIcon, MessageCircleIcon } from '../components/Icons';
import PageHero from '../components/PageHero';
const aboutImage = 'images/team.jpg';
const teamImage = 'images/destist.jpg';

const philosophy = [
  { icon: HeartIcon, title: 'Comfort', desc: 'Gentle, minimally invasive technique — treatment that puts you at ease first.', color: 'bg-chic-teal/10 text-chic-teal' },
  { icon: AwardIcon, title: 'Quality', desc: 'Current materials and digital diagnostics behind every treatment plan.', color: 'bg-emerald-100/60 text-emerald-600' },
  { icon: GemIcon, title: 'Confidence', desc: 'A cosmetic specialty focus, because how your smile looks matters too.', color: 'bg-amber-100/60 text-amber-600' },
];

const approach = ['Listen', 'Diagnose', 'Treat', 'Follow Up'];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Our story" title="Care that puts you first." crumb="About Us" image="https://images.pexels.com/photos/3845729/pexels-photo-3845729.jpeg?auto=compress&cs=tinysrgb&w=800" />

      {/* Story Section */}
      <section className="bg-paper px-6 py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-14 md:grid-cols-2">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={aboutImage}
              alt="Dental Chic clinic interior"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-chic-green-deep/20 to-transparent" />
          </div>
          <div>
            <p className="mb-3 text-[0.8rem] font-bold tracking-[0.14em] text-chic-green-deep uppercase">Since 2013</p>
            <h2 className="mb-5 font-display text-[clamp(1.8rem,3vw,2.4rem)] font-medium">
              A Blantyre clinic built around gentle, modern care
            </h2>
            <p className="mb-4 text-slate leading-relaxed">
              Dental Chic has been offering general and specialised dental care to families in
              Blantyre since 2013. From routine check-ups to cosmetic transformations, the practice
              is built on minimally invasive dentistry and current materials and technique.
            </p>
            <p className="text-slate leading-relaxed">
              Located on Kidney Crescent, the clinic combines digital X-ray facilities with
              orthodontic and minor oral surgery services — everything a family needs under one roof.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="bg-gradient-to-br from-stone to-white px-6 py-24">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <p className="mb-3 text-[0.8rem] font-bold tracking-[0.14em] text-chic-green-deep uppercase">Our philosophy</p>
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] font-medium">What guides every visit</h2>
        </div>
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3">
          {philosophy.map((p) => {
            const Icon = p.icon;
            return (
              <div key={p.title} className="group rounded-3xl bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-chic-teal/5">
                <div className="mb-4 flex justify-center">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl ${p.color} transition-transform group-hover:scale-110`}>
                    <Icon size={28} />
                  </div>
                </div>
                <h3 className="mb-2 font-display text-xl font-medium text-ink">{p.title}</h3>
                <p className="text-[0.92rem] text-slate leading-relaxed">{p.desc}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* Approach Section */}
      <section className="bg-ink px-6 py-24 text-white">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-[0.8rem] font-bold tracking-[0.14em] text-chic-green uppercase">Our approach</p>
          <h2 className="mb-12 font-display text-[clamp(1.8rem,3vw,2.4rem)] font-medium">
            A simple, consistent process
          </h2>
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            {approach.map((step, i) => (
              <div key={step} className="flex items-center gap-6">
                <div className="flex flex-col items-center gap-2">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-chic-teal/20 font-display text-lg font-bold text-chic-green">
                    {i + 1}
                  </span>
                  <span className="font-display text-lg font-medium text-white">{step}</span>
                </div>
                {i < approach.length - 1 && <span className="hidden text-chic-teal/50 sm:inline text-2xl">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="bg-paper px-6 py-24">
        <div className="mx-auto mb-14 max-w-xl text-center">
          <p className="mb-3 text-[0.8rem] font-bold tracking-[0.14em] text-chic-green-deep uppercase">Meet the team</p>
          <h2 className="font-display text-[clamp(1.8rem,3vw,2.4rem)] font-medium">The people behind your smile</h2>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 items-center gap-10 overflow-hidden rounded-3xl border border-stone bg-white md:grid-cols-[280px_1fr]">
          <div className="relative h-full min-h-[300px] overflow-hidden">
            <img
              src={teamImage}
              alt="Dr. Shabana Yusuf — Lead Dentist"
              className="absolute inset-0 h-full w-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
          </div>
          <div className="p-8 text-center md:text-left">
            <h3 className="mb-1.5 font-display text-2xl font-medium">Dr. Shabana Yusuf</h3>
            <p className="mb-3.5 text-sm font-bold text-chic-green-deep">Lead Dentist · Cosmetic &amp; General Dentistry</p>
            <p className="mb-4.5 text-slate leading-relaxed">
              Leads Dental Chic&apos;s clinical work with a specialist interest in cosmetic
              dentistry, offering minimally invasive general care alongside orthodontics and minor
              oral surgery for patients across Blantyre.
            </p>
            <div className="flex flex-wrap justify-center gap-2.5 md:justify-start">
              {['Cosmetic Dentistry', 'Orthodontics', 'Minor Oral Surgery'].map((t) => (
                <span key={t} className="rounded-full bg-stone px-3.5 py-1.5 text-[0.8rem] font-semibold text-ink">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-4xl text-center text-[0.82rem] text-slate">
          More team profiles will be added here as the clinic grows.
        </p>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-chic-green-deep to-chic-teal px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-4 font-display text-[clamp(1.7rem,3vw,2.3rem)] font-medium">
            Come experience Dental Chic.
          </h2>
          <p className="mb-8 text-white/80">
            Professional, compassionate dental care designed around you.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              to="/book"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-chic-green-deep transition-all hover:-translate-y-px hover:bg-white/90"
            >
              Book an Appointment
            </Link>
            <a
              href="https://wa.me/265998951880"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border-[1.5px] border-white/40 px-8 py-4 text-base font-bold text-white transition-all hover:bg-white/10"
            >
              <MessageCircleIcon size={18} />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
