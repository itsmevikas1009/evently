import HeroSection from "../components/HeroSection.jsx";
import LatestEvents from "../components/LatestEvents.jsx";
import ServicesSection from "../components/ServicesSection.jsx";
import TestimonialsSection from "../components/TestimonialsSection.jsx";
import PricingSection from "../components/PricingSection.jsx";
import GallerySection from "../components/GallarySection.jsx";
import PartnersSection from "../components/PartnersSection.jsx";
import NewsletterSection from "../components/NewsletterSection.jsx";
import ContactSection from "../components/ContactSection.jsx";
import HeroBanner from "../components/HeroBanner.jsx";
import EventCategories from "../components/EventCategories.jsx";
import ArtistsSpotlight from "../components/ArtistsSpotlight.jsx";
import EventsGrid from "../components/EventsGrid.jsx";

const Body = () => {
  return (
    <>
      <div className="body">
        {/* <HeroSection />
        <LatestEvents />
        <ServicesSection />
        <TestimonialsSection />
        <PricingSection />
        <GallerySection />
        <PartnersSection />
        <NewsletterSection />
        <ContactSection /> */}
        <HeroBanner />
        <EventCategories />
        <ArtistsSpotlight />
        <EventsGrid />
      </div>
    </>
  );
};

export default Body;
