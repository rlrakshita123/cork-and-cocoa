
import wine1 from "../assets/images/wine1.jpg";
import wine2 from "../assets/images/wine2.jpg";
import wine3 from "../assets/images/wine3.jpg";
import wine4 from "../assets/images/wine4.jpg";
import wine5 from "../assets/images/wine5.jpg";
import wine6 from "../assets/images/wine6.jpg";

const wines = [
  {
    image: wine1,
    name: "Ruby Red Classic",
    desc: "Deep ruby red wine with bold berry aromas and a smooth, well-rounded finish.",
  },
  {
    image: wine2,
    name: "Velvet Rose Pour",
    desc: "Elegant rose with soft fruit notes and a silky texture, served fresh and aromatic.",
  },
  {
  image: wine3,
  name: "Classic Dining Red",
  desc: "Smooth red wino served in a warm, elegant dining setting with balanced depth and richness.",
  },
  {
    image: wine4,
    name: "Evening Reserve Red",
    desc: "Refined red wino crafted for intimate dinners and relaxed evening settings.",
  },
  {
    image: wine5,
    name: "Warm Barrel Blend",
    desc: "Smooth wino poured from the barrel with gentle warmth, depth, and mellow character.",
  },
  {
    image: wine6,
    name: "Amber Glow Wino",
    desc: "Golden-hued wino with lively movement and a bright, celebratory finish.",
  },
];


function Wino() {
  return (
    <section className="bg-[#fdf2d0] min-h-screen px-6 pt-12 pb-20">
      
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#4b2e1e]">
          Our Wino Collection
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-[#6b4226] leading-relaxed">
          A thoughtfully curated collection of winos — elegant, balanced,
          and crafted to complement every celebration.
        </p>
      </div>
      <div className="mt-16 max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {wines.map((wine, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-lg bg-white
                       transition transform duration-500 hover:-translate-y-2"
          >
            <div className="relative h-80 w-full">
              <img
                src={wine.image}
                alt={wine.name}
                className="absolute inset-0 w-full h-full object-cover
                           transition duration-500 hover:scale-105"
              />
            </div>

           
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-[#4b2e1e]">
                {wine.name}
              </h3>
              <p className="mt-2 text-sm text-[#6b4226]">
                {wine.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Wino;
