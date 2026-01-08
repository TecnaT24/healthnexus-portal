import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Doctors from "@/components/Doctors";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Appointment from "@/components/Appointment";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <Stats />
        <Doctors />
        <Appointment />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
