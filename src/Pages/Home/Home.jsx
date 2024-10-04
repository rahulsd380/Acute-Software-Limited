import Hero from "../../Components/Hero/Hero";
import InnovativeFeatures from "../../Components/InnovativeFeatures/InnovativeFeatures";
import Navbar from "../../Components/Navbar/Navbar";
import Portfolio from "../../Components/Portfolio/Portfolio";
import Services from "../../Components/Services/Services";
import TechStack from "../../Components/TechStack/TechStack";
import Testimonials from "../../Components/Tes/Testimonials";
import OurTeam from "../../Components/OurTeam/OurTeam";
import Contact from "../../Components/contact/Contact";

const Home = () => {
  return (
    <div className="max-w-[1300px] mx-auto px-5">
      <Navbar />
      <Hero />
      <TechStack />
      <InnovativeFeatures />
      <Services/>
      <Portfolio/>
      <OurTeam/>
      <Contact></Contact>
      <Testimonials/>
    </div>
  );
};

export default Home;

