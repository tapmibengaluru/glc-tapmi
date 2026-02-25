"use client";
import React, { useRef, useEffect, useState } from "react";
import AnimatedTextCharacter from "../AnimatedTextCharacter";
import gsap from "gsap";

const cardData = [
  {
    id: 1,
    image: "/images/glc2024/panelImages/Finance.webp",
    title: "India as the Financial Nerve Center: How GCCs are Redefining Global Finance Operations",
    category: "Finance",
    categoryColor: "#E91E63",
  },
  {
    id: 2,
    image: "/images/glc2024/panelImages/Retail.webp",
    title: "From Shelf to Software: How GCCs Are Digitizing the FMCG Value Chain",
    category: "Retail",
    categoryColor: "#F79821",
  },
  {
    id: 3,
    image: "/images/glc2024/panelImages/L&D (HR Leaders).webp",
    title: "Talent transformation: Building the leadership pipeline",
    category: "L&D (HR Leaders)",
    categoryColor: "#F79821",
  },
  {
    id: 4,
    image: "/images/glc2024/panelImages/Healthcare.webp",
    title: "Beyond Outsourcing: How Indian GCCs are becoming Global Command Centres for Healthcare",
    category: "Healthcare",
    categoryColor: "#F79821",
  },
  {
    id: 5,
    image: "/images/glc2024/panelImages/Information Technology (IT).webp",
    title: "From Cost Centre to Innovation Hub: Agentic AI as a Strategic Catalyst",
    category: "Information Technology (IT)",
    categoryColor: "#F79821",
  },
];

type Dir = "up" | "down";

const PanelDiscussion = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRefs = useRef<HTMLDivElement[]>([]);
  const cardRefs = useRef<HTMLDivElement[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const activeIndexRef = useRef<number | null>(null);
  const lastMouseRef = useRef<{ x: number; y: number; known: boolean }>({
    x: 0,
    y: 0,
    known: false,
  });
  const lastScrollYRef = useRef<number>(0);
  const rafPending = useRef<boolean>(false);

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  useEffect(() => {
    // Only run animation logic on lg screens and above
    const isLg = () => window.matchMedia("(min-width: 1024px)").matches;

    if (!isLg()) {
      // On mobile, reset all images to visible, no animation
      imageRefs.current.forEach((img) => img && gsap.set(img, { opacity: 1, y: 0, x: 0 }));
      setActiveIndex(null);
      return;
    }

    imageRefs.current.forEach((img) => img && gsap.set(img, { opacity: 0, y: 0, x: 0 }));

    const onPointerMove = (e: PointerEvent) => {
      lastMouseRef.current = { x: e.clientX, y: e.clientY, known: true };
      checkPointerOverlap();
    };

    const onScrollOrResize = () => {
      if (rafPending.current) return;
      rafPending.current = true;
      requestAnimationFrame(() => {
        rafPending.current = false;
        if (!lastMouseRef.current.known) return;
        const prevScrollY = lastScrollYRef.current;
        lastScrollYRef.current = window.scrollY;
        const deltaY = lastScrollYRef.current - prevScrollY;
        checkPointerOverlap(deltaY);
      });
    };

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, []);

  const animateImage = (index: number, dir: Dir, show: boolean) => {
    // Only animate on lg screens and above
    if (!window.matchMedia("(min-width: 1024px)").matches) {
      // On mobile, just show image, no animation
      const el = imageRefs.current[index];
      if (el) gsap.set(el, { opacity: 1, y: 0, x: 0 });
      return;
    }
    const el = imageRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);

    if (show) {
      gsap.fromTo(
        el,
        { opacity: 0, y: dir === "down" ? -50 : 50, x: 0 },
        {
          opacity: 1,
          y: 0,
          x: 0,
          duration: 0.55,
          ease: "power3.out",
          onComplete: () => {
            gsap.to(el, {
              y: "-=8",
              duration: 1.8,
              repeat: -1,
              yoyo: true,
              ease: "sine.inOut",
            });
          },
        }
      );
    } else {
      gsap.to(el, {
        opacity: 0,
        y: dir === "down" ? 50 : -50,
        duration: 0.45,
        ease: "power3.inOut",
      });
    }
  };

  const slideOutLeft = (index: number) => {
    const el = imageRefs.current[index];
    if (!el) return;

    gsap.killTweensOf(el);
    gsap.to(el, {
      opacity: 0,
      x: -200,
      duration: 0.5,
      ease: "power3.inOut",
      onComplete: () => {
        gsap.set(el, { x: 0 });
      },
    });
  };

  const activateIndex = (nextIndex: number, dir: Dir) => {
    const prev = activeIndexRef.current;
    if (prev === nextIndex) return;

    if (prev !== null) {
      animateImage(prev, dir, false);
    }
    animateImage(nextIndex, dir, true);
    setActiveIndex(nextIndex);
  };

  const checkPointerOverlap = (scrollDeltaY?: number) => {
    const { x, y } = lastMouseRef.current;
    const container = containerRef.current;

    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const insideContainer = x >= containerRect.left && x <= containerRect.right && y >= containerRect.top && y <= containerRect.bottom;

    const prev = activeIndexRef.current;

    // Case 1: outside container → slide out left
    if (!insideContainer && prev !== null) {
      slideOutLeft(prev);
      setActiveIndex(null);
      activeIndexRef.current = null;
      return;
    }

    // Case 2: inside container, check cards
    let hoveredIndex: number | null = null;
    for (let i = 0; i < cardRefs.current.length; i++) {
      const card = cardRefs.current[i];
      if (!card) continue;
      const r = card.getBoundingClientRect();
      if (x >= r.left && x <= r.right && y >= r.top && y <= r.bottom) {
        hoveredIndex = i;
        break;
      }
    }

    if (hoveredIndex !== null) {
      let dir: Dir = "down";
      if (prev !== null) dir = hoveredIndex > prev ? "down" : "up";
      activateIndex(hoveredIndex, dir);
    } else if (prev !== null) {
      let dir: Dir = "down";
      if (typeof scrollDeltaY === "number") dir = scrollDeltaY > 0 ? "down" : "up";
      animateImage(prev, dir, false);
      setActiveIndex(null);
    }
  };

  const onMouseEnterCard = (index: number) => {
    const prev = activeIndexRef.current;
    const dir: Dir = prev !== null ? (index > prev ? "down" : "up") : "down";
    activateIndex(index, dir);
  };

  const onMouseLeaveCard = (index: number, e: React.MouseEvent) => {
    const rect = cardRefs.current[index]?.getBoundingClientRect();
    if (!rect) return;
    let dir: Dir = "down";
    if (e.clientY < rect.top) dir = "up";
    if (e.clientY > rect.bottom) dir = "down";
    animateImage(index, dir, false);
    setActiveIndex(null);
  };

  return (
    <div ref={containerRef} className="relative">
      <div className="lg:mx-5">
        <h2 className="font-helvetica mb-12 text-center font-medium leading-none text-[40px] md:text-[40px] lg:text-[64px]">
          <AnimatedTextCharacter text="Panel Discussion Topics" />
        </h2>

        {cardData.map((card, index) => (
          <div
            key={card.id}
            ref={(el) => {
              if (el) cardRefs.current[index] = el;
            }}
            onMouseEnter={() => onMouseEnterCard(index)}
            onMouseLeave={(e) => onMouseLeaveCard(index, e)}
            className="relative group flex flex-col md:flex-row items-center gap-6 md:gap-12 border-[#99999980] border-y py-6 md:py-8 group cursor-pointer"
          >
            {/* Image */}
            <div
              ref={(el) => {
                if (el) imageRefs.current[index] = el;
              }}
              className="w-full md:w-80 h-48 md:h-40 flex-shrink-0 overflow-hidden rounded will-change-transform transform-gpu"
            >
              <img src={card.image} alt={card.title} className="w-full h-full object-cover" />
            </div>

            {/* Text */}
            <div className="flex flex-col lg:max-w-[80%] xl:max-w-[60%] justify-center">
              <h2 className="font-helvetica    text-xl md:text-3xl font-medium text-[#404040] leading-snug">{card.title}</h2>
              <span
                className={`mt-2 font-bold text-base md:text-lg text-[#E91E63] transition-colors duration-300 
    ${activeIndex === index ? "lg:text-[#E91E63]" : "lg:text-[#F79821]"}`}
              >
                {card.category}
              </span>
            </div>

            {/* Gradient stripe */}
            {index === 1 && (
              <div className="absolute hidden lg:block  -right-10 md:-right-28 w-32 md:w-32 h-32 bg-gradient-to-br from-[#FF9618] to-[#EC2188]" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PanelDiscussion;
