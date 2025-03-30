
import React from "react";
import { cn } from "@/lib/utils";

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  image: string;
  isActive?: boolean;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  name,
  role,
  content,
  image,
  isActive = false,
}) => {
  return (
    <div
      className={cn(
        "flex flex-col md:flex-row items-center md:items-start gap-8 transition-opacity duration-300",
        isActive ? "opacity-100" : "opacity-0 hidden"
      )}
    >
      <div className="shrink-0">
        <img
          src={image}
          alt={name}
          className="w-32 h-32 md:w-36  md:h-36 lg:w-40 lg:h-40 rounded-md object-cover shadow-md"
        />
      </div>
      <div className="flex flex-col text-left">
        <p className="text-sm md:text-base lg:text-left md:text-left sm:text-center xs:text-center font-inter font-normal lg:text-lg text-gray-200 mb-4">
          {content}
        </p>
        <h3 className="text-xl md:text-2xl sm:text-center md:text-left xs:text-center font-normal font-inter text-white mb-1">
          {name}
        </h3>
        <p className="text-sm md:text-base sm:text-center md:text-left xs:text-center font-inter font-normal text-gray-400">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
