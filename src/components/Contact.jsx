import contactData from "../data/contactData";
import socialMediaData from "../data/socialMediaData";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen w-full bg-primary text-ink transition-colors duration-300 animate-fadeUp"
    >
      <div className="mx-auto max-w-[1400px] px-6 pb-24 pt-10 md:pb-16 md:pt-28 md:px-16">
        <div className="text-center">
          <h2 className="relative z-10 text-3xl font-semibold tracking-[-0.02em] md:text-[3.2rem]">
            Contact <span className="text-secondary">me</span>
          </h2>
        </div>
        <div className="flex flex-col pt-10 md:flex-row">
          <div className="md:flex-[2]">
            <h4 className="mt-4 text-3xl uppercase">Let's talk</h4>
            <p className="my-4 leading-[1.8rem]">
              Looking for a senior frontend or full-stack role where I
              actually get to make the architectural calls. If that's what
              you're hiring for, email me directly or use the form below.
            </p>
            <div className="space-y-2">
              {contactData.map(({ icon, title, value }, contactIndex) => (
                <div
                  key={contactIndex}
                  className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between"
                >
                  <div className="grid grid-cols-[40px_1fr] items-center">
                    <i className={`${icon} flex items-center text-xl`}></i>
                    {title}
                  </div>
                  <p className="my-[0.3rem]">{`: ${value}`}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex">
              {socialMediaData.map(({ title, icon, link }, socialIndex) => (
                <a
                  key={socialIndex}
                  title={title}
                  href={link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="social-icon group mx-[0.4rem] flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-grey-5 bg-grey-5 text-ink transition-all duration-300"
                >
                  <i
                    className={`${icon} relative z-[3] text-xl transition-transform duration-500 group-hover:rotate-[360deg] group-hover:text-primary`}
                  />
                </a>
              ))}
            </div>
          </div>
          <div className="mt-10 md:ml-12 md:mt-0 md:flex-[3]">
            <form
              action="https://formsubmit.co/48a1e0c3a1922a7a7675febec7ace312"
              method="POST"
            >
              <div className="my-6 flex flex-col gap-6 sm:flex-row">
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="YOUR NAME"
                  className="w-full rounded-[14px] border border-transparent bg-grey-4 px-[1.2rem] py-[0.9rem] text-ink outline-none transition focus:border-secondary"
                />
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="YOUR EMAIL"
                  className="w-full rounded-[14px] border border-transparent bg-grey-4 px-[1.2rem] py-[0.9rem] text-ink outline-none transition focus:border-secondary"
                />
              </div>
              <div className="my-6">
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="ENTER SUBJECT"
                  className="w-full rounded-[14px] border border-transparent bg-grey-4 px-[1.2rem] py-[0.9rem] text-ink outline-none transition focus:border-secondary"
                />
                <input
                  type="hidden"
                  name="_next"
                  value="https://ris-hav.github.io/thankyou/"
                />
              </div>
              <div className="my-6">
                <textarea
                  name="message"
                  cols="15"
                  rows="8"
                  placeholder="Message here...."
                  className="w-full resize-none rounded-[14px] border border-transparent bg-grey-4 px-[1.2rem] py-[0.9rem] text-ink outline-none transition focus:border-secondary"
                ></textarea>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 font-medium text-white transition hover:opacity-85"
                >
                  <span className="text-base">Submit</span>
                  <span className="flex items-center justify-center text-sm">
                    <i className="fa-solid fa-paper-plane"></i>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
