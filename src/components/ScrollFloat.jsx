import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollFloat = ({
  children,
  animationDuration = 1,
  ease = "power1.out",
  scrollStart = "center bottom",
  scrollEnd = "bottom top",
  stagger = 0.1,
}) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const elems = Array.from(containerRef.current.children);


    gsap.fromTo(
      elems,
      { y: 40, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: animationDuration,
        ease: ease,
        stagger: stagger,
        scrollTrigger: {
          trigger: containerRef.current,
          start: scrollStart,
          end: scrollEnd,
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <div ref={containerRef} className="overflow-visible">
      {children}
    </div>
  );
};

export default ScrollFloat;
