"use client";

import { Card, Carousel } from "@/components/Carosuel";
import { useInView, motion } from "framer-motion";
import { useRef } from "react";
export default function Student() {
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true , margin: "-100px"});
  const cards = data.map((card, index) => (
    <Card key={card.title} card={card} index={index} layout={true} />
  ));
  return (
    <section ref={animationRef} className="py-20 lg:py-28 bg-[#fef7f4]">
      <div className="container ">
        <div className="flex items-center justify-center gap-4">
          <img
            src="/bizkid/star1.svg"
            alt="star"
            className="w-10 h-10 lg:w-20 lg:h-20"
            loading="lazy"
          />

          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
            transition={{ delay: 0, duration: 1, ease: "easeInOut" }}
            className="text-[28px] lg:text-[56px] flex-grow 3xl:text-[72px] font-helvetica font-extrabold text-center leading-[35.2px] lg:leading-[65px] 3xl:leading-[85px] tracking-[0.1px]"
          >
            Are You a Student in 8th-12th Grade?
          </motion.h2>
          <img
            src="/bizkid/star2.svg"
            alt="star"
            className="w-10 h-10 lg:w-20 lg:h-20"
            loading="lazy"
          />
        </div>
        <motion.h4
          initial={{ opacity: 0 }}
          animate={{ opacity: isInView ? 1 : 0 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
          className="text-[12px] max-w-52 lg:max-w-none mx-auto lg:text-[28px] font-helvetica font-bold tracking-[0.1px] text-center mt-6"
        >
          Discover Why This Competition is Perfect for You!
        </motion.h4>
      </div>
      <div className="relative z-50">
        <Carousel items={cards} />
      </div>
    </section>
  );
}

const data = [
  {
    title: "Foster Innovative Thinking",
    description:
      "This competition is designed to encourage you to think creatively and solve problems, empowering you to tackle real-world challenges with innovative solutions.",
    image: "/bizkid/bulb.svg",
    color: "#FC296C",
    background: "#FFF0F5",
    border: "#FC296C",
  },
  {
    title: "Build Essential Entrepreneurial Skills",
    description:
      "Develop essential problem-solving & communication skills, key to any field’s success, while fostering innovation, creativity, & an entrepreneurial mindset.",
    image: "/bizkid/rocket.svg",
    color: "#5A29FC",
    background: "#F4F0FF",
    border: "#5A29FC",
  },
  {
    title: "An Opportunity for Collaboration",
    description:
      "This competition lets you collaborate, share ideas, & learn from peers, building vital interpersonal skills for future success. It's your time to shine!",
    image: "/bizkid/puzzle.svg",
    color: "#AB29FC",
    background: "#F9F0FF",
    border: "#AB29FC",
  },
  {
    title: "Make the Year More Interesting",
    description:
      "Add excitement to your academic year while building valuable real-world skills!",
    image: "/bizkid/calendar.svg",
    color: "#FC9D29",
    background: "#FFF8F0",
    border: "#FC9D29",
  },
];
