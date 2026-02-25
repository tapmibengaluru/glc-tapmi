"use client";
import React, {
  useEffect,
  useRef,
  useState,
  createContext,
  useContext,
} from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import Image, { ImageProps, StaticImageData } from "next/image";
import { HiChevronRight } from "react-icons/hi";

interface CarouselProps {
  items: JSX.Element[];
  initialScroll?: number;
}

type Card = {
  image: string;
  title: string;
  description: string;
  border?: string;
  color?: string;
  background?: string;
};

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = React.useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [canScrollRight, setCanScrollRight] = React.useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth);
    }
  };

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
    }
  };

  const handleCardClose = (index: number) => {
    if (carouselRef.current) {
      // const cardWidth = isMobile() ? 230 : 384; // (md:w-96)
      // const gap = isMobile() ? 4 : 8;
      // const scrollPosition = (cardWidth + gap) * (index + 1);
      // carouselRef.current.scrollTo({
      //   left: scrollPosition,
      //   behavior: "smooth",
      // });
      // setCurrentIndex(index);
    }
  };

  const isInView = useInView(carouselRef, {
    once: true,
  });

  return (
    <>
      <CarouselContext.Provider
        value={{ onCardClose: handleCardClose, currentIndex }}
      >
        <div className="relative w-full">
          <div
            className="flex w-full overflow-x-scroll overscroll-x-auto py-8 md:py-12 scroll-smooth [scrollbar-width:none] hide-scrollbar"
            ref={carouselRef}
            onScroll={checkScrollability}
          >
            <div
              className={
                "absolute right-0  z-[1000] h-auto  w-[5%] overflow-hidden bg-gradient-to-l"
              }
            ></div>

            <div
              className={
                "flex flex-row justify-start gap-4 lg:gap-8 mx-auto container "
              }
            >
              {items.map((item, index) => (
                <motion.div
                  initial={{
                    opacity: 0,
                    y: 20,
                  }}
                  animate={{
                    opacity: isInView ? 1 : 0,
                    y: isInView ? 0 : 20,
                    transition: {
                      duration: 0.5,
                      delay: 0.2 * index,
                      ease: "easeOut",
                      once: true,
                    },
                  }}
                  key={"card" + index}
                  className="last:pr-[5%] md:last:pr-[6%]  rounded-xl lg:rounded-3xl"
                >
                  {item}
                </motion.div>
              ))}
            </div>
          </div>
          <div className="container  ">
            <div className="flex justify-end lg:justify-strt gap-4">
              <button
                className="relative z-40 h-8 w-8 cursor-pointer p-1 bg-[#AEAEAE] rounded-full flex items-center justify-center disabled:opacity-50"
                onClick={scrollLeft}
                disabled={!canScrollLeft}
              >
                <HiChevronRight className="h-8 w-8  rotate-180 text-white" />
              </button>
              <button
                className="relative z-40 h-8 w-8 cursor-pointer p-1 bg-[#AEAEAE] rounded-full flex items-center justify-center disabled:opacity-50"
                onClick={scrollRight}
                disabled={!canScrollRight}
              >
                <HiChevronRight className="h-8 w-8  text-white" />
              </button>
            </div>
          </div>
        </div>
      </CarouselContext.Provider>
    </>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
  uppercase = true,
  containerScrollRef,
}: {
  card: Card;
  index: number;
  layout?: boolean;
  uppercase?: boolean;
  containerScrollRef?: any;
}) => {
  return (
    <>
      <div
        style={{
          borderColor: card.border,
          backgroundColor: card.background,
        }}
        className={`h-full w-[297px] lg:w-[440px] border  px-6 py-6 lg:py-8 space-y-2 lg:space-y-4 rounded-[20px]`}
      >
        <img
          src={card.image}
          alt="illustration"
          className="lg:h-[154px] 3xl:h-[254px] w-full object-contain"
        />
        <h3
          style={{
            color: card.color,
          }}
          className={`text-[20px] lg:text-[36px] font-helvetica font-black lg:leading-[46.8px] tracking-[0.1px] text-center`}
        >
          {card.title}
        </h3>
        <p className="text-[#1E1E1E] opacity-80 lg:text-[24px] lg:leading-[31.2px] tracking-[0.1px] text-center">
          {card.description}
        </p>
      </div>
    </>
  );
};

export const BlurImage = ({
  height,
  width,
  src,
  className,
  alt,
  ...rest
}: ImageProps) => {
  const [isLoading, setLoading] = useState(true);
  return (
    <Image
      onLoad={() => setLoading(false)}
      src={src}
      width={width}
      height={height}
      loading="lazy"
      decoding="async"
      blurDataURL={typeof src === "string" ? src : undefined}
      alt={alt ? alt : "Background of a beautiful view"}
      {...rest}
    />
  );
};
