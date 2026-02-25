"use client"
import React from "react"

const DelegateAdvantage = () => {
  return (
    <section className="font-helvetica relative px-2 md:px-0">
      <div className="max-w-[1300px] xl:max-w-[1400px] relative mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center px-4 md:px-12 py-10 md:py-16">
        {/* Left Content */}
        <div className="w-full xl:max-w-[80%]">
          <h2 className="text-[36px] leading-[1.1] sm:text-3xl md:text-5xl lg:text-6xl font-medium text-black mb-6 md:mb-8">
            The GLC Delegate Advantage
          </h2>
 <div className="lg:relative lg:hidden mb-5  w-full flex justify-center">
          <img
            src="/images/glc2024/delegate.webp"
            alt="GLC Delegate"
            width={600}
            height={500}
            className="w-full max-w-[500px] rounded-lg shadow-lg object-cover"
          />
        </div>
          <div className="space-y-6 md:space-y-8">
            {/* Point 1 */}
            <div>
              <h3 className="text-xl sm:text-2xl md:text-4xl font-medium text-[#404040]">
                Access to Global Leaders & Decision-Makers
              </h3>
              <p className="text-black/80 text-base sm:text-lg mt-2">
                Engage directly with CEOs, CHROs, and GCC heads driving
                transformation across industries.
              </p>
            </div>

            {/* Point 2 */}
            <div>
              <h3 className="text-xl sm:text-2xl md:text-4xl font-medium text-[#404040]">
                Future-Ready Insights & Strategies
              </h3>
              <p className="text-black/80 text-base sm:text-lg mt-2">
                Learn from cutting-edge discussions on AI, talent, finance,
                healthcare, retail, and IT shaping the next wave of GCCs.
              </p>
            </div>

            {/* Point 3 */}
            <div>
              <h3 className="text-xl sm:text-2xl md:text-4xl font-medium text-[#404040]">
                Networking & Collaboration Opportunities
              </h3>
              <p className="text-black/80 text-base sm:text-lg mt-2">
                Build meaningful connections with peers, experts, and potential
                partners to spark new ideas and initiatives.
              </p>
            </div>
          </div>

          {/* Button */}
          <button
            onClick={() => {
              window.open("https://forms.gle/ZZjzvXM16xx75WKf7", "_blank")
            }}
            className="mt-8  sm:w-auto px-6 py-3 font-bold text-lg sm:text-xl md:text-2xl text-white bg-[#F7038F] hover:bg-[#ed1d24] "
          >
            REGISTER NOW
          </button>
        </div>

        {/* Right Image */}
        <div className="lg:relative hidden  w-full lg:flex justify-center">
          <img
            src="/images/glc2024/delegate.webp"
            alt="GLC Delegate"
            width={600}
            height={500}
            className="w-full max-w-[500px] rounded-lg shadow-lg object-cover"
          />
        </div>

        {/* Decorative Gradients */}
        <div className="absolute bottom-0 right-0 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-l from-[#EC2188] to-[#FF9618] hidden sm:block"></div>
        <div className="absolute top-28 right-20 sm:right-[550px] xl:right-[640px] w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-t from-[#EC2188] to-[#FF9618] hidden lg:block"></div>
      </div>

      <div className="absolute bottom-32 sm:bottom-52 left-0 w-10 h-16 xl:w-16 xl:h-24 bg-gradient-to-br from-[#EC2188] to-[#FF9618] hidden sm:block"></div>
    </section>
  )
}

export default DelegateAdvantage
