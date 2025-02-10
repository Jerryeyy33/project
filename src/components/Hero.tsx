import React from 'react';
import { ArrowRight, BookOpen, Award, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <>
      {/* Hero Content */}
      <div className="bg-[#9E1B32] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-serif mb-6 tracking-wide">
              Prof. Ramkrishna More College
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl font-light">
              Empowering minds, shaping futures through excellence in education since 1994
            </p>
            <div className="mt-10 flex justify-center gap-x-6">
              <a
                href="#apply"
                className="bg-white text-[#9E1B32] px-8 py-4 text-lg font-medium hover:bg-gray-100 transition-colors rounded"
              >
                Apply Now
              </a>
              <a
                href="#tour"
                className="border-2 border-white text-white px-8 py-4 text-lg font-medium hover:bg-white/10 transition-colors rounded flex items-center"
              >
                Virtual Tour
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="mt-6 flex justify-center gap-x-6">
              <a
                href="/login"
                className="bg-blue-600 text-white px-6 py-3 text-lg font-medium hover:bg-blue-700 transition-colors rounded"
              >
                Login
              </a>
              <a
                href="/admin"
                className="border-2 border-white text-white px-6 py-3 text-lg font-medium hover:bg-white/10 transition-colors rounded"
              >
                Admin Dashboard
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="relative h-screen min-h-[600px] max-h-[800px]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="https://pdearmacs.edu.in/College+video+intro+6.0+FINAL.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-serif text-gray-900 mb-6">Welcome to PRMCAS</h2>
            <p className="text-lg text-gray-600">
              Founded in 1994, Prof. Ramkrishna More College has been a beacon of academic excellence in Pune.
              Our institution is committed to providing quality education that nurtures intellectual growth,
              fosters creativity, and builds character. With state-of-the-art facilities and dedicated faculty,
              we prepare students for success in their chosen fields.
            </p>
          </div>

          {/* Program Cards Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProgramCard
              title="Undergraduate Programs"
              description="Explore our diverse range of undergraduate programs designed to provide a strong foundation for your career."
              link="/programs/undergraduate"
            />
            <ProgramCard
              title="Postgraduate Programs"
              description="Advance your knowledge and skills with our specialized postgraduate programs."
              link="/programs/postgraduate"
            />
            <ProgramCard
              title="Research Opportunities"
              description="Engage in cutting-edge research and contribute to the advancement of knowledge in your field."
              link="/research"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;