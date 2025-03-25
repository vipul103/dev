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
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function GridPage() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`container ${isVisible ? "fade-in" : ""}`}>
      <div className="header">
        <span className="small-title">VEU Program</span>
        <h2>What is the VEU Program?</h2>
        <p>
          This <strong>Victorian Government</strong> program helps businesses and households{" "}
          <strong>cut power bills</strong> and <strong>reduce greenhouse gas emissions.</strong> 
          It provides access to discounted <span className="highlight">energy-efficient</span> 
          products and <span className="highlight">services.</span>
        </p>
        <p>
          The program works by setting a <strong>state-wide</strong> target for{" "}
          <span className="highlight">energy savings</span> that result in a range of 
          energy-efficient products and services being made available to 
          <strong> homes</strong> and <strong>businesses</strong> at a discount.
        </p>
      </div>

      <div className="cards">
        {[
          { step: "01", title: "Register Interest", desc: "Submit Your Details For Eligibility" },
          { step: "02", title: "Book Installation", desc: "Our qualified experts will reach out" },
          { step: "03", title: "Enjoy The Savings", desc: "See the savings & energy efficiency!" }
        ].map((item, index) => (
          <div key={index} className="card">
            <span className="step-number">{item.step}</span>
            <span className="step-text">| step</span>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <Link href="/contact">
              <div className="arrow-button">
                <FaArrowRight />
              </div>
            </Link>
          </div>
        ))}
      </div>

      <div className="our-services">
        <h2>Our Services</h2>
      </div>

      <style jsx>{`
        .container {
          text-align: center;
          padding: 50px 20px;
          background: linear-gradient(to bottom, #e8f5e9, #ffffff);
        }
        
        .fade-in {
          opacity: 1;
          transition: opacity 1s ease-in-out;
        }

        .header {
          max-width: 800px;
          margin: 0 auto 40px;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 1s forwards;
        }

        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .small-title {
          color: #8cc63f;
          font-weight: bold;
          text-transform: uppercase;
          font-size: 14px;
        }

        h2 {
          font-size: 30px;
          font-weight: 800;
          margin: 10px 0;
          color: #333;
        }

        p {
          font-size: 16px;
          color: #555;
          line-height: 1.6;
        }

        .highlight {
          color: #00a5e0;
          font-weight: bold;
        }

        .cards {
          display: flex;
          justify-content: center;
          gap: 20px;
          flex-wrap: wrap;
          margin-top: 20px;
        }

        .card {
          background: white;
          padding: 30px;
          border-radius: 12px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          width: 300px;
          position: relative;
          text-align: left;
          transform: scale(0.9);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          opacity: 0;
          animation: fadeInUp 1s forwards;
        }

        .card:hover {
          transform: scale(1);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);
        }

        .step-number {
          position: absolute;
          top: 10px;
          right: 20px;
          font-size: 50px;
          font-weight: 800;
          color: rgba(0, 0, 0, 0.05);
        }

        .step-text {
          color: #8cc63f;
          font-weight: bold;
          text-transform: uppercase;
          font-size: 12px;
        }

        h3 {
          font-size: 18px;
          font-weight: bold;
          margin: 10px 0;
        }

        .arrow-button {
          width: 50px;
          height: 50px;
          background: #008bd3;
          color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          position: absolute;
          bottom: -25px;
          left: 50%;
          transform: translateX(-50%);
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .arrow-button:hover {
          background: #005f8a;
          transform: scale(1.1);
        }

        .our-services {
          width: 100%;
          text-align: center;
          margin-top: 50px;
          padding: 30px 0;
        }

        .our-services h2 {
          font-size: 28px;
          font-weight: bold;
          color: #333;
        }

        @media (max-width: 768px) {
          .cards {
            flex-direction: column;
            align-items: center;
          }
        }
      `}</style>
    </div>
  );
}
