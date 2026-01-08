import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Jennifer Adams",
    role: "Patient",
    content: "The care I received at MediCare was exceptional. The doctors were knowledgeable, and the staff was incredibly supportive throughout my treatment journey.",
    rating: 5,
  },
  {
    name: "Robert Thompson",
    role: "Patient",
    content: "I've been to many hospitals, but MediCare stands out for their patient-first approach. The facilities are modern and the care is personalized.",
    rating: 5,
  },
  {
    name: "Maria Garcia",
    role: "Patient",
    content: "From emergency care to follow-up appointments, every experience has been seamless. I highly recommend MediCare to anyone seeking quality healthcare.",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block text-primary font-semibold mb-4">Testimonials</span>
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
            What Our Patients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from our patients about their experiences and the quality care 
            they received at MediCare Hospital.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-8 card-shadow relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6">
                <Quote className="h-10 w-10 text-primary/20" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/80 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
