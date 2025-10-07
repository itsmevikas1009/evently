import HeroSection from "../components/HeroSection.jsx";
import LatestEvents from "../components/LatestEvents.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import PricingSection from "../components/PricingSection.jsx";
import GallerySection from "../components/GallarySection.jsx";
import PartnersSection from "../components/PartnersSection.jsx";
import NewsletterSection from "../components/NewsletterSection.jsx";
import ContactSection from "../components/ContactSection.jsx";

const Body = () => {
  return (
    <>
      <div className="body">
        <HeroSection />
        <LatestEvents />
        <ServicesSection />
        <TestimonialsSection />
        <PricingSection />
        <GallerySection />
        <PartnersSection />
        <NewsletterSection />
        <ContactSection />
      </div>
    </>
  );
};

export default Body;
