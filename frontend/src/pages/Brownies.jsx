
import brownie1 from "../assets/images/brownie1.jpg";
import brownie2 from "../assets/images/brownie2.jpg";
import brownie3 from "../assets/images/brownie3.jpg";
import brownie4 from "../assets/images/brownie4.jpg";
import brownie5 from "../assets/images/brownie5.jpg";
import brownie6 from "../assets/images/brownie6.jpg";

const brownies = [
  {
    image: brownie1,
    name: "Classic Fudge Brownie",
    desc: "Ultra-fudgy brownie with a molten chocolate center and glossy cocoa drizzle.",
  },
  {
    image: brownie2,
    name: "Walnut Crunch Brownie",
    desc: "Soft chocolate brownie layered with smooth ganache and nutty crunch.",
  },
  {
    image: brownie3,
    name: "Triple Chocolate Brownie",
    desc: "Intensely rich brownie topped with dark chocolate glaze and creamy scoops.",
  },
  {
    image: brownie4,
    name: "Berry Chocolate Brownie",
    desc: "Dark chocolate brownie paired with fresh berries and cocoa dusting.",
  },
  {
    image: brownie5,
    name: "Chocolate Slice Brownie",
    desc: "Dense, cake-style brownie sliced to perfection with bold cocoa notes.",
  },
  {
    image: brownie6,
    name: "Brownie Cube Bites",
    desc: "Perfectly baked brownie cubes with crisp edges and soft, chewy centers.",
  },
];


function Brownies() {
  return (
    <section className="bg-[#fdf2d0] min-h-screen px-6 pt-12 pb-20">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#4b2e1e]">
          Our Brownies
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-[#6b4226]">
          Rich, fudgy brownies crafted for true chocolate lovers.
        </p>
      </div>
      <div className="mt-16 max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {brownies.map((item, index) => (
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
    </section>
  );
}

export default Brownies;
