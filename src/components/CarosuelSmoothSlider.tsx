"use client";
import { useEffect } from "react";

export default function CarosuelSmoothSlider({
  slides,
  speed = "slow",
  direction = "left",
}: {
  slides: Array<string>;
  speed?: string;
  direction?: string;
}) {
  useEffect(() => {
    const scrollers = document.querySelectorAll(".scroller");

    // If a user hasn't opted in for recuded motion, then we add the animation
    if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      addAnimation();
    }

    function addAnimation() {
      scrollers.forEach((scroller) => {
        // add data-animated="true" to every `.scroller` on the page
        scroller.setAttribute("data-animated", true);

        // Make an array from the elements within `.scroller-inner`
        const scrollerInner = scroller.querySelector(".scroller__inner");
        const scrollerContent = Array.from(scrollerInner.children);

        // For each item in the array, clone it
        // add aria-hidden to it
        // add it into the `.scroller-inner`
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          duplicatedItem.setAttribute("aria-hidden", true);
          scrollerInner.appendChild(duplicatedItem);
        });
      });
    }
  }, []);
  return (
    <div className="scroller" data-speed={speed} data-direction={direction}>
      <ul className="tag-list scroller__inner">
        {slides.map((slide, index: number) => (
          <li key={index}>
            <p
              className={`text-[40px] lg:text-[9.375rem] font-bungee uppercase text-transparent stroke`}
            >
              {slide}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
