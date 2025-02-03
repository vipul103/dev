"use client";
import React, { useRef } from "react";
// internal
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import HeroBanner from "@components/hero-banner";
import ShopCategoryArea from "@components/shop-category/shop-category";
import ShopProducts from "@components/products";
import OfferPopularProduct from "@components/offer-product";
import ShopBanner from "@components/shop-banner";
import ShopFeature from "@components/shop-feature";
import ShopCta from "@components/cta";
import Footer from "@layout/footer";
import Brands from "@components/brands";



const HomeShop = () => {
  const offerProductRef = useRef(null);

  const handleScrollToOffer = () => {
    if (offerProductRef.current) {
      offerProductRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  return (
    <Wrapper>
      <Header />
      <HeroBanner  onButtonClick={handleScrollToOffer}/>
      <ShopProducts />
      <OfferPopularProduct  ref={offerProductRef}/>
      {/* <ShopFeature /> */}
      <ShopCta />
      <Brands />
      <ShopBanner />
      <Footer />
    </Wrapper>
  );
};

export default HomeShop;
