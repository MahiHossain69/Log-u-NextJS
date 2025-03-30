"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Code2, Rocket, Menu, X, Users, Code, Cog } from "lucide-react";
import { Button } from "@/components/ui/button";

import TechTabsSection from "../components/tech-tabs-section"
import Marquee from "react-fast-marquee";
import Proven from "../components/proven";
import Contact from "@/components/contact";
import TestimonialSection from "@/components/TestimonialSection";
import { Instagram, Linkedin } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';



export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  interface ServiceCardProps {
    title: string;
    description: string;
    imageIndex?: number;
  }

  const images = [
    "/extention.png",
    "/team.png",
    "/project.png"
  ];

  const ServiceCard = ({ title, description, imageIndex = 0 }: ServiceCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    // Use modulo to ensure we always have a valid image even if imageIndex is out of bounds
    const imageUrl = images[imageIndex % images.length];

    return (
      <div
        className="bg-[#051530] hover:bg-[#0A2040] p-6 md:p-8 rounded-lg flex flex-col h-full group cursor-pointer transition-colors duration-300"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <h3 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">{title}</h3>
        <p className="text-gray-300 text-sm mb-6 md:mb-8 flex-grow">{description}</p>
        <div className="mt-auto">
          <div className="flex items-center gap-2 overflow-hidden">
            <div
              className={`relative flex items-center transition-all duration-300 ${isHovered ? 'w-[19rem]' : 'w-[4.5rem]'} h-[4.5rem] rounded-full overflow-hidden`}
              style={{
                backgroundImage: isHovered ? `url(${imageUrl})` : 'none',
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className={`absolute inset-0 ${isHovered ? 'bg-black/30' : ''} transition-all duration-300`}></div>
              <div className="relative z-10 w-full flex items-center justify-between px-3">
                {isHovered && (
                  <span className="text-white text-sm transition-all duration-300 ml-[80px] whitespace-nowrap">
                    View Service
                  </span>
                )}
                <ArrowRight
                  size={16}
                  className={`text-gray-400 w-[30px] h-[30px] border-[1px] border-gray-400 rounded-full ${isHovered ? 'text-white ml-auto' : ''} transition-all duration-300`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };




  

  return (
    <main className="min-h-screen bg-[#020817] text-white overflow-x-hidden">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-[#020817]/80 backdrop-blur-md shadow-lg" : "bg-transparent"
        } py-6 px-4 md:px-8`}>
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <img src="/Logo.png" />

          <div className="hidden md:flex space-x-8">
            <ul className="hidden md:flex space-x-8">
              <li><a href="#" className=" font-inter font-normal text-[11px] transition-colors">ABOUT US</a></li>
              <li> <a href="#" className="font-inter font-normal text-[11px] transition-colorss">SERVICE</a></li>
              <li> <a href="#" className="font-inter font-normal text-[11px] transition-colors">PROJECTS</a></li>
              <li> <a href="#" className="font-inter font-normal text-[11px] transition-colors">INSIGHTS</a></li>
              <li><a href="#" className="font-inter font-normal text-[11px] transition-colors">FOUNDATION</a></li>
            </ul>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className={`absolute  top-full left-0 right-0 ${isScrolled ? "bg-[#020817]/80 backdrop-blur-md" : "bg-[#020817]"
            } border-t border-gray-800 p-4 md:hidden`}>
            <div className="flex flex-col space-y-4">
              <a href="#" className="hover:text-pink-500 transition-colors">ABOUT US</a>
              <a href="#" className="hover:text-pink-500 transition-colors">SERVICE</a>
              <a href="#" className="hover:text-pink-500 transition-colors">PROJECTS</a>
              <a href="#" className="hover:text-pink-500 transition-colors">INSIGHTS</a>
              <a href="#" className="hover:text-pink-500 transition-colors">FOUNDATION</a>
            </div>
          </div>
        )}
      </nav>

      <section className="lg:h-[650px] xs:h-[580px] sm:h-[465px] md:h-[615px] relative flex items-center px-4 md:px-8 pt-20 md:pt-[200px] sm:pt-[185px] xs:pt-[185px]">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute right-0 top-1/3 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-pink-500/20 rounded-full blur-[120px]" />
          <div className="absolute right-1/4 bottom-1/4 w-[200px] md:w-[400px] h-[200px] md:h-[400px] bg-blue-500/20 rounded-full blur-[120px]" />
        </div>

        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl xl:text-[60px] md:text-[35px] xs:text-[30px] sm:text-[25px] sm:mt-[-130px] xs:mt-[-125px] md:text-6xl font-normal font-inter text-[11px] mb-4 text-left">
              From Vision to Reality,
              <br />
              <span className="text-pink-500">We Make It Happen</span>
            </h1>
            <p className="text-base xl:text-[18px] xl:w-[665px] xl:leading-[30px] md:text-[12px] xs:w-[345px] xs:text-[13px] sm:text-[12px] sm:w-[425px] md:text-lg lg:w-[455px] leading-[30px] text-gray-400 mb-8 text-left">
              You know the idea. We have the expertise. At <strong className="text-gray-200">Log-U</strong>, we build and scale <strong className="text-gray-200">high-performance tech teams</strong> and
              deliver <strong className="text-gray-200">turnkey software solutions </strong>that move your business forward.
            </p>
            <div className="flex flex-col cursor-pointer sm:flex-row gap-4">
              <Button className=" text-white rounded-full bg-[#3276DE05] hover:bg-white  flex items-center justify-center gap-2 w-full sm:w-auto group">
                SCALE YOUR TEAM
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button className="bg-white text-black rounded-full hover:bg-gray-200 flex items-center justify-center gap-2 w-full sm:w-auto group">
                BUILD YOUR TECH
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Image Container */}
          <div className="lg:flex justify-center md:flex md:justify-end xs:hidden sm:hidden  ">
            <div className="relative w-[280px] xl:w-full h-[280px] md:w-full md:mt-[-155px]">
              <img
                src="/righthero.png"
                alt="Log-U Logo"
                className="object-contain w-full h-full md:max-w-full md:max-h-full"
              />
            </div>
          </div>
        </div>

      </section>

      <section className="py-16 px-4 md:px-8  relative">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid grid-cols-1  md:grid-cols-2 gap-8 md:gap-16">
            {/* Left Section */}
            <div className="sm:mx-auto sm:text-center lg:text-left lg:mx-0">
              {/* Gradient Heading */}
              <div className="bg-[#3276de14] xs:mx-auto lg:text-left lg:mx-0 sm:mx-auto w-[180px] xs:w-[120px] h-[45px] xs:h-[35px] text-center flex items-center justify-center rounded-full mb-4">
                <h2 className="bg-gradient-to-r from-[#aab3e3] via-[#cf769a] to-[#A70A4A] font-inter font-semibold text-[14px] xs:text-[10px] bg-clip-text text-transparent">
                  Why Choose Log-U
                </h2>
              </div>

              {/* Main Heading */}
              <h2 className="text-lg xs:mx-auto xs:text-center xs:text-xl md:text-4xl font-normal mb-4 xs:mb-6">
                Your Strategic Partner in
                <br className="hidden md:block" /> Tech Excellence
              </h2>

              {/* Description */}
              <p className="text-gray-400  xs:mx-auto xs:text-center md:mx-auto sm:mx-auto xl:mx-0  font-inter font-normal leading-[26px] xs:leading-[30px] w-full xl:w-[420px] max-w-[420px] xs:max-w-[420px] mb-6 xs:mb-8">
                At Log-U, we&apos;re more than just a tech consultancy—we are{" "}
                <strong className="text-gray-200">your strategic partner in growth</strong>. With a presence in{" "}
                <strong className="text-gray-200">Portugal and beyond</strong>, we help businesses build high-performing teams and deliver innovative software solutions.
              </p>

              <p className="text-gray-400 xl:text-[20px] xl:max-w-[505px] xs:mx-auto xs:text-center xs:mb-[35px] lg:text-left lg:mx-0 sm:mx-auto sm:text-center font-inter font-normal leading-[26px] xs:leading-[30px] w-full max-w-[320px] xs:max-w-[400px]">
                Our team isn&apos;t just technically proficient—we bring{" "}
                <strong><span className="text-pink-500">senior-level expertise across both business and technology</span></strong>. With years of experience, we don&apos;t just write code—we{" "}
                <strong><span className="text-blue-400">understand the bigger picture</span></strong> and help businesses scale strategically.
              </p>
            </div>

            {/* Right Section - Boxes */}
            <div className="grid grid-cols-1 lg:grid lg:grid-cols-2 lg:gap-6 lg:w-full lg:max-w-2xl lg:mt[-60px] sm:grid-cols-1 gap-4 xs:gap-6 md:mt-[80px]">
              {/* Left Column */}
              <div className="space-y-4 xs:space-y-6">
                {/* Excellence Box */}
                <div className="bg-[#3276DE14]  rounded-xl xs:rounded-2xl p-4 xs:p-6 h-auto xs:h-[140px] sm:h-[160px] transition-all duration-300 hover:bg-[#152438]">
                  <h2 className="text-lg xs:text-xl lg:text-left lg:mx-0 sm:text-center sm:pt-[30px] sm:text-2xl font-semibold text-white mb-2 xs:mb-4">Excellence</h2>
                  <p className="text-gray-400 lg:text-left lg:mx-0 sm:text-center text-sm xs:text-base sm:text-sm leading-relaxed">
                    Delivering quality solutions with precision.
                  </p>
                </div>

                {/* Innovation Box */}
                <div className="bg-[#3276DE14] rounded-xl xs:rounded-2xl p-4 xs:p-6 h-auto xs:h-[140px] sm:h-[160px] transition-all duration-300 lg:mt-[-40px] hover:bg-[#152438]">
                  <h2 className="text-lg lg:text-left lg:mx-0 xs:text-xl sm:text-center sm:pt-[30px] sm:text-2xl font-semibold text-white mb-2 xs:mb-4">Innovation</h2>
                  <p className="text-gray-400 lg:text-left lg:mx-0 sm:text-center text-sm xs:text-base sm:text-sm leading-relaxed">
                    Leveraging the latest technologies to drive success.
                  </p>
                </div>
              </div>

              {/* Right Column - Integrity */}
              <div className="flex items-center">
                <div className="bg-[#3276DE14] rounded-xl xs:rounded-2xl p-4 xs:p-6 h-auto xs:h-[140px] sm:h-[160px] transition-all duration-300 hover:bg-[#152438] w-full">
                  <h2 className="text-lg lg:text-left lg:mx-0 xs:text-xl sm:text-center sm:pt-[30px] sm:text-2xl font-semibold text-white mb-2 xs:mb-4">Integrity</h2>
                  <p className="text-gray-400 lg:text-left lg:mx-0 sm:text-center text-sm xs:text-base sm:text-sm leading-relaxed">
                    Honesty is at the heart of our brand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="bg-[#020b1a] text-white py-12 px-4 md:py-16 md:px-6 lg:py-24 lg:px-8">
        {/* Header */}
        <div className="max-w-6xl mx-auto text-center mb-12 md:mb-16">
        <div className="bg-[#3276de14] lg:mx-auto xl:mx-auto lg:text-left  xs:mx-auto sm:mx-auto w-[180px] xs:w-[120px] h-[45px] xs:h-[35px] text-center flex items-center justify-center rounded-full mb-4">
                <h2 className="bg-gradient-to-r from-[#aab3e3] via-[#cf769a] to-[#A70A4A] font-inter font-semibold text-[14px] xs:text-[10px] bg-clip-text text-transparent">
                 Our Service
                </h2>
              </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Scalable Tech Solutions for Your Business Growth
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto text-sm md:text-base">
            At LogiU, we provide expert-driven, flexible tech solutions to help you scale seamlessly. Whether you need a
            dedicated team, project-based development, or full-cycle software solutions, we've got you covered.
          </p>
        </div>

        {/* Service Cards */}
        <div className="  text-white">
          <section className="py-20 px-4 md:px-8 relative">
            <div className="max-w-7xl mx-auto">
              <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 md:gap-6 mb-16 md:mb-20">
                <ServiceCard
                  title="Team Extension"
                  description="Minimize overhead, cut costs, and stay focused on innovation by outsourcing your tech needs to us."
                  imageIndex={0}
                />
                <ServiceCard
                  title="Team-as-a-Service"
                  description="Your dedicated, on-demand tech team, ready to tackle any project."
                  imageIndex={1}
                />
                <ServiceCard
                  title="Turnkey Projects"
                  description="Custom-built software solutions tailored to your business requirements."
                  imageIndex={2}
                />
              </div>
            </div>
          </section>
        </div>


        {/* Technologies Section */}
        <TechTabsSection />

        {/* Client Logos */}
        <Marquee>
          <img src="/logoani.png" className="xs:w-[700px]" />

        </Marquee>
      </section>
      <div className="">
      <Proven/>
      </div>

      <div className="">
         <Contact/>
      </div>

      <div className="">
        <TestimonialSection/>
      </div>

    


    <section className="bg-[#020817] flex items-center justify-center p-4 relative overflow-hidden">
      {/* Main Content Container */}
      <div className="w-full max-w-[1200px] rounded-[32px] overflow-hidden bg-gradient-to-br from-[#3B82F6] to-[#1E40AF] relative z-10 shadow-2xl">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-r from-[#7C3AED]/30 via-[#EC4899]/30 to-[#3B82F6]/30 transform rotate-[-2deg] translate-y-12 blur-sm"></div>
        
        <div className="px-4 sm:px-6 md:px-8 lg:px-12 py-8 md:py-12 lg:py-16 grid md:grid-cols-[1fr,1.2fr] gap-6 md:gap-8 lg:gap-12 relative backdrop-blur-sm">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            <h2 className="text-3xl md:mt-[115px] xl:flex xl:gap-[8px] xs:text-4xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight text-center md:text-left">
              Let&apos;s Meet <br className="hidden md:block" />
              <span className="bg-gradient-to-r from-white to-blue-200 text-transparent bg-clip-text">Tomorrow</span>
            </h2>
            <p className="text-white/90 text-base sm:text-lg leading-relaxed text-center md:text-left max-w-2xl md:max-w-none mx-auto">
              We find that the best way to discuss the specific expectations and
              requirements of our clients&apos; software development projects is by
              meeting with them in person.
            </p>
          </div>

          {/* Right Content - Profile Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 md:grid-cols-1 md:gap-4 gap-4 sm:gap-6  lg:gap-6">
            {/* Profile Card 1 */}
            <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-4 sm:p-5 md:p-6 space-y-4 transition-all duration-300 hover:bg-white/15 hover:shadow-lg hover:scale-[1.02]">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
                <img
                  src="/meet1.png"
                  alt="Rui Talhadas"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover relative z-10 ring-4 ring-white/20"
                />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg sm:text-xl">Rui Talhadas</h3>
                <p className="text-white/70 text-sm sm:text-base">CEO</p>
              </div>
              <button className="flex lg:text-[9px] xl:text-[14px] items-center justify-center md:justify-start gap-2 bg-white text-black px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 hover:bg-blue-50 hover:shadow-lg hover:scale-[1.02] active:scale-95 w-full md:w-auto">
                REQUEST A MEETING
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            {/* Profile Card 2 */}
            <div className="group bg-white/10 backdrop-blur-lg rounded-3xl p-4 sm:p-5 md:p-6 space-y-4 transition-all duration-300 hover:bg-white/15 hover:shadow-lg hover:scale-[1.02]">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
                <img
                  src="/meet2.png"
                  alt="Paulo Silva"
                  className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover relative z-10 ring-4 ring-white/20"
                />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg sm:text-xl">Paulo Silva</h3>
                <p className="text-white/70 text-sm sm:text-base">COO</p>
              </div>
              <button className="flex lg:text-[9px]  xl:text-[14px] items-center justify-center md:justify-start gap-2 bg-white text-black px-4 sm:px-6 py-2 sm:py-2.5 rounded-full text-sm sm:text-base font-medium transition-all duration-300 hover:bg-blue-50 hover:shadow-lg hover:scale-[1.02] active:scale-95 w-full md:w-auto">
                REQUEST A MEETING
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer className="bg-[#020817] text-white pt-[115px] pb-[15px] px-4 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          {/* Logo */}
          <div className="mb-8 md:mb-0 group">
            <a href="#"><img src="/Logo.png"></img></a>
          </div>

          {/* Right Section: Offices and Social */}
          <div className="flex flex-col md:flex-row gap-12 md:gap-20 items-start md:items-center">
            {/* Office Locations */}
            <div className="relative">
              <h3 className="text-sm uppercase mb-6 font-semibold tracking-wider text-gray-300">
                Our Offices:
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:translate-x-2">
                  <div className="relative overflow-hidden rounded shadow-lg">
                    <Image
                      src="https://flagcdn.com/pt.svg"
                      alt="Portugal"
                      width={28}
                      height={20}
                      className="rounded transform transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <span className="text-sm font-medium tracking-wide">LISBON</span>
                </div>
                <div className="flex items-center gap-3 group cursor-pointer transition-all duration-300 hover:translate-x-2">
                  <div className="relative overflow-hidden rounded shadow-lg">
                    <Image
                      src="https://flagcdn.com/ee.svg"
                      alt="Estonia"
                      width={28}
                      height={20}
                      className="rounded transform transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  <span className="text-sm font-medium tracking-wide">TALLINN</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <Link 
                href="https://linkedin.com/company/log-u" 
                className="flex items-center gap-3 group transition-all duration-300 hover:translate-x-2"
              >
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                  <Linkedin size={20} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-sm font-bold tracking-wide text-gray-300 group-hover:text-white transition-colors duration-300">
                LinkedIn
                </span>
              </Link>
              <Link 
                href="https://instagram.com/log-u" 
                className="flex items-center gap-3 group transition-all duration-300 hover:translate-x-2"
              >
                <div className="p-2 rounded-full bg-white/5 group-hover:bg-white/10 transition-colors duration-300">
                  <Instagram size={20} className="text-gray-300 group-hover:text-white transition-colors duration-300" />
                </div>
                <span className="text-sm font-bold tracking-wide text-gray-300 group-hover:text-white transition-colors duration-300">
                Instagram
                </span>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
       
      </div>
    </footer>
       <div className="bg-[#3276DE14] h-[65px] xs:h-[100px] sm:h-[100px] lg:h-[65px]">
       <div className="flex flex-col md:flex-row sm:w-[690px] lg:w-[895px] xl:w-[1290px]  mx-auto justify-between items-center pt-6 border-t border-white/10">
          <p className="text-sm text-gray-400 mb-4 md:mb-0 tracking-wide">
            © Log U 2025. All rights reserved.
          </p>
          <Link 
            href="/privacy-policy" 
            className="text-sm text-gray-400 hover:text-white transition-colors duration-300 tracking-wide relative group"
          >
            Privacy Policy
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
          </Link>
        </div>
       </div> 


    </main>


  );
}
