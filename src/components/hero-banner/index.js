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
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade } from "swiper";
// internal
import slider_img_5 from "@assets/img/slider/13/slider-6.png";
import { RightArrow } from "@svg/index";
import solarbg from "@assets/img/banner/solarbg.png";

const slider_data = [
  {
    id: 3,
    pre_title: (
      <>
        Conserve  Energy
      </>
    ),
    title: (
      <>
        WE CAN SAVE
      </>
    ),
    img: slider_img_5,
  },
];

const HeroBanner = () => {
  const [loop, setLoop] = useState(false);
  useEffect(() => setLoop(true), []);

  return (
    <section className="slider__area">
      <style jsx>{`
        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .slider__thumb-13-circle-1,
        .slider__thumb-13-circle-2 {
          position: absolute;
          right: 4%;
          top: -21%
        }

        .slider__title-pre-13 {
          font-size: 2rem; /* Default for larger screens */
          line-height: 1.2;
        }

        .slider__title-13 {
          font-size: 3rem; /* Default for larger screens */
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .slider__item-13 {
            padding: 20px;
          }

          .slider__title-pre-13 {
            font-size: 1.5rem; /* Reduce font size for tablets */
          }

          .slider__title-13 {
            font-size: 2rem; /* Reduce font size for tablets */
          }

          .slider__thumb-13 {
            margin-top: 20px;
          }

          .slider__thumb-13-circle-1 {
            top: -10px; /* Adjust circle position for mobile */
            right: 10%; /* Adjust position */
          }

          .slider__thumb-13-circle-2 {
            bottom: -10px; /* Adjust circle position for mobile */
            right: 8%;
          }
        }

        @media (max-width: 480px) {
          .slider__title-pre-13 {
            font-size: 1.2rem; /* Further reduce font size for mobile */
          }

          .slider__title-13 {
            font-size: 1.8rem; /* Further reduce font size for mobile */
          }

          .slider__thumb-13 img {
            width: 180px;
            height: 180px;
          }
        }
      `}</style>

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
              backgroundImage: `url(${solarbg.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              minHeight: "100vh", // Full height for the viewport
            }}
          >
            <div className="container text-center px-4">
              <div className="row align-items-center">
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="slider__content-13">
                    <span className="slider__title-pre-13">{item.pre_title}</span>
                    <h3 className="slider__title-13">{item.title}</h3>
                    <div className="slider__btn-13 mt-4">
                      <Link href="/offer-product" className="tp-btn-border">
                        Our Services
                        <span>
                          <RightArrow />
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-12">
                  <div className="slider__thumb-13 text-center position-relative">
                    <span className="slider__thumb-13-circle-1"></span>
                    <span className="slider__thumb-13-circle-2"></span>
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