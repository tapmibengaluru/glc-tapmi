"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
export default function Challenge() {
  const animationRef = useRef(null);
  const isInView = useInView(animationRef, { once: true, margin: "-100px" });
  return (
    <section ref={animationRef} className="py-20 lg:py-28 bg-[#fdf2ec]">
      <div className="container">
        <div className="flex items-center">
          <div className="lg:basis-1/2">
            <motion.h4
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : -10 }}
              transition={{ delay: 0, duration: 1, ease: "easeInOut" }}
              className="font-helvetica font-bold text-base lg:text-[20px] max-w-[10.5rem] mx-auto text-center lg:text-left lg:mx-0 lg:max-w-none"
            >
              Calling all students from 8th to 12th grade!
            </motion.h4>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: isInView ? 1 : 0, y: isInView ? 0 : 10 }}
              transition={{ delay: 0, duration: 1, ease: "easeInOut" }}
              className="font-helvetica font-extrabold text-[#FC9D29] mt-2 lg:mt-0 text-[28px] leading-[35.2px] lg:text-[72px] lg:leading-[80px] text-center lg:text-left mx-auto"
            >
              Ready For a Challenge?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: isInView ? 1 : 0}}
              transition={{ delay: 0, duration: 1, ease: "easeInOut" }}
              className="font-helvetica lg:text-xl mt-2 lg:mt-2 max-w-md text-center lg:text-left"
            >
              Gather your friends and form a dynamic team of 3-4 members to take
              part in this exciting opportunity!
            </motion.p>
            <button
              onClick={() => {
                window.open("https://rebrand.ly/bizkid24apply", "_blank");
              }}
              className="bg-[#FC9D29] mt-8 py-2 lg:py-4 px-8 lg:text-2xl font-helvetica font-extrabold text-white rounded-xl  block mx-auto lg:mx-0"
            >
              Register Now
            </button>
          </div>
          <div className="lg:basis-1/2 hidden lg:block">
            <img
              src="/bizkid/signup.svg"
              alt="signup"
              className="w-full"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
