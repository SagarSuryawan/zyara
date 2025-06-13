
  import collabbrand from "../constant/collabbrand.js"
  import Slider from "react-slick";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";

  
  function CardCarousal() {

    const settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 3,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    arrows: false,

    responsive: [
      {
        breakpoint: 1024, // screens < 1024px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // screens < 640px (mobile)
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

    return (
        <div className = "w-[95%] m-auto">
            <div>
                <Slider {...settings}>
                {
                    collabbrand.map((d)=>(
                        <div key= {d.id} className=" flex justify-center items-center justify-evenly">
                        <img src={d.img} alt="" className="w-[] h-[450px] rounded-md m-auto"/>
                        </div>
                    ))
                }
                </Slider>
            </div>
        </div>
    )
  }

  export default CardCarousal;