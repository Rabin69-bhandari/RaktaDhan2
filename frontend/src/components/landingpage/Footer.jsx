import React from "react";
import { Link } from "react-router-dom";
import { Heart, Phone, Mail, MapPin } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F172A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-[#0F766E] flex items-center justify-center">
                <Heart size={24} fill="white" />
              </div>

              <div>
                <h2 className="text-2xl font-bold">
                  BloodConnect
                </h2>

                <p className="text-[#94A3B8] text-sm">
                  Blood Management System
                </p>
              </div>
            </div>

            <p className="mt-6 text-[#CBD5E1] leading-7">
              Connecting blood donors, hospitals, and patients through one
              trusted platform. Together we can save lives by making blood
              donation faster, easier, and more accessible.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Quick Links
            </h3>

            <ul className="space-y-4 text-[#CBD5E1]">
              <li>
                <Link to="/" className="hover:text-[#0F766E] transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-[#0F766E] transition">
                  About
                </Link>
              </li>

              <li>
                <Link to="/donors" className="hover:text-[#0F766E] transition">
                  Find Donors
                </Link>
              </li>

              <li>
                <Link
                  to="/requests"
                  className="hover:text-[#0F766E] transition"
                >
                  Blood Requests
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="hover:text-[#0F766E] transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Contact Info
            </h3>

            <div className="space-y-5 text-[#CBD5E1]">

              <div className="flex items-center gap-3">
                <Phone className="text-[#0F766E]" size={18} />
                <span>+977 9812345678</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="text-[#0F766E]" size={18} />
                <span>support@bloodconnect.com</span>
              </div>

              <div className="flex items-center gap-3">
                <MapPin className="text-[#0F766E]" size={18} />
                <span>Kathmandu, Nepal</span>
              </div>

            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-xl font-semibold mb-6">
              Follow Us
            </h3>

            <p className="text-[#CBD5E1] leading-7">
              Follow us on social media for blood donation campaigns,
              announcements, and community updates.
            </p>

            <div className="flex gap-4 mt-8">

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#1E293B] hover:bg-[#0F766E] transition flex items-center justify-center"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#1E293B] hover:bg-[#0F766E] transition flex items-center justify-center"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#1E293B] hover:bg-[#0F766E] transition flex items-center justify-center"
              >
                <FaTwitter />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-[#1E293B] hover:bg-[#0F766E] transition flex items-center justify-center"
              >
                <FaLinkedinIn />
              </a>

            </div>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-[#334155] mt-14 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-[#94A3B8] text-center">
            © {new Date().getFullYear()} BloodConnect. All Rights Reserved.
          </p>

          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-[#94A3B8] hover:text-[#0F766E] transition"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-[#94A3B8] hover:text-[#0F766E] transition"
            >
              Terms & Conditions
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;