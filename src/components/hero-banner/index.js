// 'use client';
// import React, { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { EffectFade } from "swiper";
// // internal
// import slider_img_0 from "@assets/img/slider/13/slider-0.png";
// import slider_img_1 from "@assets/img/slider/13/slider-1.png";
// import slider_img_2 from "@assets/img/slider/13/slider-1.png";
// import slider_img_3 from "@assets/img/slider/13/slider-1.png";
// import slider_img_4 from "@assets/img/slider/13/slider-4.png";
// import slider_img_5 from "@assets/img/slider/13/slider-5.png";
// import { RightArrow } from "@svg/index";

// const slider_data = [
//   {
//     id: 1,
//     pre_title: (
//       <>
//         Conserve <br /> Energy
//       </>
//     ),
//     title: (
//       <>
//         Find Best <br /> Matley Sound.
//       </>
//     ),
//     img: slider_img_1,
//   },
//   {
//     id: 2,
//     pre_title: (
//       <>
//         Conserve <br /> Energy
//       </>
//     ),
//     title: (
//       <>
//         Find your <br /> Beats Studio.
//       </>
//     ),
//     img: slider_img_2,
//   },
//   {
//     id: 3,
//     pre_title: (
//       <>
//         Conserve <br /> Energy
//       </>
//     ),
//     title: (
//       <>
//         WE CAN SAVE <br />AU
//       </>
//     ),
//     img: slider_img_5,
//   },
// ];

// const HeroBanner = () => {
//   const [loop,setLoop] = useState(false);
//   useEffect(() => setLoop(true),[]);
//   return (
//     <>
//       <section className="slider__area">
//         <Swiper
//           className="slider__active slider__active-13 swiper-container"
//           slidesPerView={1}
//           spaceBetween={0}
//           effect="fade"
//           loop={loop}
//           modules={[EffectFade]}
//         >
//           {slider_data.map((item) => (
//             <SwiperSlide
//               key={item.id}
//               className="slider__item-13 slider__height-13 grey-bg-17 d-flex align-items-end"
//             >
//               <div className="container">
//                 <div className="row align-self-end">
//                   <div className="col-xl-6 col-lg-6">
//                     <div className="slider__content-13">
//                       <span className="slider__title-pre-13">
//                         {item.pre_title}
//                       </span>
//                       <h3 className="slider__title-13">{item.title}</h3>

//                       <div className="slider__btn-13 ">
//                         <Link href="/shop" className="tp-btn-border">
//                           Shop Now
//                           <span>
//                             <RightArrow />
//                           </span>
//                         </Link>
//                       </div>
//                     </div>
//                   </div>
//                   <div className="col-xl-6 col-lg-6">
//                     <div className="slider__thumb-13 text-end mr-40">
//                       <span className="slider__thumb-13-circle-1"></span>
//                       <span className="slider__thumb-13-circle-2"></span>
//                       <Image
//                         src={item.img}
//                         alt="slider img"
//                         priority
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </section>
//     </>
//   );
// };

// export default HeroBanner;
"use client";
import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
// internal
import slider_img_5 from "@assets/img/slider/13/slider-6.png";
import { RightArrow } from "@svg/index";

const slider_data = [
  {
    id: 1,
    pre_title: <>Conserve Energy</>,
    title: <>WE CAN SAVE</>,
    img: slider_img_5,
  },
];

const HeroBanner = ({ onButtonClick }) => {  // Add onButtonClick prop
  const [loop, setLoop] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    setLoop(true);
  
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.setAttribute("muted", "");
      videoRef.current.setAttribute("playsinline", "");
      videoRef.current.setAttribute("webkit-playsinline", "");
      videoRef.current.play().catch(() => console.warn("Safari blocked autoplay"));
  
      const handleTimeUpdate = () => {
        if (videoRef.current && videoRef.current.currentTime >= videoRef.current.duration - 0.2) {
          videoRef.current.currentTime = 0.1;
          videoRef.current.play();
        }
      };
  
      videoRef.current.addEventListener("timeupdate", handleTimeUpdate);
  
      return () => {
        if (videoRef.current) {
          videoRef.current.removeEventListener("timeupdate", handleTimeUpdate);
        }
      };
    }
  }, []);
  

  return (
    <section className="slider__area">
      {/* ... (keep all your existing styles) ... */}

      <Swiper
        className="slider__active slider__active-13 swiper-container"
        slidesPerView={1}
        spaceBetween={0}
        effect="fade"
        loop={loop}
        modules={[EffectFade]}
      >
        {slider_data.map((item) => (
          <SwiperSlide
            key={item.id}
            className="slider__item-13 d-flex"
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100vh",
              overflow: "hidden",
            }}
          >
            {/* Background Video */}
            <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                zIndex: -1,
              }}
            >
              <source src="/videos/bgvideo.mp4" type="video/mp4" muted />
              Your browser does not support the video tag.
            </video>

            <div className="container text-center px-4">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="slider__content-13">
                    <span className="slider__title-pre-13">{item.pre_title}</span>
                    <h3 className="slider__title-13">{item.title}</h3>
                    <div className="slider__btn-13 mt-4">
                      {/* Replace Link with button */}
                      <button 
                        className="tp-btn-border"
                        onClick={onButtonClick}
                      >
                        Our Services
                        <span>
                          <RightArrow />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="slider__thumb-13 text-center position-relative">
                    {/* <span className="slider__thumb-13-circle-1"></span>
                    <span className="slider__thumb-13-circle-2"></span> */}
                    <div
                      style={{
                        position: "relative",
                        display: "inline-block",
                        animation: "spin 5s linear infinite",
                      }}
                    >
                      <Image
                        src={item.img}
                        alt="slider img"
                        priority
                        width={300}
                        height={300}
                        style={{
                          objectFit: "contain",
                          maxWidth: "100%",
                          height: "auto",
                        }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroBanner;