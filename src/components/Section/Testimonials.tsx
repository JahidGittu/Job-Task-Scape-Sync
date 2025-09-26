import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Pranjali H.",
    role: "Service Provider",
    content: "The app completely changed how we run our business. Everything gets done on time. Booking and job management has never been this easy.",
    avatar: "PH",
    rating: 5
  },
  {
    name: "Ahmad R.",
    role: "Business Owner", 
    content: "I love how easy it is to see the daily tasks and track our progress. It has completely streamlined our daily workflow.",
    avatar: "AR",
    rating: 5
  },
  {
    name: "Pranjali H.",
    role: "Field Worker",
    content: "As a freelancer, I love being able to see exactly which jobs are mine to manage. My skills, scheduling and workflows are better than ever.",
    avatar: "PH",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 px-6 lg:px-20 bg-background">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          What Our Users Are Saying
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Don't just take our word for it
        </p>
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 container-custom ">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-card p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 space-y-4">
            
            {/* Rating */}
            <div className="flex items-center gap-1">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>

            {/* Content */}
            <p className="text-sm md:text-base text-muted-foreground">{testimonial.content}</p>

            {/* User Info */}
            <div className="flex items-center gap-3 pt-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <span className="text-sm font-semibold text-primary">{testimonial.avatar}</span>
              </div>
              <div>
                <div className="font-semibold text-sm md:text-base">{testimonial.name}</div>
                <div className="text-xs md:text-sm text-muted-foreground">{testimonial.role}</div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
