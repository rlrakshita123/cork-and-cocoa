

import liquer1 from "../assets/images/liquer1.jpg";
import liquer2 from "../assets/images/liquer2.jpg";
import liquer3 from "../assets/images/liquer3.jpg";
import liquer4 from "../assets/images/liquer4.jpg";
import liquer5 from "../assets/images/liquer5.jpg";
import liquer6 from "../assets/images/liquer6.jpg";
import liquer7 from "../assets/images/liquer7.jpg";
import liquer8 from "../assets/images/liquer8.jpg";

const liquorChocolates = [
  {
    image: liquer1,
    name: "Liquer Cocoa Truffles",
    desc: "Dark chocolate truffles infused with subtle liquor notes for a rich, grown-up indulgence.",
  },
  {
    image: liquer2,
    name: "Wine-Infused Chocolate Bites",
    desc: "Premium chocolates delicately infused with wine tones, crafted for refined palates.",
  },
  {
    image: liquer3,
    name: "Luxury Liquer Chocolate Assortment",
    desc: "An elegant assortment of handcrafted liquor chocolates, perfect for premium gifting.",
  },
  {
    image: liquer4,
    name: "Spirited Chocolate Delights",
    desc: "Smooth, soft-centered chocolates with gentle liquor warmth and deep cocoa richness.",
  },
];
const nonLiquorChocolates = [
  {
    image: liquer5,
    name: "Artisan Milk & Dark Chocolates",
    desc: "Carefully crafted chocolates with layered flavors and refined sweetness.",
  },
  {
    image: liquer6,
    name: "Decadent Chocolate Squares",
    desc: "Rich chocolate squares finished with glossy cocoa layers and bold texture.",
  },
  {
    image: liquer7,
    name: "Classic Creamy Truffles",
    desc: "Soft, melt-in-the-mouth truffles with a smooth, creamy cocoa finish.",
  },
  {
    image: liquer8,
    name: "Signature Cocoa Collection",
    desc: "An indulgent mix of handcrafted chocolates made for all ages and occasions.",
  },
];



function Liquer() {
  return (
    <section className="bg-[#fdf2d0] min-h-screen px-6 pt-12 pb-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#4b2e1e]">
          Our Liquer Collection
        </h1>
        <p className="mt-3 max-w-2xl mx-auto text-[#6b4226] leading-relaxed">
          A luxurious range of liquor and non-liquor chocolates — rich, refined,
          and crafted for indulgent gifting.
        </p>
      </div>

      
      <div className="mt-20">
        <h2 className="text-3xl font-semibold text-[#4b2e1e] text-center">
          Liquer Chocolates
        </h2>
        <p className="mt-3 text-center text-[#6b4226] max-w-xl mx-auto">
          Indulgent chocolates infused with subtle liquor notes, crafted for refined tastes.
        </p>

        <div className="mt-14 max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {liquorChocolates.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg bg-white
                         transition transform duration-500 hover:-translate-y-2"
            >
              <div className="relative h-72 w-full">
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover
                             transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-[#4b2e1e]">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm text-[#6b4226]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-28">
        <h2 className="text-3xl font-semibold text-[#4b2e1e] text-center">
          Non-Liquer Chocolates
        </h2>
        <p className="mt-3 text-center text-[#6b4226] max-w-xl mx-auto">
          Pure chocolate creations with rich cocoa flavors, perfect for everyone.
        </p>

        <div className="mt-14 max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {nonLiquorChocolates.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg bg-white
                         transition transform duration-500 hover:-translate-y-2"
            >
              <div className="relative h-72 w-full">
                <img
                  src={item.image}
                  alt={item.name}
                  className="absolute inset-0 w-full h-full object-cover
                             transition duration-500 hover:scale-105"
                />
              </div>

              <div className="p-6 text-center">
                <h3 className="text-lg font-semibold text-[#4b2e1e]">
                  {item.name}
                </h3>
                <p className="mt-2 text-sm text-[#6b4226]">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}

export default Liquer;
