import { Calendar, MapPin, BarChart3, Shield } from "lucide-react";

const features = [
  {
    icon: Calendar,
    title: "Easy Service Booking",
    description: "Simple scheduling system for clients with service reminders and confirmations."
  },
  {
    icon: MapPin,
    title: "Real Time Tracking",
    description: "Track service progress and location updates with live notifications."
  },
  {
    icon: BarChart3,
    title: "Performance Analytics",
    description: "Get detailed business performance analytics and insights."
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description: "End-to-end encryption with enterprise-grade security and reliability."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-16 px-6 lg:px-20 container-custom ">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold">Our Key Features</h2>
        <p className="text-muted-foreground mt-2">
          Tools designed to make your job management seamless and efficient.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-left"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary-light/10">
              <feature.icon className="h-6 w-6 text-primary-dark" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
            <p className="text-sm text-muted-foreground">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
