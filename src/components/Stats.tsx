import { Users, Heart, Award, Building2 } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "50,000+",
    label: "Happy Patients",
    description: "Treated annually",
  },
  {
    icon: Heart,
    value: "98%",
    label: "Success Rate",
    description: "Patient satisfaction",
  },
  {
    icon: Award,
    value: "150+",
    label: "Expert Doctors",
    description: "Board certified",
  },
  {
    icon: Building2,
    value: "25+",
    label: "Departments",
    description: "Medical specialties",
  },
];

const Stats = () => {
  return (
    <section className="py-16 hero-gradient">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center">
                <stat.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <p className="text-3xl md:text-4xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-lg font-semibold text-primary-foreground mb-1">
                {stat.label}
              </p>
              <p className="text-sm text-primary-foreground/70">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
