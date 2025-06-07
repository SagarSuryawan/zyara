import HomeLayout from "../Layouts/HomeLayout"
import { MdCurrencyRupee } from "react-icons/md";
// import images for category
import mensFashion from "../assets/homePage/MensFashion.jpg"
import  womensFashion from "../assets/homePage/womensFashion.jpg"
import  ethnicFashion from "../assets/homePage/ethnicFashion.jpg"
import  jeans from "../assets/homePage/jeans.png"
import  tshirt from "../assets/homePage/tshirt.jpg"
import  shirts from "../assets/homePage/shirts.jpg"
import  touser_pants from "../assets/homePage/touser_pants.jpg"
import  shorts from "../assets/homePage/shorts.jpg"
import  brands from "../assets/homePage/brands.jpg"
import  newArrivals from "../assets/homePage/newArrivals.jpg"
import  banner from "../assets/homePage/banner.jpg"

function HomePage() {
    return (
        <HomeLayout>
            <div className="productCategory relative grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-10 gap-4 px-4 py-6 text-center cursor-pointer">
  {/* CATEGORY ITEMS */}
  {[
    { src: mensFashion, label: "Mens Fashion", dropdown: ["Shirts", "Pants", "Shoes"] },
    { src: womensFashion, label: "Womens Fashion" },
    { src: ethnicFashion, label: "Ethnic Fashion" },
    { src: tshirt, label: "T-shirt" },
    { src: jeans, label: "Jeans" },
    { src: shirts, label: "Shirts" },
    { src: touser_pants, label: "Trousers & Pants" },
    { src: shorts, label: "Shorts" },
    { src: brands, label: "Brands" },
    { src: newArrivals, label: "New Arrivals", dropdown: ["Shirts", "Pants", "Shoes"] },
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
        <div className="absolute left-1/2 -translate-x-1/2 top-full mt-2 bg-white border border-red-800 shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-20 w-40">
          <ul className="text-sm text-gray-700">
            {item.dropdown.map((dItem, i) => (
              <li key={i} className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                {dItem}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  ))}
</div>

{/* Banner */}
<div className="banner my-10 w-[95%] mx-auto">
  <div className="relative cursor-pointer">
    <img src={banner} alt="banner" className="w-full max-h-[450px] object-cover rounded-lg shadow-xl" />
    <div className=" absolute top-10 left-24 bg-[#FFB5C0] p-4 rounded-md shadow-md max-w-xs md:w-[250px] md:h-[150px] lg:h-[200px] lg:w-[300px] lg:left-1/5 text-center p-5 md:top-1/4">
      <h1 className="text-2xl lg:text-4xl font-bold text-[#330F14] text-center">GET EXTRA <br /> 10% OFF</h1>
      <span className="text-[#66323A] text-[12px] text-center">ON SHOPPING FOR</span>
      <div className=" flex items-center justify-center">
        <MdCurrencyRupee className="text-[#66323A] text-xl sm:text-2xl" />
        <span className="text-xl sm:text-3xl text-black font-semibold ml-1">2499</span>
      </div>
    </div>
  </div>
</div>

{/* Shop by Brands */}
<h1 className="text-center text-lg sm:text-xl font-medium tracking-widest my-6 hover:text-black hover:underline transition duration-300">
  SHOP BY BRANDS
</h1>

{/* Top Collab */}
<h1 className="text-center text-lg sm:text-xl font-medium tracking-widest my-6 hover:text-black hover:underline transition duration-300">
  TOP COLLAB
</h1>

{/* For Him and Her */}
<div className="relative w-[95%] mx-auto mt-10">
  <img
    src="https://pictures.kartmax.in/live/original/0x0/sites/aPfvUDpPwMn1ZadNKhP7/theme/0092may(1)-e75baea8-13b0-4aa2-beae-abb89c8f7931.jpg"
    alt="for him and her"
    className="w-full rounded-md"
  />
  <div className="absolute bottom-2 left-1/2  -translate-x-1/2 flex gap-4">
    <button className="bg-[#A3A3A3] px-2 py-1 lg:px-4 lg:py-2 rounded text-black font-medium">HIM</button>
    <button className="bg-[#A3A3A3] px-2 py-1 lg:px-4 lg:py-2 rounded text-black font-medium">HER</button>
  </div>
</div>

        </HomeLayout>
    )
}

export default HomePage;