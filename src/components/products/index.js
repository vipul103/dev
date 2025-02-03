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
import React, { useState, useEffect } from 'react';

const Achievements = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isSmallMobile, setIsSmallMobile] = useState(window.innerWidth <= 480);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsSmallMobile(window.innerWidth <= 480);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const styles = {
    fullWidthContainer: {
      width: '100%',
      backgroundColor: '#f8fafc',
      padding: isSmallMobile ? '40px 0' : '80px 0', // Adjusted padding for mobile
    },
    contentContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: isSmallMobile ? '0 10px' : '0 20px', // Adjusted padding for mobile
    },
    header: {
      textAlign: 'center',
      marginBottom: isSmallMobile ? '30px' : '60px', // Adjusted margin for mobile
    },
    headerH1: {
      fontSize: isSmallMobile ? '1.8rem' : isMobile ? '2rem' : '2.8rem',
      color: '#1e293b',
      margin: '0 0 15px 0',
      fontWeight: '700',
    },
    headerUnderline: {
      width: '80px',
      height: '4px',
      backgroundColor: '#007bff',
      margin: '0 auto',
      borderRadius: '2px',
    },
    statsContainer: {
      display: 'grid',
      gridTemplateColumns: isSmallMobile ? '1fr' : isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
      gap: isSmallMobile ? '20px' : '30px', // Adjusted gap for mobile
      marginBottom: isSmallMobile ? '40px' : '80px', // Adjusted margin for mobile
    },
    statCard: {
      padding: isSmallMobile ? '20px' : '30px', // Adjusted padding for mobile
      borderRadius: '15px',
      backgroundColor: 'white',
      border: '2px solid #007bff',
      position: 'relative',
      overflow: 'hidden',
      transition: 'transform 0.3s ease',
      ':hover': {
        transform: 'translateY(-5px)',
      },
    },
    statNumberWrapper: {
      position: 'relative',
      marginBottom: '20px',
    },
    statNumber: {
      fontSize: isMobile ? '2.5rem' : '3rem',
      color: '#007bff',
      margin: '0',
      fontWeight: '700',
      position: 'relative',
      zIndex: 1,
    },
    statCircle: {
      position: 'absolute',
      width: '80px',
      height: '80px',
      backgroundColor: '#007bff20',
      borderRadius: '50%',
      top: '-20px',
      left: '-20px',
    },
    statTitle: {
      fontSize: isMobile ? '1rem' : '1.1rem',
      color: '#1e293b',
      fontWeight: '600',
      margin: '0 0 12px 0',
      textTransform: 'uppercase',
    },
    statDescription: {
      fontSize: isMobile ? '0.9rem' : '1rem',
      color: '#64748b',
      lineHeight: '1.6',
    },
    testimonialsContainer: {
      display: 'grid',
      gridTemplateColumns: isSmallMobile ? '1fr' : isMobile ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)',
      gap: isSmallMobile ? '20px' : '30px', // Adjusted gap for mobile
    },
    testimonialCard: {
      padding: isSmallMobile ? '20px' : isMobile ? '30px' : '40px', // Adjusted padding for mobile
      backgroundColor: 'white',
      borderRadius: '15px',
      position: 'relative',
      boxShadow: '0 10px 20px rgba(0,0,0,0.05)',
      minHeight: isSmallMobile ? 'auto' : isMobile ? '250px' : '300px', // Adjusted height for mobile
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
    },
    quoteMark: {
      fontSize: isMobile ? '3rem' : '4rem',
      color: '#007bff',
      lineHeight: '0.8',
      marginBottom: '20px',
      opacity: '0.3',
    },
    testimonialText: {
      fontSize: isMobile ? '1rem' : '1.1rem',
      color: '#475569',
      lineHeight: '1.7',
      marginBottom: '25px',
    },
    authorContainer: {
      display: 'flex',
      alignItems: 'center',
      gap: '15px',
    },
    authorIcon: {
      width: isMobile ? '40px' : '50px',
      height: isMobile ? '40px' : '50px',
      borderRadius: '50%',
      backgroundColor: '#007bff',
      color: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: '600',
    },
    authorName: {
      fontSize: isMobile ? '0.9rem' : '1rem',
      color: '#1e293b',
      fontWeight: '600',
      margin: '0',
    },
    authorLocation: {
      fontSize: isMobile ? '0.8rem' : '0.9rem',
      color: '#64748b',
      margin: '0',
    },
  };

  return (
    <div style={styles.fullWidthContainer}>
      <div style={styles.contentContainer}>
        <div style={styles.header}>
          <h1 style={styles.headerH1}>OUR ACHIEVEMENTS</h1>
          <div style={styles.headerUnderline}></div>
        </div>
        
        {/* Statistics Section */}
        <div style={styles.statsContainer}>
          <div style={styles.statCard}>
            <div style={styles.statNumberWrapper}>
              <h2 style={styles.statNumber}>2070</h2>
              <div style={styles.statCircle}></div>
            </div>
            <p style={styles.statTitle}>INSTALLATIONS</p>
            <p style={styles.statDescription}>Transforming homes with efficient energy systems</p>
          </div>
          
          <div style={styles.statCard}>
            <div style={styles.statNumberWrapper}>
              <h2 style={styles.statNumber}>1189</h2>
              <div style={styles.statCircle}></div>
            </div>
            <p style={styles.statTitle}>UPGRADED HOMES</p>
            <p style={styles.statDescription}>Modern solutions for energy-efficient living</p>
          </div>
          
          <div style={{...styles.statCard, borderColor: '#00b4d8'}}>
            <div style={styles.statNumberWrapper}>
              <h2 style={{...styles.statNumber, color: '#00b4d8'}}>21+</h2>
              <div style={{...styles.statCircle, backgroundColor: '#00b4d840'}}></div>
            </div>
            <p style={styles.statTitle}>YEARS EXPERIENCE</p>
            <p style={styles.statDescription}>Trusted industry expertise since 2002</p>
          </div>
        </div>

        {/* Testimonials Section */}
        <div style={styles.testimonialsContainer}>
          <div style={styles.testimonialCard}>
            <div style={styles.quoteMark}>“</div>
            <p style={styles.testimonialText}>We Can Save helped me understand what to install in my house and get me a big rebate!</p>
            <div style={styles.authorContainer}>
              <div style={styles.authorIcon}>AY</div>
              <div>
                <p style={styles.authorName}>Alice Young</p>
                <p style={styles.authorLocation}>NSW Resident</p>
              </div>
            </div>
          </div>
          
          <div style={styles.testimonialCard}>
            <div style={styles.quoteMark}>“</div>
            <p style={styles.testimonialText}>Now I have a great air conditioner and a smaller energy bill, simply amazing.</p>
            <div style={styles.authorContainer}>
              <div style={styles.authorIcon}>AY</div>
              <div>
                <p style={styles.authorName}>Alice Young</p>
                <p style={styles.authorLocation}>VIC Resident</p>
              </div>
            </div>
          </div>
          
          <div style={styles.testimonialCard}>
            <div style={styles.quoteMark}>“</div>
            <p style={styles.testimonialText}>They taught me innovative ways to generate hot water while saving energy.</p>
            <div style={styles.authorContainer}>
              <div style={{...styles.authorIcon, backgroundColor: '#00b4d8'}}>LD</div>
              <div>
                <p style={styles.authorName}>Lisa Driver</p>
                <p style={styles.authorLocation}>Sydney Homeowner</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievements;