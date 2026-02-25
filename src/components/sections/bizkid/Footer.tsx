"use client";

import { Instagram2, LinkedIn2, Meta, Youtube2 } from "@/components/Svgs";
import { FaPhone, FaEnvelope } from "react-icons/fa6";
export default function Footer() {
  return (
    <section className="bg-[#020000] py-20 lg:py-28">
      <div className="container space-y-8 hidden lg:block">
        <div className="flex items-center justify-between">
          <img
            src="/bizkid/tapmi-logo.svg"
            alt="logo"
            width={328}
            height={84}
            loading="lazy"
          />
          <button
            onClick={() => {
              window.open("https://forms.office.com/r/7jEi84CFeH", "_blank");
            }}
            className="border border-white mt-4 py-4 px-8 text-2xl font-helvetica font-extrabold text-white rounded-xl  block"
          >
            Register Now
          </button>
        </div>
        <div className="">
          <p className="font-helvetica font-extrabold text-sm text-white uppercase">
            Manipal academy of higher education
          </p>
          <p className="font-helvetica font-extrabold text-sm text-white mt-2 max-w-sm">
            T.A. Pai Management Institute (TAPMI) Manipal Academy of Higher
            Education, Near BSF Campus, Yelahanka, Govindapura, Bangalore,
            India, 560064
          </p>
          <button
            onClick={() => {
              window.open("https://www.tapmi.edu.in/bba-honors/", "_blank");
            }}
            className="border border-white mt-4 py-3 px-8 text-2xl font-helvetica font-extrabold text-white   block"
          >
            Visit Us
          </button>
        </div>
        <div className="flex items-center justify-between ">
          <div className="flex items-center gap-2">
            <div
              onClick={() => {
                window.open(
                  "https://www.instagram.com/tapmibengaluru/",
                  "_blank"
                );
              }}
            >
              <Instagram2 className="cursor-pointer w-10 h-10" />
            </div>
            <div
              onClick={() => {
                window.open(
                  "https://www.facebook.com/people/TAPMI-Bengaluru/61556082347769/",
                  "_blank"
                );
              }}
            >
              <Meta className="cursor-pointer w-10 h-10" />
            </div>
            <div
              onClick={() => {
                window.open(
                  "https://www.linkedin.com/company/tapmibengaluru/",
                  "_blank"
                );
              }}
            >
              <LinkedIn2 className="cursor-pointer w-10 h-10" />
            </div>
            <div
              onClick={() => {
                window.open(
                  "https://www.youtube.com/@TAPMIBengaluru",
                  "_blank"
                );
              }}
            >
              <Youtube2 className="cursor-pointer w-10 h-10" />
            </div>
          </div>
          <div>
            <div>
              <a
                href="tel:+918494936498"
                className="text-white font-helvetica font-extrabold text-xl flex items-center gap-4 justify-end"
              >
                <FaPhone />
                +91 849 493 6498
              </a>
              <a
                href="mailto:tapmi.admissions@manipal.edu"
                className="text-white font-helvetica font-extrabold text-xl flex items-center gap-4 mt-2"
              >
                <FaEnvelope />
                tapmi.admissions@manipal.edu
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container lg:hidden flex items-center justify-center flex-col gap-16">
        <div>
          <img
            src="/bizkid/tapmi-logo.svg"
            alt="logo"
            width={328}
            height={84}
            loading="lazy"
            className="w-56 mx-auto"
          />
          <p className="font-helvetica font-extrabold text-[12px] leading-tight text-white uppercase mt-4">
            Manipal academy of higher education
          </p>
          <button
            onClick={() => {
              window.open("https://www.tapmi.edu.in/bba-honors/", "_blank");
            }}
            className="border border-white mt-4 py-2 px-4 mx-auto text-[13px] font-helvetica font-extrabold text-white   block"
          >
            Visit Us
          </button>
        </div>
        <div>
          <h5 className=" font-helvetica text-center font-extrabold leading-[18px] text-white uppercase">
            Contact Us
          </h5>
          <a
            href="tel:+918494936498"
            className="text-white font-helvetica font-medium text-xs text-center mx-auto mt-2 block w-fit"
          >
            +91 849 493 6498
          </a>
          <a
            href="mailto:tapmi.admissions@manipal.edu"
            className="text-white font-helvetica font-medium text-xs text-center mx-auto mt-2 block w-fit "
          >
            tapmi.admissions@manipal.edu
          </a>
        </div>
        <button
          onClick={() => {
            window.open("https://rebrand.ly/bizkid24apply", "_blank");
          }}
          className="border border-white py-4 px-8 lg:text-2xl font-helvetica font-extrabold text-white rounded-xl  block"
        >
          Register Now
        </button>
        <div className="flex items-center gap-2">
          <div
            onClick={() => {
              window.open(
                "https://www.instagram.com/tapmibengaluru/",
                "_blank"
              );
            }}
          >
            <Instagram2 className="cursor-pointer w-10 h-10" />
          </div>
          <div
            onClick={() => {
              window.open(
                "https://www.facebook.com/people/TAPMI-Bengaluru/61556082347769/",
                "_blank"
              );
            }}
          >
            <Meta className="cursor-pointer w-10 h-10" />
          </div>
          <div
            onClick={() => {
              window.open(
                "https://www.linkedin.com/company/tapmibengaluru/",
                "_blank"
              );
            }}
          >
            <LinkedIn2 className="cursor-pointer w-10 h-10" />
          </div>
          <div
            onClick={() => {
              window.open("https://www.youtube.com/@TAPMIBengaluru", "_blank");
            }}
          >
            <Youtube2 className="cursor-pointer w-10 h-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
