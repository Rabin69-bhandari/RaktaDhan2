import React from "react";
import { Quote, Star } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Shrestha",
    role: "Blood Donor",
    message:
      "The platform made it incredibly easy to find nearby donation camps. Knowing my donation helped save a life is an amazing feeling.",
  },
  {
    name: "Dr. Anita Sharma",
    role: "Hospital Staff",
    message:
      "Managing emergency blood requests has become much faster. The donor network is reliable and easy to access.",
  },
  {
    name: "Sita Gurung",
    role: "Blood Recipient's Family",
    message:
      "During a critical emergency, we found compatible blood donors within minutes. We are forever grateful for this platform.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="bg-[#F8FAFC] py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="bg-teal-100 text-[#0F766E] px-4 py-2 rounded-full font-medium">
            Testimonials
          </span>

          <h2 className="text-4xl font-bold text-[#0F172A] mt-5">
            Trusted by Donors, Patients & Hospitals
          </h2>

          <p className="text-[#64748B] mt-6 text-lg leading-8">
            Every successful blood donation creates another life-changing story.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-8 shadow-sm hover:shadow-xl transition duration-300"
            >
              {/* Quote Icon */}
              <div className="w-14 h-14 rounded-full bg-teal-100 flex items-center justify-center text-[#0F766E] mb-6">
                <Quote size={28} />
              </div>

              {/* Stars */}
              <div className="flex gap-1 text-[#F59E0B] mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={18} fill="currentColor" />
                ))}
              </div>

              <p className="text-[#64748B] leading-7 italic">
                "{item.message}"
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-[#0F766E] flex items-center justify-center text-white font-bold text-lg">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold text-[#0F172A]">
                    {item.name}
                  </h4>

                  <p className="text-sm text-[#64748B]">
                    {item.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 text-center">
            <h3 className="text-3xl font-bold text-[#0F766E]">5K+</h3>
            <p className="text-[#64748B] mt-2">Registered Donors</p>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 text-center">
            <h3 className="text-3xl font-bold text-[#0EA5E9]">1.2K</h3>
            <p className="text-[#64748B] mt-2">Blood Requests</p>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 text-center">
            <h3 className="text-3xl font-bold text-[#10B981]">900+</h3>
            <p className="text-[#64748B] mt-2">Lives Saved</p>
          </div>

          <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 text-center">
            <h3 className="text-3xl font-bold text-[#F59E0B]">24/7</h3>
            <p className="text-[#64748B] mt-2">Support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;