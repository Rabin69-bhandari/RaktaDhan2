import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
} from "lucide-react";

const ContactSection = () => {
  return (
    <section className="bg-[#FFFFFF] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block bg-teal-100 text-[#0F766E] px-4 py-2 rounded-full font-medium">
            Contact Us
          </span>

          <h2 className="text-4xl font-bold text-[#0F172A] mt-5">
            We'd Love to Hear From You
          </h2>

          <p className="text-[#64748B] text-lg mt-6 leading-8">
            Whether you're looking to donate blood, need emergency assistance,
            or have any questions, our team is here to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 mt-16">

          {/* Left Side */}
          <div>

            <h3 className="text-3xl font-bold text-[#0F172A]">
              Get In Touch
            </h3>

            <p className="text-[#64748B] mt-4 leading-8">
              Our support team is available 24/7 to answer your questions and
              assist with blood donation or emergency requests.
            </p>

            <div className="mt-10 space-y-6">

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center text-[#0F766E]">
                  <Phone size={26} />
                </div>

                <div>
                  <h4 className="font-semibold text-[#0F172A]">
                    Phone
                  </h4>

                  <p className="text-[#64748B]">
                    +977 9812345678
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-sky-100 flex items-center justify-center text-[#0EA5E9]">
                  <Mail size={26} />
                </div>

                <div>
                  <h4 className="font-semibold text-[#0F172A]">
                    Email
                  </h4>

                  <p className="text-[#64748B]">
                    support@bloodconnect.com
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-emerald-100 flex items-center justify-center text-[#10B981]">
                  <MapPin size={26} />
                </div>

                <div>
                  <h4 className="font-semibold text-[#0F172A]">
                    Address
                  </h4>

                  <p className="text-[#64748B]">
                    Kathmandu, Nepal
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-amber-100 flex items-center justify-center text-[#F59E0B]">
                  <Clock size={26} />
                </div>

                <div>
                  <h4 className="font-semibold text-[#0F172A]">
                    Working Hours
                  </h4>

                  <p className="text-[#64748B]">
                    24 Hours / 7 Days
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Right Side */}
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-3xl p-8">

            <h3 className="text-2xl font-bold text-[#0F172A]">
              Send us a Message
            </h3>

            <div className="mt-8 space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-[#E2E8F0] rounded-xl px-5 py-4 outline-none focus:border-[#0F766E]"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-[#E2E8F0] rounded-xl px-5 py-4 outline-none focus:border-[#0F766E]"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full border border-[#E2E8F0] rounded-xl px-5 py-4 outline-none focus:border-[#0F766E]"
              />

              <textarea
                rows="6"
                placeholder="Your Message..."
                className="w-full border border-[#E2E8F0] rounded-xl px-5 py-4 outline-none resize-none focus:border-[#0F766E]"
              />

              <button
                className="w-full bg-[#0F766E] hover:bg-teal-700 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition"
              >
                <Send size={20} />
                Send Message
              </button>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;