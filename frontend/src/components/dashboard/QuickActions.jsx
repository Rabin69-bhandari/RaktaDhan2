import React from "react";
import { useNavigate } from "react-router-dom";
import {
  HeartHandshake,
  Droplets,
  UserRound,
  History,
} from "lucide-react";

const QuickActions = () => {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Donate Blood",
      description: "Register as a blood donor.",
      icon: HeartHandshake,
      color: "bg-teal-100 text-[#0F766E]",
      hover: "hover:border-[#0F766E]",
      path: "/donate",
    },
    {
      title: "Request Blood",
      description: "Create a blood request.",
      icon: Droplets,
      color: "bg-sky-100 text-[#0EA5E9]",
      hover: "hover:border-[#0EA5E9]",
      path: "/request",
    },
    {
      title: "My Profile",
      description: "Update your information.",
      icon: UserRound,
      color: "bg-emerald-100 text-[#10B981]",
      hover: "hover:border-[#10B981]",
      path: "/profile",
    },
    {
      title: "History",
      description: "View donation history.",
      icon: History,
      color: "bg-amber-100 text-[#F59E0B]",
      hover: "hover:border-[#F59E0B]",
      path: "/history",
    },
  ];

  return (
    <section>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-bold text-[#0F172A]">
            Quick Actions
          </h2>
          <p className="text-[#64748B] mt-1">
            Everything you need is just one click away.
          </p>
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <button
              key={action.title}
              onClick={() => navigate(action.path)}
              className={`group bg-white border border-[#E2E8F0] rounded-2xl p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${action.hover}`}
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center ${action.color}`}
              >
                <Icon size={28} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-[#0F172A]">
                {action.title}
              </h3>

              <p className="mt-2 text-sm text-[#64748B] leading-6">
                {action.description}
              </p>

              <div className="mt-6 flex items-center text-sm font-semibold text-[#0F766E] opacity-0 group-hover:opacity-100 transition-opacity">
                Open →
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
};

export default QuickActions;