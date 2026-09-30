import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-[#F8FAFC] min-h-[90vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Content */}
          <div>
            <span className="inline-block bg-teal-100 text-[#0F766E] px-4 py-2 rounded-full font-medium mb-6">
              ❤️ Every Drop Saves a Life
            </span>

            <h1 className="text-5xl lg:text-6xl font-bold text-[#0F172A] leading-tight">
              Donate Blood,
              <span className="text-[#0F766E]"> Save Lives.</span>
            </h1>

            <p className="text-[#64748B] text-lg mt-6 leading-8 max-w-xl">
              Join thousands of voluntary blood donors helping hospitals and
              patients during emergencies. Your one donation can save up to
              three lives.
            </p>

            <div className="flex flex-wrap gap-4 mt-10">
              <button className="bg-[#0F766E] text-white px-8 py-4 rounded-xl font-semibold hover:bg-teal-700 transition">
                Become a Donor
              </button>

              <button className="border border-[#0EA5E9] text-[#0EA5E9] px-8 py-4 rounded-xl font-semibold hover:bg-[#0EA5E9] hover:text-white transition">
                Find Blood
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5 mt-16">
              <div className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-sm">
                <h2 className="text-3xl font-bold text-[#0F766E]">
                  5K+
                </h2>
                <p className="text-[#64748B] mt-2">
                  Donors
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-sm">
                <h2 className="text-3xl font-bold text-[#0EA5E9]">
                  1.2K
                </h2>
                <p className="text-[#64748B] mt-2">
                  Donations
                </p>
              </div>

              <div className="bg-white rounded-2xl p-5 border border-[#E2E8F0] shadow-sm">
                <h2 className="text-3xl font-bold text-[#10B981]">
                  900+
                </h2>
                <p className="text-[#64748B] mt-2">
                  Lives Saved
                </p>
              </div>
            </div>
          </div>

          {/* Right Content */}
          <div className="relative flex justify-center">

            {/* Main Circle */}
            <div className="w-[500px] h-[500px] rounded-full bg-teal-100 flex items-center justify-center">

              <div className="w-[380px] h-[380px] rounded-full bg-[#0F766E] flex items-center justify-center shadow-2xl">

                <div className="text-center text-white">
                  <div className="text-8xl mb-4">
                    🩸
                  </div>

                  <h2 className="text-3xl font-bold">
                    Be Someone's Hero
                  </h2>

                  <p className="mt-4 text-teal-100 px-10">
                    One donation can save multiple lives.
                  </p>
                </div>

              </div>

            </div>

            {/* Floating Cards */}

            <div className="absolute top-8 left-0 bg-white border border-[#E2E8F0] rounded-xl px-5 py-4 shadow-lg">
              <h3 className="font-bold text-[#0F766E]">
                O+
              </h3>
              <p className="text-[#64748B] text-sm">
                Most Needed
              </p>
            </div>

            <div className="absolute bottom-12 right-0 bg-white border border-[#E2E8F0] rounded-xl px-5 py-4 shadow-lg">
              <h3 className="font-bold text-[#10B981]">
                24/7
              </h3>
              <p className="text-[#64748B] text-sm">
                Emergency Support
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;