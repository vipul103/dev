

const TextArea = () => {
  return (
    <section className="about__text pt-115 pb-100">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <div
              className="about__text-wrapper wow fadeInUp"
              data-wow-delay=".3s"
              data-wow-duration="1s"
            >
              <h3 className="about__text-title">
                It started with a <br /> bang now we are here.
              </h3>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">
            <div
              className="about__text wow fadeInUp"
              data-wow-delay=".6s"
              data-wow-duration="1s"
            >
              <p> 
              Welcome to We Can Save AU, your trusted partner in energy efficiency and sustainable solutions across Victoria and New South Wales. 
              Our mission is to assist both households and businesses in optimizing their energy consumption, ultimately leading to lower utility costs and a greener future.
              </p>

              <p>
              We specialize in providing cutting-edge, eco-friendly products and services designed to enhance energy efficiency while minimizing environmental impact
              </p>
              <p>
              Whether you’re looking to upgrade your home or business with the latest sustainable technology, we’re here to guide you every step of the way toward a more energy-efficient lifestyle.
              </p>
              <p>
              We aim for a sustainable future where everyone enjoys efficient, cost-effective, and environmentally friendly energy solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextArea;
