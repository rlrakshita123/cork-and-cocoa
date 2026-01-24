import heroImage from "../assets/images/animated2.jpg";
import { Link } from "react-router-dom";


function Hero() {
  return (
    <section className="relative w-full h-[90vh] overflow-hidden">
      <img
        src={heroImage}
        alt="Cork and Cocoa Hero"
        className="absolute inset-0 w-full h-full object-cover animate-[slowZoom_20s_ease-in-out_infinite_alternate]"
      />

     
      <div className="absolute inset-0 bg-black/50"></div>

      
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">
        <h1
          className="text-4xl md:text-6xl font-bold text-[#fdf2d0] tracking-wide
                     opacity-0 animate-[fadeUp_1s_ease-out_forwards]"
        >
          Where Cocoa Meets Cork
        </h1>

        <p
          className="mt-6 max-w-2xl text-lg md:text-xl text-[#f3e7c3]
                     opacity-0 animate-[fadeUp_1s_ease-out_forwards] delay-200"
        >
          Handcrafted cakes, indulgent chocolates, and curated wino — made to
          celebrate every moment.
        </p>

        <div
          className="mt-8 opacity-0 animate-[fadeUp_1s_ease-out_forwards] delay-300"
        >
          <Link to="/explore">
            <button
              className="px-8 py-3 bg-[#4b2e1e] text-[#fdf2d0] rounded-full text-sm font-medium transition transform hover:scale-105
                        hover:bg-[#7a4a2e]"
            >
              Explore Our Creations
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Hero;
