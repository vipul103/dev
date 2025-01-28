"use client";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import Image from "next/image";
import imgPlaceholder from "@assets/img/photos/1.jpg"; // Replace this with the actual image path
import heroBg from "@assets/img/banner/bg2.jpg";

export default function EcogenicaPage() {
  return (
    <Wrapper>
      <Header style_2={true} />
      <main className="bg-gray-100 min-h-screen">
        {/* Banner Section */}
        <section>
          <div
            className="hero-section"
            style={{
              backgroundImage: `url(${heroBg.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="text-center text-white py-20">
              <h1 className="hero-title">ECOGENICA</h1>
              <p className="hero-description">
                Revolutionizing Hot Water with Cutting-Edge Heat Pump Technology for a Greener Future
              </p>
            </div>
          </div>
        </section>

        {/* Innovation Meets Technology Section */}
        <section className="py-5">
          <div className="container">
            <div className="row align-items-center">
              {/* Left Side - Text (8 Columns) */}
              <div className="col-lg-8">
                <h3 className="mb-3 wow fadeInUp">
                  ECOGENICA LEADING THE WAY IN HEATING INNOVATION
                  Ecogenica® Heat Pumps for a Sustainable Future.
                </h3>
                <p className="wow fadeInUp">
                  At Ecogenica, we believe in redefining the way you experience warmth in your home. As a pioneering Australian heat pump manufacturer, we’re dedicated to pushing the boundaries of innovation, sustainability, and cost-efficiency at an affordable price.
                </p>
                <p className="wow fadeInUp">
                  Employing the newest generation of natural refrigerants, R290 we ensure that all models within this monobloc range have superior energy efficiency and the system meets the highest global standards for a cleaner healthier world.
                </p>
              </div>

              {/* Right Side - Image (4 Columns) */}
              <div className="col-lg-4 text-center">
                <Image
                  src={imgPlaceholder}
                  alt="Ecogenica Heat Pump"
                  className="img-fluid rounded shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Product Information Section */}
        <section className="py-5 bg-white">
          <div className="container">
            <h3 className="text-center mb-4 font-bold">Product Information</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Temp Operating Range:</strong> Operates in ambient temperature ranges of -7 to +40 degrees Celsius.
              </li>
              <li>
                <strong>Auto Disinfection:</strong> Periodically heats the water beyond its set temp to prevent the growth of bacteria and legionella.
              </li>
              <li>
                <strong>Reliable Supply:</strong> Hot water whenever you need it, night or day, hail, rain, or shine.
              </li>
              <li>
                <strong>Quality Design:</strong> Featuring a Toshiba compressor and designed in Melbourne for years of trouble-free and reliable hot water.
              </li>
              <li>
                <strong>Low Operating Noise:</strong> Engineered to operate with low noise levels.
              </li>
            </ul>

            <div className="mt-5">
              <p>Ecogenica is dedicated to reducing carbon footprints and promoting greener technology. Our heat pumps provide efficient heating while minimizing environmental impact, ensuring sustainable warmth without compromise.</p>
              <p>Ecogenica aims to reduce costs and expenses for our customers. Our heat pumps are engineered to optimize energy efficiency, helping you save money on your heating bills without sacrificing comfort.</p>
              <p>Ecogenica is an Australian owned designer, wholesaler, and manufacturer of Heat Pumps. The Ecogenica Brand specialises in Heat Pump hot water upgrades and installations and is a major participant in numerous state and federal government energy savings schemes.</p>
              <p>The Ecogenica brand was launched with the sole focus on Heat Pump technology. We have a wealth of talent and experience in technology innovation, using sustainable and renewable energy to deliver hot water to homes and businesses across Australia.</p>
              <p>The Ecogenica Brand has been installed in over 200,000 homes & businesses since the launch of our first Heat Pumps in 2018. Ecogenica estimates that close to a million Australians experience hot water generated by our heat pumps every day!</p>
              <p>Our new U.K. models are A+++ rated and our EG-290FR (290lt residential unit) heat pump has the highest COP in the Australian market. It produces 5.7 KW of energy from 1KW of electricity consumed.</p>
              <p>Ecogenica also offers installation services for its customers. Ecogenica is committed to greener and healthier technology and aims to reduce costs and expenses for its customers, saving customers money every day off their power bill.</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />

      {/* Scoped CSS */}
      <style jsx>
        {`
          .hero-section {
            color: white;
            text-align: center;
            padding: 5rem 2rem;
          }
          .hero-title {
            font-size: 2.5rem;
            font-weight: bold;
            margin-bottom: 1rem;
          }
        `}
      </style>
    </Wrapper>
  );
}
