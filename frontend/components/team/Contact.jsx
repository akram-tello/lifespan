"use client";
export default function Contact() {
  return (
    <div className="contact-area-1 space bg-theme shape-mockup-wrap">
      <div
        className="contact-map shape-mockup wow img-custom-anim-left animated"
        data-wow-duration="1.5s"
        data-wow-delay="0.2s"
        style={{ top: "-100px", left: 0, bottom: "140px" }}
      >
        <iframe
          src="https://maps.google.com/maps?q=KLCC%2C%20Kuala%20Lumpur%2C%20Malaysia&t=m&z=10&output=embed&iwloc=near"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="container">
        <div className="row align-items-center justify-content-end">
          <div className="col-lg-6">
            <div className="contact-form-wrap">
              <div className="title-area mb-30">
                <h2 className="sec-title">Repair Services</h2>
                <p>
                Submit an application for a repair, get quotes for spare parts
                </p>
              </div>
              <form
                onSubmit={(e) => e.preventDefault()}
                className="contact-form ajax-contact"
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        className="form-control style-border"
                        name="name"
                        id="name"
                        placeholder="Full name*"
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        required
                        type="text"
                        className="form-control style-border"
                        name="email"
                        id="email"
                        placeholder="Email address*"
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        required
                        name="message"
                        placeholder="How Can We Help You*"
                        id="contactForm"
                        className="form-control style-border"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div className="form-btn col-12">
                  <button type="submit" className="btn mt-20">
                    <span className="link-effect">
                      <span className="effect-1">SUBMIT</span>
                      <span className="effect-1">SUBMIT</span>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
