import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPinIcon, PhoneIcon, MailIcon, ClockIcon, MessageCircleIcon, SendIcon } from '../components/Icons';
import PageHero from '../components/PageHero';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:4000';

const contactCards = [
  { icon: MapPinIcon, title: 'Visit Us', value: 'Kidney Crescent, Blantyre, Malawi', action: null },
  { icon: PhoneIcon, title: 'Call Us', value: '+265 998 95 18 80', action: 'tel:+265998951880' },
  { icon: MessageCircleIcon, title: 'WhatsApp', value: 'Chat with us anytime', action: 'https://wa.me/265998951880' },
  { icon: MailIcon, title: 'Email Us', value: 'dentalchic@outlook.com', action: 'mailto:dentalchic@outlook.com' },
];

const hours = [
  { day: 'Monday – Friday', time: '9:00 – 16:00' },
  { day: 'Saturday', time: '9:00 – 12:00' },
  { day: 'Sunday', time: 'Closed' },
];

export default function ContactPage() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus('sending');
    setError('');

    const form = e.target;
    const payload = {
      name: form.name.value,
      email: form.email.value,
      phone: form.phone.value,
      message: form.message.value,
    };

    try {
      const res = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body.error || 'Could not send your message.');
      }

      setStatus('sent');
      form.reset();
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      setStatus('error');
      setError(err.message);
    }
  }

  return (
    <>
      <PageHero eyebrow="Get in touch" title="We're here to help you smile." crumb="Contact" />

      <section className="bg-white px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactCards.map((c) => {
            const Icon = c.icon;
            const Wrapper = c.action ? 'a' : 'div';
            const wrapperProps = c.action
              ? { href: c.action, target: c.action.startsWith('http') ? '_blank' : undefined, rel: c.action.startsWith('http') ? 'noopener noreferrer' : undefined }
              : {};
            return (
              <Wrapper
                key={c.title}
                {...wrapperProps}
                className="flex flex-col items-center rounded-2xl border border-stone bg-paper p-7 text-center transition-all hover:-translate-y-1 hover:border-chic-teal"
              >
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-chic-teal/10 text-chic-teal">
                  <Icon size={22} />
                </div>
                <h3 className="mb-1 font-display text-lg font-medium">{c.title}</h3>
                <p className="text-[0.88rem] text-slate">{c.value}</p>
              </Wrapper>
            );
          })}
        </div>
      </section>

      <section className="bg-stone px-6 py-20">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-8">
            <div className="relative aspect-video overflow-hidden rounded-3xl">
              <iframe
                title="Dental Chic Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3836.9!2d35.0!3d-15.78!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDQ2JzQ4LjAiSyAzNcKwMDAnMDAuMCJF!5e0!3m2!1sen!2smw!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              />
            </div>

            <div className="rounded-3xl bg-white p-8">
              <div className="mb-4 flex items-center gap-2">
                <ClockIcon size={18} className="text-chic-teal" />
                <h3 className="font-display text-lg font-medium">Opening Hours</h3>
              </div>
              <div className="flex flex-col gap-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex justify-between text-[0.92rem]">
                    <span className="text-slate">{h.day}</span>
                    <span className={`font-medium ${h.time === 'Closed' ? 'text-slate/50' : ''}`}>{h.time}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8">
            <h3 className="mb-2 font-display text-xl font-medium">Send us a message</h3>
            <p className="mb-6 text-[0.9rem] text-slate">We'll get back to you as soon as possible.</p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-[0.82rem] font-bold">Full Name</label>
                  <input id="name" name="name" type="text" required placeholder="Your name" className="w-full rounded-xl border-[1.5px] border-stone bg-paper px-4 py-3 text-[0.92rem] focus:border-chic-teal focus:outline-none" />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1.5 block text-[0.82rem] font-bold">Phone</label>
                  <input id="phone" name="phone" type="tel" placeholder="Your phone number" className="w-full rounded-xl border-[1.5px] border-stone bg-paper px-4 py-3 text-[0.92rem] focus:border-chic-teal focus:outline-none" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="mb-1.5 block text-[0.82rem] font-bold">Email</label>
                <input id="email" name="email" type="email" required placeholder="Your email address" className="w-full rounded-xl border-[1.5px] border-stone bg-paper px-4 py-3 text-[0.92rem] focus:border-chic-teal focus:outline-none" />
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-[0.82rem] font-bold">Message</label>
                <textarea id="message" name="message" rows={4} required placeholder="How can we help you?" className="w-full rounded-xl border-[1.5px] border-stone bg-paper px-4 py-3 text-[0.92rem] focus:border-chic-teal focus:outline-none resize-none" />
              </div>

              <button
                type="submit"
                disabled={status === 'sending' || status === 'sent'}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-bold text-white transition-all hover:-translate-y-px hover:bg-chic-green-deep disabled:opacity-70"
              >
                <SendIcon size={16} />
                {status === 'sending' && 'Sending...'}
                {status === 'sent' && 'Message Sent!'}
                {(status === 'idle' || status === 'error') && 'Send Message'}
              </button>

              {status === 'error' && <p className="text-[0.85rem] font-semibold text-red-600">{error}</p>}
            </form>
          </div>
        </div>
      </section>

      <section className="bg-ink px-6 py-20 text-center text-white">
        <div className="mx-auto max-w-xl">
          <h2 className="mb-4 font-display text-[clamp(1.7rem,3vw,2.3rem)] font-medium">Prefer to book directly?</h2>
          <p className="mb-8 text-white/70">Schedule your appointment online in just a few clicks.</p>
          <Link to="/book" className="inline-flex items-center gap-2 rounded-full bg-chic-green px-8 py-4 text-base font-bold text-ink transition-all hover:-translate-y-px">
            Book an Appointment
          </Link>
        </div>
      </section>
    </>
  );
}
