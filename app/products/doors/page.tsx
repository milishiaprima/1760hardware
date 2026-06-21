'use client';

import { Navbar, Footer } from '@/components/index';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

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

export default function DoorsCategory() {
  const doorCategories = [
    {
      id: 1,
      name: 'Interior Doors',
      description: 'Premium quality interior doors for residential and commercial spaces',
      image: '/doors/doors%20interior.jpg',
      icon: '🚪',
      href: '/products/doors/interior',
      features: ['Elegant designs', 'Smooth finishes', 'Durable construction'],
      color: 'from-blue-50 to-blue-100',
      borderColor: 'border-blue-200',
      hoverColor: 'hover:border-blue-400',
    },
    {
      id: 2,
      name: 'Exterior Doors',
      description: 'Heavy-duty steel exterior doors with advanced security features',
      image: '/doors/home%20door.jpg',
      icon: '🛡️',
      href: '/products/doors/exterior',
      features: ['Weather-resistant', 'High security', 'Professional finishes'],
      color: 'from-red-50 to-red-100',
      borderColor: 'border-red-200',
      hoverColor: 'hover:border-red-400',
    },
    {
      id: 3,
      name: 'Wooden Doors',
      description: 'Premium wooden doors combining elegance and durability',
      image: '/doors/home%20door.jpg',
      icon: '🌳',
      href: '/products/doors/wooden',
      features: ['Natural finishes', 'Expert crafted', 'Long-lasting'],
      color: 'from-orange-50 to-orange-100',
      borderColor: 'border-orange-200',
      hoverColor: 'hover:border-orange-400',
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden bg-linear-to-br from-slate-950 via-slate-900 to-slate-800">
        <div className="absolute inset-0">
          <div className="absolute -top-40 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 -right-32 w-80 h-80 bg-red-400 rounded-full blur-3xl opacity-15 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-orange-500/20 rounded-full border border-orange-400/40 backdrop-blur">
              <p className="text-orange-200 text-sm font-bold uppercase tracking-wide">Complete Door Solutions</p>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Premium <span className="text-orange-400">Door Categories</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Explore our comprehensive collection of doors for every application - interior, exterior, and wooden doors designed for quality and durability.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Door Categories</h2>
            <p className="text-lg text-gray-600">Choose from our range of specialized door collections</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {doorCategories.map((category) => (
              <Link key={category.id} href={category.href}>
                <div className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 border ${category.borderColor} ${category.hoverColor} cursor-pointer h-full flex flex-col`}>
                  {/* Category Image */}
                  <div className="relative h-56 w-full bg-gray-200 overflow-hidden">
                    <Image
                      src={category.image}
                      alt={category.name}
                      fill
                      className="object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>

                  {/* Category Content */}
                  <div className={`p-6 flex flex-col flex-grow bg-linear-to-br ${category.color}`}>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="text-3xl">{category.icon}</span>
                      <h3 className="text-2xl font-bold text-slate-900">{category.name}</h3>
                    </div>

                    <p className="text-gray-600 text-sm mb-6 flex-grow">{category.description}</p>

                    {/* Features */}
                    <div className="space-y-2 mb-6 pb-6 border-b border-gray-200">
                      {category.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm">
                          <span className="text-orange-500 font-bold">✓</span>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-sm font-semibold text-orange-600">View Products</span>
                      <ArrowRight size={18} className="text-orange-600 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Why Choose 1760 Hardware Doors?</h2>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Premium Quality</h3>
                    <p className="text-gray-600 text-sm">All doors crafted with precision and high-quality materials</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Expert Support</h3>
                    <p className="text-gray-600 text-sm">Professional guidance and installation support available</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Fast Delivery</h3>
                    <p className="text-gray-600 text-sm">Reliable delivery to your location with proper handling</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-2xl">✓</span>
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Competitive Pricing</h3>
                    <p className="text-gray-600 text-sm">Best value for quality doors with special bulk discounts</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-linear-to-br from-orange-50 to-orange-100 p-8 rounded-xl border border-orange-200">
              <div className="text-4xl mb-4">📞</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Get in Touch</h3>
              <p className="text-gray-700 mb-6">
                Have questions about our door categories? Contact us on WhatsApp for personalized assistance and pricing information.
              </p>
              <a
                href="https://wa.me/254708932609"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                <WhatsAppIcon />
                Message us on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
