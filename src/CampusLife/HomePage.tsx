import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
  }),
};

type Section = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
  slug: string;
  image: string;
};

function HomePage({ sections }: { sections: Section[] }) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);

      if (heroRef.current) {
        const scrolled = window.scrollY;
        const speed = 0.5;
        heroRef.current.style.transform = `translateY(${scrolled * speed}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans overflow-hidden">
      <div className="scroll-progress" style={{ transform: `scaleX(${scrollProgress / 100})` }} />

      <div className="relative h-[100vh] overflow-hidden">
        <div ref={heroRef} className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?auto=format&fit=crop&q=80"
            alt="Campus Life"
            className="w-full h-full object-cover image-scale visible"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/50 to-transparent" />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
          <motion.h1
            className="text-7xl font-bold text-white tracking-tight mb-6"
            initial="hidden"
            animate="visible"
            variants={textVariants}
            custom={0}
          >
            Campus Life
          </motion.h1>
          <motion.p
            className="text-xl text-gray-200 max-w-2xl"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={1}
          >
            Discover a vibrant community where tradition meets innovation, and where every student's journey shapes our collective story.
          </motion.p>
          <motion.div
            className="mt-8"
            variants={textVariants}
            initial="hidden"
            animate="visible"
            custom={2}
          >
            <button className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-all duration-300 hover-lift">
              Explore Our Campus
            </button>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-20 sm:px-6 lg:px-8">
        {sections.map((section, index) => {
          const Icon = section.icon;
          return (
            <div
              key={index}
              ref={(el) => (sectionRefs.current[index] = el)}
              className="section-fade-in mb-32"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? "lg:grid-flow-col-dense" : ""}`}>
                <motion.div
                  className={`space-y-8 ${index % 2 === 1 ? "lg:col-start-2" : ""}`}
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  custom={index}
                >
                  <div className="animate-text">
                    <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full hover-lift">
                      <Icon className="w-4 h-4 mr-2" />
                      {section.title}
                    </div>
                  </div>
                  <h2 className="text-4xl font-bold tracking-tight">{section.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">{section.description}</p>
                  <ul className="space-y-4">
                    {section.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        className="flex items-start"
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        custom={featureIndex}
                      >
                        <ArrowRight className="w-5 h-5 text-primary mt-1 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                  <Link to={`/${section.slug}`} className="group inline-flex items-center text-primary hover:text-primary-dark transition-colors duration-300 text-lg font-semibold hover-lift">
                    Learn More About {section.title}
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </motion.div>
                <motion.div
                  className={`relative h-[600px] overflow-hidden rounded-lg ${index % 2 === 1 ? "lg:col-start-1" : ""}`}
                  initial="hidden"
                  animate="visible"
                  variants={textVariants}
                  custom={index}
                >
                  <img src={section.image} alt={section.title} className="w-full h-full object-cover" />
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default HomePage;

