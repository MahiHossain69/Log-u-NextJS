
import React, { useState } from "react";
import TestimonialCard from "../components/ui/TestimonialCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Susana",
    role: "Executive",
    image: "/susana.png",
    content: "As a Business Analyst at Log-U, I am assigned to a highly significant project for a prestigious client in Portugal. The project itself is particularly challenging, given the complexity of both the tasks and the client's requirements. From the very beginning, I have felt strong support and a warm welcome from the entire Log-U team, who consistently make an effort to track my expectations and celebrate my achievements as the project progresses."
  },
  {
    id: 2,
    name: "Leonardo",
    role: "Executive",
    image: "/leo.png",
    content: "Working with Log-U has transformed the way we handle our internal operations. Their expert team provided innovative solutions tailored to our company culture. The implementation was smooth, and the ongoing support has been exceptional."
  },
  {
    id: 3,
    name: "Andryev",
    role: " Executive",
    image: "/and.png",
    content: "Throughout my journey at Log-U, I have been dedicated to developing innovative solutions, actively contributing to the company’s growth. This process has been crucial for my professional development, and it is incredibly rewarding to see my own progress aligned with Log-U’s success."
  }
];

const TestimonialSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full bg-[#020817] text-white py-12 md:py-16 lg:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#3276de14] lg:ml-0 xl:ml-0   xs:mx-auto sm:mx-auto w-[180px] xs:w-[120px] h-[45px] xs:h-[35px] text-center flex items-center justify-center rounded-full mb-4">
                <h2 className="bg-gradient-to-r from-[#aab3e3] via-[#cf769a] to-[#A70A4A] font-inter font-semibold text-[14px] xs:text-[10px] bg-clip-text text-transparent">
                Careers
                </h2>
              </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl lg:text-left lg:text-[30px] font-normal xs:text-3xl sm:text-center xs:text-center xs:font-inter  md:text-4xl lg:text-5xl  mb-6">
                Excellence, Integrity & Innovation
              </h2>
              <p className="text-gray-300 lg:text-left xl:text-left sm:text-center xs:text-center xs:font-inter xs:font-normal mb-2">
                At Log-U, our culture is built on a foundation of <span className="font-semibold">expertise, trust, and forward-thinking innovation</span>. We believe that success comes from combining <span className="font-semibold">technical mastery with a strong ethical core</span>, creating a workplace where both our team and our clients thrive.
              </p>
            </div>
            
            <div className="flex items-center lg:ml-0 xl:ml-0 md:mx-auto xs:mx-auto mt-8 md:mt-12">
              <button 
                className="p-2 rounded-full border border-gray-600 hover:bg-gray-800 transition-colors mr-2"
                onClick={handlePrev}
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <span className="text-sm text-gray-400 mx-2">{activeIndex + 1}/{testimonials.length}</span>
              <button 
                className="p-2 rounded-full border border-gray-600 hover:bg-gray-800 transition-colors ml-2"
                onClick={handleNext}
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          
          <div className="lg:col-span-7 flex items-center">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                image={testimonial.image}
                isActive={index === activeIndex}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
