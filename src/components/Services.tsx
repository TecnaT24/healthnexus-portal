import { 
  Heart, 
  Brain, 
  Bone, 
  Baby, 
  Eye, 
  Stethoscope,
  Pill,
  Syringe,
  ArrowRight
} from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Heart,
    title: "Cardiology",
    description: "Comprehensive heart care with advanced diagnostic and treatment options for cardiovascular conditions.",
    color: "text-red-500",
    bgColor: "bg-red-500/10",
  },
  {
    icon: Brain,
    title: "Neurology",
    description: "Expert care for brain and nervous system disorders using cutting-edge technology.",
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
  },
  {
    icon: Bone,
    title: "Orthopedics",
    description: "Specialized treatment for bone, joint, and muscle conditions to restore mobility.",
    color: "text-amber-500",
    bgColor: "bg-amber-500/10",
  },
  {
    icon: Baby,
    title: "Pediatrics",
    description: "Gentle, specialized healthcare for infants, children, and adolescents.",
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
  },
  {
    icon: Eye,
    title: "Ophthalmology",
    description: "Advanced eye care services including surgery, treatment, and vision correction.",
    color: "text-cyan-500",
    bgColor: "bg-cyan-500/10",
  },
  {
    icon: Stethoscope,
    title: "General Medicine",
    description: "Primary healthcare services for diagnosis and treatment of common health issues.",
    color: "text-green-500",
    bgColor: "bg-green-500/10",
  },
  {
    icon: Pill,
    title: "Pharmacy",
    description: "24/7 in-house pharmacy with all essential medications and expert consultation.",
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
  },
  {
    icon: Syringe,
    title: "Laboratory",
    description: "State-of-the-art diagnostic laboratory with quick and accurate test results.",
    color: "text-teal-500",
    bgColor: "bg-teal-500/10",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4">Our Services</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Comprehensive Medical Services
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a wide range of medical services with state-of-the-art facilities 
            and experienced healthcare professionals dedicated to your well-being.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group bg-card rounded-xl p-6 card-shadow hover:card-shadow-hover transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`w-14 h-14 ${service.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className={`h-7 w-7 ${service.color}`} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {service.description}
              </p>
              <a 
                href="#" 
                className="inline-flex items-center gap-2 text-primary font-medium text-sm hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button variant="default" size="lg">
            View All Services
            <ArrowRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;
