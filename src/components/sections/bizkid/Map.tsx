"use client";

import { useInView, motion } from "framer-motion";
import { useRef } from "react";
export default function Rewards() {
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, {
    once: true,
    margin: "-300px",
  });
  return (
    <section ref={animationRef} className="py-20 lg:py-28 bg-white">
      <div className="container">
        <div className="flex items-center justify-center gap-4">
          <img
            src="/bizkid/star1.svg"
            alt="star"
            className="w-10 h-10 lg:w-20 lg:h-20"
            loading="lazy"
          />
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
            transition={{ delay: 0, duration: 1, ease: "easeInOut" }}
            className="text-[28px] lg:text-[56px] flex-grow 3xl:text-[72px] font-helvetica font-extrabold text-center leading-[35.2px] lg:leading-[65px] 3xl:leading-[85px] tracking-[0.1px]"
          >
            Finale Bootcamp Location
          </motion.h1>
          <img
            src="/bizkid/star2.svg"
            alt="star"
            className="w-10 h-10 lg:w-20 lg:h-20"
            loading="lazy"
          />
        </div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4620.794571002948!2d77.59184331614605!3d13.12390103739044!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae146c1aeeb9fb%3A0xf51149b8ae2bd6e5!2sT.%20A.%20Pai%20Management%20Institute!5e0!3m2!1sen!2sin!4v1728554812575!5m2!1sen!2sin"
          height="450"
          className="w-full rounded-2xl mt-8 lg:mt-16"
          allowFullScreen={false}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}
