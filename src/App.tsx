import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { TechPartners } from './components/TechPartners';
import { Testimonials } from './components/Testimonials';
import { Clients } from './components/Clients';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Hero />
      <Services />
      <TechPartners />
      <Testimonials />
      <Clients />
      <Blog />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
