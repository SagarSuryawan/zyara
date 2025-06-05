import NavbarLogo from '../assets/logo/zyara.png';
import { FaUser, FaHeart, FaShoppingCart } from "react-icons/fa";

function Navbar() {
  return (
    <div className="bg-[#106EBE] text-[#0FFCBE] w-full">
      {/* TopBar */}
      <div className="hidden md:block h-8 text-center p-2">
        <h6 className="animate-bounce text-sm">
          Made in India | COD Available | Great Offers | 100% Original | Easy Return
        </h6>
      </div>

      {/* Main Navbar */}
      <div className="w-full max-w-screen-xl mx-auto px-8 py-2 flex flex sm:flex-row justify-between items-center gap-4 sm:gap-0">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img src={NavbarLogo} alt="navbarLogo" className="w-24 h-24 sm:w-24 sm:h-24 rounded-full" />
        </div>

        {/* Search Bar */}
        <div className="w-full sm:w-1/2 flex justify-center">
          <input
            type="text"
            placeholder="Enter your choice"
            className="bg-white text-black p-2 rounded-full w-full max-w-xs text-center"
          />
        </div>

        {/* User Icons */}
        <div className="flex gap-4 items-center">
          <FaUser className="w-5 h-5 cursor-pointer" />
          <FaHeart className="w-5 h-5 cursor-pointer" />
          <div className="relative">
            <FaShoppingCart className="w-5 h-5 cursor-pointer" />
            <span className="absolute -top-2 -right-2 bg-[#0FFCBE] text-black text-xs w-4 h-4 flex items-center justify-center rounded-full">
              4
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
