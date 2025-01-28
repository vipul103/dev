// import Footer from "@layout/footer";
// import Header from "@layout/header";
// import Wrapper from "@layout/wrapper";
// import Image from "next/image";
// import imgPlaceholder from "@assets/img/photos/air.png"; // Replace this with the actual image path

// export const metadata = {
//   title: "Emarald",
// };

// export default function EmaraldPage() {
//   return (
//     <Wrapper>
//       <Header style_2={true} />
//       <main className="bg-gray-100 min-h-screen">
//         <section className="bg-gradient-to-r from-blue-600 to-green-500 text-white py-12">
//           <div className="container mx-auto text-center">
//             <h1 className="text-4xl font-bold uppercase mb-4">Emarald</h1>
//             <p className="text-xl font-semibold">
//               Leading the way in heating innovation. Emarald Heat Pumps for a Sustainable Future.
//             </p>
//           </div>
//         </section>

//         <section className="container mx-auto py-12 px-6">
//           <div className="grid md:grid-cols-2 gap-10 items-center">
//             <div>
//               <h2 className="text-3xl font-bold text-gray-800 mb-4">LEADING THE WAY IN HEATING INNOVATION</h2>
//               <p className="text-gray-700 mb-6">
//               At Emerald Energy, we believe in redefining the way you experience warmth in your home.
//                As a pioneering Australian heat pump manufacturer, we’re dedicated to pushing the boundaries of innovation, sustainability, and cost-efficiency at an affordable price.
//               </p>
//               <p className="text-gray-700 mb-6">
//                 Employing the newest generation of natural refrigerants, R290, we ensure that all models within the Ecogenica range
//                 have superior energy efficiency and meet the highest global standards for a climate-friendly world.
//               </p>
//             </div>
//             <div className="relative w-full h-64 md:h-96">
//               <Image
//                 src={imgPlaceholder}
//                 alt="Ecogenica Heat Pump"
 
//                 className="rounded-lg shadow-lg"
//               />
//             </div>
//           </div>
//         </section>

//         <section className="bg-white py-12">
//           <div className="container mx-auto">
//             <h2 className="text-3xl font-bold text-gray-800 text-center mb-8">Explore the benefits of Ecogenica Hot Water Heat Pumps</h2>
//             <ul className="space-y-6 text-gray-700">
//               <li className="flex items-center">
//                 <span className="text-blue-600 text-2xl font-bold mr-4">1.</span>
//                 Premium Technology: Built using premium materials and DC technology to ensure exceptional performance, delivering efficiency and reliability
//               </li>
//               <li className="flex items-center">
//                 <span className="text-blue-600 text-2xl font-bold mr-4">2.</span>
//                 Built To Last: Manufactured using materials that prioritise outstanding performance and durability.
//               </li>
//               <li className="flex items-center">
//                 <span className="text-blue-600 text-2xl font-bold mr-4">3.</span>
//                 Quiet Operation: The DC technology combined with premium components results in quieter operation.
//               </li>
//               <li className="flex items-center">
//                 <span className="text-blue-600 text-2xl font-bold mr-4">4.</span>
//                 Modern Compact Design: Designed with a contemporary, compact style to seamlessly blend into modern home design.
//               </li>
//               <li className="flex items-center">
//                 <span className="text-blue-600 text-2xl font-bold mr-4">5.</span>
//                 Low Global Warming Potential (GWP 3): Uses R290, the preferred refrigerant due to its low Global Warming Potential compared to traditional refrigerants.
//               </li>
//               <li className="flex items-center">
//                 <span className="text-blue-600 text-2xl font-bold mr-4">5.</span>
//                 Wi-Fi App Controls Ans Monitoring : Adjust your heat pump’s settings and track its performance in real-time via Wi-Fi
//               </li>
//             </ul>
//           </div>
//         </section>
//       </main>
//       <Footer />
//     </Wrapper>
//   );
// }

"use client";
import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import Image from "next/image";
import imgPlaceholder from "@assets/img/photos/emerald.png"; // Replace this with the actual image path
import heroBg from "@assets/img/banner/bg2.jpg";

export default function EmaraldPage() {
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
              <h1 className="hero-title">Emarald</h1>
              <p className="hero-description">
              Leading the way in heating innovation. Emarald Heat Pumps for a Sustainable Future.
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
