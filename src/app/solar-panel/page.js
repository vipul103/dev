// import Footer from "@layout/footer";
// import Header from "@layout/header";
// import Wrapper from "@layout/wrapper";
// import Image from "next/image";
// import imgHotWaterSystem from "@assets/img/photos/1.jpg";

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
// "use client"; // Mark this file as a Client Component

// import Footer from "@layout/footer";
// import Header from "@layout/header";
// import Wrapper from "@layout/wrapper";
// import Image from "next/image";
// import Link from "next/link";
// import imgHotWaterSystem from "@assets/img/photos/1.jpg";

// export default function solarpanel() {
//   return (
//     <Wrapper>
//       <Header style_2={true} />

//       {/* Hero Section */}
//       <section className="hero-section">
//         <div className="container">
//           <h1 className="hero-title">
//             Revolutionize Your Home <br />
//             <span className="highlight">Solar Panel</span>
//           </h1>
//           <p className="hero-description">
//           ECOGENICA innovative hot water systems save energy and money.
//            Contact us today and transform the way you live.s.
//           </p>
//         </div>
//       </section>

//       {/* Why Choose Us Section */}
//       <section className="why-choose-us">
//         <div className="container">
//           <div className="flip-card-container">
//             {/* Left Image */}
//             <Link href="/ac">
//             <div className="flip-card">
//               <div className="flip-card-inner">
//                 <div className="flip-card-front">
//                   <Image
//                     src={imgHotWaterSystem}
//                     alt="Energy-Efficient System"
//                     width={300}
//                     height={300}
//                     className="image"
//                   />
//                 </div>
                
//                 <div className="flip-card-back">
//                   <h3 className="back-title">Significant Cost Savings</h3>
//                   <p className="back-description">
//                   The Victorian Energy Upgrade Program offers generous rebates that reduce the upfront cost of installing solar panels, making clean energy more affordable.
//                    You'll start saving on your energy bills from day one, with long-term financial benefits as your solar system pays for itself over time.
//                   </p>
//                 </div>
//               </div>
//             </div>
//             </Link>

//             {/* Center Image */}
//             <div className="flip-card">
//               <div className="flip-card-inner">
//                 <div className="flip-card-front">
//                   <Image
//                     src={imgHotWaterSystem}
//                     alt="Hot Water System"
//                     width={400}
//                     height={400}
//                     className="image"
//                   />
//                 </div>
//                 <div className="flip-card-back">
//                   <h3 className="back-title">Environmental Impact</h3>
//                   <p className="back-description">
//                   Solar panels allow you to harness renewable energy, reducing your reliance on fossil fuels and lowering your carbon footprint.
//                    By participating in the program, you contribute to a greener future for Victoria by promoting sustainable energy use.
//                   </p>
//                 </div>
//               </div>
//             </div>

//             {/* Right Image */}
//             <div className="flip-card">
//               <div className="flip-card-inner">
//                 <div className="flip-card-front">
//                   <Image
//                     src={imgHotWaterSystem}
//                     alt="Eco-Friendly System"
//                     width={300}
//                     height={300}
//                     className="image"
//                   />
//                 </div>
//                 <div className="flip-card-back">
//                   <h3 className="back-title">Increased Home Value</h3>
//                   <p className="back-description">
//                   Installing solar panels can boost your property’s value, making it a smart investment.
//                    Homes with solar power are attractive to buyers who are looking for energy-efficient and environmentally friendly options,
//                     ensuring your property stands out in the market. In short, the Victorian Energy Upgrade Program makes going solar a financially wise and environmentally responsible choice,
//                      turning your home into a powerhouse of savings and sustainability.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>

//           <h2 className="section-title">Why Choose Us?</h2>
//           <div className="cards-container">
//             <div className="glass-card">
//               <h3 className="card-title">Solar Panel</h3>
//               <p className="card-description">
//               The Victorian Energy Upgrade Program offers generous rebates that reduce the upfront cost of installing solar panels, making clean energy more affordable.
//               You'll start saving on your energy bills from day one, with long-term financial benefits as your solar system pays for itself over time.
//               </p>
//             </div>

//             <div className="glass-card">
//               <h3 className="card-title">Significant Cost Savings</h3>
//               <p className="card-description">
//               Solar panels allow you to harness renewable energy, reducing your reliance on fossil fuels and lowering your carbon footprint.
//               By participating in the program, you contribute to a greener future for Victoria by promoting sustainable energy use.
//               </p>
//             </div>

//             <div className="glass-card">
//               <h3 className="card-title">Increased Home Value</h3>
//               <p className="card-description">
//               Installing solar panels can boost your property’s value, making it a smart investment.
//                    Homes with solar power are attractive to buyers who are looking for energy-efficient and environmentally friendly options,
//                     ensuring your property stands out in the market. In short, the Victorian Energy Upgrade Program makes going solar a financially wise and environmentally responsible choice,
//                      turning your home into a powerhouse of savings and sustainability.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       <Footer />

//       {/* Scoped CSS */}
//       <style jsx>{`
//         .hero-section {
//           background: linear-gradient(to bottom right, #38bdf8, #0ea5e9);
//           color: white;
//           text-align: center;
//           padding: 4rem 2rem;
//         }
//         .hero-title {
//           font-size: 2.5rem;
//           font-weight: bold;
//           margin-bottom: 1rem;
//         }
//         .highlight {
//           color: #fde047;
//         }
//         .hero-description {
//           font-size: 1.2rem;
//           margin-bottom: 2rem;
//           line-height: 1.6;
//         }

//         .why-choose-us {
//           background-color: #f9fafb;
//           padding: 4rem 2rem;
//           text-align: center;
//         }
//         .section-title {
//           font-size: 2rem;
//           font-weight: bold;
//           margin-top: 2rem;
//           margin-bottom: 2rem;
//         }
//         .cards-container {
//           display: grid;
//           grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//           gap: 2rem;
//         }

//         .flip-card-container {
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           margin-bottom: 2rem;
//         }

//         .flip-card {
//           perspective: 1000px;
//           width: 300px;
//           height: 300px;
//         }
//         .flip-card-inner {
//           position: relative;
//           width: 100%;
//           height: 100%;
//           transform-style: preserve-3d;
//           transition: transform 0.6s ease;
//         }
//         .flip-card:hover .flip-card-inner {
//           transform: rotateY(180deg);
//         }
//         .flip-card-front,
//         .flip-card-back {
//           position: absolute;
//           width: 100%;
//           height: 100%;
//           backface-visibility: hidden;
//           border-radius: 1rem;
//           overflow: hidden;
//         }
//         .flip-card-front {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//           background-color: white;
//         }
//         .flip-card-back {
//           display: flex;
//           flex-direction: column;
//           justify-content: center;
//           align-items: center;
//           background: linear-gradient(to bottom right, #0ea5e9, #38bdf8);
//           color: white;
//           transform: rotateY(180deg);
//           padding: 1rem;
//           text-align: center;
//         }
//         .back-title {
//           font-size: 1.2rem;
//           font-weight: bold;
//           margin-bottom: 0.5rem;
//         }
//         .back-description {
//           font-size: 0.9rem;
//           line-height: 1.4;
//         }
//       `}</style>
//     </Wrapper>
//   );
// }
"use client"; // Mark this file as a Client Component

import Footer from "@layout/footer";
import Header from "@layout/header";
import Wrapper from "@layout/wrapper";
import Image from "next/image";
import Link from "next/link";
import imgHotWaterSystem1 from "@assets/img/productphotos/solar1.jpg";
import imgHotWaterSystem2 from "@assets/img/productphotos/solar2.jpg";
import imgHotWaterSystem3 from "@assets/img/productphotos/solar3.jpg";
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
            <span className="highlight">Solar Panel</span>
          </h1>
          <p className="hero-description">
          Protect the planet and reduce your energy expenses with the power of the sun.
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
                      src={imgHotWaterSystem1}
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
                    src={imgHotWaterSystem2}
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
                    src={imgHotWaterSystem3}
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
          <h2 className="section-title" style={{ textAlign: 'left', fontSize: '2rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>Why Install Solar Panels Under the Victorian Energy Upgrade Program?</h2>
          <div className="points-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2rem', padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '12px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' }}>
            <div className="point" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', borderLeft: '4px solid #3182ce', paddingLeft: '1rem' }}>
              <h3 className="point-title" style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2d3748', marginBottom: '0.5rem' }}> Significant Cost Savings:</h3>
              <p className="point-description" style={{ fontSize: '1rem', color: '#4a5568', lineHeight: '1.6' }}>
              The Victorian Energy Upgrade Program offers generous rebates that reduce the upfront cost of installing solar panels, making clean energy more affordable.
               You'll start saving on your energy bills from day one, with long-term financial benefits as your solar system pays for itself over time.
              </p>
            </div>

            <div className="point" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', borderLeft: '4px solid #3182ce', paddingLeft: '1rem' }}>
              <h3 className="point-title" style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2d3748', marginBottom: '0.5rem' }}> Environmental Impact:</h3>
              <p className="point-description" style={{ fontSize: '1rem', color: '#4a5568', lineHeight: '1.6' }}>
              Solar panels allow you to harness renewable energy, reducing your reliance on fossil fuels and lowering your carbon footprint.
               By participating in the program, you contribute to a greener future for Victoria by promoting sustainable energy use.
              </p>
            </div>

            <div className="point" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', borderLeft: '4px solid #3182ce', paddingLeft: '1rem' }}>
              <h3 className="point-title" style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2d3748', marginBottom: '0.5rem' }}>Increased Home Value:</h3>
              <p className="point-description" style={{ fontSize: '1rem', color: '#4a5568', lineHeight: '1.6' }}>
              Installing solar panels can boost your property’s value, making it a smart investment. Homes with solar power are attractive to buyers who are looking for energy-efficient and environmentally friendly options, ensuring your property stands out in the market.
              In short, the Victorian Energy Upgrade Program makes going solar a financially wise and environmentally responsible choice, turning your home into a powerhouse of savings and sustainability.
              </p>
            </div>
          </div>
          <h2 className="section-title" style={{ textAlign: 'left', fontSize: '2rem', fontWeight: 'bold', color: '#1a202c', marginBottom: '1rem' }}>Process to Install Solar Panels Under the Victorian Energy Upgrade Program</h2>
          <div className="points-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '2rem', padding: '1.5rem', backgroundColor: '#f9fafb', borderRadius: '12px', boxShadow: '0 8px 16px rgba(0, 0, 0, 0.1)' }}>
            <div className="point" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', borderLeft: '4px solid #3182ce', paddingLeft: '1rem' }}>
              <h3 className="point-title" style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2d3748', marginBottom: '0.5rem' }}> 1. Eligibility Check:</h3>
              <p className="point-description" style={{ fontSize: '1rem', color: '#4a5568', lineHeight: '1.6' }}>
              - Determine Eligibility: Ensure that your home or business is eligible for the Victorian Energy Upgrade Program. Most residential and small business properties in Victoria are eligible, but it's important to confirm any specific criteria that might apply.
- Accredited Providers: Work with an accredited provider under the VEU Program, as they are authorized to offer rebates and guide you through the process.
              </p>
            </div>

            <div className="point" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', borderLeft: '4px solid #3182ce', paddingLeft: '1rem' }}>
              <h3 className="point-title" style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2d3748', marginBottom: '0.5rem' }}> 2. Site Assessment:</h3>
              <p className="point-description" style={{ fontSize: '1rem', color: '#4a5568', lineHeight: '1.6' }}>
              - Initial Consultation: Contact a qualified solar provider to arrange a consultation. The provider will assess your property’s suitability for solar panels, considering factors like roof space, orientation, and current energy consumption.
- System Design: Based on the assessment, the provider will design a customized solar system that maximizes efficiency and meets your energy needs.
              </p>
            </div>

            <div className="point" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', borderLeft: '4px solid #3182ce', paddingLeft: '1rem' }}>
              <h3 className="point-title" style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2d3748', marginBottom: '0.5rem' }}>3. Quote and Rebate Application:</h3>
              <p className="point-description" style={{ fontSize: '1rem', color: '#4a5568', lineHeight: '1.6' }}>
              - Receive a Quote: The provider will offer a detailed quote, outlining the costs of the solar panel installation and the potential savings. The quote should also include the rebate amount available under the VEU Program.
- Rebate Application: The provider will assist you in applying for the VEU rebates, reducing the upfront cost of the solar panels and installation. They will handle most of the paperwork, making the process hassle-free.
              </p>
            </div>
            <div className="point" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', borderLeft: '4px solid #3182ce', paddingLeft: '1rem' }}>
              <h3 className="point-title" style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2d3748', marginBottom: '0.5rem' }}>4. Installation:</h3>
              <p className="point-description" style={{ fontSize: '1rem', color: '#4a5568', lineHeight: '1.6' }}>
              - Scheduling Installation: Once the rebate application is approved, schedule the installation with your provider. A licensed installer will carry out the installation, ensuring that it meets all safety and quality standards.
- Installation Process: The installation typically involves mounting the solar panels, connecting them to the inverter, and integrating the system with your home’s electrical grid.
              </p>
            </div>
            <div className="point" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', borderLeft: '4px solid #3182ce', paddingLeft: '1rem' }}>
              <h3 className="point-title" style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2d3748', marginBottom: '0.5rem' }}>5. Inspection and Grid Connection:</h3>
              <p className="point-description" style={{ fontSize: '1rem', color: '#4a5568', lineHeight: '1.6' }}>
              - System Inspection: After installation, the system will be inspected by a certified electrician to ensure everything is installed correctly and safely.
- Grid Connection: Your solar provider will arrange for the system to be connected to the grid, allowing you to start generating and using solar energy. If you generate more electricity than you use, you can feed it back into the grid and potentially earn credits on your energy bill.
              </p>
            </div>
            <div className="point" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', borderLeft: '4px solid #3182ce', paddingLeft: '1rem' }}>
              <h3 className="point-title" style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2d3748', marginBottom: '0.5rem' }}>6. Final Documentation and Handover:</h3>
              <p className="point-description" style={{ fontSize: '1rem', color: '#4a5568', lineHeight: '1.6' }}>
              - Handover: Once everything is complete, the provider will give you all the necessary documentation, including warranties, system manuals, and details about monitoring your solar energy production.
- Start Saving: With your solar system now operational, you’ll begin to see savings on your energy bills as you generate your own electricity.
              </p>
            </div>
            <div className="point" style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', borderLeft: '4px solid #3182ce', paddingLeft: '1rem' }}>
              <h3 className="point-title" style={{ fontSize: '1.5rem', fontWeight: '600', color: '#2d3748', marginBottom: '0.5rem' }}>7. Monitor and Maintain:</h3>
              <p className="point-description" style={{ fontSize: '1rem', color: '#4a5568', lineHeight: '1.6' }}>
              - Monitor Performance: Most systems come with a monitoring tool that allows you to track your solar energy production and usage in real-time.
- Regular Maintenance: To ensure your system operates efficiently, schedule regular maintenance checks with your provider.
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
