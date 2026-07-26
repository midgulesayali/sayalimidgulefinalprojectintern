import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Features from "../../components/Features/Features";
import Stats from "../../components/Stats/Stats";
import CTA from "../../components/CTA/CTA";
import Footer from "../../components/Footer/Footer";
import Testimonials from "../../components/Testimonials/Testimonials";
import Contact from "../../components/Contact/Contact";
import FAQ from "../../components/FAQ/FAQ";
import "./Home.css";

function Home() {
  return (
    <div className="home-page">
      <Navbar />
      <Hero />
      <Features />
      <Stats />
      <Testimonials />
      <FAQ />
      <CTA />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;