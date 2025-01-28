// 'use client';
// import React, { useState } from "react";
// // internal
// import SingleProduct from "./single-product";
// import ErrorMessage from "@components/error-message/error";
// import ProductLoader from "@components/loader/product-loader";
// import { useGetShowingProductsQuery } from "src/redux/features/productApi";
// // internal

// // tab items
// const tabs = ["top-rated", "best-selling", "latest-product"];

// const ShopProducts = () => {
//   const { data: products, isError, isLoading } = useGetShowingProductsQuery();
//   const [activeTab, setActiveTab] = useState("top-rated");
//   // handle tab product
//   const handleTabProduct = (value) => {
//     setActiveTab(value);
//   };

//   // decide what to render
//   let content = null;

//   if (isLoading) {
//     content = (
//       <ProductLoader loading={isLoading} />
//     );
//   }

//   if (!isLoading && isError) {
//     content = <ErrorMessage message="There was an error" />;
//   }

//   if (!isLoading && !isError && products?.products?.length === 0) {
//     content = <ErrorMessage message="No products found!" />;
//   }

//   if (!isLoading && !isError && products?.products?.length > 0) {
//     const prd_items = products.products;
//     const show_prd = prd_items.filter((item) => item.itemInfo === activeTab);
//     content = show_prd.map((product) => (
//       <div key={product._id} className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
//         <SingleProduct product={product} />
//       </div>
//     ));
//   }
//   return (
//     <>
//       <section className={`product__popular-area pb-20`}>
//         <div className="container">
//           <div className="row align-items-end">
//             <div className="col-xl-6 col-lg-6 col-md-6">
//               <div className="section__title-wrapper-13 mb-35">
//                 <h3 className="section__title-13">Popular Products</h3>
//               </div>
//             </div>
//             <div className="col-xl-6 col-lg-6 col-md-6">
//               <div className="product__tab tp-tab  mb-35">
//                 <ul
//                   className="nav nav-tabs justify-content-md-end"
//                   id="productTab"
//                 >
//                   {tabs.map((tab, i) => (
//                     <li
//                       key={i}
//                       className="nav-item"
//                       onClick={() => handleTabProduct(tab)}
//                     >
//                       <button
//                         className={`nav-link text-capitalize ${
//                           activeTab === tab ? "active" : ""
//                         }`}
//                         id="top-tab"
//                         type="button"
//                       >
//                         {tab.split("-").join(" ")}
//                       </button>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             </div>
//           </div>

//           <div className="product__tab-wrapper">
//             <div className="row">{content}</div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default ShopProducts;
"use client";
import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      title: "Customer Focused",
      description:
        "Skilled professionals tailor customized plans to suit the needs and requirements of your home.",
    },
    {
      title: "Transparency",
      description:
        "From the very first call to getting your certificates, our work would be like an open book to you.",
    },
    {
      title: "Flexible Scheduling",
      description:
        "We value your time. Call us and book an appointment at your ease.",
    },
    {
      title: "Market Knowledge",
      description:
        "Our experts possess comprehensive knowledge of the work and the VEU Program Policies.",
    },
    {
      title: "Reliability",
      description:
        "Trust us when we say, 'No Worries'. Our team of experts works securely, patiently, and strives to deliver the very best for you.",
    },
    {
      title: "Integrity",
      description:
        "We take pride in our work ethics, with transparency being our core policy.",
    },
  ];

  return (
    <section className="why-choose-us">
      <h2 className="section-title">Why Choose Us</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="icon-wrapper">
              <span className="check-icon">✔</span>
            </div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
      <style jsx>{`
        .why-choose-us {
          padding: 60px 20px;
          background: var(--tp-grey-17);
          text-align: center;
        }

        .section-title {
          font-size: 36px;
          font-weight: 700;
          color: #0d294f;
          margin-bottom: 40px;
          position: relative;
        }

        .section-title::after {
          content: "";
          width: 80px;
          height: 4px;
          background: #007bff;
          display: block;
          margin: 10px auto 0;
          border-radius: 2px;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-gap: 30px;
          row-gap: 40px;
        }

        .feature-card {
          background:var(--tp-grey-17);
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          padding: 20px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .icon-wrapper {
          background: #28a745;
          color: white;
          width: 50px;
          height: 50px;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          font-size: 24px;
          margin: 0 auto 20px;
          animation: pulse 1.5s infinite;
        }

        .feature-title {
          font-size: 20px;
          font-weight: 600;
          color: #0d294f;
          margin-bottom: 10px;
        }

        .feature-description {
          font-size: 16px;
          color: #555555;
          line-height: 1.5;
        }

        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }

        @media (max-width: 768px) {
          .section-title {
            font-size: 28px;
          }

          .features-grid {
            grid-template-columns: repeat(1, 1fr);
          }

          .feature-title {
            font-size: 18px;
          }

          .feature-description {
            font-size: 14px;
          }
        }

        @media (min-width: 769px) and (max-width: 1024px) {
          .features-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

export default WhyChooseUs;
