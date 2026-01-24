import aboutShop from "../assets/images/about1.jpg";
import aboutBaking from "../assets/images/about2.jpg";
import aboutChocolate from "../assets/images/about3.jpg";

function About() {
  return (
    <section className="bg-[#fdf2d0] text-[#4b2e1e]">

      
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        
        <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src={aboutShop}
            alt="Cork & Cocoa Bakery"
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Crafted With Heart
          </h2>
          <p className="text-[#6b4226] leading-relaxed">
            At Cork & Cocoa, we believe true luxury lies in thoughtful creation.
            Our artisans blend premium ingredients, refined techniques, and
            artistic vision to craft experiences that feel deeply personal.
          </p>
          <p className="mt-4 text-[#6b4226] leading-relaxed">
            From elegant cakes to indulgent chocolates and curated wine pairings,
            every detail is considered — because excellence lives in the details.
          </p>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            A Purpose Beyond Taste
          </h2>
          <p className="text-[#6b4226] leading-relaxed">
            Cork & Cocoa is proudly owned by the Matha Theresa Foundation.
            Beyond crafting beautiful confections, our work supports initiatives
            that uplift communities and create meaningful social impact.
          </p>
          <p className="mt-4 text-[#6b4226] leading-relaxed">
            When you choose Cork & Cocoa, you celebrate life’s moments while
            contributing to a greater cause rooted in compassion and care.
          </p>
        </div>
        <div className="relative h-[420px] rounded-2xl overflow-hidden shadow-lg">
          <img
            src={aboutBaking}
            alt="Handcrafted baking process"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    <div className="bg-[#f8eac0] py-20">
    <div className="max-w-4xl mx-auto px-6 text-center">
        <p className="text-2xl md:text-3xl font-serif text-[#4b2e1e] leading-relaxed">
        “Whether it’s a quiet celebration or a grand milestone, Cork & Cocoa
        exists to make every moment memorable — with warmth, elegance,
        and purpose baked into every creation.”
        </p>
    </div>
    </div>

    </section>
  );
}

export default About;
