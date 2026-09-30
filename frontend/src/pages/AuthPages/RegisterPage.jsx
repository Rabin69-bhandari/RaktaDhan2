import React, { useState } from "react";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Register } from "../../apis/Register";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthProvider";

const RegisterPage = () => {

  const{setuser} = useAuth()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
    const [error,setError]=useState('');
    const navigate = useNavigate()
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try { const response = await Register(formData)

    setuser(response.users)
    navigate("/") } catch(e) {setError(e.message)}

    
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center px-4">

      <div className="w-full max-w-md bg-white border border-[#E2E8F0] rounded-3xl shadow-lg p-8">

        {/* Logo */}
        <div className="flex flex-col items-center mb-8">

          <div className="w-16 h-16 rounded-full bg-[#0F766E] flex items-center justify-center">
            <Heart size={30} fill="white" className="text-white" />
          </div>

          <h1 className="text-3xl font-bold text-[#0F172A] mt-4">
            BloodConnect
          </h1>

          <p className="text-[#64748B] mt-2">
            Create your account
          </p>

        </div>

        {error&&<p className='error' role='alert'>{error}</p>}
        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block mb-2 font-medium text-[#0F172A]">
              Full Name
            </label>

            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-[#E2E8F0] rounded-xl outline-none focus:border-[#0F766E] transition"
            />
          </div>

          {/* Email */}
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
              className="w-full px-4 py-3 border border-[#E2E8F0] rounded-xl outline-none focus:border-[#0F766E] transition"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-2 font-medium text-[#0F172A]">
              Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="At least 8 characters"
              minLength={8}
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-[#E2E8F0] rounded-xl outline-none focus:border-[#0F766E] transition"
            />
          </div>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full bg-[#0F766E] hover:bg-teal-700 text-white py-3 rounded-xl font-semibold transition duration-300"
          >
            Create Account
          </button>

        </form>

        {/* Login Link */}
        <p className="text-center text-[#64748B] mt-8">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-[#0F766E] font-semibold hover:underline"
          >
            Login
          </Link>
        </p>

      </div>

    </div>
  );
};

export default RegisterPage;