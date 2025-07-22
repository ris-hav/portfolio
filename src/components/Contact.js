// import React from "react";
import contactData from "../data/contactData";
import socialMediaData from "../data/socialMediaData";
export default function Contact() {
  return (
    <>
      <section className="section sec5 contact active" id="contact">
        <div className="contact-container">
          <div className="main-title">
            <h2>
              Contact <span>me</span>
              {/* <span className="bg-text">Approach</span> */}
            </h2>
          </div>
          <div className="contact-content-con">
            <div className="left-contact">
              <h4>Contact me here</h4>
              <p>
                I'm seeking out opportunities to collaborate with
                companies/agencies/individuals. I want to bring my collective
                design experience to the table where we can work together to
                solve real business-problems. Let's connect and see how we can
                work together to achieve our goals!
              </p>
              <div className="contact-info">
                {contactData.map(({ icon, title, value }, contactIndex) => (
                  <div key={contactIndex} className="contact-item">
                    <div className="icon">
                      <i className={icon}></i>
                      {title}
                    </div>
                    <p>{`: ${value}`}</p>
                  </div>
                ))}
              </div>
              <div className="contact-icons">
                <div className="contact-icon">
                  {socialMediaData.map(({ title, icon, link }, socialIndex) => (
                    <a
                      key={socialIndex}
                      title={title}
                      href={link}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className={icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
            <div className="right-contact">
              <form
                action="https://formsubmit.co/48a1e0c3a1922a7a7675febec7ace312"
                method="POST"
                className="contact-form"
              >
                <div className="input-control i-c-2">
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="YOUR NAME"
                  />
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="YOUR EMAIL"
                  />
                </div>
                <div className="input-control">
                  <input
                    type="text"
                    name="subject"
                    required
                    placeholder="ENTER SUBJECT"
                  />
                  <input
                    type="hidden"
                    name="_next"
                    value="https://ris-hav.github.io/thankyou/"
                  />
                </div>
                <div className="input-control">
                  <textarea
                    name="message"
                    id=""
                    cols="15"
                    rows="8"
                    placeholder="Message here...."
                  ></textarea>
                </div>
                <div className="btn-con">
                  <button type="submit" className="main-btn">
                    <span className="btn-text">Submit</span>
                    <span className="btn-icon">
                      <i className="fa-solid fa-paper-plane"></i>
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
