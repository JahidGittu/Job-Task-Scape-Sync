import appleStore from '@/assets/HeroImage/AppleStore.png';
import playStore from '@/assets/HeroImage/PlayStore.png';
import heroPhone from '@/assets/HeroImage/HeroPhone.png';
import heroBg from '@/assets/HeroImage/HeroBgFlower.png';
import sideEffectImg from '@/assets/HeroImage/SideEffectIMG.png';
import sideEffectImg2 from '@/assets/HeroImage/SideEffectIMG2.png';
import underlineImg from '@/assets/HeroImage/UnderlineStrockIMG.png';
import heroImgBtmGlow from '@/assets/HeroImage/HeroImgBtnGlow.png';
import { Star } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className="relative">
      {/* Background Effect */}
      <div className="absolute -left-3/6 -top-3/6">
        <Image src={sideEffectImg} alt="Hero Background" priority />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <h1 className="relative text-4xl md:text-5xl lg:text-7xl font-bold leading-tight">
              All Your Jobs{' '}
              <span className="text-primary relative">One Smart App</span>
              <span className="absolute -top-12 left-52 -z-10">
                <Image src={heroBg} alt="Accent" />
              </span>
              <span className="absolute -bottom-3 right-16 w-8/12 -z-10">
                <Image src={underlineImg} alt="Underline Decoration" />
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-lg leading-relaxed">
              Streamline your service business with our comprehensive job management app.
              Schedule, track, and get paid — all in one place.
            </p>

            {/* App Store */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="#">
                <Image
                  src={appleStore}
                  alt="Apple Store"
                  className="hover:scale-105 transition-transform"
                />
              </Link>
              <Link href="#">
                <Image
                  src={playStore}
                  alt="Google Play"
                  className="hover:scale-105 transition-transform"
                />
              </Link>
            </div>

            {/* Rating */}
            <div className="flex items-center gap-4 pt-4">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <div className="text-sm text-muted-foreground">
                4.8 rating from 2000+ reviews
              </div>
            </div>
          </div>

          {/* Phone */}
          <div className="relative">
            <Image src={heroPhone} alt="App UI" priority className="relative" />
            <div className="absolute w-full -bottom-2">
              <Image src={heroImgBtmGlow} alt="Bottom Glow" />
            </div>
            <div className="absolute -top-12 -right-16 z-0 opacity-70">
              <Image src={sideEffectImg2} alt="Side Effect" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
