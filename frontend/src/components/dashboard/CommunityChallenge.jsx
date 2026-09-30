import React from "react";
import { Trophy } from "lucide-react";

const CommunityChallenge = () => {
  return (
    <section className="rounded-3xl p-8 text-white bg-gradient-to-r from-[#0F766E] to-teal-700 shadow-lg">

      <div className="flex flex-col lg:flex-row justify-between items-center gap-8">

        <div>

          <div className="flex items-center gap-3">

            <div className="w-14 h-14 rounded-2xl bg-white/20 flex items-center justify-center">
              <Trophy size={30} />
            </div>

            <div>

              <p className="uppercase tracking-widest text-teal-100 text-sm">
                Community Challenge
              </p>

              <h2 className="text-4xl font-bold">
                August Blood Drive
              </h2>

            </div>

          </div>

          <p className="mt-6 text-teal-100 max-w-2xl leading-7">
            Together, our community is working toward collecting
            <span className="font-bold text-white">
              {" "}500 blood donations{" "}
            </span>
            this month. Every donor brings us one step closer to saving lives.
          </p>

        </div>

        <div className="bg-white rounded-2xl p-6 text-[#0F172A] w-full lg:w-80">

          <div className="flex justify-between mb-2">

            <span className="font-semibold">
              Community Progress
            </span>

            <span className="font-bold text-[#0F766E]">
              65%
            </span>

          </div>

          <div className="h-3 rounded-full bg-[#E2E8F0] overflow-hidden">

            <div
              className="h-full bg-[#0F766E]"
              style={{
                width: "65%",
              }}
            />

          </div>

          <div className="mt-5 flex justify-between text-sm">

            <span>
              326 / 500 Donations
            </span>

            <span className="text-[#64748B]">
              174 Left
            </span>

          </div>

          <button className="mt-6 w-full bg-[#0F766E] text-white py-3 rounded-xl hover:bg-teal-700 transition">
            View Community Progress
          </button>

        </div>

      </div>

    </section>
  );
};

export default CommunityChallenge;