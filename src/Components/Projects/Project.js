import React from "react";
import "./Project.css";
import Project1 from "../../img/portfolio1.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

function Project() {
  return (
    <div
      id="projects"
      className="project-main"
    >
      <div className="project-header">Portfolio</div>
      <div className="project-sh">Most Recent work</div>
      <div className="project-info">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="swiper-main">
              <div className="swiper-image">
                <img
                  className="swiper-img"
                  alt=""
                  src={Project1}
                />
              </div>
              <div className="swiper-info">
                <div className="swiper-head">Cloth Store</div>
                <div className="swiper-desc">
                  Responsive Clothing Landing Page Using HTML CSS & JavaScript
                </div>
                <a
                  target="__blank"
                  href="https://shop-html-yashmyeole.vercel.app/"
                >
                  <button className="swiper-demo">Demo</button>
                </a>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-main">
              <div className="swiper-image">
                <img
                  className="swiper-img"
                  alt=""
                  src={Project1}
                />
              </div>
              <div className="swiper-info">
                <div className="swiper-head">E-Commerce MERN</div>
                <div className="swiper-desc">
                  Full Stack E-commerce clone build using React, Node, MongoDb
                </div>
                <button className="swiper-demo">Demo</button>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="swiper-main">
              <div className="swiper-image">
                <img
                  className="swiper-img"
                  alt=""
                  src={Project1}
                />
              </div>
              <div className="swiper-info">
                <div className="swiper-head">Covid-19 Tracker</div>
                <div className="swiper-desc">
                  Fetched and displayed covid-19 cases around the globe.
                </div>
                <button className="swiper-demo">Demo</button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}

export default Project;
