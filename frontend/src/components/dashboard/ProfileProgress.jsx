import React from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProfileProgress = ({ onboardingStep }) => {
  const navigate = useNavigate();

  const progress = (onboardingStep / 4) * 100;

  return (
    <section className="bg-white border border-[#E2E8F0] rounded-3xl p-8 shadow-sm">

      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

        <div>

          <span className="inline-flex items-center px-4 py-2 rounded-full bg-teal-100 text-[#0F766E] font-medium">
            Complete Your Profile
          </span>

          <h2 className="text-3xl font-bold text-[#0F172A] mt-5">
            You're {progress}% Ready
          </h2>

          <p className="text-[#64748B] mt-3 max-w-xl">
            Complete your donor profile to unlock all BloodConnect
            features and become eligible for blood donation.
          </p>

          <button
            onClick={() => navigate("/profile")}
            className="mt-8 bg-[#0F766E] text-white px-6 py-3 rounded-xl flex items-center gap-2 hover:bg-teal-700 transition"
          >
            Continue Profile
            <ArrowRight size={18} />
          </button>

        </div>

        <div className="lg:w-80">

          <div className="flex justify-between mb-3">

            <span className="text-[#64748B] font-medium">
              Progress
            </span>

            <span className="font-bold text-[#0F766E]">
              {progress}%
            </span>

          </div>

          <div className="w-full h-4 rounded-full bg-[#E2E8F0] overflow-hidden">

            <div
              className="h-full bg-[#0F766E] transition-all duration-700"
              style={{
                width: `${progress}%`,
              }}
            />

          </div>

          <p className="mt-4 text-sm text-[#64748B]">
            Step {onboardingStep} of 4 completed
          </p>

        </div>

      </div>

    </section>
  );
};

export default ProfileProgress;