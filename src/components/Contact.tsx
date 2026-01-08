import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Location",
    details: ["123 Healthcare Avenue", "Medical City, MC 12345"],
  },
  {
    icon: Phone,
    title: "Phone",
    details: ["Emergency: 1-800-HEALTH", "Reception: (555) 123-4567"],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@medicare-hospital.com", "appointments@medicare.com"],
  },
  {
    icon: Clock,
    title: "Working Hours",
    details: ["Emergency: 24/7", "OPD: Mon-Sat, 8AM-8PM"],
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4">Contact Us</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-muted-foreground text-lg">
            Have questions or need assistance? We're here to help. Reach out to us 
            through any of the following channels.
          </p>
        </div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={info.title}
              className="bg-card rounded-xl p-6 card-shadow text-center hover:card-shadow-hover transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto mb-4 rounded-lg hero-gradient flex items-center justify-center">
                <info.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="font-semibold text-foreground mb-3">{info.title}</h3>
              {info.details.map((detail, i) => (
                <p key={i} className="text-muted-foreground text-sm">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Map */}
        <div className="rounded-2xl overflow-hidden card-shadow">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425878428698!3d40.74076794379132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259bf5c1654f3%3A0xc80f9cfce5383d5d!2sGoogle!5e0!3m2!1sen!2sus!4v1637684811856!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Hospital Location"
          />
        </div>
      </div>
    </section>
  );
};

export default Contact;
