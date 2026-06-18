'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';
import { Navbar, Footer } from '@/components/index';
import {
  ArrowRight,
} from 'lucide-react';

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

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentPartnerIndex, setCurrentPartnerIndex] = useState(0);
  const images = [
    '/doors/machine.jpg',
    '/doors/saw machine.jpg',
    '/doors/hardware.jpg',
    '/doors/home door.jpg',
    '/doors/doors interior.jpg',
    '/doors/1760.jpg',
  ];

  const partners = [
    { name: 'Aura Stack', logo: '/partner/logo_aura-removebg-preview.png', subtitle: 'Software Company' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    const partnerInterval = setInterval(() => {
      setCurrentPartnerIndex((prevIndex) => (prevIndex + 1) % partners.length);
    }, 4000); // Change partner every 4 seconds

    return () => clearInterval(partnerInterval);
  }, [partners.length]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdown = document.querySelector('.relative.group');
      if (dropdown && !dropdown.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    }
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isDropdownOpen]);

  return (
    <>
      <Navbar />

      {/* Hero Section - 1760 Hardware */}
      <section className="bg-linear-to-br from-black via-slate-900 to-gray-900 text-white py-12 md:py-20 lg:py-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <div className="inline-block bg-orange-500/20 text-orange-400 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold mb-4">
                ✨ Now Available
              </div>
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 leading-tight">
                <span className="text-orange-500">1760 Hardware</span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 mb-4 sm:mb-8">
                Leading Doors Manufacturer & Interior Finishes
              </p>
              <p className="text-base sm:text-lg text-gray-400 mb-6 sm:mb-8">
                Premium doors with elegant interior finishes and hardware solutions for residential, commercial, and industrial needs
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
                <a
                  href="https://wa.me/254708932609"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors text-sm sm:text-base w-full sm:w-auto"
                >
                  Order Now
                  <ArrowRight size={18} className="hidden sm:block" />
                </a>
                <a
                  href="https://wa.me/254708932609"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-colors text-sm sm:text-base w-full sm:w-auto"
                >
                  Learn More
                  <ArrowRight size={18} className="hidden sm:block" />
                </a>
              </div>
            </div>

            {/* Right - Hardware Splash Image Slideshow */}
            <div className="flex items-center justify-center">
              <div className="relative w-full h-80 lg:h-96">
                {/* Glow effect background */}
                <div className="absolute inset-0 bg-linear-to-br from-orange-500 to-red-600 rounded-3xl blur-2xl opacity-30"></div>
                
                {/* Hardware showcase container with slideshow */}
                <div className="relative h-full bg-linear-to-br from-orange-400 via-orange-500 to-red-600 rounded-3xl overflow-hidden flex items-center justify-center shadow-2xl">
                  {/* Slideshow Images */}
                  {images.map((image, index) => (
                    <div
                      key={index}
                      className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`Product ${index + 1}`}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  ))}
                  
                  {/* Overlay gradient for better text readability if needed */}
                  <div className="absolute inset-0 bg-black/30"></div>
                  
                  {/* Image indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all ${
                          index === currentImageIndex
                            ? 'bg-white w-8'
                            : 'bg-white/50 hover:bg-white/75'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-linear-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
              Featured <span className="text-orange-500">Door Products</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our premium collection of doors designed for quality and durability
            </p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Product 1: Exterior Doors */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              {/* Product Image */}
              <div className="relative h-60 sm:h-64 overflow-hidden bg-gray-200">
                <Image
                  src="/doors/home%20door.jpg"
                  alt="Exterior Doors"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-5 sm:p-6">
                {/* Product Name */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                  Exterior Doors
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">
                  Durable and stylish exterior doors designed for protection and curb appeal. Built to withstand harsh weather conditions.
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">Weather-resistant</span>
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">Secure</span>
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">Premium</span>
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/254708932609?text=Hi,%20I%20am%20interested%20in%20exterior%20doors"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors text-sm"
                >
                  <WhatsAppIcon />
                  Order via WhatsApp
                </a>
              </div>
            </div>

            {/* Product 2: Machines */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              {/* Product Image */}
              <div className="relative h-60 sm:h-64 overflow-hidden bg-gray-200">
                <Image
                  src="/doors/machine.jpg"
                  alt="Processing Machines"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-5 sm:p-6">
                {/* Product Name */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                  Processing Machines
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">
                  Advanced machines used to process high-quality doors. Ensuring precision and durability in every product we manufacture.
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">Precision</span>
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">High-Tech</span>
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">Quality</span>
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/254708932609?text=Hi,%20I%20am%20interested%20in%20learning%20more%20about%20your%20processing%20machines"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors text-sm"
                >
                  <WhatsAppIcon />
                  Order via WhatsApp
                </a>
              </div>
            </div>

            {/* Product 3: Premium Interior Doors - 1760 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
              {/* Product Image */}
              <div className="relative h-60 sm:h-64 overflow-hidden bg-gray-200">
                <Image
                  src="/doors/1760.jpg"
                  alt="Premium Interior Doors 1760"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Product Info */}
              <div className="p-5 sm:p-6">
                {/* Product Name */}
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                  Premium Interior Doors 1760
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4">
                  Premium quality interior doors featuring the latest 1760 design collection. Crafted with precision and elegance.
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">Premium</span>
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">Elegant</span>
                  <span className="bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-xs font-semibold">Precision</span>
                </div>

                {/* CTA Button */}
                <a
                  href="https://wa.me/254708932609?text=Hi,%20I%20am%20interested%20in%20premium%20interior%20doors%201760"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-lg font-semibold transition-colors text-sm"
                >
                  <WhatsAppIcon />
                  Order via WhatsApp
                </a>
              </div>
            </div>


          </div>
        </div>
      </section>

      {/* Door Features/Types Section */}
      <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
        {/* Premium Gradient Background */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-amber-950 to-slate-900"></div>
        
        {/* Animated Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large blurred circles */}
          <div className="absolute -top-40 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 -right-32 w-80 h-80 bg-yellow-400 rounded-full blur-3xl opacity-15 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute -bottom-20 right-1/4 w-72 h-72 bg-orange-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
          
          {/* Gradient overlay patterns */}
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
          
          {/* Diagonal lines pattern */}
          <svg className="absolute w-full h-full opacity-5" preserveAspectRatio="none">
            <defs>
              <pattern id="diagonalLines2" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="50" y2="50" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonalLines2)"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header - Enhanced */}
          <div className="text-center mb-16 sm:mb-24">
            <div className="inline-block mb-6 px-5 py-2.5 bg-linear-to-r from-amber-500/30 to-orange-500/30 rounded-full border-2 border-amber-400/60 backdrop-blur-md">
              <p className="text-amber-200 text-xs sm:text-sm font-bold tracking-widest uppercase drop-shadow-lg">Premium Door Collections</p>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
              Our <span className="bg-linear-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">Door Features</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-12 bg-linear-to-r from-transparent to-amber-500"></div>
              <div className="h-1.5 w-20 bg-linear-to-r from-amber-500 via-yellow-400 to-orange-500"></div>
              <div className="h-1 w-12 bg-linear-to-l from-transparent to-amber-500"></div>
            </div>
            <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
              Premium doors designed for every need, style, and application with uncompromising quality standards
            </p>
          </div>

          {/* Features Grid - Enhanced with Unique Styles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mx-auto">
            {/* Wooden Doors - Amber/Gold */}
            <div className="group relative rounded-3xl p-0.5 overflow-hidden cursor-pointer h-full">
              <div className="absolute inset-0 bg-linear-to-br from-amber-500 via-yellow-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-linear-to-br from-slate-900 via-amber-950/30 to-slate-900 backdrop-blur-xl rounded-3xl overflow-hidden h-full flex flex-col transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-amber-500/20">
                <div className="absolute inset-0 bg-linear-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-amber-500/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative h-48 bg-linear-to-br from-amber-100 via-yellow-100 to-orange-100 flex items-center justify-center overflow-hidden shrink-0">
                  <div className="text-6xl transform group-hover:scale-125 transition-transform duration-500 drop-shadow-lg">🚪</div>
                </div>
                
                <div className="relative p-6 flex flex-col grow">
                  <span className="inline-block w-fit text-xs font-bold text-amber-300 uppercase tracking-widest mb-3 bg-amber-500/20 px-3 py-1 rounded-full">01 Popular</span>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-amber-300 transition-colors">Wooden Doors</h3>
                  <p className="text-gray-300 leading-relaxed text-sm mb-6 grow">Classic wooden doors with elegant finishes and superior durability for timeless elegance</p>
                  <a href="/products/wooden-doors" className="inline-flex items-center gap-2 text-amber-300 font-semibold hover:text-amber-200 text-sm group/link mt-auto">
                    <span>Learn more</span>
                    <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>



            {/* Glass Doors - Cyan/Blue */}
            <div className="group relative rounded-3xl p-0.5 overflow-hidden cursor-pointer h-full">
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500 via-sky-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-linear-to-br from-slate-900 via-cyan-950/30 to-slate-900 backdrop-blur-xl rounded-3xl overflow-hidden h-full flex flex-col transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-cyan-500/20">
                <div className="absolute inset-0 bg-linear-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative h-48 bg-linear-to-br from-blue-100 via-cyan-100 to-sky-100 flex items-center justify-center overflow-hidden shrink-0">
                  <div className="text-6xl transform group-hover:scale-125 transition-transform duration-500 drop-shadow-lg">✨</div>
                </div>
                
                <div className="relative p-6 flex flex-col grow">
                  <span className="inline-block w-fit text-xs font-bold text-cyan-300 uppercase tracking-widest mb-3 bg-cyan-500/20 px-3 py-1 rounded-full">03 Modern</span>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">Glass Doors</h3>
                  <p className="text-gray-300 leading-relaxed text-sm mb-6 grow">Modern glass doors for contemporary designs and enhanced natural light flow</p>
                  <a href="/products/wooden-doors" className="inline-flex items-center gap-2 text-cyan-300 font-semibold hover:text-cyan-200 text-sm group/link mt-auto">
                    <span>Learn more</span>
                    <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Interior Doors - Rose/Pink */}
            <div className="group relative rounded-3xl p-0.5 overflow-hidden cursor-pointer h-full">
              <div className="absolute inset-0 bg-linear-to-br from-rose-500 via-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-linear-to-br from-slate-900 via-rose-950/30 to-slate-900 backdrop-blur-xl rounded-3xl overflow-hidden h-full flex flex-col transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-rose-500/20">
                <div className="absolute inset-0 bg-linear-to-br from-rose-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-rose-500/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
                
                <div className="relative h-48 bg-linear-to-br from-purple-100 via-pink-100 to-rose-100 flex items-center justify-center overflow-hidden shrink-0">
                  <div className="text-6xl transform group-hover:scale-125 transition-transform duration-500 drop-shadow-lg">🎨</div>
                </div>
                
                <div className="relative p-6 flex flex-col grow">
                  <span className="inline-block w-fit text-xs font-bold text-rose-300 uppercase tracking-widest mb-3 bg-rose-500/20 px-3 py-1 rounded-full">04 Design</span>
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-rose-300 transition-colors">Interior Doors</h3>
                  <p className="text-gray-300 leading-relaxed text-sm mb-6 grow">Stylish interior doors to enhance and transform your home interior design perfectly</p>
                  <a href="/products/wooden-doors" className="inline-flex items-center gap-2 text-rose-300 font-semibold hover:text-rose-200 text-sm group/link mt-auto">
                    <span>Learn more</span>
                    <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose 1760 Hardware Section */}
      <section className="py-16 sm:py-24 md:py-32 relative overflow-hidden">
        {/* Premium Gradient Background */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-orange-950 to-slate-900"></div>
        
        {/* Animated Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Large blurred circles */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/2 -right-32 w-80 h-80 bg-amber-400 rounded-full blur-3xl opacity-15 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-red-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
          
          {/* Gradient overlay patterns */}
          <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
          
          {/* Diagonal lines pattern */}
          <svg className="absolute w-full h-full opacity-5" preserveAspectRatio="none">
            <defs>
              <pattern id="diagonalLines" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <line x1="0" y1="0" x2="50" y2="50" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#diagonalLines)"/>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header - Enhanced */}
          <div className="text-center mb-16 sm:mb-24">
            <div className="inline-block mb-6 px-5 py-2.5 bg-linear-to-r from-orange-500/30 to-amber-500/30 rounded-full border-2 border-orange-400/60 backdrop-blur-md">
              <p className="text-orange-200 text-xs sm:text-sm font-bold tracking-widest uppercase drop-shadow-lg">Why Leading Businesses Trust Us</p>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
              Why Choose <span className="bg-linear-to-r from-orange-400 via-amber-400 to-red-400 bg-clip-text text-transparent">1760 Hardware</span>
            </h2>
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="h-1 w-12 bg-linear-to-r from-transparent to-orange-500"></div>
              <div className="h-1.5 w-20 bg-linear-to-r from-orange-500 via-amber-400 to-orange-500"></div>
              <div className="h-1 w-12 bg-linear-to-l from-transparent to-orange-500"></div>
            </div>
            <p className="text-base sm:text-lg text-gray-200 max-w-3xl mx-auto font-light leading-relaxed">
              Industry-leading quality, innovation, and exceptional customer service that sets us apart
            </p>
          </div>

          {/* Why Choose Grid - Enhanced with Unique Styles */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Quality - Orange/Gold */}
            <div className="group relative rounded-3xl p-0.5 overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-linear-to-br from-orange-500 via-amber-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-linear-to-br from-slate-900 via-orange-950/30 to-slate-900 backdrop-blur-xl rounded-3xl p-8 sm:p-10 h-full transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-orange-500/20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-orange-500/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-orange-500/30 to-amber-500/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl drop-shadow-lg">⭐</span>
                  </div>
                  <span className="inline-block text-xs font-bold text-orange-300 uppercase tracking-widest mb-3 bg-orange-500/20 px-3 py-1 rounded-full">01 Premium</span>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-orange-300 transition-colors">Premium Quality</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">All doors manufactured with high-quality materials and expert craftsmanship standards that exceed industry expectations</p>
                  <div className="flex items-center gap-2 text-orange-300 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    <span>Learn more</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: Experience - Amber/Gold */}
            <div className="group relative rounded-3xl p-0.5 overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-linear-to-br from-amber-500 via-yellow-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-linear-to-br from-slate-900 via-amber-950/30 to-slate-900 backdrop-blur-xl rounded-3xl p-8 sm:p-10 h-full transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-amber-500/20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-amber-500/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-amber-500/30 to-yellow-500/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl drop-shadow-lg">🏆</span>
                  </div>
                  <span className="inline-block text-xs font-bold text-amber-300 uppercase tracking-widest mb-3 bg-amber-500/20 px-3 py-1 rounded-full">02 Expertise</span>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-300 transition-colors">15+ Years Experience</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">Trusted by thousands of satisfied customers across residential and commercial sectors with proven track record</p>
                  <div className="flex items-center gap-2 text-amber-300 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    <span>Learn more</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3: Pricing - Yellow/Gold */}
            <div className="group relative rounded-3xl p-0.5 overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-linear-to-br from-yellow-500 via-amber-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-linear-to-br from-slate-900 via-yellow-950/30 to-slate-900 backdrop-blur-xl rounded-3xl p-8 sm:p-10 h-full transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-yellow-500/20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-yellow-500/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-yellow-500/30 to-amber-500/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl drop-shadow-lg">💰</span>
                  </div>
                  <span className="inline-block text-xs font-bold text-yellow-300 uppercase tracking-widest mb-3 bg-yellow-500/20 px-3 py-1 rounded-full">03 Savings</span>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-yellow-300 transition-colors">Best Pricing</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">Best prices in the market without ever compromising on quality and durability of our premium products</p>
                  <div className="flex items-center gap-2 text-yellow-300 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    <span>Learn more</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4: Customization - Rose/Pink */}
            <div className="group relative rounded-3xl p-0.5 overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-linear-to-br from-rose-500 via-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-linear-to-br from-slate-900 via-rose-950/30 to-slate-900 backdrop-blur-xl rounded-3xl p-8 sm:p-10 h-full transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-rose-500/20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-rose-500/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-rose-500/30 to-pink-500/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl drop-shadow-lg">🎯</span>
                  </div>
                  <span className="inline-block text-xs font-bold text-rose-300 uppercase tracking-widest mb-3 bg-rose-500/20 px-3 py-1 rounded-full">04 Custom</span>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-rose-300 transition-colors">Custom Solutions</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">Tailored door solutions perfectly designed to meet your specific requirements and preferences</p>
                  <div className="flex items-center gap-2 text-rose-300 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    <span>Learn more</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 5: Delivery - Cyan/Teal */}
            <div className="group relative rounded-3xl p-0.5 overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-linear-to-br from-cyan-500 via-teal-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-linear-to-br from-slate-900 via-cyan-950/30 to-slate-900 backdrop-blur-xl rounded-3xl p-8 sm:p-10 h-full transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-cyan-500/20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-cyan-500/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-cyan-500/30 to-teal-500/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl drop-shadow-lg">🚚</span>
                  </div>
                  <span className="inline-block text-xs font-bold text-cyan-300 uppercase tracking-widest mb-3 bg-cyan-500/20 px-3 py-1 rounded-full">05 Speed</span>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-300 transition-colors">Fast Delivery</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">Quick nationwide shipping with reliable real-time delivery tracking and proactive customer updates</p>
                  <div className="flex items-center gap-2 text-cyan-300 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    <span>Learn more</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 6: Support - Violet/Purple */}
            <div className="group relative rounded-3xl p-0.5 overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-linear-to-br from-violet-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-linear-to-br from-slate-900 via-violet-950/30 to-slate-900 backdrop-blur-xl rounded-3xl p-8 sm:p-10 h-full transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-violet-500/20">
                <div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-br from-violet-500/20 to-transparent rounded-full blur-3xl group-hover:scale-150 transition-transform duration-500"></div>
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-violet-500/30 to-purple-500/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl drop-shadow-lg">📞</span>
                  </div>
                  <span className="inline-block text-xs font-bold text-violet-300 uppercase tracking-widest mb-3 bg-violet-500/20 px-3 py-1 rounded-full">06 Support</span>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-violet-300 transition-colors">24/7 Expert Support</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">Round-the-clock professional customer support and technical assistance available whenever you need us</p>
                  <div className="flex items-center gap-2 text-violet-300 font-semibold text-sm group-hover:translate-x-1 transition-transform">
                    <span>Learn more</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Trust Badges */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="p-4">
                <div className="text-3xl font-bold text-orange-400 mb-2">500+</div>
                <p className="text-gray-300 text-sm">Happy Customers</p>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-amber-400 mb-2">15+</div>
                <p className="text-gray-300 text-sm">Years in Industry</p>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-yellow-400 mb-2">100%</div>
                <p className="text-gray-300 text-sm">Quality Guarantee</p>
              </div>
              <div className="p-4">
                <div className="text-3xl font-bold text-orange-300 mb-2">24/7</div>
                <p className="text-gray-300 text-sm">Customer Support</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services Section */}
      <section className="relative py-20 sm:py-28 md:py-36 overflow-hidden">
        {/* Premium Gradient Background */}
        <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900 to-slate-800"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 left-1/4 w-96 h-96 bg-orange-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute top-1/3 -right-32 w-80 h-80 bg-red-500 rounded-full blur-3xl opacity-15 animate-pulse" style={{animationDelay: '0.5s'}}></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-amber-500 rounded-full blur-3xl opacity-10 animate-pulse" style={{animationDelay: '1s'}}></div>
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <div className="inline-block mb-6 px-6 py-2.5 bg-orange-500/20 rounded-full border border-orange-400/60 backdrop-blur-md">
              <p className="text-orange-200 text-xs sm:text-sm font-bold tracking-widest uppercase drop-shadow-lg">Professional Excellence</p>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 tracking-tight text-white drop-shadow-lg">
              Our <span className="bg-linear-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">Premium Services</span>
            </h2>
            <div className="h-1 w-24 bg-linear-to-r from-orange-500 via-red-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
              Complete solutions from manufacturing and installation to consultation and maintenance – delivered with excellence and precision
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {/* Doors Manufacturing */}
            <div className="group relative rounded-2xl p-0.5 overflow-hidden cursor-pointer h-full">
              <div className="absolute inset-0 bg-linear-to-br from-blue-500 via-cyan-500 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-linear-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 h-full transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl border border-slate-700/50 group-hover:border-blue-500/50">
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl group-hover:scale-150 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-blue-500 to-cyan-500 text-white mb-6 group-hover:scale-125 transition-transform duration-300 shadow-2xl">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11z"/></svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-blue-400 group-hover:to-cyan-400 group-hover:bg-clip-text transition-all duration-300">Doors Manufacturing</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">Premium custom-manufactured doors tailored to your specifications with expert craftsmanship and finest materials</p>
                  <ul className="space-y-3 text-sm text-gray-300 mb-8">
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full"></span><span>Premium quality materials</span></li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full"></span><span>Expert craftsmanship</span></li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-linear-to-r from-blue-400 to-cyan-400 rounded-full"></span><span>Custom designs</span></li>
                  </ul>
                  <a href="/services" className="inline-flex items-center gap-2 text-blue-400 font-semibold hover:text-blue-300 text-sm group/link transition-colors">
                    Learn More
                    <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Installation */}
            <div className="group relative rounded-2xl p-0.5 overflow-hidden cursor-pointer h-full">
              <div className="absolute inset-0 bg-linear-to-br from-amber-500 via-yellow-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-linear-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 h-full transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl border border-slate-700/50 group-hover:border-amber-500/50">
                <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl group-hover:scale-150 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-amber-500 to-yellow-500 text-white mb-6 group-hover:scale-125 transition-transform duration-300 shadow-2xl">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-5.04-6.71l-2.75 3.54h2.5v2.17h2.58v-2.17h2.5z"/></svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-amber-400 group-hover:to-yellow-400 group-hover:bg-clip-text transition-all duration-300">Professional Installation</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">Expert installation services by licensed technicians for residential and commercial properties</p>
                  <ul className="space-y-3 text-sm text-gray-300 mb-8">
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-linear-to-r from-amber-400 to-yellow-400 rounded-full"></span><span>Licensed professionals</span></li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-linear-to-r from-amber-400 to-yellow-400 rounded-full"></span><span>Rapid service delivery</span></li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-linear-to-r from-amber-400 to-yellow-400 rounded-full"></span><span>Quality guarantee</span></li>
                  </ul>
                  <a href="/services" className="inline-flex items-center gap-2 text-amber-400 font-semibold hover:text-amber-300 text-sm group/link transition-colors">
                    Learn More
                    <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Design Consultation */}
            <div className="group relative rounded-2xl p-0.5 overflow-hidden cursor-pointer h-full">
              <div className="absolute inset-0 bg-linear-to-br from-purple-500 via-pink-500 to-red-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-linear-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 h-full transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl border border-slate-700/50 group-hover:border-purple-500/50">
                <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl group-hover:scale-150 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-purple-500 to-pink-500 text-white mb-6 group-hover:scale-125 transition-transform duration-300 shadow-2xl">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M9 11H7v2h2v-2zm4 0h-2v2h2v-2zm4 0h-2v2h2v-2zm2-7h-1V2h-2v2H8V2H6v2H5c-1.11 0-1.99.9-1.99 2L3 20c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H5V9h14v11z"/></svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">Design Consultation</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">Professional design consultation for optimal door selection and strategic placement solutions</p>
                  <ul className="space-y-3 text-sm text-gray-300 mb-8">
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-linear-to-r from-purple-400 to-pink-400 rounded-full"></span><span>Expert recommendations</span></li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-linear-to-r from-purple-400 to-pink-400 rounded-full"></span><span>Custom solutions</span></li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-linear-to-r from-purple-400 to-pink-400 rounded-full"></span><span>Technical support</span></li>
                  </ul>
                  <a href="/services" className="inline-flex items-center gap-2 text-purple-400 font-semibold hover:text-purple-300 text-sm group/link transition-colors">
                    Learn More
                    <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Bulk Supply */}
            <div className="group relative rounded-2xl p-0.5 overflow-hidden cursor-pointer h-full">
              <div className="absolute inset-0 bg-linear-to-br from-green-500 via-emerald-500 to-teal-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-linear-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 h-full transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl border border-slate-700/50 group-hover:border-green-500/50">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-3xl group-hover:scale-150 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-green-500 to-emerald-500 text-white mb-6 group-hover:scale-125 transition-transform duration-300 shadow-2xl">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z"/></svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-green-400 group-hover:to-emerald-400 group-hover:bg-clip-text transition-all duration-300">Bulk Supply</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">Wholesale doors and hardware supply for contractors and resellers with competitive pricing</p>
                  <ul className="space-y-3 text-sm text-gray-300 mb-8">
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-linear-to-r from-green-400 to-emerald-400 rounded-full"></span><span>Best pricing</span></li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-linear-to-r from-green-400 to-emerald-400 rounded-full"></span><span>Large quantities</span></li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-linear-to-r from-green-400 to-emerald-400 rounded-full"></span><span>Flexible terms</span></li>
                  </ul>
                  <a href="/services" className="inline-flex items-center gap-2 text-green-400 font-semibold hover:text-green-300 text-sm group/link transition-colors">
                    Learn More
                    <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>

            {/* 24/7 Customer Support */}
            <div className="group relative rounded-2xl p-0.5 overflow-hidden cursor-pointer h-full">
              <div className="absolute inset-0 bg-linear-to-br from-red-500 via-rose-500 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="relative bg-linear-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-xl rounded-2xl p-8 h-full transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-2xl border border-slate-700/50 group-hover:border-red-500/50">
                <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/10 rounded-full blur-3xl group-hover:scale-150 transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
                
                <div className="relative">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-linear-to-br from-red-500 to-rose-500 text-white mb-6 group-hover:scale-125 transition-transform duration-300 shadow-2xl">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-linear-to-r group-hover:from-red-400 group-hover:to-rose-400 group-hover:bg-clip-text transition-all duration-300">24/7 Support</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed text-sm sm:text-base">Round-the-clock support for all inquiries and service needs through multiple communication channels</p>
                  <ul className="space-y-3 text-sm text-gray-300 mb-8">
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-linear-to-r from-red-400 to-rose-400 rounded-full"></span><span>Always available</span></li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-linear-to-r from-red-400 to-rose-400 rounded-full"></span><span>Rapid response</span></li>
                    <li className="flex items-center gap-3"><span className="w-2 h-2 bg-linear-to-r from-red-400 to-rose-400 rounded-full"></span><span>Multi-channel support</span></li>
                  </ul>
                  <a href="/services" className="inline-flex items-center gap-2 text-red-400 font-semibold hover:text-red-300 text-sm group/link transition-colors">
                    Learn More
                    <span className="transform group-hover/link:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <div className="inline-block">
              <a
                href="/services"
                className="inline-flex items-center justify-center gap-3 bg-linear-to-r from-orange-500 via-red-500 to-pink-500 hover:from-orange-600 hover:via-red-600 hover:to-pink-600 text-white px-8 sm:px-14 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-110 shadow-2xl hover:shadow-3xl relative group overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3 drop-shadow-lg">
                  View All Services
                  <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-linear-to-r from-orange-600 via-red-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Our Partners Slideshow Section */}
      <section className="py-16 sm:py-24 md:py-32 bg-linear-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              Our <span className="text-orange-500">Partners</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted partnerships with leading brands and suppliers
            </p>
          </div>

          {/* Partners Carousel */}
          <div className="flex items-center justify-center gap-2 sm:gap-4">
            {/* Left Arrow */}
            <button
              onClick={() => setCurrentPartnerIndex((prevIndex) => (prevIndex - 1 + partners.length) % partners.length)}
              className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600 text-white transition-colors shrink-0"
              aria-label="Previous partner"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>

            {/* Carousel Container */}
            <div className="flex-1 relative bg-white rounded-2xl overflow-hidden shadow-lg max-w-4xl mx-auto w-full">
              <div className="h-48 sm:h-56 md:h-64 flex items-center justify-center bg-linear-to-br from-gray-100 to-gray-200 relative">
                {/* Current Partner Logo */}
                {partners.map((partner, index) => (
                  <div
                    key={index}
                    className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ease-in-out ${
                      index === currentPartnerIndex ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
                      <Image
                        src={partner.logo}
                        alt={partner.name}
                        fill
                        className="object-contain p-4"
                        priority={index === currentPartnerIndex}
                      />
                    </div>
                  </div>
                ))}
                
                {/* Partner Name */}
                <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent py-4 sm:py-6 text-center">
                  <p className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                    {partners[currentPartnerIndex].name}
                  </p>
                  {partners[currentPartnerIndex].subtitle && (
                    <p className="text-gray-200 text-xs sm:text-sm mt-1">
                      {partners[currentPartnerIndex].subtitle}
                    </p>
                  )}
                </div>
              </div>

              {/* Indicators */}
              <div className="flex justify-center gap-2 py-4 px-4 bg-gray-50">
                {partners.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentPartnerIndex(index)}
                    className={`transition-all rounded-full ${
                      index === currentPartnerIndex
                        ? 'bg-orange-500 w-8 h-3'
                        : 'bg-gray-300 hover:bg-gray-400 w-3 h-3'
                    }`}
                    aria-label={`Go to partner ${index + 1}`}
                  />
                ))}
              </div>
            </div>

            {/* Right Arrow */}
            <button
              onClick={() => setCurrentPartnerIndex((prevIndex) => (prevIndex + 1) % partners.length)}
              className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full bg-orange-500 hover:bg-orange-600 text-white transition-colors shrink-0"
              aria-label="Next partner"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div className="sm:hidden flex justify-center gap-3 mt-6">
            <button
              onClick={() => setCurrentPartnerIndex((prevIndex) => (prevIndex - 1 + partners.length) % partners.length)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-600 text-white transition-colors"
              aria-label="Previous partner"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <button
              onClick={() => setCurrentPartnerIndex((prevIndex) => (prevIndex + 1) % partners.length)}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-orange-500 hover:bg-orange-600 text-white transition-colors"
              aria-label="Next partner"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M9 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      <Footer />

      {/* Sticky WhatsApp Button */}
      <a
        href="https://wa.me/254708932609"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 left-6 bg-linear-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white rounded-full px-5 py-4 shadow-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center gap-3 font-semibold hover:scale-110 z-40"
        aria-label="Chat with us on WhatsApp"
        title="Chat with us on WhatsApp"
      >
        <WhatsAppIcon />
        <span className="text-sm font-bold">Chat Us</span>
      </a>
    </>
  );
}

