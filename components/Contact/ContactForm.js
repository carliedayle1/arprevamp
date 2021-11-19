import Image from "next/image";

const ContactForm = () => {
  return (
    <div className="contact-area ptb-80">
      <div className="container">
        <div className="section-title">
          <h2>Get In Touch With Us</h2>
          <div className="bar"></div>
          <p>Anything On your Mind. We’ll Be Glad To Assist You!</p>
        </div>

        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12">
            <Image
              src="/images/books/contact-us.jpg"
              alt="contact-us"
              width={600}
              height={400}
              layout="intrinsic"
            />
          </div>

          <div className="col-lg-6 col-md-12">
            <form id="contactForm">
              <div className="row">
                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      className="form-control"
                    />
                    {/* <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      'Name is required.'
                    </div> */}
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <input
                      type="text"
                      name="email"
                      placeholder="Your email address"
                      className="form-control"
                    />
                    {/* <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      Email is required.
                    </div> */}
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="number"
                      placeholder="Your phone number"
                      className="form-control"
                    />
                    {/* <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      Number is required.
                    </div> */}
                  </div>
                </div>

                <div className="col-lg-6 col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      placeholder="Your Subject"
                      className="form-control"
                    />
                    {/* <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      Subject is required
                    </div> */}
                  </div>
                </div>

                <div className="col-lg-12 col-md-12">
                  <div className="form-group">
                    <textarea
                      name="text"
                      cols="30"
                      rows="5"
                      placeholder="Write your message..."
                      className="form-control"
                    />
                    {/* <div
                      className="invalid-feedback"
                      style={{ display: "block" }}
                    >
                      Message is required
                    </div> */}
                  </div>
                </div>

                <div className="col-lg-12 col-sm-12">
                  <button type="submit" className="btn btn-primary">
                    Send Message
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
