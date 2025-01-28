"use client"; // Mark this file as a Client Component

import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import Image from "next/image";
import Link from "next/link";
import imgHotWaterSystem1 from "@assets/img/photos/duct1.1.png";
import imgHotWaterSystem2 from "@assets/img/photos/multi_split1.1.png";
import imgHotWaterSystem3 from "@assets/img/photos/split1.1.png";
import heroBg from "@assets/img/banner/bg2.jpg";
export default function AirConditionerPage() {
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
            <span className="highlight">Air Conditioning Solutions</span>
          </h1>
          <p className="hero-description">
            Upgrade to cutting-edge air conditioning systems. Stay cool, save energy, and enjoy superior performance with our premium solutions.
          </p>
        </div>
      </section>


      {/* Why Choose Us Section */}
      <section className="why-choose-us">
        <h2 className="section-title" style={{ textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>Types of Heating and Cooling System:</h2>
        <div className="container">
          <div className="flip-card-container">
            {/* Left Image */}
            <Link href="/ac">
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
                    <h3 className="back-title">Ducted Reverse Cycle</h3>
                    <p className="back-description">
                      Elevate your comfort with a ducted air conditioner! Ideal for larger buildings, it features a ceiling-mounted indoor unit and an outdoor unit, delivering conditioned air through a network of ducts.
                      Enjoy efficient, whole-building climate control. Contact us today!
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
                    src={imgHotWaterSystem2}
                    alt="Hot Water System"
                    width={400}
                    height={400}
                    className="image"
                  />
                </div>
                <div className="flip-card-back">
                  <h3 className="back-title">Multi-Head System Air Conditioner.</h3>
                  <p className="back-description">
                    Discover the efficiency of Midea's multi-split system air conditioners! Heat or cool multiple rooms with just one outdoor unit connected to multiple indoor units.
                    Using advanced split system technology, the condenser is placed outside, while the indoor units keep your home perfectly comfortable.
                    Contact us today to upgrade your climate control!
                  </p>
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
                  <h3 className="back-title">Split System Air Conditioner</h3>
                  <p className="back-description">
                    Experience superior comfort with our split system AC! Our efficient indoor unit cools your room quietly, while the powerful outdoor unit expels heat outside.
                    Enjoy perfect temperature control without the noise. Contact us now for a cooler, more comfortable home!
                  </p>
                </div>
              </div>
            </div>
          </div>
          <h2 className="section-title" style={{ textAlign: 'left', fontSize: '2rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>How an Energy Efficient Aircon saves you money</h2>
          <div className="points-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2rem', padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '12px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' }}>
            <div className="point" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', borderLeft: '4px solid #3182ce', paddingLeft: '1rem' }}>
              <h3 className="point-title" style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2d3748', marginBottom: '0.5rem' }}>Lower Energy Bills</h3>
              <p className="point-description" style={{ fontSize: '1rem', color: '#4a5568', lineHeight: '1.6' }}>
                Energy-efficient air conditioning systems consume less electricity, leading to reduced energy bills.
              </p>
            </div>

            <div className="point" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', borderLeft: '4px solid #3182ce', paddingLeft: '1rem' }}>
              <h3 className="point-title" style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2d3748', marginBottom: '0.5rem' }}>Rebates and Incentives</h3>
              <p className="point-description" style={{ fontSize: '1rem', color: '#4a5568', lineHeight: '1.6' }}>
                The Victorian Energy Upgrade Program provides financial incentives that lower upfront cost of purchasing and installing energy-efficient air conditioning systems.
              </p>
            </div>

            <div className="point" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', borderLeft: '4px solid #3182ce', paddingLeft: '1rem' }}>
              <h3 className="point-title" style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2d3748', marginBottom: '0.5rem' }}>Improved Comfort</h3>
              <p className="point-description" style={{ fontSize: '1rem', color: '#4a5568', lineHeight: '1.6' }}>
                These advanced systems offer superior temperature control, ensuring consistent and comfortable cooling while using less energy.
              </p>
            </div>

            <div className="point" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', borderLeft: '4px solid #3182ce', paddingLeft: '1rem' }}>
              <h3 className="point-title" style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2d3748', marginBottom: '0.5rem' }}>Reduced Carbon Footprint</h3>
              <p className="point-description" style={{ fontSize: '1rem', color: '#4a5568', lineHeight: '1.6' }}>
                By replacing inefficient units with energy-efficient models, households can significantly decrease their carbon emissions, contributing to a healthier environment.
              </p>
            </div>

            <div className="point" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', borderLeft: '4px solid #3182ce', paddingLeft: '1rem' }}>
              <h3 className="point-title" style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2d3748', marginBottom: '0.5rem' }}>Longer Lifespan</h3>
              <p className="point-description" style={{ fontSize: '1rem', color: '#4a5568', lineHeight: '1.6' }}>
                Energy-efficient systems often come with advanced technology that reduces wear and tear, leading to fewer repairs and a longer operational life.
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
