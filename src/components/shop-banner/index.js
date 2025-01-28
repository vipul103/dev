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

const ShopCta = () => {
  // handleSubmit
  const handleSubmit = e => {
    e.preventDefault();
  }
  return (
    <section
      className="cta__area pt-50 pb-50 p-relative include-bg jarallax"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      <div className="container">
        <div className="cta__inner-13 white-bg">
          <div className="row align-items-center">
            <div className="col-xl-6 col-lg-6">
              <div className="cta__content-13">
                <h3 className="cta__title-13">
                Enquire & See Your Eligibility <br />
                </h3>
                <p>
                We can save is a leading provider in VIC & NSW in providing energy-efficient solutions.
                </p>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6">
              <div className="cta__form-13">
                <form onSubmit={handleSubmit}>
                  <div className="cta__input-13"style={{ top: "-45px", position: "relative" }}>
                    <button type="submit" className="tp-btn">
                      Get in touch
                    </button>
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