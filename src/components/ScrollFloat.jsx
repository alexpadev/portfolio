// src/components/ScrollFloat.jsx
import { useRef, useLayoutEffect } from "react";
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

  useLayoutEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // creamos un contexto ligado al div contenedor
    const ctx = gsap.context(() => {
      // recogemos los hijos del contenedor
      const elems = Array.from(el.children);
      if (elems.length === 0) return; // nada que animar

      gsap.fromTo(
        elems,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: animationDuration,
          ease,
          stagger,
          scrollTrigger: {
            trigger: el,
            start: scrollStart,
            end: scrollEnd,
            toggleActions: "play none none reverse",
            pin: false,
          },
        }
      );
    }, el);

    // al desmontar, revertimos SOLO lo creado en este contexto
    return () => ctx.revert();
  }, [animationDuration, ease, scrollStart, scrollEnd, stagger]);

  return (
    <div ref={containerRef} className="overflow-visible">
      {children}
    </div>
  );
};

export default ScrollFloat;
