import { useState } from 'react';
import Wordmark from './Wordmark';

const links = [
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#team', label: 'Team' },
  { href: '#reviews', label: 'Reviews' },
  { href: '#find-us', label: 'Find Us' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone bg-paper/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center gap-8 px-6 py-4">
        <div className="mr-auto">
          <Wordmark />
        </div>

        <nav aria-label="Primary" className="hidden gap-7 text-[0.92rem] font-semibold md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="opacity-75 transition-opacity hover:opacity-100">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 md:flex">
          <a
            href="https://wa.me/265998951880"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-stone px-5 py-3 text-sm font-bold transition-colors hover:bg-[#e2e4dd]"
          >
            WhatsApp Us
          </a>
          <a
            href="#book"
            className="rounded-full bg-ink px-5 py-3 text-sm font-bold text-white transition-all hover:-translate-y-px hover:bg-chic-green-deep"
          >
            Book Appointment
          </a>
        </div>

        <button
          className="flex flex-col gap-1.5 p-1.5 md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
        >
          <span className="h-0.5 w-5.5 rounded bg-ink" />
          <span className="h-0.5 w-5.5 rounded bg-ink" />
          <span className="h-0.5 w-5.5 rounded bg-ink" />
        </button>
      </div>

      {open && (
        <div className="flex flex-col gap-4 border-b border-stone bg-paper px-6 pb-6 md:hidden">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-semibold" onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
          <a href="https://wa.me/265998951880" className="rounded-full bg-stone px-5 py-3 text-center text-sm font-bold">
            WhatsApp Us
          </a>
          <a href="#book" className="rounded-full bg-ink px-5 py-3 text-center text-sm font-bold text-white" onClick={() => setOpen(false)}>
            Book Appointment
          </a>
        </div>
      )}
    </header>
  );
}
