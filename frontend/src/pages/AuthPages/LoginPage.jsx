import React, { useState } from "react";
import { Heart } from "lucide-react";

import { Login } from "../../apis/Login";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider"

const LoginPage = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error,setError] = useState('');
  const navigate = useNavigate()
  const {setuser} = useAuth()

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {

    e.preventDefault();
    try { const response = await Login(formData)
 

    setuser(response.users)
    navigate("/") } catch(e) {setError(e.message)}
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white rounded-3xl shadow-lg border border-[#E2E8F0] p-8">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">

          <div className="w-16 h-16 rounded-full bg-[#0F766E] flex items-center justify-center text-white">
            <Heart size={32} fill="white" />
          </div>

          <h1 className="text-3xl font-bold text-[#0F172A] mt-4">
            BloodConnect
          </h1>

          <p className="text-[#64748B] mt-2">
            Sign in to your account
          </p>

        </div>

        {error && <p role='alert' className='error'>{error}</p>}
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">

          <div>
            <label className="block mb-2 font-medium text-[#0F172A]">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-[#E2E8F0] rounded-xl px-4 py-3 outline-none focus:border-[#0F766E]"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-[#0F172A]">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border border-[#E2E8F0] rounded-xl px-4 py-3 outline-none focus:border-[#0F766E]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#0F766E] hover:bg-teal-700 text-white py-3 rounded-xl font-semibold transition duration-300"
          >
            Login
          </button>

        </form>

        {/* Footer */}
        <p className="text-center text-[#64748B] mt-8">
          Don't have an account?{" "}
          <Link to="/register" className="text-[#0F766E] font-semibold cursor-pointer hover:underline">
            Register
          </Link>
        </p>

      </div>

    </div>
  );
};

export default LoginPage;