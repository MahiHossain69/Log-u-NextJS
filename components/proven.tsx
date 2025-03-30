"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function Proven() {
  const projects = [
    {
      id: 1,
      title: "Sword Health",
      location: "United States, Portugal",
      heading: "Revolutionizing digital healthcare",
      description:
        "We helped develop a support ticket management platform aimed at improving communication between clients and healthcare professionals...",
      impact: [
        "Faster ticket management, allowing professionals to focus on patient care",
        "Organized and structured communication, reducing delays in responses",
      ],
      technologies: ["Golang", "gRPC", "Google Cloud", "Kubernetes", "MySQL", "Vue.js"],
      image: "/proven1.png",
    },
    {
      id: 2,
      title: "Emerson",
      location: "United States, United Kingdom",
      heading: "Global Automation Solutions",
      description: "We were engaged in critical infrastructure projects for the European Commission, focusing on cloud automation, scalability, and DevOps best practices. This played a key role in optimizing container orchestration, deployment automation, and infrastructure management to ensure efficient and reliable operations.",
      impact: [" Increased Automation & Efficiency - Reduced manual intervention & improved system reliability.", "Scalable Infrastructure - Enabled flexible and secure cloud environments aligned with EU regulatory standards."],
      technologies: ["Python", "SamModbus", "Pycharm", "Plotly"],
      image: "/proven2.png",
    },
  ];

  const [currentProject, setCurrentProject] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState(new Set<number>());

  useEffect(() => {
    const newLoadedImages = new Set<number>();

    projects.forEach((project, index) => {
      const img = new Image();
      img.src = project.image;
      img.onload = () => {
        newLoadedImages.add(index);
        setLoadedImages(new Set(newLoadedImages)); // Update state only once per load
      };
    });
  }, []);

  useEffect(() => {
    if (loadedImages.size === projects.length) {
      const interval = setInterval(() => {
        nextProject();
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [loadedImages]);

  useEffect(() => {
    setIsLoading(!loadedImages.has(currentProject));
  }, [currentProject, loadedImages]);

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => {
      const newIndex = (prev - 1 + projects.length) % projects.length;
      
      if (!loadedImages.has(newIndex)) {
        setIsLoading(true);
      }
      
      return newIndex;
    });
  };

  useEffect(() => {
    if (loadedImages.size === projects.length) {
      const interval = setInterval(() => {
        nextProject();
      }, 5000);
  
      return () => clearInterval(interval); // Clear interval to prevent interference
    }
  }, [loadedImages, currentProject]); // Depend on currentProject to reset interval on navigation
  

  return (
    <main className=" bg-gradient-to-br from-blue-900 to-blue-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h3 className="text-white/80 text-sm font-medium mb-2">Past Projects</h3>
          <h2 className="text-white text-3xl sm:text-4xl font-bold mb-4">Proven Expertise, Real Impact</h2>
          <p className="text-white/80 text-sm sm:text-base max-w-2xl">
          At Log-U, we have a track record of delivering high-quality software solutions for businesses across industries. From fintech to healthcare, our expertise spans a variety of domains, helping companies innovate, scale, and stay ahead in a competitive landscape.
          </p>
        </div>

        {/* Pagination & Buttons */}
        <div className="flex justify-between items-center mb-4">
          <div className="flex items-center space-x-2 text-white/80">
            <span>{currentProject + 1}</span> / <span className="xs:ml-0 sm:ml-0 md:ml-0 lg:ml-0 xl:ml-0">{projects.length}</span>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={prevProject}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              disabled={isLoading}
            >
              <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button
              onClick={nextProject}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              disabled={isLoading}
            >
              <ChevronRight className="w-6 h-6 text-white" />
            </button>
          </div>
        </div>

        {/* Project Section */}
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-white/5">
            {isLoading && <div className="absolute inset-0 animate-pulse bg-white/10" />}
            <img
              src={projects[currentProject].image}
              alt={projects[currentProject].title}
              className={`object-cover w-full h-full transition-opacity duration-300 ${isLoading ? "opacity-0" : "opacity-100"}`}
              onLoad={() => {
                setLoadedImages((prev) => new Set([1, currentProject]));
                setIsLoading(false);
              }}
            />
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 border-4 border-white/20 border-t-white/80 rounded-full animate-spin" />
              </div>
            )}
          </div>

          {/* Text Details */}
          <div className="text-white">
            <div className="flex items-center space-x-2 mb-4">
              <h3 className="text-xl font-bold">{projects[currentProject].title}</h3>
              <span className="text-white/60 text-sm">{projects[currentProject].location}</span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-bold mb-6">{projects[currentProject].heading}</h2>

            <div className="space-y-6">
              <div>
                <h4 className="text-white/80 font-medium mb-2">Project Description:</h4>
                <p className="text-white/60">{projects[currentProject].description}</p>
              </div>

              <div>
                <h4 className="text-white/80 font-medium mb-2">Impact:</h4>
                <ul className="list-disc list-inside text-white/60 space-y-1">
                  {projects[currentProject].impact.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-white/80 font-medium mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {projects[currentProject].technologies.map((tech, index) => (
                    <span key={index} className="px-3 cursor-pointer py-1 rounded-full bg-white/10 text-sm text-white/80">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Proven;
