import React from "react";
import profileImage from "../asset/img/profile.webp";
import cv from "../asset/Rishav_Saha_Frontend_Developer.pdf";
import { FaDownload, FaEnvelope, FaLinkedinIn } from "react-icons/fa";

export default function Header() {
  return (
    <header
      id="home"
      className="min-h-screen w-full overflow-hidden bg-primary text-ink transition-colors duration-300 animate-fadeUp"
    >
      <div className="mx-auto grid min-h-screen max-w-[1400px] grid-cols-1 items-center gap-10 px-6 md:grid-cols-2 md:px-16">
        <div className="relative order-2 flex items-center justify-center md:order-1">
          <div className="absolute left-[10%] top-[20%] h-3/5 w-3/5 -z-10 rounded-full bg-[radial-gradient(circle,var(--color-secondary)_0%,transparent_70%)] opacity-[0.35] blur-[70px]" />
          <div className="aspect-[3/4] w-[90%] max-w-[420px] overflow-hidden rounded-[18px] bg-black md:ml-16 md:w-[68%] md:max-w-none">
            <img
              src={profileImage}
              alt="Rishav Saha"
              className="h-full w-full object-cover grayscale transition-all duration-300 hover:grayscale-0"
            />
          </div>
        </div>
        <div className="order-1 mx-auto w-[90%] md:order-2 md:mx-0 md:w-auto md:pr-12">
          <p className="m-0 text-sm font-semibold uppercase tracking-[3px] text-secondary">
            Senior Frontend Developer
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-[1.1] tracking-[-0.02em] sm:text-4xl md:text-[3.4rem]">
            Hi, I'm <span className="text-secondary">Rishav</span>. I build
            React &amp; Angular applications that scale.
          </h1>
          <p className="my-6 max-w-[40rem] leading-[1.9rem] text-grey-1">
            I've spent the last 5+ years building React and Angular apps for
            B2B SaaS companies. That includes a travel platform used across
            Italy and a React Native app I built from scratch at OnlyGood.
            I like taking messy, hand-rolled UI and turning it into something
            the rest of the team can actually work with.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <a
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-secondary px-7 py-3.5 font-medium text-white transition hover:opacity-85"
            >
              <span className="text-base">Download CV</span>
              <span className="flex items-center justify-center text-sm">
                <FaDownload />
              </span>
            </a>
            <a
              href="mailto:saharishav53@gmail.com"
              className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-grey-4 text-lg text-ink transition hover:bg-secondary hover:text-white"
              aria-label="Email Rishav"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.linkedin.com/in/rssh/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-grey-4 text-lg text-ink transition hover:bg-secondary hover:text-white"
              aria-label="Rishav's LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
