import React from "react";
import { Mail, Phone, Instagram, Facebook, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#d9e8dc] to-[#eaf2ed] text-[#1f4037] mt-12 pt-10 pb-6 shadow-inner rounded-t-2xl border-t border-[#c7d9cf]">
      
      {/* Decorative Divider (optional) */}
      <div className="flex justify-center mb-6">
        <div className="w-24 h-1 bg-[#b9cfc0] rounded-full"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8"
      >

        {/* Left Section: Info */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold text-[#1f4037] mb-1">
            Rida Psychotherapy & Counselling Service
          </h2>
          <p className="text-[#4a645a] text-sm italic">
            Culturally and spiritually informed support for healing and growth
          </p>
        </div>

        {/* Middle Section: Contact */}
        <div className="text-sm text-[#1f4037] space-y-2 text-center md:text-left">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Phone size={16} />
            <a href="tel:07823663208" className="hover:text-[#3d705f] transition-colors">
              0782 366 3208
            </a>
          </div>
          <div className="flex items-center justify-center md:justify-start gap-2">
            <Mail size={16} />
            <a
              href="mailto:jbrtherapy@gmail.com?subject=Rida%20Enquiry"
              className="hover:text-[#3d705f] transition-colors"
            >
              contact@ridatherapy.com
            </a>
          </div>
        </div>

        {/* Right Section: Social + Call to Action */}
        <div className="flex flex-col items-center md:items-end space-y-2">
          <p className="text-sm text-[#4a645a]">Follow or reach out:</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="hover:text-[#3d705f] transition-colors">
              <Instagram size={18} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-[#3d705f] transition-colors">
              <Facebook size={18} />
            </a>
            <a href="mailto:jbrtherapy@gmail.com?subject=Rida%20Enquiry" aria-label="Email" className="hover:text-[#3d705f] transition-colors">
              <MessageCircle size={18} />
            </a>
          </div>

          {/* Call to action button */}
          <motion.a
            href="mailto:jbrtherapy@gmail.com?subject=Rida%20Enquiry"
            className="mt-3 inline-block bg-[#3d705f] text-white text-sm font-medium px-4 py-2 rounded-lg shadow hover:bg-[#30594d] transition"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            Book a Session
          </motion.a>
        </div>
      </motion.div>

      {/* Bottom Line */}
      <div className="mt-10 text-center text-xs text-[#4a645a] border-t border-[#c7d9cf] pt-3">
        © {new Date().getFullYear()} Rida Psychotherapy & Counselling Service. All rights reserved.
      </div>
    </footer>
  );
}
