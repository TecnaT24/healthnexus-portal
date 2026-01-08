import { Facebook, Twitter, Linkedin } from "lucide-react";
import doctor1 from "@/assets/doctor-1.jpg";
import doctor2 from "@/assets/doctor-2.jpg";
import doctor3 from "@/assets/doctor-3.jpg";
import doctor4 from "@/assets/doctor-4.jpg";

const doctors = [
  {
    name: "Dr. Sarah Johnson",
    specialty: "Cardiology",
    image: doctor1,
    experience: "15 years",
  },
  {
    name: "Dr. Michael Chen",
    specialty: "Neurology",
    image: doctor2,
    experience: "12 years",
  },
  {
    name: "Dr. Emily Williams",
    specialty: "Surgery",
    image: doctor3,
    experience: "18 years",
  },
  {
    name: "Dr. David Martinez",
    specialty: "Orthopedics",
    image: doctor4,
    experience: "10 years",
  },
];

const Doctors = () => {
  return (
    <section id="doctors" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4">Our Team</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Meet Our Expert Doctors
          </h2>
          <p className="text-muted-foreground text-lg">
            Our team of highly skilled and experienced doctors are committed to 
            providing exceptional care with compassion and expertise.
          </p>
        </div>

        {/* Doctors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor, index) => (
            <div
              key={doctor.name}
              className="group bg-card rounded-2xl overflow-hidden card-shadow hover:card-shadow-hover transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-square">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Social Links Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-colors"
                    >
                      <Facebook className="h-5 w-5 text-primary-foreground" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-colors"
                    >
                      <Twitter className="h-5 w-5 text-primary-foreground" />
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center hover:bg-primary transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-primary-foreground" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Info */}
              <div className="p-6 text-center">
                <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
                  {doctor.name}
                </h3>
                <p className="text-primary font-medium mb-2">{doctor.specialty}</p>
                <p className="text-sm text-muted-foreground">{doctor.experience} Experience</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
