import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import {
  LayoutDashboard,
  HeartHandshake,
  Droplet,
  History,
  User,
  Settings,
  LogOut,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Logout } from "../../apis/Logout";
import { useAuth } from "../../contexts/AuthProvider";

const DashBoardLayout = () => {
  
  const navigate = useNavigate()

  const {user,setuser} = useAuth()
  const handleLogOut = async ()=>{

    try{
      if (!sessionStorage.getItem("bloodconnect-demo")) await Logout();
      sessionStorage.removeItem("bloodconnect-demo");
      setuser(null)
      navigate("/")
    }catch(error){
      console.log(error)
    }

  }

  const navLink =
    "flex items-center gap-3 px-4 py-3 rounded-xl text-[#64748B] hover:bg-teal-50 hover:text-[#0F766E] transition-all duration-200";

  const active =
    "bg-[#0F766E] text-white shadow-lg";

  return (
    <div className="min-h-screen lg:h-screen bg-[#F8FAFC] flex overflow-hidden">

      {/* Sidebar */}
      <aside className="w-20 lg:w-72 bg-white border-r border-[#E2E8F0] flex flex-col">

        {/* Logo */}
        <div className="h-20 border-b border-[#E2E8F0] flex items-center px-6">
          <div className="w-12 h-12 rounded-full bg-[#0F766E] flex items-center justify-center text-white text-xl">
            ❤️
          </div>

          <div className="ml-3 hidden lg:block">
            <h2 className="text-xl font-bold text-[#0F172A]">
              BloodConnect
            </h2>

            <p className="text-sm text-[#64748B]">
              User Dashboard
            </p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 lg:px-5 py-8 space-y-3">

          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              `${navLink} ${isActive ? active : ""}`
            }
          >
            <LayoutDashboard size={22} />
            Dashboard
          </NavLink>

          <NavLink
            to="/donate"
            className={({ isActive }) =>
              `${navLink} ${isActive ? active : ""}`
            }
          >
            <HeartHandshake size={22} />
            Donate Blood
          </NavLink>

          <NavLink
            to="/request"
            className={({ isActive }) =>
              `${navLink} ${isActive ? active : ""}`
            }
          >
            <Droplet size={22} />
            Request Blood
          </NavLink>

          <NavLink
            to="/history"
            className={({ isActive }) =>
              `${navLink} ${isActive ? active : ""}`
            }
          >
            <History size={22} />
            History
          </NavLink>

          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `${navLink} ${isActive ? active : ""}`
            }
          >
            <User size={22} />
            Profile
          </NavLink>

          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `${navLink} ${isActive ? active : ""}`
            }
          >
            <Settings size={22} />
            Settings
          </NavLink>

        </nav>

        {/* Logout */}
        <div onClick={handleLogOut} className="border-t border-[#E2E8F0] p-5">

          <button className="w-full flex items-center justify-center gap-3 bg-[#0F766E] text-white py-3 rounded-xl hover:bg-teal-700 transition">
            <LogOut size={20} />
            Logout
          </button>

        </div>

      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col min-h-0">

        {/* Top Bar */}
        <header className="h-20 bg-white border-b border-[#E2E8F0] flex items-center justify-between px-4 lg:px-8">

          <div>
            <h1 className="text-2xl font-bold text-[#0F172A]">
              Welcome Back 👋
            </h1>

            <p className="text-[#64748B]">
              Manage your blood donation activities.
            </p>
          </div>

          {/* Profile */}
          <div className="flex items-center gap-4">

            <div className="text-right">
              <h3 className="font-semibold text-[#0F172A]">
                {user.name}
              </h3>

          
            </div>

            <div className="w-12 h-12 rounded-full bg-[#0F766E] text-white flex items-center justify-center font-bold">
              {user.name?.slice(0,1)}
            </div>

          </div>

        </header>

        {/* Outlet */}
        <div className="flex-1 overflow-y-auto min-h-0 p-4 lg:p-8">
          <Outlet />
        </div>

      </main>

    </div>
  );
};

export default DashBoardLayout;