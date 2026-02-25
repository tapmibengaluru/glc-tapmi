"use client";
import React, { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion"; // make sure framer-motion is installed
import { motion } from "framer-motion";

const statsData = [
  { id: 1, value: "300+", label: "Global Leaders Engaged" },
  { id: 2, value: "20+", label: "Industry Sectors Represented" },
  { id: 3, value: "50+", label: "Strategic Collaborations Initiated" },
  { id: 4, value: "50+", label: "Insightful Sessions & Panels" },
];

// Animated Counter Component
const AnimatedCounter: React.FC<{ value: string }> = ({ value }) => {
  const ref = useRef(null);
  const inView = useInView(ref);

  const isNumeric = /[0-9]/.test(value);
  const isRange = value.includes("-");

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView || !isNumeric) return;

    if (isRange) {
      const numbers = value.split("-").map((v) =>
        parseFloat(v.replace(/[^0-9.]/g, ""))
      );
      const start = numbers[0];
      const end = numbers[1];
      const duration = 2000;
      const incrementTime = 150;
      const steps = duration / incrementTime;
      const stepSize = Math.max(1, Math.ceil((end - start) / steps));

      setCount(start);

      const timer = setInterval(() => {
        setCount((prev) => {
          const next = prev + stepSize;
          if (next >= end) {
            clearInterval(timer);
            return end;
          }
          return next;
        });
      }, incrementTime);

      return () => clearInterval(timer);
    } else {
      const numericValue = parseFloat(value.replace(/[^0-9.]/g, ""));
      const start = numericValue - 5 >= 0 ? numericValue - 5 : 0;
      const end = numericValue;
      const duration = 2000;
      const incrementTime = 150;
      const steps = duration / incrementTime;
      const stepSize = Math.max(1, (end - start) / steps);

      setCount(start);

      const timer = setInterval(() => {
        setCount((prev) => {
          const next = prev + stepSize;
          if (next >= end) {
            clearInterval(timer);
            return end;
          }
          return next;
        });
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  const displayValue = !isNumeric
    ? value
    : isRange
    ? `${count.toLocaleString()} - ${value.split("-")[1].trim()}`
    : value.includes("+")
    ? `${count.toLocaleString()}+`
    : value.includes("sq.ft.") || value.includes("sq.m.")
    ? `${count.toLocaleString()} ${
        inView ? value.match(/sq\.\w+\.?/)?.[0] || "" : ""
      }`
    : count.toLocaleString();

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="inline-block"
    >
      {displayValue}
    </motion.span>
  );
};

// Stats Grid
const CounterGrid = () => {
  return (
    <div className="grid relative grid-cols-2 font-helvetica md:grid-cols-4 gap-6 lg:py-10 text-center">
      {statsData.map((stat,index) => (
        <div key={stat.id} className="flex flex-col items-center">
          <h3 className="text-3xl md:text-6xl font-medium text-[#000000]">
            <AnimatedCounter value={stat.value} />
          </h3>
          <p className={`text-sm md:text-xl ${index===0?"max-w-[70%] lg:max-w-[40%] xl:max-w-[40%]":"max-w-[80%] lg:max-w-[60%] xl:max-w-[50%]"}  mx-auto text-[#000000] mt-2 leading-snug`}>
            {stat.label}
          </p>
        </div>
      ))}
      <div className="absolute top-0 right-0 xl:w-24 h-10 w-10 xl:h-24 bg-gradient-to-r from-[#FF9618] to-[#EC2188]"></div>
    </div>
  );
};

export default CounterGrid;
