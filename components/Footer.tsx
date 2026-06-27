import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-black text-white mt-20">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-3 py-2 rounded-lg font-bold text-lg">
                ND
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">Nyumbani Doors</div>
                <div className="text-xs text-orange-400 font-semibold">Premium Doors & Hardware</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Leading manufacturer and supplier of quality doors and hardware solutions in Kajiado County, Kenya.
            </p>
            {/* Social Links */}
            <div className="flex gap-4 mt-6">
              <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors" title="Facebook">
                <span className="text-lg">f</span>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors" title="Twitter">
                <span className="text-lg">𝕏</span>
              </a>
              <a href="#" className="w-10 h-10 bg-slate-700 hover:bg-orange-500 rounded-full flex items-center justify-center transition-colors" title="Instagram">
                <span className="text-lg">📷</span>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-red-600 rounded"></div>
              Products
            </h4>
            <div className="space-y-3 text-sm">
              <Link href="/products/wooden-steel-doors" className="text-gray-400 hover:text-orange-400 transition-colors block">
                Wooden Doors
              </Link>
              <Link href="/products/wooden-steel-doors" className="text-gray-400 hover:text-orange-400 transition-colors block">
                Interior Doors
              </Link>
              <Link href="/products/wooden-steel-doors" className="text-gray-400 hover:text-orange-400 transition-colors block">
                Exterior Doors
              </Link>
            </div>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-red-600 rounded"></div>
              Company
            </h4>
            <div className="space-y-3 text-sm">
              <Link href="/" className="text-gray-400 hover:text-orange-400 transition-colors block">
                Home
              </Link>
              <Link href="/services" className="text-gray-400 hover:text-orange-400 transition-colors block">
                Services
              </Link>
              <Link href="#" className="text-gray-400 hover:text-orange-400 transition-colors block">
                About Us
              </Link>
              <Link href="/admin/login" className="text-gray-400 hover:text-orange-400 transition-colors block">
                Admin Panel
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-6 text-white flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-orange-500 to-red-600 rounded"></div>
              Contact Us
            </h4>
            <div className="space-y-4 text-sm">
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-500 text-xs mb-1">Phone</p>
                  <a href="tel:+254708932609" className="text-gray-300 hover:text-orange-400 transition-colors">
                    +254 708 932 609
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-500 text-xs mb-1">Email</p>
                  <a href="mailto:support@nyumbanidoors.com" className="text-gray-300 hover:text-orange-400 transition-colors">
                    support@nyumbanidoors.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-orange-500 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-500 text-xs mb-1">Address</p>
                  <p className="text-gray-300">
                    Kajiado, Kiserian<br />
                    Kenya
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 my-8"></div>

        {/* Bottom Footer */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            &copy; {currentYear} <span className="font-semibold">Nyumbani Doors</span>. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-orange-400 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-400 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-gray-500 hover:text-orange-400 transition-colors">
              Contact
            </a>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-slate-700">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 text-xs text-gray-500">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-400">✓</div>
              <span>Trusted by 1000+ Customers</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-400">✓</div>
              <span>Quality Guaranteed</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-orange-500/20 rounded-full flex items-center justify-center text-orange-400">✓</div>
              <span>Fast Delivery</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
