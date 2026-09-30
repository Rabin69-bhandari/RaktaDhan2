import React from "react";
import { ArrowRight, Clock3, MapPin, Droplets } from "lucide-react";

const ActiveRequests = () => {
  const requests = [
    {
      id: 1,
      bloodGroup: "O+",
      hospital: "Teaching Hospital",
      location: "Kathmandu",
      urgency: "Urgent",
      time: "20 mins ago",
    },
    {
      id: 2,
      bloodGroup: "AB-",
      hospital: "Patan Hospital",
      location: "Lalitpur",
      urgency: "High",
      time: "1 hour ago",
    },
    {
      id: 3,
      bloodGroup: "B+",
      hospital: "Civil Hospital",
      location: "Kathmandu",
      urgency: "Normal",
      time: "Today",
    },
  ];

  const badgeColor = (urgency) => {
    switch (urgency) {
      case "Urgent":
        return "bg-teal-100 text-[#0F766E]";
      case "High":
        return "bg-amber-100 text-[#F59E0B]";
      default:
        return "bg-sky-100 text-[#0EA5E9]";
    }
  };

  return (
    <section className="bg-white border border-[#E2E8F0] rounded-3xl p-6 shadow-sm">

      {/* Header */}

      <div className="flex justify-between items-center mb-6">

        <div>

          <h2 className="text-2xl font-bold text-[#0F172A]">
            Active Blood Requests
          </h2>

          <p className="text-[#64748B] mt-1">
            Patients currently looking for blood donors.
          </p>

        </div>

        <button className="text-[#0F766E] font-semibold flex items-center gap-2 hover:gap-3 transition-all">
          View All
          <ArrowRight size={18} />
        </button>

      </div>

      {/* Requests */}

      <div className="space-y-4">

        {requests.map((request) => (

          <div
            key={request.id}
            className="border border-[#E2E8F0] rounded-2xl p-5 hover:border-[#0F766E] hover:shadow-md transition-all"
          >

            <div className="flex justify-between items-start">

              <div className="flex gap-4">

                <div className="w-14 h-14 rounded-xl bg-teal-100 flex items-center justify-center">

                  <Droplets
                    size={28}
                    className="text-[#0F766E]"
                  />

                </div>

                <div>

                  <div className="flex items-center gap-3">

                    <h3 className="text-xl font-bold text-[#0F172A]">
                      {request.bloodGroup}
                    </h3>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold ${badgeColor(
                        request.urgency
                      )}`}
                    >
                      {request.urgency}
                    </span>

                  </div>

                  <p className="text-[#0F172A] font-medium mt-2">
                    {request.hospital}
                  </p>

                  <div className="flex flex-wrap gap-5 mt-3 text-sm text-[#64748B]">

                    <span className="flex items-center gap-1">
                      <MapPin size={15} />
                      {request.location}
                    </span>

                    <span className="flex items-center gap-1">
                      <Clock3 size={15} />
                      {request.time}
                    </span>

                  </div>

                </div>

              </div>

              <button className="text-[#0F766E] font-semibold hover:underline">
                View
              </button>

            </div>

          </div>

        ))}

      </div>

    </section>
  );
};

export default ActiveRequests;