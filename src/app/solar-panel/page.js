// import Footer from "@layout/footer";
// import Header from "@layout/header";
// import Wrapper from "@layout/wrapper";
// import Image from "next/image";
// import imgHotWaterSystem from "@assets/img/photos/Heat_Pump1.jpg";

// export const metadata = {
//   title: "solar panel",
// };

// export default function solarpanel() {
//   return (
//     <Wrapper>
//       <Header style_2={true} />
//     <div className="bg-gray-50 py-12">
//             <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
//               {/* Text Section */}
//               <div className="lg:w-1/2 mb-12 lg:mb-0 text-center lg:text-left">
//                 <h1 className="text-4xl font-bold text-gray-800 leading-tight mb-4">
//                   SOLAR <span className="text-teal-500">PANEL</span>
//                 </h1>
//                 <p className="text-gray-600 text-lg mb-6">
//                   ECOGENICA innovative hot water systems save energy and money.
//                   Contact us today and transform the way you live.
//                 </p>
//                 <button className="tp-btn">
//                   CONTACT US
//                 </button>
//               </div>
    
//               {/* Image Section */}
//               <div className="lg:w-1/2 flex justify-center">
//                 <Image
//                   src={imgHotWaterSystem}
//                   alt="Hot Water System"
//                   width={400}
//                   height={400}
//                   className="object-contain"
//                 />
//               </div>
//             </div>
    
//             {/* Features Section */}
//             <div className="container mx-auto px-6 py-12">
//               <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//                 {/* Feature 1 */}
//                 <div>
//                   <h2 className="text-6xl font-bold text-gray-800 mb-4">01</h2>
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                   Significant Cost Savings
//                   </h3>
//                   <p className="text-gray-600">
//                   The Victorian Energy Upgrade Program offers generous rebates that reduce the upfront cost of installing solar panels, making clean energy more affordable.
//                    You'll start saving on your energy bills from day one, with long-term financial benefits as your solar system pays for itself over time.
//                   </p>
//                 </div>
    
//                 {/* Feature 2 */}
//                 <div>
//                   <h2 className="text-6xl font-bold text-gray-800 mb-4">02</h2>
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                   Environmental Impact
//                   </h3>
//                   <p className="text-gray-600">
//                   Solar panels allow you to harness renewable energy, reducing your reliance on fossil fuels and lowering your carbon footprint.
//                    By participating in the program, you contribute to a greener future for Victoria by promoting sustainable energy use.
//                   </p>
//                 </div>
    
//                 {/* Feature 3 */}
//                 <div>
//                   <h2 className="text-6xl font-bold text-gray-800 mb-4">03</h2>
//                   <h3 className="text-xl font-semibold text-gray-800 mb-2">
//                   Increased Home Value
//                   </h3>
//                   <p className="text-gray-600">
//                   Installing solar panels can boost your property’s value, making it a smart investment.
//                    Homes with solar power are attractive to buyers who are looking for energy-efficient and environmentally friendly options, ensuring your property stands out in the market.
//                   In short, the Victorian Energy Upgrade Program makes going solar a financially wise and environmentally responsible choice, turning your home into a powerhouse of savings and sustainability.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//       <Footer />
//     </Wrapper>
//   );
// }
"use client"; // Mark this file as a Client Component

import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import Image from "next/image";
import Link from "next/link";
import imgHotWaterSystem from "@assets/img/photos/Heat_Pump1.jpg";

export default function solarpanel() {
  return (
    <Wrapper>
      <Header style_2={true} />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <h1 className="hero-title">
            Revolutionize Your Home <br />
            <span className="highlight">Solar Panel</span>
          </h1>
          <p className="hero-description">
          ECOGENICA innovative hot water systems save energy and money.
           Contact us today and transform the way you live.s.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <div className="flip-card-container">
            {/* Left Image */}
            <Link href="/ac">
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Image
                    src={imgHotWaterSystem}
                    alt="Energy-Efficient System"
                    width={300}
                    height={300}
                    className="image"
                  />
                </div>
                
                <div className="flip-card-back">
                  <h3 className="back-title">Significant Cost Savings</h3>
                  <p className="back-description">
                  The Victorian Energy Upgrade Program offers generous rebates that reduce the upfront cost of installing solar panels, making clean energy more affordable.
                   You'll start saving on your energy bills from day one, with long-term financial benefits as your solar system pays for itself over time.
                  </p>
                </div>
              </div>
            </div>
            </Link>

            {/* Center Image */}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Image
                    src={imgHotWaterSystem}
                    alt="Hot Water System"
                    width={400}
                    height={400}
                    className="image"
                  />
                </div>
                <div className="flip-card-back">
                  <h3 className="back-title">Environmental Impact</h3>
                  <p className="back-description">
                  Solar panels allow you to harness renewable energy, reducing your reliance on fossil fuels and lowering your carbon footprint.
                   By participating in the program, you contribute to a greener future for Victoria by promoting sustainable energy use.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Image
                    src={imgHotWaterSystem}
                    alt="Eco-Friendly System"
                    width={300}
                    height={300}
                    className="image"
                  />
                </div>
                <div className="flip-card-back">
                  <h3 className="back-title">Increased Home Value</h3>
                  <p className="back-description">
                  Installing solar panels can boost your property’s value, making it a smart investment.
                   Homes with solar power are attractive to buyers who are looking for energy-efficient and environmentally friendly options,
                    ensuring your property stands out in the market. In short, the Victorian Energy Upgrade Program makes going solar a financially wise and environmentally responsible choice,
                     turning your home into a powerhouse of savings and sustainability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h2 className="section-title">Why Choose Us?</h2>
          <div className="cards-container">
            <div className="glass-card">
              <h3 className="card-title">Solar Panel</h3>
              <p className="card-description">
              The Victorian Energy Upgrade Program offers generous rebates that reduce the upfront cost of installing solar panels, making clean energy more affordable.
              You'll start saving on your energy bills from day one, with long-term financial benefits as your solar system pays for itself over time.
              </p>
            </div>

            <div className="glass-card">
              <h3 className="card-title">Significant Cost Savings</h3>
              <p className="card-description">
              Solar panels allow you to harness renewable energy, reducing your reliance on fossil fuels and lowering your carbon footprint.
              By participating in the program, you contribute to a greener future for Victoria by promoting sustainable energy use.
              </p>
            </div>

            <div className="glass-card">
              <h3 className="card-title">Increased Home Value</h3>
              <p className="card-description">
              Installing solar panels can boost your property’s value, making it a smart investment.
                   Homes with solar power are attractive to buyers who are looking for energy-efficient and environmentally friendly options,
                    ensuring your property stands out in the market. In short, the Victorian Energy Upgrade Program makes going solar a financially wise and environmentally responsible choice,
                     turning your home into a powerhouse of savings and sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Scoped CSS */}
      <style jsx>{`
        .hero-section {
          background: linear-gradient(to bottom right, #38bdf8, #0ea5e9);
          color: white;
          text-align: center;
          padding: 4rem 2rem;
        }
        .hero-title {
          font-size: 2.5rem;
          font-weight: bold;
          margin-bottom: 1rem;
        }
        .highlight {
          color: #fde047;
        }
        .hero-description {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .why-choose-us {
          background-color: #f9fafb;
          padding: 4rem 2rem;
          text-align: center;
        }
        .section-title {
          font-size: 2rem;
          font-weight: bold;
          margin-top: 2rem;
          margin-bottom: 2rem;
        }
        .cards-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
        }

        .flip-card-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 2rem;
        }

        .flip-card {
          perspective: 1000px;
          width: 300px;
          height: 300px;
        }
        .flip-card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.6s ease;
        }
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 1rem;
          overflow: hidden;
        }
        .flip-card-front {
          display: flex;
          justify-content: center;
          align-items: center;
          background-color: white;
        }
        .flip-card-back {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          background: linear-gradient(to bottom right, #0ea5e9, #38bdf8);
          color: white;
          transform: rotateY(180deg);
          padding: 1rem;
          text-align: center;
        }
        .back-title {
          font-size: 1.2rem;
          font-weight: bold;
          margin-bottom: 0.5rem;
        }
        .back-description {
          font-size: 0.9rem;
          line-height: 1.4;
        }
      `}</style>
    </Wrapper>
  );
}
