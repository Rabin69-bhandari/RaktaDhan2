import React from "react";
import {
  HeartHandshake,
  Droplets,
  HeartPulse,
} from "lucide-react";

const StatsCards = () => {
  const stats = [
    {
      title: "Blood Donations",
      value: 0,
      subtitle: "Total donations made",
      icon: HeartHandshake,
      bg: "bg-teal-100",
      color: "text-[#0F766E]",
    },
    {
      title: "Blood Requests",
      value: 0,
      subtitle: "Requests created",
      icon: Droplets,
      bg: "bg-sky-100",
      color: "text-[#0EA5E9]",
    },
    {
      title: "Lives Impacted",
      value: 0,
      subtitle: "Estimated lives helped",
      icon: HeartPulse,
      bg: "bg-emerald-100",
      color: "text-[#10B981]",
    },
  ];

  return (
    <section>

      <div className="mb-6">
        <h2 className="text-2xl font-bold text-[#0F172A]">
          Your Activity
        </h2>

        <p className="text-[#64748B] mt-1">
          Track your contribution to the BloodConnect community.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        {stats.map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="bg-white border border-[#E2E8F0] rounded-2xl p-6 hover:shadow-lg transition"
            >

              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center ${stat.bg}`}
              >
                <Icon className={stat.color} size={28} />
              </div>

              <h3 className="mt-6 text-4xl font-bold text-[#0F172A]">
                {stat.value}
              </h3>

              <p className="mt-2 font-semibold text-[#0F172A]">
                {stat.title}
              </p>

              <p className="mt-1 text-sm text-[#64748B]">
                {stat.subtitle}
              </p>

            </div>
          );
        })}

      </div>

    </section>
  );
};

export default StatsCards;