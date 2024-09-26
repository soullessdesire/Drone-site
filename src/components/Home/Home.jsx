import { lazy } from "react";
const Navbar = lazy(() => import("../universal/Navbar"));
const Footer = lazy(() => import("../universal/Footer/Footer"));
const Hero = lazy(() => import("../Home/Hero"));
const Sponsors = lazy(() => import("./Sponsors"));
const Advertisments = lazy(() => import("./Advertisments"));
const AboutUs = lazy(() => import("./AboutUs"));
const Process = lazy(() => import("./Process"));
const Blog = lazy(() => import("./Blog"));
const Services = lazy(() => import("./Services"));

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <Advertisments />
      <AboutUs />
      <Process />
      <Services />
      <Blog />
      <Footer />
    </>
  );
};

export default Home;
