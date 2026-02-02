import { Hero } from '../components/Hero';
import { Services } from '../components/Services';
import { Process } from '../components/Process';
import { TechPartners } from '../components/TechPartners';
import { Testimonials } from '../components/Testimonials';
import { Clients } from '../components/Clients';
import { Blog } from '../components/Blog';
import { Contact } from '../components/Contact';
import { Footer } from '../components/Footer';

export function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Process />
      <TechPartners />
      <Testimonials />
      <Clients />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
}
