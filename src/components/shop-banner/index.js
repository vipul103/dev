// import Link from 'next/link';
// // internal
// import banner from '@assets/img/banner/banner-1.jpg';
// import { RightArrow } from '@svg/index';

// const ShopBanner = () => {
//   return (
//     <section className="banner__area">
//       <div className="container">
//         <div className="banner__inner include-bg" style={{backgroundImage:`url(${banner.src})`}}>
//           <div className="row">
//             <div className="col-xl-5 col-lg-6 col-md-8">
//               <div className="banner__content">
//                 <span>Apple iPhone 12 Pro</span>
//                 <h3 className="banner__title">
//                   <Link href="/shop">The wait is on: iphone 12 max pro</Link>
//                 </h3>
//                 <p>Last call for up to <span>32%</span> off! </p>

//                 <div className="banner__btn">
//                   <Link href="/shop" className="tp-btn">
//                     Buy Now
//                     <RightArrow/>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ShopBanner;
'use client';
// internal
import bg from "@assets/img/cta/13/cta-bg-1.jpg";
import Link from "next/link";

const ShopCta = () => {
  // handleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section
      className="cta__area pt-50 pb-50 p-relative include-bg jarallax"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <style jsx>{`
        .cta__area {
          padding: 50px 0;
          background-size: cover;
          background-position: center;
        }

        .cta__inner-13 {
          background: white;
          padding: 50px;
          border-radius: 10px;
          box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          max-width: 1200px;
          margin: auto;
        }

        .cta__title-13 {
          font-size: 2.2rem;
          font-weight: bold;
          color: #333;
          margin-bottom: 10px;
        }

        .cta__content-13 p {
          font-size: 1.3rem;
          color: #555;
          margin-bottom: 20px;
        }

        .cta__form-13 {
          text-align: center;
          margin-top: 20px;
        }

        .tp-btn {
          background-color: rgb(0, 0, 0);
          color: white;
          font-size: 1.4rem;
          padding: 14px 24px;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          transition: 0.3s ease-in-out;
        }

        .tp-btn:hover {
          background-color: rgb(30, 30, 30);
        }

        /* ✅ Responsive Design */

        /* Large screens (1440px to 4K & beyond) */
        @media (min-width: 1440px) {
          .cta__inner-13 {
            max-width: 1400px;
            padding: 60px;
          }
          
          .cta__title-13 {
            font-size: 2.5rem;
          }

          .cta__content-13 p {
            font-size: 1.5rem;
          }

          .tp-btn {
            font-size: 1.5rem;
            padding: 16px 30px;
          }
        }

        /* Tablet screens */
        @media (max-width: 1024px) {
          .cta__inner-13 {
            padding: 40px;
          }

          .cta__title-13 {
            font-size: 2rem;
          }

          .cta__content-13 p {
            font-size: 1.2rem;
          }

          .tp-btn {
            font-size: 1.3rem;
            padding: 12px 22px;
          }
        }

        /* Mobile screens */
        @media (max-width: 768px) {
          .cta__inner-13 {
            padding: 30px;
            text-align: center;
          }

          .cta__title-13 {
            font-size: 1.8rem;
          }

          .cta__content-13 p {
            font-size: 1rem;
          }

          .cta__form-13 {
            margin-top: 15px;
          }

          .tp-btn {
            font-size: 1.2rem;
            padding: 10px 18px;
            width: 100%; /* Full width on small screens */
          }
        }

        /* Small Mobile screens */
        @media (max-width: 480px) {
          .cta__title-13 {
            font-size: 1.6rem;
          }

          .cta__content-13 p {
            font-size: 1rem;
          }
        }
      `}</style>

      <div className="container">
        <div className="cta__inner-13">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="cta__content-13">
                <h3 className="cta__title-13">
                  Enquire & See Your Eligibility <br />
                </h3>
                <p>
                  We Can Save is a leading provider in VIC & NSW, offering energy-efficient solutions.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12">
              <div className="cta__form-13">
                <form onSubmit={handleSubmit}>
                  <div className="cta__input-13">
                    <Link href="/contact">
                      <button type="button" className="tp-btn">
                        Get in touch
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopCta;
