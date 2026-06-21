'use client';

import Image from 'next/image';
import { Navbar, Footer } from '@/components/index';
import { Star, CheckCircle } from 'lucide-react';

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

export default function InteriorDoors() {
  const doorProducts = [
    {
      id: 1,
      name: 'Classic Interior Door',
      description: 'Elegant interior doors with timeless design and smooth finish',
      image: '/doors/doors%20interior.jpg',
      rating: '4.8',
      features: [
        'Traditional design',
        'Smooth finish',
        'Standard sizes available',
        'Easy installation',
      ],
    },
    {
      id: 2,
      name: 'Modern Interior Door',
      description: 'Contemporary interior doors with sleek design and premium finishes',
      image: '/doors/home%20door.jpg',
      rating: '4.9',
      features: [
        'Modern aesthetics',
        'Premium quality',
        'Durable frame',
        'Smooth operation',
      ],
    },
    {
      id: 3,
      name: 'Premium Interior Door Set',
      description: 'High-end interior doors with premium finishes and hardware included',
      image: '/doors/doors%20interior.jpg',
      rating: '4.7',
      features: [
        'Includes hardware',
        'Premium finish',
        'Long-lasting quality',
        'Professional installation available',
      ],
    },
  ];

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 md:py-32 overflow-hidden bg-linear-to-br from-slate-950 via-blue-950 to-slate-900">
        <div className="absolute inset-0">
          <div className="absolute -top-40 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 -right-32 w-80 h-80 bg-cyan-400 rounded-full blur-3xl opacity-15 animate-pulse" style={{animationDelay: '0.5s'}}></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-2 bg-blue-500/20 rounded-full border border-blue-400/40 backdrop-blur">
              <p className="text-blue-200 text-sm font-bold uppercase tracking-wide">Interior Collection</p>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
              Premium <span className="text-blue-400">Interior Doors</span>
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Elegant interior doors designed to enhance your spaces with timeless beauty and quality craftsmanship.
            </p>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Our Interior Door Collections</h2>
              <p className="text-lg text-gray-600">Premium quality doors for every interior space</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
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
                          <CheckCircle size={16} className="text-blue-500" />
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
        </div>
      </section>

      {/* Specifications Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">Door Specifications</h2>
            <p className="text-lg text-gray-600">What makes our interior doors stand out</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Elegant Designs</h3>
              <p className="text-gray-600 text-sm">Stylish designs that complement any interior</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
              <div className="text-4xl mb-4">✨</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Premium Finishes</h3>
              <p className="text-gray-600 text-sm">Smooth finishing and protective coatings</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Expert Crafted</h3>
              <p className="text-gray-600 text-sm">Precision manufacturing with attention to detail</p>
            </div>

            <div className="bg-white p-8 rounded-xl border border-gray-200 hover:border-blue-300 transition-colors">
              <div className="text-4xl mb-4">💪</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Durable Quality</h3>
              <p className="text-gray-600 text-sm">Built to last with superior materials</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
