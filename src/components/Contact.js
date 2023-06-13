import React from "react";

export default function Contact() {
  return (
    <>
      <section class="section sec5 contact" id="contact">
        <div class="contact-container">
          <div class="main-title">
            <h2>
              Contact <span>me</span>
              <span class="bg-text">Approach</span>
            </h2>
          </div>
          <div class="contact-content-con">
            <div class="left-contact">
              <h4>Contact me here</h4>
              <p>
                I'm seeking out opportunities to collaborate with
                companies/agencies/individuals. I want to bring my collective
                design experience to the table where we can work together to
                solve real business-problems. Let's connect and see how we can
                work together to achieve our goals!
              </p>
              <div class="contact-info">
                <div class="contact-item">
                  <div class="icon">
                    <i class="fas fa-map-marker-alt"></i>Location
                  </div>
                  <p>: Bengaluru, India</p>
                </div>
                <div class="contact-item">
                  <div class="icon">
                    <i class="fas fa-envelope"></i>Email
                  </div>
                  <p>: saharishav53@gmail.com</p>
                </div>
                <div class="contact-item">
                  <div class="icon">
                    <i class="fas fa-user-graduate"></i>Education
                  </div>
                  <p>: VIT,Vellore</p>
                </div>

                <div class="contact-item">
                  <div class="icon">
                    <i class="fas fa-globe-africa"></i>Languages
                  </div>
                  <p>: Hindi, English, Bengali</p>
                </div>
              </div>
              <div class="contact-icons">
                <div class="contact-icon">
                  <a
                    title="twitter"
                    href="https://twitter.com/saharishav53"
                    target="_blank"
                  >
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="https://www.linkedin.com/in/rssh/" target="_blank">
                  <i class="fab fa-linkedin-in icon"></i>
                  </a>
                  <a href="https://github.com/ris-hav" target="_blank">
                    <i class="fab fa-github"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/ris.hav__/"
                    target="_blank"
                  >
                    <i class="fa-brands fa-instagram"></i>
                  </a>
                  
                </div>
              </div>
            </div>
            <div class="right-contact">
              <form
                action="https://formsubmit.co/48a1e0c3a1922a7a7675febec7ace312"
                method="POST"
                class="contact-form"
              >
                <div class="input-control i-c-2">
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
                <div class="input-control">
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
                  {/* <!-- <input type="hidden" name="_captcha" value="false" /> --> */}
                </div>
                <div class="input-control">
                  <textarea
                    name="message"
                    id=""
                    cols="15"
                    rows="8"
                    placeholder="Message here...."
                  ></textarea>
                </div>
                <div class="btn-con">
                  <button type="submit" class="main-btn">
                    <span class="btn-text">Submit</span>
                    <span class="btn-icon">
                      <i class="fa-solid fa-paper-plane"></i>
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
