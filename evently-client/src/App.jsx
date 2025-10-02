import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import "./App.css";
import LatestEvents from "./components/LatestEvents";
import ServicesSection from "./components/ServicesSection";
import TestimonialsSection from "./components/TestimonialsSection";
import PricingSection from "./components/PricingSection";
import GallerySection from "./components/GallarySection";
import PartnersSection from "./components/PartnersSection";
import NewsletterSection from "./components/NewsLetterSection";
import ContactSection from "./components/ContactSection";
import Login from "./components/Login.jsx";
import SignUp from "./components/SignUp.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <LatestEvents />
      <ServicesSection />
      <TestimonialsSection />
      <PricingSection />
      <GallerySection />
      <PartnersSection />
      <NewsletterSection />
      <ContactSection />
      <Login />
      <SignUp />
    </div>
  );
}

export default App;
