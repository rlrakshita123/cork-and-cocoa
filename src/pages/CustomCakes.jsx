

import custom1 from "../assets/images/custom-cake1.jpg";
import custom2 from "../assets/images/custom-cake2.jpg";
import custom3 from "../assets/images/custom-cake3.jpg";
import custom4 from "../assets/images/custom-cake4.jpg";
import custom5 from "../assets/images/custom-cake5.jpg";

function CustomCakes() {
  return (
    <section className="bg-[#fdf2d0] min-h-screen px-6 pt-12 pb-24">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-[#4b2e1e]">
          Custom Cakes Made Just for You
        </h1>
        <p className="mt-4 max-w-3xl mx-auto text-[#6b4226] leading-relaxed">
          Every celebration is unique — and your cake should be too.
          Our custom cakes are thoughtfully designed to match your vision,
          crafted with premium ingredients and artistic precision.
        </p>
      </div>
      <div className="mt-20 max-w-7xl mx-auto grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {[custom1, custom2, custom3, custom4, custom5].map((img, index) => (
          <div
            key={index}
            className="rounded-2xl overflow-hidden shadow-xl bg-white
                       transition transform duration-500 hover:-translate-y-2"
          >
            <div className="relative h-[420px] w-full bg-[#fdf2d0] flex items-center justify-center">
              <img
                src={img}
                alt="Custom Cake"
                className="max-h-full max-w-full object-contain
                          transition duration-500 hover:scale-105"
              />
            </div>
          </div>
        ))}
      </div>
      <div className="mt-28 max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-semibold text-[#4b2e1e]">
          How Custom Orders Work
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-3">
          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold text-[#4b2e1e]">
              1. Share Your Idea
            </h3>
            <p className="mt-3 text-sm text-[#6b4226]">
              Tell us about your occasion, theme, flavors, and design preferences.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold text-[#4b2e1e]">
              2. We Design & Craft
            </h3>
            <p className="mt-3 text-sm text-[#6b4226]">
              Our bakers create a bespoke cake using premium ingredients and fine detailing.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-md">
            <h3 className="text-lg font-semibold text-[#4b2e1e]">
              3. Celebrate in Style
            </h3>
            <p className="mt-3 text-sm text-[#6b4226]">
              Receive a beautifully crafted cake made exclusively for your moment.
            </p>
          </div>
        </div>
      </div>

      
      <div className="mt-28 text-center">
        <h2 className="text-3xl font-semibold text-[#4b2e1e]">
          Let’s Create Something Special
        </h2>
        <p className="mt-4 text-[#6b4226] max-w-xl mx-auto">
          Reach out to us with your ideas, and we’ll bring your custom cake
          vision to life with elegance and care.
        </p>

        <button
          className="mt-8 px-8 py-4 rounded-full bg-[#4b2e1e] text-[#fdf2d0]
                     font-semibold hover:bg-[#3a2317] transition duration-300"
        >
          Enquire for Custom Cake
        </button>
      </div>

    </section>
  );
}

export default CustomCakes;
