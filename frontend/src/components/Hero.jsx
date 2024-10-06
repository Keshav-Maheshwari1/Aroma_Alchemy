import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Hero = ({
  children: slides = [],
  autoplay = false,
  autoplayDelay = 2000,
}) => {
  const [index, setIndex] = useState(0);
    
  useEffect(() => {
    if (!autoplay) return;

    const next = () => {
      setIndex((cur) => (cur === slides.length - 1 ? 0 : cur + 1));
    };

    const interval = setInterval(() => {
      next();
    }, autoplayDelay);

    return () => clearInterval(interval); // Cleanup when component unmounts
  }, [autoplay, autoplayDelay, slides.length]); // Correct dependencies

  return (
    <section className="flex h-[90vh] overflow-hidden border-2 border-neutral-400 relative">
      <div
        className="flex w-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {slides}
      </div>
    </section>
  );
};

// Define prop types for Hero component
Hero.propTypes = {
  children: PropTypes.node.isRequired,
  autoplay: PropTypes.bool,
  autoplayDelay: PropTypes.number,
};

export default Hero;
