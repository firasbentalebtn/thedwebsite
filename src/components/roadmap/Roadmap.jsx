import React from "react";
import "./roadmap.css";
import AVTR1 from "../../assets/logo/logo.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const data = [
  {
    id: 1,
    icon: AVTR1,
    Name: "Whitepaper issued.",
  },
  {
    id: 2,
    icon: AVTR1,
    Name: "pre-seed sale to fund major research.",
  },
  {
    id: 3,
    icon: AVTR1,
    Name: "$THED token issued.",
  },
  {
    id: 4,
    icon: AVTR1,
    Name: "A Seed sale to fund the development phase.",
  },
  {
    id: 5,
    icon: AVTR1,
    Name: "Game Website & NFT launch.",
  },
  {
    id: 6,
    icon: AVTR1,
    Name: "Beta version of the game",
  },
  {
    id: 7,
    icon: AVTR1,
    Name: "Series A Sale",
  },
  {
    id: 8,
    icon: AVTR1,
    Name: "Dungeon mode, Story mode & NFT heroes & gear. ",
  },
  {
    id: 9,
    icon: AVTR1,
    Name: "Private Ico Sale",
  },
  {
    id: 10,
    icon: AVTR1,
    Name: "NFT marketplace & Game trailer.",
  },
  {
    id: 11,
    icon: AVTR1,
    Name: "Listing On PancakeSwap and other exchanges",
  },
];
const Roadmap = () => {
  return (
    <section id="roadmap">
      <h5>
        This is the roadmap of all the project goals leading to the official
        launch
      </h5>
      <h2>Our Roadmap</h2>
      <Swiper
        className="container roadmap__container mySwiper"
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{
          type: "bullets",
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={30}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {data.map(({ id, icon, Name, description }) => {
          return (
            <SwiperSlide key={id} className="roadmap">
              <div className="roadmap__avatar">
                <img src={icon} alt="" />
              </div>
              <h5 className="roadmap__title">{Name}</h5>
              <small className="client__review">{description}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Roadmap;
