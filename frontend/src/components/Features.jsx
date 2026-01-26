
import { Link } from "react-router-dom";
import anim1 from "../assets/images/animated1.jpg";
import anim2 from "../assets/images/animated2.jpg";
import anim3 from "../assets/images/animated3.jpg";
import anim4 from "../assets/images/animated4.jpg";
import anim5 from "../assets/images/animated5.jpg";
import anim6 from "../assets/images/animated6.jpg";

const features = [
  { title: "Cakes", image: anim1, link: "/cakes" },
  { title: "Brownies", image: anim2, link: "/brownies" },
  { title: "Wino", image: anim3, link: "/wino" },
  { title: "Liquor Chocolates", image: anim4, link: "/liquer" },
  { title: "Custom Cakes", image: anim5, link: "/custom-cakes" },
  { title: "Artisan Specials", image: anim6, link: "/explore" },
];

function Features() {
  return (
    <section className="bg-[#fdf2d0] py-24 overflow-hidden">
  
      <div className="max-w-7xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-[#4b2e1e]">
          Our Creations
        </h2>
        <p className="mt-4 text-[#6b4226] max-w-2xl mx-auto">
          A flowing glimpse into our handcrafted world — where every creation
          is made with intention, elegance, and soul.
        </p>
      </div>

      <div className="mt-16 relative">
        <div className="flex gap-8 w-max animate-marquee hover:[animation-play-state:paused]">
          {[...features, ...features].map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="group relative w-[320px] h-[220px]
                         rounded-2xl overflow-hidden shadow-xl"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover
                           transition duration-700 group-hover:scale-110"
              />

             
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition"></div>

              
              {/* <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-2xl font-semibold text-[#fdf2d0] tracking-wide">
                  {item.title}
                </h3>
              </div> */}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
