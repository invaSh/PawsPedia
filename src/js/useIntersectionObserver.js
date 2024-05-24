import { useEffect, useRef } from "react";

const useIntersectionObserver = (animation) => {
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("hidden");
            entry.target.classList.add("animate__animated", animation);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        triggerOnce: true,
        threshold: 0.1,
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, [animation]);

  return elementRef;
};

export default useIntersectionObserver;
