import React, { useEffect, useState, useRef } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" }
  }),
};

interface Section {
  slug: string;
  icon: React.ComponentType<{ className?: string }>;
  image: string;
  title: string;
  description: string;
  content: string;
  galleryImages?: string[];
}

interface SectionPageProps {
  sections: Section[];
}

function SectionPage({ sections }: SectionPageProps) {
  const { slug } = useParams();
  const section = sections.find((s) => s.slug === slug);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showContent, setShowContent] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      if (heroRef.current) {
        const scrolled = window.scrollY;
        heroRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!contentRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    observer.observe(contentRef.current);
    return () => observer.disconnect();
  }, [showContent]);

  if (!section) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center animate-text visible">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Section Not Found</h1>
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary-dark hover-lift">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Return to Homepage
          </Link>
        </div>
      </div>
    );
  }

  const Icon = section.icon;

  return (
    <div className="min-h-screen bg-white font-sans overflow-hidden">
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }} />

      <div className="relative h-[100vh] overflow-hidden">
        <div ref={heroRef} className="absolute inset-0">
          <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <h1 className="hero-text text-6xl font-bold text-white tracking-tight mb-6">{section.title}</h1>
          <p className="hero-text text-xl text-gray-200 max-w-2xl">{section.description}</p>
          <button onClick={() => setShowContent(true)} className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-300 hover-lift mt-8">
            Explore More
          </button>
        </div>
      </div>

      {showContent && (
        <div ref={contentRef} className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
          <Link to="/" className="inline-flex items-center text-primary hover:text-primary-dark mb-8 hover-lift animate-text">
            <ArrowLeft className="mr-2 h-5 w-5" />
            Back to Campus Life
          </Link>

          <div className="prose prose-lg max-w-none">
            <motion.div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full mb-8 hover-lift" initial="hidden" animate="visible">
              <Icon className="w-4 h-4 mr-2" />
              {section.title}
            </motion.div>

            <div className="space-y-8">
              {section.content.split("\n\n").map((paragraph, index) => (
                <motion.p key={index} className="text-gray-700 leading-relaxed" variants={textVariants} initial="hidden" animate="visible" custom={index}>
                  {paragraph.trim()}
                </motion.p>
              ))}
            </div>

            {section.galleryImages && section.galleryImages.length > 0 && (
              <div className="mt-16 section-fade-in">
                <Swiper modules={[Autoplay, Navigation, Pagination, EffectFade]} spaceBetween={10} slidesPerView={1} navigation pagination={{ clickable: true }} effect="fade" autoplay={{ delay: 2500, disableOnInteraction: false }} loop className="rounded-xl shadow-lg">
                  {section.galleryImages.map((image, index) => (
                    <SwiperSlide key={index}>
                      <div className="w-full h-[500px] relative overflow-hidden">
                        <img src={image} alt="Gallery" className="w-full h-full object-cover" />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default SectionPage;

