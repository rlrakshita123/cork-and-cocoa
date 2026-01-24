import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#fdf2d0]">
      
      <div className="max-w-7xl mx-auto px-8 py-6 flex items-center justify-between">
        
        
        <Link
          to="/"
          className="text-3xl font-serif tracking-wide
                     text-[#4b2e1e]
                     hover:text-[#3a2317]
                     transition"
        >
          Cork & Cocoa
        </Link>

        
        <div className="flex items-center gap-10 text-base font-medium">
          <Link
            to="/"
            className="hover:text-[#7a4a2e] transition"
          >
            Home
          </Link>

          <Link
            to="/about"
            className="hover:text-[#7a4a2e] transition"
          >
            About
          </Link>

          <Link
            to="/explore"
            className="px-6 py-2 rounded-full
                       bg-[#4b2e1e] text-[#fdf2d0]
                       hover:bg-[#3a2317]
                       transition"
          >
            Explore Creations
          </Link>
        </div>
      </div>

      
      <div className="h-[1.5px] bg-[#e7d9b0]" />
    </nav>
  );
}

export default Navbar;
