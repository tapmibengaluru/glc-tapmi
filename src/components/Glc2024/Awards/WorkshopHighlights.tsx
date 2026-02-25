"use client";
import React from "react";
import Image from "next/image";
// Using lucide-react for the X icon

const highlights = [
  {
    title: "Immersive Arts Experience",
    desc: "Engage with art modalities such as Visual Arts, Music, Movement, and Theatre for self-reflection.",
  },
  {
    title: "Collaboration in Action",
    desc: "Co-create artifacts, share responsibilities, make collective decisions and build a ‘team identity’.",
  },
  {
    title: "Safe Space for Expression",
    desc: "Question your patterns in a non-evaluative environment that values openness, curiosity, and authenticity.",
  },
  {
    title: "Behavioral Agility",
    desc: "Hop out of your comfort zones, embrace change, and restructure your mindset.",
  },
  {
    title: "Practical Applications",
    desc: "Discover how resistance is experienced and learn how it can be dealt with.",
  },
];

const WorkshopHighlights = () => {
  return (
    <section className="relative">
    <div className="grid relative grid-cols-1 lg:grid-cols-2 items-center gap-10 md:gap-16 px-6 md:px-12 md:py-16 max-w-7xl mx-auto">
      {/* Left Content */}
      <div>
        <h2 className="text-[36px] font-medium font-helvetica md:text-5xl   mb-6 text-[#000000]">Workshop Highlights</h2>
   <div className="relative lg:hidden w-full h-[400px] mb-6 ">
        {/* Decorative Square Top Left */}
        <div className="absolute z-10 -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600" />

        {/* Main Image */}
        <Image
          src="/images/glc2024/L&D Image.webp" // Replace with actual image
          alt="Workshop"
          fill
          priority
          className="object-cover"
        />

        {/* Decorative Square Bottom Right */}
        
      </div>
        <ul className="space-y-6">
          {highlights.map((item, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-orange-500 flex-shrink-0 mt-1">
                <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M23.3433 28.3281L17.2905 22.2402V17.0039L5.91846 28.3281H0.690918V23.0713L11.9507 11.8564H6.74463L0.690918 5.76855V0.509766H5.91846L11.9731 6.59961V11.835L23.3433 0.509766H28.5728V5.76855L17.311 16.9834H22.5171L28.5728 23.0713V28.3281H23.3433Z"
                    fill="#FF9618"
                  />
                </svg>
              </span>
              <div>
                <h3 className="font-medium font-helvetica text-3xl text-[#282828]">{item.title}</h3>
                <p className="text-[#000000CC] text-base md:text-lg font-helvetica leading-relaxed">{item.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Right Image with Decorative Squares */}
      <div className="relative hidden lg:block w-full h-[400px] md:h-full">
        {/* Decorative Square Top Left */}
        <div className="absolute z-10 -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600" />

        {/* Main Image */}
        <Image
          src="/images/glc2024/L&D Image.webp" // Replace with actual image
          alt="Workshop"
          fill
          className="object-cover"
        />

        {/* Decorative Square Bottom Right */}
        
      </div>
      
</div>
<div className="absolute hidden lg:block z-10 bottom-1/3 right-0 w-10 h-16 bg-gradient-to-br from-orange-400 to-orange-600" />
    </section>
    
  );
};

export default WorkshopHighlights;
