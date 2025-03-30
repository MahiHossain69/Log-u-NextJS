"use client"

import { useState } from "react"
import Image from "next/image"

export default function TechTabsSection() {
  const [activeTab, setActiveTab] = useState("BACKEND")

  const tabs = ["BACKEND", "FRONTEND", "CLOUD", "DEVOPS", "QA & TESTING"]

  const techStacks: Record<string, Array<{ name: string; logo: string }>> = {
    BACKEND: [
      { name: "", logo: "/Nodejs.png" },
      { name: "", logo: "/python.png" },
      { name: "", logo: "/java.png" },
      { name: "", logo: "/asp.net.png" },
      { name: "", logo: "/golang.png" },
    ],
    FRONTEND: [
      { name: "", logo: "/react.png" },
      { name: "", logo: "/angular.png" },
      { name: "", logo: "/vue.png" },
      { name: "", logo: "/next.png" },
    ],
    CLOUD: [
      { name: "", logo: "/aws.png" },
      { name: "", logo: "/azure.png" },
      { name: "", logo: "/googlecloud.png" },
    ],
    DEVOPS: [
      { name: "", logo: "/docker.png" },
      { name: "", logo: "/kuber.png" },
      { name: "", logo: "/jen.png" },
    ],
    "QA & TESTING": [
      { name: "", logo: "/jest.png" },
      { name: "", logo: "/cypress.png" },
      { name: "", logo: "/sele.png" },
    ],
  }

  return (
    <div className="max-w-6xl mx-auto mb-20 px-4">
      {/* Mobile View */}
      <div className="block md:hidden">
        <h3 className="text-[28px] xs:text-[34px] font-inter font-semibold text-center mb-6">
          Technologies We Work With
        </h3>

        {/* Scrollable Tabs */}
        <div className="overflow-x-auto pb-3">
          <div className="flex border-b border-gray-800 min-w-max">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-2 px-3 sm:mx-auto text-xs font-medium cursor-pointer whitespace-nowrap transition-all duration-200 ${
                  tab === activeTab
                    ? "text-blue-400 border-b-2 border-blue-400"
                    : "text-gray-400 hover:text-blue-300"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tech Logos - Mobile */}
        <div className="flex flex-wrap sm:mx-auto justify-center gap-4 mt-6">
          {(techStacks[activeTab] || techStacks["BACKEND"]).map((tech, index) => (
            <div key={index} className="flex flex-col items-center gap-2">
              <Image src={tech.logo} width={40} height={40} alt={tech.name} className="rounded-full" />
              <span className="text-xs xs:text-sm text-white font-medium">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:grid md:grid-cols-2 md:gap-8">
        {/* Left side - Title */}
        <div>
          <h3 className="text-[35px] font-inter font-semibold mb-6">Technologies We Work With</h3>
        </div>

        {/* Right side - Tabs & Content */}
        <div>
          {/* Tabs */}
          <div className="border-b border-gray-800">
            <div className="flex flex-wrap">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-2 px-4 text-sm sm:mx-auto font-medium cursor-pointer transition-all duration-200 ${
                    tab === activeTab
                      ? "text-blue-400 border-b-2 border-blue-400"
                      : "text-gray-400 hover:text-blue-300"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Tech Logos - Desktop */}
          <div className="flex  flex-wrap gap-6 mt-8">
            {(techStacks[activeTab] || techStacks["BACKEND"]).map((tech, index) => (
              <div key={index} className="flex flex-col  items-center gap-2">
                <Image src={tech.logo} width={55} height={55} alt={tech.name} className="rounded-full" />
                <span className="text-sm text-white font-medium">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
