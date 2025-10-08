import HeroBanner from "../components/HeroBanner.jsx";
import EventCategories from "../components/EventCategories.jsx";
import ArtistsSpotlight from "../components/ArtistsSpotlight.jsx";
import EventsGrid from "../components/EventsGrid.jsx";

const Event = () => {
  return (
    <div>
      <HeroBanner />
      <EventCategories />
      <ArtistsSpotlight />
      <EventsGrid />
    </div>
  );
};

export default Event;
