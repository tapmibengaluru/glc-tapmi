import React from 'react'
import { Call, Envelop, Facebook, Instagram, LinkedIn, Youtube } from '../Svgs'

const Footer = () => {
  return (
<footer className="bg-[#2B2A29] py-20 lg:py-28">
        <div className="container hidden lg:block">
          <div className="flex justify-center flex-col items-center gap-8">
            <img src={"/images/glc2024/logo/tapmi.svg"} alt="logo" width={350} height={80} />
            <h1 className="text-center text-white/80 text-lg font-helvetica ">
              Manipal Academy of Higher Education,
              <br />
              Thanisandra Main Rd, Chokkanahalli, Bengaluru, Karnataka 560064
            </h1>
            {/* <div>
              <a href="tel:919179555441" className="w-fit flex items-center gap-2">
                <Call className="" />
                <p className="font-helvetica lg:text-lg font-bold">
                  Abhishek Singh: <span className="font-normal">+91 917 955 5441</span>
                </p>
              </a>
              <a href="tel:919606013114" className="w-fit flex items-center gap-2 mt-1">
                <Call className="" />
                <p className="font-helvetica lg:text-lg font-bold">
                  Jhonson P:
                  <span className="font-normal">+91 960 601 3114 </span>
                </p>
              </a>
            </div> */}
            {/* <a href="mailto:engage.tapmiblr@manipal.edu" className="w-fit flex gap-2 mt-1">
              <Envelop className="" />
              <p className="font-helvetica lg:text-lg  -mt-[6px]">engage.tapmiblr@manipal.edu</p>
            </a> */}
          </div>
          <hr className="border border-white/20 my-8" />
          <div className="mt-8">
  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
    {/* Contact Section */}
    <div className="grid gap-3 sm:grid-cols-2 lg:flex lg:flex-wrap lg:gap-6 text-white/80 font-helvetica">
      <a href="tel:919179555441" className="flex items-center gap-2">
        <Call />
        <p className="lg:text-lg font-bold">
          Abhishek Singh:
          <span className="font-normal"> +91 917 955 5441</span>
        </p>
      </a>

      <a href="tel:919606013114" className="flex items-center gap-2">
        <Call />
        <p className="lg:text-lg font-bold">
          Johnson P:
          <span className="font-normal"> +91 960 601 3114</span>
        </p>
      </a>

      <a href="mailto:engage.tapmiblr@manipal.edu" className="flex items-center gap-2 sm:col-span-2 lg:col-span-1">
        <Envelop />
        <p className="lg:text-lg">engage.tapmiblr@manipal.edu</p>
      </a>
    </div>

    {/* Social Icons */}
    <div className="flex gap-4 items-center justify-start lg:justify-end">
      <a href="https://www.instagram.com/tapmibengaluru/" target="_blank">
        <Instagram />
      </a>
      <a href="https://www.facebook.com/people/TAPMI-Bengaluru/61556082347769/" target="_blank">
        <Facebook />
      </a>
      <a href="https://www.linkedin.com/company/tapmibengaluru/" target="_blank">
        <LinkedIn />
      </a>
      <a href="https://www.youtube.com/@TAPMIBengaluru" target="_blank">
        <Youtube />
      </a>
    </div>
  </div>
</div>

        </div>
        <div className="container lg:hidden">
          <div className="flex flex-col text-white items-center gap-8">
            <img src={"/images/logo.png"} alt="logo" width={239} height={63} className="hidden lg:block" loading="lazy" />
            <img src={"/images/glc2024/logo/tapmi.svg"} className=" lg:hidden" alt="logo" width={202} height={51} loading="lazy" />
            <p className="font-helvetica lg:text-lg max-w-xs text-center">
              Manipal Academy of Higher Education, Thanisandra Main Rd, Chokkanahalli, Bengaluru, Karnataka 560064
            </p>

            <div>
              <h5 className="font-helvetica font-bold text-lg text-center text-[#EC2188] mb-2">Contact Us</h5>
              <a href="tel:919179555441" className="">
                <p className="font-helvetica font-bold text-center">
                  Abhishek Singh: <span className="font-normal"> +91 917 955 5441</span>
                </p>
              </a>
              <a href="tel:919606013114" className="  mt-1">
                <p className="font-helvetica  font-bold text-center">
                  Johnson P:
                   <span className="font-normal"> +91 960 601 3114 </span>
                </p>
              </a>
            </div>
            <div>
              <h5 className="font-helvetica font-bold text-lg text-center text-[#EC2188] mb-2">Reach Out</h5>
              <a href="mailto:engage.tapmiblr@manipal.edu" className=" mt-1">
                <p className="font-helvetica lg:text-lg text-center -mt-[6px]">engage.tapmiblr@manipal.edu</p>
              </a>
            </div>
          </div>
          <div className="mt-8 flex justify-center lg:justify-between items-end">
            <div className="flex gap-3 items-center">
              <a href="https://www.instagram.com/tapmibengaluru/" target="_blank">
                <Instagram />
              </a>
              <a href="https://www.facebook.com/people/TAPMI-Bengaluru/61556082347769/" target="_blank">
                <Facebook />
              </a>
              <a href="https://www.linkedin.com/company/tapmibengaluru/" target="_blank">
                <LinkedIn />
              </a>
              <a href="https://www.youtube.com/@TAPMIBengaluru" target="_blank">
                <Youtube />
              </a>
            </div>
          </div>
        </div>
      </footer>
  )
}

export default Footer
