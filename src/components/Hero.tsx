import { Button } from "@/components/ui/button";
import { Calendar, ArrowRight, Shield, Clock, Award } from "lucide-react";
import heroImage from "@/assets/hero-hospital.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="MediCare Hospital Building"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-foreground/40" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 backdrop-blur-sm rounded-full px-4 py-2 mb-6 animate-fade-in">
            <Award className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium text-primary-foreground">
              #1 Rated Hospital in the Region
            </span>
          </div>

          {/* Heading */}
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Your Health, Our{" "}
            <span className="text-primary">Priority</span>
          </h1>

          {/* Subheading */}
          <p className="text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Experience world-class healthcare with compassionate care. Our team of 
            expert physicians and state-of-the-art facilities are here to serve you 
            24/7 with excellence.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" size="xl">
              <Calendar className="h-5 w-5" />
              Book Appointment
            </Button>
            <Button variant="heroOutline" size="xl">
              Explore Services
              <ArrowRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="grid grid-cols-3 gap-6 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-foreground">25+</p>
                <p className="text-sm text-primary-foreground/70">Years Experience</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                <Award className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-foreground">150+</p>
                <p className="text-sm text-primary-foreground/70">Expert Doctors</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-primary-foreground">24/7</p>
                <p className="text-sm text-primary-foreground/70">Emergency Care</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
