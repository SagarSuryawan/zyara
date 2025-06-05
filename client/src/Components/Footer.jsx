import { FaInstagram, FaFacebook, FaMailBulk } from "react-icons/fa";
import footerLogo from "../assets/logo/zyara.png"; // Update path as per your project

function Footer() {
  return (
    <div className="w-full bg-[#106EBE] pt-10 pb-6">
      <div className="w-[80%] bg-[#0FFCBE] border border-[#0FFCBE] m-auto rounded-full mb-5 h-1"></div>

      {/* FOOTER MAIN CONTAINER */}
      <div className="container mx-auto w-[90%] px-4 flex flex-col md:flex-row md:items-start gap-8">

        {/* FOOTER LOGO + SOCIAL */}
        <div className="w-full md:w-1/3 flex flex-col items-center md:items-start">
          <img
            src={footerLogo}
            className="w-24 h-24 rounded-full hidden sm:block"
            alt="footer_logo"
          />
          <div className="flex mt-4 gap-4">
            <FaInstagram className="w-5 h-5 cursor-pointer text-white" />
            <FaFacebook className="w-5 h-5 cursor-pointer text-white" />
            <FaMailBulk className="w-5 h-5 cursor-pointer text-white" />
          </div>
        </div>

        {/* FOOTER MENU */}
        <div className="w-full md:w-2/3 flex flex-col sm:flex-row justify-between flex-wrap gap-8">
          {/* Discovery */}
          <div>
            <h1 className="mb-4 text-[#0FFCBE] text-lg font-semibold">Discovery</h1>
            <div className="space-y-3 text-white">
              <p className="cursor-pointer">New Season</p>
              <p className="cursor-pointer">Most Searched</p>
              <p className="cursor-pointer">Most Selled</p>
            </div>
          </div>

          {/* About */}
          <div>
            <h1 className="mb-4 text-[#0FFCBE] text-lg font-semibold">About</h1>
            <div className="space-y-3 text-white">
              <p className="cursor-pointer">Help</p>
              <p className="cursor-pointer">Most Searched</p>
              <p className="cursor-pointer">Affiliate</p>
            </div>
          </div>

          {/* Info */}
          <div>
            <h1 className="mb-4 text-[#0FFCBE] text-lg font-semibold">Info</h1>
            <div className="space-y-3 text-white">
              <p className="cursor-pointer">Contact Us</p>
              <p className="cursor-pointer">Privacy Policies</p>
              <p className="cursor-pointer">Terms & Condition</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
