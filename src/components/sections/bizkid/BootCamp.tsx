"use client";

import CarosuelSmoothSlider from "@/components/CarosuelSmoothSlider";

export default function BootCamp() {
  return (
    <section className="pb-10 lg:pb-28 bg-[#fdf2ec]">
      <CarosuelSmoothSlider
        slides={["Bootcamp", "Details", "Coming", "Soon"]}
      />
    </section>
  );
}
