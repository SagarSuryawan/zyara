import HomeLayout from "../Layouts/HomeLayout"

// import images for category
import mensFashion from "../assets/homePage/MensFashion.jpg"
import  womensFashion from "../assets/homePage/womensFashion.jpg"
import  Beauty from "../assets/homePage/beauty.jpg"
import kitchenAccessories from "../assets/homePage/kitchen-accessories.jpg"
import homeDecore from "../assets/homePage/homeDecore.jpg"
import Watches from "../assets/homePage/Watches.jpg"
import sportsAccessories from "../assets/homePage/sportsAccessories.jpg"
import motarCycle from "../assets/homePage/motarCycle.jpg"
import Electronics from "../assets/homePage/Electronics.jpg"
import mobile_Tabs from "../assets/homePage/Mobiles & tabs.jpg"


function HomePage() {
    return (
        <HomeLayout>
            <div className="productCategory relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-10 gap-4 px-4 py-6 text-center cursor-pointer">
  {/* CATEGORY ITEMS */}
  {[
    { src: mensFashion, label: "Mens Fashion", dropdown: ["Shirts", "Pants", "Shoes"] },
    { src: womensFashion, label: "Womens Fashion" },
    { src: kitchenAccessories, label: "kitchenAccessories" },
    { src: homeDecore, label: "homeDecore" },
    { src: Electronics, label: "Electronics" },
    { src: mobile_Tabs, label: "mobile_Tabs" },
    { src: Watches, label: "Watches" },
    { src: sportsAccessories, label: "sportsAccessories" },
    { src: motarCycle, label: "motarCycle" },
    { src: Beauty, label: "Beauty", dropdown: ["Shirts", "Pants", "Shoes"] },
  ].map((item, index) => (
    <div
      key={index}
      className="relative flex flex-col justify-center items-center gap-2 group p-2 transition-transform duration-300 hover:scale-105 z-10"
    >
      <img
        src={item.src}
        alt={item.label}
        className="w-20 h-20 sm:w-24 sm:h-24 rounded-full transition-all duration-300 group-hover:scale-110"
      />
      <p className="text-xs sm:text-sm tracking-wide font-light transition-transform duration-300 group-hover:scale-105 group-hover:underline">
        {item.label}
      </p>
      {item.dropdown && (
        <div className="bg-[#106EBE] absolute left-1/2 -translate-x-1/2 top-full mt-2  border border-red-800 shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20 w-40">
          <ul className="text-sm text-gray-700">
            {item.dropdown.map((dItem, i) => (
              <li key={i} className="px-4 py-2 hover:underline hover:text-white cursor-pointer text-[#0FFCBE]">
                {dItem}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  ))}
</div>






        </HomeLayout>
    )
}

export default HomePage;