
import bgFooter from "../assets/images/BG2.jpg";

function Footer() {
  return (
    <footer className="relative text-[#fdf2d0] py-24 px-6 overflow-hidden">
      
      
      <img
        src={bgFooter}
        alt="Chocolate background"
        className="absolute inset-0 w-full h-full object-cover
                   animate-[slowZoom_40s_ease-in-out_infinite_alternate]"
      />

      <div className="absolute inset-0 bg-[#4b2e1e]/90"></div>

      <div className="relative z-10 max-w-7xl mx-auto grid gap-12 md:grid-cols-3">
        
        <div>
          <h3 className="text-2xl font-bold tracking-wide">
            Cork & Cocoa
          </h3>
          <p className="mt-4 text-sm text-[#f3e7c3] leading-relaxed">
            A signature blend of handcrafted cakes, indulgent chocolates,
            brownies, and curated wino — crafted with love and purpose.
          </p>
        </div>

        
        <div>
          <h4 className="text-lg font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-[#f3e7c3]">
            <li>Cakes</li>
            <li>Brownies</li>
            <li>Wino</li>
            <li>Liquer</li>
            <li>Custom Cakes</li>
          </ul>
        </div>

        
        <div>
          <h4 className="text-lg font-semibold mb-4">About</h4>
          <p className="text-sm text-[#f3e7c3] leading-relaxed">
            Cork & Cocoa is proudly owned by the Matha Theresa Foundation,
            supporting meaningful initiatives through every creation.
          </p>
          <div className="mt-6 flex space-x-6 text-xl">
            <i className="fa-brands fa-instagram footer-icon"></i>
            <i className="fa-brands fa-facebook footer-icon"></i>
            <i className="fa-brands fa-youtube footer-icon"></i>
            <i className="fa-brands fa-twitter footer-icon"></i>
            <i className="fa-brands fa-facebook-messenger footer-icon"></i>
          </div>
        </div>
      </div>
      <div className="relative z-10 mt-16 text-center text-xs text-[#e6d3a3]">
        © {new Date().getFullYear()} Cork & Cocoa. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
