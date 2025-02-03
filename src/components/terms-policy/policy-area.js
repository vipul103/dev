
const PolicyArea = () => {
  return (
    <section className="policy__area pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-10">
            <div className="policy__wrapper policy__translate p-relative z-index-1">
              <div className="policy__item mb-35">
              <h3 className="policy__title">Privacy Policy</h3>
                <p>
                At AUSTRALIA HOME IMPROVEMENT, we understand the importance of privacy and security. Our privacy policy outlines how we utilize and safeguard your personal data
                </p>
                <p>
                We utilize trusted third-party financial institutions for payment verification and only collect essential user information for order fulfillment purposes.
                 Rest assured, your privacy is our utmost priority.
                </p>
              </div>

              <div className="policy__item policy__item-2 mb-35">
                <h3 className="policy__title">Customer Service</h3>
                <p>
                Welcome to AUSTRALIA HOME IMPROVEMENT, your one-stop shop for all your home improvement, air conditioner, hot water systems, and energy saving solutions needs.
                 Our customer service is dedicated to providing you with detailed information about our products and services. Feel free to reach out to us for any inquiries or assistance.
                </p>

                <p>
                At AUSTRALIA HOME IMPROVEMENT, we prioritize the privacy and security of our customers. We have strict policies in place to ensure that your personal information is protected.
                 Our commitment to transparency and security aims to build trust and confidence in every purchase you make with us.
                </p>
              </div>

              
              <div className="policy__contact">
                <h3 className="policy__title policy__title-2">Contact us</h3>
                <p>You may contact us at any time via:</p>

                <ul>
                  <li>
                    Email:{" "}
                    <span>
                      <a href="mailto:harry.com">wecansaveau@gmail.com</a>
                    </span>
                  </li>
                </ul>

                <div className="policy__address">
                  <p>
                    <a
                      rel="noreferrer"
                      href="https://www.google.com/maps/place/102+Thompson+St,+New+York,+NY+10012,+USA/@40.7255437,-74.004061,17z/data=!3m1!4b1!4m5!3m4!1s0x89c2598c338f691d:0x6d5f394e7a1962cc!8m2!3d40.7255397!4d-74.0018723"
                      target="_blank"
                    >
                      harry PTY LTD <br /> 4270, Brisbane, Australia
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PolicyArea;
