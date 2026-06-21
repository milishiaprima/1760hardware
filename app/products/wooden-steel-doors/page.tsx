'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Navbar, Footer } from '@/components/index';
import { ArrowRight, CheckCircle, Star } from 'lucide-react';

export default function WoodenSteelDoors() {
  const doorProducts = [
    {
      id: 1,
      name: 'Premium Wooden Door',
      description: 'High-quality wooden doors with traditional design',
      price: 'KES 8,500',
      image: '/doors/home%20door.jpg',
      features: ['Solid wood', 'Weather resistant', 'Durable finish'],
      rating: 4.8,
    },
    {
      id: 2,
      name: 'Modern Steel Door',
      description: 'Contemporary steel doors with security features',
      price: 'KES 12,000',
      image: '/doors/doors%20interior.jpg',
      features: ['Steel reinforced', 'High security', 'Modern design'],
      rating: 4.9,
    },
    {
      id: 3,
      name: 'Wooden Interior Door',
      description: 'Elegant wooden doors for interior spaces',
      price: 'KES 6,500',
      image: '/doors/home%20door.jpg',
      features: ['Premium finish', 'Sound proof', 'Easy installation'],
      rating: 4.7,
    },
  ];

  const specifications = [
    { title: 'Material Quality', description: 'Premium grade wood and steel materials sourced responsibly' },
    { title: 'Durability', description: 'Built to withstand extreme weather conditions and regular use' },
    { title: 'Security', description: 'Advanced locking mechanisms and reinforced frames' },
    { title: 'Design', description: 'Contemporary and traditional designs to match any aesthetic' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-linear-to-br from-black via-slate-900 to-gray-900 text-white py-20 sm:py-28 md:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

          <div className="max-w-5xl mx-auto text-center relative z-10">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
              Premium <span className="text-orange-400">Wooden & Steel Doors</span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 max-w-2xl mx-auto leading-relaxed">
              High-quality doors for residential, commercial, and industrial applications. Crafted with precision and built to last.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="https://wa.me/254708932609"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Order Now
                <ArrowRight size={20} />
              </a>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Get Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Door Collections</h2>
              <p className="text-lg text-gray-600">Premium quality doors for every need</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {doorProducts.map((product) => (
                <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300 border border-gray-100">
                  {/* Product Image */}
                  <div className="relative h-64 w-full bg-gray-200">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Product Content */}
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-xl font-bold text-slate-900">{product.name}</h3>
                      <div className="flex items-center gap-1">
                        <Star size={18} className="fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                    {/* Features */}
                    <div className="space-y-2 mb-6 pb-6 border-b border-gray-100">
                      {product.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <CheckCircle size={16} className="text-orange-500" />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-center">
                      <a
                        href="https://wa.me/254708932609"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors w-full text-center"
                      >
                        Ask Price
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Specifications Section */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Door Specifications</h2>
              <p className="text-lg text-gray-600">What makes our doors stand out</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {specifications.map((spec, i) => (
                <div key={i} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 bg-linear-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mb-4">
                    <CheckCircle size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{spec.title}</h3>
                  <p className="text-gray-600 text-sm">{spec.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-br from-orange-500 to-red-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Transform Your Space?</h2>
            <p className="text-lg text-orange-50 mb-10">
              Contact our team today for custom door solutions and professional installation services.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="https://wa.me/254708932609"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-orange-600 px-8 py-4 rounded-lg font-semibold hover:bg-orange-50 transition-colors inline-flex items-center gap-2"
              >
                WhatsApp Us
                <ArrowRight size={20} />
              </a>
              <Link
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-orange-600 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center gap-2"
              >
                Learn More
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
