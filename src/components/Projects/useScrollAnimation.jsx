/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef } from "react";

const useScrollAnimation = () => {
  const elementsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("visible");
          }, index * 200); // Adding a delay for each element
          observer.unobserve(entry.target);
        }
      });
    });

    elementsRef.current.forEach((element) => {
      if (element) observer.observe(element);
    });

    return () => {
      elementsRef.current.forEach((element) => {
        if (element) observer.unobserve(element);
      });
    };
  }, [elementsRef]);

  return elementsRef;
};

export default useScrollAnimation;
