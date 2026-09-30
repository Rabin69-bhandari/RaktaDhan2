import React from "react";
import {
  HeartHandshake,
  Search,
  BellRing,
  ShieldCheck,
  Clock3,
  Users,
} from "lucide-react";

const features = [
  {
    icon: <HeartHandshake size={34} />,
    title: "Become a Donor",
    description:
      "Register as a voluntary blood donor and help save lives in your community.",
    color: "#0F766E",
    bg: "bg-teal-50",
  },
  {
    icon: <Search size={34} />,
    title: "Find Blood",
    description:
      "Search blood donors instantly by blood group and location during emergencies.",
    color: "#0EA5E9",
    bg: "bg-sky-50",
  },
  {
    icon: <BellRing size={34} />,
    title: "Emergency Requests",
    description:
      "Create urgent blood requests and notify nearby eligible donors.",
    color: "#F59E0B",
    bg: "bg-amber-50",
  },
  {
    icon: <ShieldCheck size={34} />,
    title: "Verified Donors",
    description:
      "Every donor profile is verified to improve reliability and safety.",
    color: "#10B981",
    bg: "bg-emerald-50",
  },
  {
    icon: <Clock3 size={34} />,
    title: "24/7 Availability",
    description:
      "Access blood requests and donor information anytime, anywhere.",
    color: "#0F766E",
    bg: "bg-teal-50",
  },
  {
    icon: <Users size={34} />,
    title: "Community Network",
    description:
      "Connect hospitals, donors, and patients through one centralized platform.",
    color: "#0EA5E9",
    bg: "bg-sky-50",
  },
];

const FeatureSection = () => {
  return (
    <section className="bg-[#FFFFFF] py-24">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto">
          <span className="inline-block px-4 py-2 rounded-full bg-teal-100 text-[#0F766E] font-medium">
            Why Choose Us
          </span>

          <h2 className="text-4xl font-bold text-[#0F172A] mt-5">
            Everything You Need to Save Lives
          </h2>

          <p className="text-[#64748B] mt-6 text-lg leading-8">
            Our platform connects blood donors, hospitals, and patients with a
            secure, fast, and reliable blood management system.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white border border-[#E2E8F0] rounded-2xl p-8 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div
                className={`${feature.bg} w-16 h-16 rounded-2xl flex items-center justify-center mb-6`}
                style={{ color: feature.color }}
              >
                {feature.icon}
              </div>

              <h3 className="text-2xl font-semibold text-[#0F172A] mb-4">
                {feature.title}
              </h3>

              <p className="text-[#64748B] leading-7">
                {feature.description}
              </p>

              <button
                className="mt-8 font-semibold flex items-center gap-2 transition"
                style={{ color: feature.color }}
              >
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;