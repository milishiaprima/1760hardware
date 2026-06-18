import Link from 'next/link';
import { Mail, Phone, MapPin } from 'lucide-react';

// WhatsApp Icon Component
const WhatsAppIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.425 0-2.768-.356-3.464-1.009-.321-.31-.465-.633-.465-.99 0-.898.803-1.727 2.006-1.727 1.375 0 2.682.863 2.682 2.223 0 .565-.2.967-.524 1.306-.656.658-2.065 1.096-3.267 1.096-1.159-.018-.994.014-1.896-.014.1.046.146.082.446.282.3.201 1.176.771 1.576 1.032.394.26.768.416 1.043.416.275 0 .556-.042.827-.126.134-.034.263-.084.388-.148.124-.064.295-.158.476-.282.18-.123.338-.265.486-.41.048-.034.095-.072.14-.112.045-.04.086-.084.126-.13.04-.046.074-.097.1-.152.026-.055.04-.115.04-.175 0-.18-.12-.34-.343-.47-.222-.13-.579-.19-1.051-.19z" />
  </svg>
);

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
                1760
              </div>
              <div>
                <div className="font-bold text-lg leading-tight">1760 Hardware</div>
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
                  <a href="mailto:support@1760hardware.com" className="text-gray-300 hover:text-orange-400 transition-colors">
                    support@1760hardware.com
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
            &copy; {currentYear} <span className="font-semibold">1760 Hardware</span>. All rights reserved.
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
