import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { TechPartners } from './components/TechPartners';
import { Testimonials } from './components/Testimonials';
import { Clients } from './components/Clients';
import { Blog } from './components/Blog';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { WhatsAppButton } from './components/WhatsAppButton';
import { AccessibilityMenu } from './components/AccessibilityMenu';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <Hero />
      <Services />
      <Process />
      <TechPartners />
      <Testimonials />
      <Clients />
      <Blog />
      <Contact />
      <Footer />
      <WhatsAppButton />
      <AccessibilityMenu />
    </div>
  );
}

export default App;
