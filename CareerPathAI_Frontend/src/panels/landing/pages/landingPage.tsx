import Navbar from "../components/navbar";
import Hero from "../components/hero";
import Features from "../components/features";
import HowItWorks from "../components/howItWorks";
import Testimonials from "../components/testimonials";
import CTA from "../components/cta";
import Footer from "../components/footer";


const LandingPage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">

      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
    
  );
  
};

export default LandingPage;