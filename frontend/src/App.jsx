import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import slides from "./constants/banners";
const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-full flex">
      <Hero>
          {slides.map((slide, index) => (
            <div key={index} className="flex-shrink-0 w-full h-full relative">
              {/* Text Section */}
              <div className="absolute top-[100px] sm:inset-0 sm:top-0  flex items-center justify-center">
                <div className="backdrop-blur p-4 rounded-md space-y-3 text-center w-[90%] md:w-[60%] lg:w-[40%]">
                  <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white z-10">
                    {slide.title}
                  </h2>
                  <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white">
                    {slide.description}
                  </p>
                </div>
              </div>

              {/* Image Section */}
              <img
                className="w-full h-[300px] sm:h-full object-cover"
                src={slide.image}
                alt={slide.title}
              />
            </div>
          ))}

      </Hero>
      </div>
    </>
  );
};
export default App;
