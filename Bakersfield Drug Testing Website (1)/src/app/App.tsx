import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Services } from "./components/Services";
import { FacilityShowcase } from "./components/FacilityShowcase";
import { ThirdPartyAdmin } from "./components/ThirdPartyAdmin";
import { About } from "./components/About";
import { FAQ } from "./components/FAQ";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { ChatWidget } from "./components/ChatWidget";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <ThirdPartyAdmin />
      <Services />
      <FacilityShowcase />
      <FAQ />
      <Contact />
      <Footer />
      <ChatWidget />
    </div>
  );
}