import FAQ from "@/components/Section/FAQ";
import Features from "@/components/Section/Features";
import Footer from "@/components/Section/Footer";
import Hero from "@/components/Section/Hero";
import Navbar from "@/components/Section/Navbar";
import ProductShowcase from "@/components/Section/ProductShowcase";
import Testimonials from "@/components/Section/Testimonials";


export default function Home() {
  return (
    <div className="space-y-24">


      <Navbar />

      <div className="my-8">
        <Hero />
      </div>

      <Features />

      <ProductShowcase />

      <Testimonials />

      <FAQ />

      <Footer />
    </div>
  );
}
