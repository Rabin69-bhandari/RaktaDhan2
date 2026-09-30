import React from "react";
import {
  CalendarDays,
  Heart,
  Info,
  ArrowRight,
} from "lucide-react";

const CommunityUpdates = () => {
  const updates = [
    {
      title: "Stay Hydrated Before Donation",
      description:
        "Drink plenty of water 24 hours before donating blood to help make the donation process smoother.",
      icon: Heart,
      color: "bg-teal-100 text-[#0F766E]",
    },
    {
      title: "Blood Donation Camp",
      description:
        "A community blood donation camp is scheduled this Saturday at Kathmandu City Hall from 9 AM.",
      icon: CalendarDays,
      color: "bg-sky-100 text-[#0EA5E9]",
    },
    {
      title: "Did You Know?",
      description:
        "A single blood donation can help save up to three lives through different blood components.",
      icon: Info,
      color: "bg-emerald-100 text-[#10B981]",
    },
  ];

  return (
    <section className="bg-white border border-[#E2E8F0] rounded-3xl p-6 shadow-sm">

      {/* Header */}

      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-2xl font-bold text-[#0F172A]">
            Community Updates
          </h2>

          <p className="text-[#64748B] mt-1">
            Stay informed with the latest news and tips.
          </p>

        </div>

      </div>

      {/* Updates */}

      <div className="space-y-5">

        {updates.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex gap-4 border border-[#E2E8F0] rounded-2xl p-5 hover:border-[#0F766E] transition"
            >

              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 ${item.color}`}
              >
                <Icon size={26} />
              </div>

              <div className="flex-1">

                <h3 className="text-lg font-semibold text-[#0F172A]">
                  {item.title}
                </h3>

                <p className="text-[#64748B] mt-2 leading-7">
                  {item.description}
                </p>

                <button className="mt-4 flex items-center gap-2 text-[#0F766E] font-semibold hover:gap-3 transition-all">
                  Read More
                  <ArrowRight size={16} />
                </button>

              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};

export default CommunityUpdates;