import cake1 from "../assets/images/cake1.jpg";
import cake2 from "../assets/images/cake2.jpg";
import cake3 from "../assets/images/cake3.jpg";
import cake4 from "../assets/images/cake4.jpg";
import cake5 from "../assets/images/cake5.jpg";
import cake6 from "../assets/images/cake6.jpg";

const cakes = [
  {
    image: cake1,
    name: "Classic Celebration Cake",
    desc: "Perfectly layered cake for timeless celebrations.",
  },
  {
    image: cake2,
    name: "Red Velvet Delight",
    desc: "Soft, rich red velvet with smooth cream layers.",
  },
  {
    image: cake3,
    name: "Chocolate Truffle Cake",
    desc: "Deep cocoa flavors with a luxurious finish.",
  },
  {
    image: cake4,
    name: "Floral Cupcake",
    desc: "Delicate frosting with elegant floral design.",
  },
  {
    image: cake5,
    name: "Birthday Bliss Cake",
    desc: "Crafted to make birthdays extra special.",
  },
  {
    image: cake6,
    name: "Layered Designer Cake",
    desc: "A statement cake with premium detailing.",
  },
];

function Cakes() {
  return (
    <section className="bg-[#fdf2d0] min-h-screen px-6 pt-12 pb-20">

      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#4b2e1e]">
          Our Cakes
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-[#6b4226]">
          Handcrafted cakes made with premium ingredients, artistic detailing,
          and a passion for perfection.
        </p>
      </div>

      {/* Cakes Grid */}
      <div className="mt-16 max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {cakes.map((cake, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-lg bg-white
                      transition transform duration-500 hover:-translate-y-2"
          >
            {/* Image – full width cover */}
            <div className="relative h-80 w-full">
              <img
                src={cake.image}
                alt={cake.name}
                className="absolute inset-0 w-full h-full object-cover
                          transition duration-500 hover:scale-105"
              />
            </div>

            {/* Info */}
            <div className="p-6 text-center">
              <h3 className="text-lg font-semibold text-[#4b2e1e]">
                {cake.name}
              </h3>
              <p className="mt-2 text-sm text-[#6b4226]">
                {cake.desc}
              </p>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}

export default Cakes;
