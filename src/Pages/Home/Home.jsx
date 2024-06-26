import Nav from "../../components/shared/Nav";
import About from "../../Sections/About/About";
import Contact from "../../Sections/Contact/Contact";
import Footer from "../../Sections/Footer/Footer";
import Gallery from "../../Sections/Gallery/Gallery";
import HomeHeader from "../../Sections/HomeHeader/HomeHeader";
import Map from "../../Sections/Map/Map";
import Testimonial from "../../Sections/Testimonial/Testimonial";
import WideSection from "../../Sections/WideSection/WideSection";

const Home = () => {
  return (
    <div>
      <Nav />
      <HomeHeader />
      <About />
      <WideSection />
      <Testimonial />
      <Gallery />
      <Map />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
