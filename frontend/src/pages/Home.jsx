import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import TrustIntro from '../components/TrustIntro';
import ServicesPreview from '../components/ServicesPreview';
import WhyUs from '../components/WhyUs';
import TreatmentJourney from '../components/TreatmentJourney';
import TeamPreview from '../components/TeamPreview';
import Reviews from '../components/Reviews';
import Book from '../components/Book';
import FindUs from '../components/FindUs';

export default function Home() {
  const { hash } = useLocation();

  // Scroll to a section (e.g. #book) when arriving from another page's nav link
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }
  }, [hash]);

  return (
    <>
      <Hero />
      <TrustIntro />
      <ServicesPreview />
      <WhyUs />
      <TreatmentJourney />
      <TeamPreview />
      <Reviews />
      <Book />
      <FindUs />
    </>
  );
}
