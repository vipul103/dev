"use client"; // Mark this file as a Client Component

import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import Image from "next/image";
import Link from "next/link";
import imgHotWaterSystem2 from "@assets/img/productphotos/ema.webp";
import imgHotWaterSystem3 from "@assets/img/productphotos/spt2.png";
import imgHotWaterSystem1 from "@assets/img/productphotos/ecogenic.png";
import heroBg from "@assets/img/banner/bg2.jpg";

export default function HotWaterSystem() {
  return (
    <Wrapper>
      <Header style_2={true} />

      {/* Hero Section */}
      <section
        className="hero-section"
        style={{
          backgroundImage: `url(${heroBg.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="container">
          <h1 className="hero-title">
            Revolutionize Your Home <br />
            <span className="highlight">Hot Water Systems</span>
          </h1>
          <p className="hero-description">
            Upgrade to modern, energy-efficient hot water systems. Save on bills
            while enjoying superior performance with government rebates.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <div className="container">
          <div className="flip-card-container">
            {/* Left Image */}

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Image
                    src={imgHotWaterSystem1}
                    alt="Energy-Efficient System"
                    width={300}
                    height={300}
                    className="image"
                  />
                </div>

                <div className="flip-card-back">
                  <h3 className="back-title">ECOGENICA</h3>
                  <p className="back-description">
                    Leading the way in heating innovation. Ecogenica® Heat Pumps for a Sustainable Future
                  </p>
                  <Link href="/ecogenica">
                    <button className="learn-more-btn">Learn More</button>
                  </Link>
                </div>
              </div>
            </div>


            {/* Center Image */}
            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Image
                    src={imgHotWaterSystem2}
                    alt="Hot Water System"
                    width={300}
                    height={300}
                    className="image"
                  />
                </div>
                <div className="flip-card-back">
                  <h3 className="back-title">Emarald</h3>
                  <p className="back-description">
                    Leading the way in heating innovation. Emarald Heat Pumps for a Sustainable Future.
                  </p>
                  <Link href="/emarald">
                    <button className="learn-more-btn">Learn More</button>
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Image */}

            <div className="flip-card">
              <div className="flip-card-inner">
                <div className="flip-card-front">
                  <Image
                    src={imgHotWaterSystem3}
                    alt="Eco-Friendly System"
                    width={300}
                    height={300}
                    className="image"
                  />
                </div>
                <div className="flip-card-back">
                  <h3 className="back-title">SPT</h3>
                  <p className="back-description">
                    Leading the way in heating innovation. SPT Heat Pumps for a Sustainable Future.
                  </p>
                  <Link href="/spt">
                    <button className="learn-more-btn">Learn More</button>
                  </Link>
                </div>
              </div>
            </div>

          </div>
          <br></br>


          <h2 className="section-title" style={{ textAlign: 'left', fontSize: '2rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>How a Heat Pump Saves You Money</h2>
          <div className="points-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2rem', padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '12px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' }}>
            <div className="point" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', borderLeft: '4px solid #3182ce', paddingLeft: '1rem' }}>
              <h3 className="point-title" style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2d3748', marginBottom: '0.5rem' }}>Hot Pump Functioning</h3>
              <p className="point-description" style={{ fontSize: '1rem', color: '#4a5568', lineHeight: '1.6' }}>
                Heat Pumps work a bit like a reverse refrigerator – transferring heat from the air, through a heat exchange system to heat your water; this is why they are often referred to as ‘air-source Heat Pumps’.
              </p>
            </div>

            <div className="point" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', borderLeft: '4px solid #3182ce', paddingLeft: '1rem' }}>
              <h3 className="point-title" style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2d3748', marginBottom: '0.5rem' }}>Environmental and Financial Benefits</h3>
              <p className="point-description" style={{ fontSize: '1rem', color: '#4a5568', lineHeight: '1.6' }}>
                By concentrating existing heat rather than creating it, Heat Pumps reduce greenhouse gas emissions and energy consumption, offering significant savings for households.
              </p>
            </div>

            <div className="point" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', borderLeft: '4px solid #3182ce', paddingLeft: '1rem' }}>
              <h3 className="point-title" style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2d3748', marginBottom: '0.5rem' }}>Efficiency Compared to Other Systems</h3>
              <p className="point-description" style={{ fontSize: '1rem', color: '#4a5568', lineHeight: '1.6' }}>
                Unlike solar systems, Heat Pumps don’t rely on sunlight and operate using electricity. However, they are about four times more efficient than conventional electric water heaters.
              </p>
            </div>
          </div>
          <h2 className="section-title" style={{ textAlign: 'left', fontSize: '2rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>How Does the Heat Pump Work?</h2>
          <div className="points-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2rem', padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '12px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' }}>
            <div className="point" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', borderLeft: '4px solid #3182ce', paddingLeft: '1rem' }}>
              <p className="point-description" style={{ fontSize: '1rem', color: '#4a5568', lineHeight: '1.6' }}>
               1 -Heat Pumps draw air in through a fan to an evaporator where the heat in the air is absorbed by a refrigerant.
              </p>
            </div>

            <div className="point" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', borderLeft: '4px solid #3182ce', paddingLeft: '1rem' }}>         
              <p className="point-description" style={{ fontSize: '1rem', color: '#4a5568', lineHeight: '1.6' }}>
              2 -The warm air turns the refrigerant from liquid to gas.
              </p>
            </div>

            <div className="point" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', borderLeft: '4px solid #3182ce', paddingLeft: '1rem' }}>       
              <p className="point-description" style={{ fontSize: '1rem', color: '#4a5568', lineHeight: '1.6' }}>
              3 -This hot vapor flows through a heat exchanger to heat the water and cool the refrigerant.
              </p>
            </div>
            <div className="point" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', borderLeft: '4px solid #3182ce', paddingLeft: '1rem' }}>       
              <p className="point-description" style={{ fontSize: '1rem', color: '#4a5568', lineHeight: '1.6' }}>
              4 -The liquid refrigerant then flows into an expansion valve to reduce its pressure, allowing it to cool and enter the evaporator to repeat the cycle.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Scoped CSS */}
      <style jsx>{`
        .hero-section {
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
          background: linear-gradient(to bottom right,rgb(58, 201, 94),rgb(9, 255, 83));
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
          .learn-more-btn {
  margin-top: 1rem;
  padding: 0.5rem 1.2rem;
  font-size: 1rem;
  color:rgb(0, 255, 34);
  background-color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;
}

.learn-more-btn:hover {
  background-color:#fde047;
  color: white;
}

      `}</style>
    </Wrapper>
  );
}
