

import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import bg from "../assets/images/BG1.jpg";

const items = [
  {
    title: "Cakes",
    subtitle: "Timeless, elegant celebrations",
    path: "/cakes",
  },
  {
    title: "Brownies",
    subtitle: "Deep cocoa indulgence",
    path: "/brownies",
  },
  {
    title: "Wino",
    subtitle: "Curated wino experiences",
    path: "/wino",
  },
  {
    title: "Liquer Chocolates",
    subtitle: "Infused luxury bites",
    path: "/liquer",
  },
  {
    title: "Custom Cakes",
    subtitle: "Designed just for you",
    path: "/custom-cakes",
  },
];

function Explore() {
  const scrollRef = useRef(null);
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const atEnd =
        el.scrollLeft + el.clientWidth >= el.scrollWidth - 20;
      setShowArrow(!atEnd);
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollRight = (e) => {
    e.stopPropagation(); 
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: 360,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="min-h-screen bg-cover bg-center relative"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="absolute inset-0 bg-black/60"></div>

    
      <div className="relative z-10 px-10 py-28">
        
        <div className="max-w-3xl mb-24">
          <h1 className="text-5xl font-semibold text-[#fdf2d0] tracking-wide">
            Explore Our Creations
          </h1>
          <p className="mt-6 text-lg text-[#f5e6c8]/90 leading-relaxed">
            Each creation at Cork & Cocoa is thoughtfully crafted — from
            celebratory cakes to indulgent chocolates and curated pairings.
            Discover what speaks to your moment.
          </p>
        </div>
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-10 overflow-x-auto pb-12
                       scroll-smooth scrollbar-hide"
          >
            {items.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="group min-w-[340px]
                           bg-[#fdf2d0] rounded-2xl
                           px-12 py-16 shadow-lg
                           transition-all duration-500
                           hover:-translate-y-2 hover:shadow-2xl"
              >
                <h3 className="text-2xl text-[#4b2e1e] font-medium tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-3 text-[#6b4226]">
                  {item.subtitle}
                </p>

                <div
                  className="mt-6 h-[2px] w-10 bg-[#4b2e1e]
                             transition-all duration-500
                             group-hover:w-16"
                />
              </Link>
            ))}
          </div>

          
          {showArrow && (
            <button
              onClick={scrollRight}
              className="absolute right-6 top-[42%] -translate-y-1/2
                         z-20 h-16 w-16 rounded-full
                         bg-[#fdf2d0]/95 shadow-xl
                         flex items-center justify-center
                         hover:scale-105 transition
                         animate-[nudgeRight_1.4s_ease-in-out_infinite]"
              aria-label="Scroll right"
            >
              <span className="text-4xl font-medium text-[#4b2e1e]">
                ›
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Explore;
