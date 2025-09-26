import Image from "next/image";
import featurePhone1 from "@/assets/ProductShowcaseImage/feature-phone-1.png.png";
import featurePhone2 from "@/assets/ProductShowcaseImage/feature-phone-2.png.png";
import featurePhone3 from "@/assets/ProductShowcaseImage/feature-phone-3.png.png";
import heroImgBtmGlow from "@/assets/HeroImage/HeroImgBtnGlow.png"; // Glow image import
import { Check } from "lucide-react";

const ProductShowcase = () => {
  const features = [
    {
      id: 1,
      title: "Book services, track progress and stay updated",
      description:
        "Easily schedule appointments, get real-time updates, and track progress. Streamline your service experience.",
      category: "Scheduling",
      image: featurePhone1,
      points: [
        "Book services in seconds",
        "Track real-time job updates",
        "Schedule appointments at your convenience",
      ],
    },
    {
      id: 2,
      title: "Assign jobs, monitor performance, and streamline operations",
      description:
        "Get full control over your workforce with real-time tracking, performance analytics, and seamless job management in one app.",
      category: "Analytics",
      image: featurePhone2,
      points: [
        "Assign jobs to the right team member",
        "Monitor performance in real time",
        "Manage clients and services seamlessly",
      ],
    },
    {
      id: 3,
      title: "See tasks, track time, and navigate routes with ease",
      description:
        "Everything you need to manage your workday and job assignments with enhanced route planning and time tracking.",
      category: "Navigation",
      image: featurePhone3,
      points: [
        "Assign jobs to the right team member",
        "Monitor performance in real time",
        "Manage clients and services seamlessly",
      ],
    },
  ];

  return (
    <section id="product" className="py-16 px-6 lg:px-20">
      <div className="text-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
          Build for Everyone
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Whether you're booking services or tracking employee progress, our app
          makes everything seamless and intuitive.
        </p>
      </div>

      <div className="space-y-24">
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className="grid gap-8 items-center lg:grid-cols-2 container-custom"
          >
            {/* Text Content */}
            <div
              className={`${index % 2 !== 0 ? "lg:order-2" : ""} space-y-6`}
            >
              <span className="inline-block px-3 py-1 text-sm font-medium bg-primary/10 text-primary rounded-full">
                {feature.category}
              </span>
              <h3 className="text-2xl md:text-3xl font-bold">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>

              <ul className="space-y-3">
                {feature.points.map((point, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-success" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Image with Bottom Glow */}
            <div
              className={`${index % 2 !== 0 ? "lg:order-1" : ""} relative flex justify-center`}
            >
              <Image
                src={feature.image}
                alt={feature.title}
              />
              {/* Bottom Glow / Blur Effect */}
              <div className="absolute w-full -bottom-2 pointer-events-none">
                <Image
                  src={heroImgBtmGlow}
                  alt="Bottom Glow"
                  className=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductShowcase;
