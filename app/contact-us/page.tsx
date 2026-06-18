'use client';

import { Navbar } from '@/components/index';
import Footer from '@/components/Footer';
import { Mail, Phone, MapPin, Clock, Send, Smartphone } from 'lucide-react';
import { useState } from 'react';

export default function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Phone Support',
      description: 'Call us for immediate assistance',
      details: '+254 708 932 609',
      color: 'from-blue-500 to-cyan-500',
      lightColor: 'from-blue-50 to-cyan-50',
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Send us an email anytime',
      details: 'info@1760hardware.com',
      color: 'from-orange-500 to-red-500',
      lightColor: 'from-orange-50 to-red-50',
    },
    {
      icon: MapPin,
      title: 'Office Location',
      description: 'Visit us in person',
      details: 'Kiserian Town, Magadi Road',
      color: 'from-green-500 to-emerald-500',
      lightColor: 'from-green-50 to-emerald-50',
    },
    {
      icon: Clock,
      title: 'Business Hours',
      description: 'Monday to Saturday',
      details: '8:00 AM - 6:00 PM',
      color: 'from-purple-500 to-pink-500',
      lightColor: 'from-purple-50 to-pink-50',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-28 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-red-950 to-slate-900"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 left-1/4 w-96 h-96 bg-red-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute top-1/3 -right-32 w-80 h-80 bg-orange-400 rounded-full blur-3xl opacity-15 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-block mb-6 px-5 py-2.5 bg-red-500/20 rounded-full border-2 border-red-400/60 backdrop-blur-md">
              <p className="text-red-200 text-xs sm:text-sm font-bold tracking-widest uppercase drop-shadow-lg">Get In Touch</p>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
              Contact <span className="bg-linear-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">1760 Hardware</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              We&apos;re here to help! Reach out to us with any questions or inquiries about our products and services
            </p>
          </div>
        </section>

        {/* Contact Methods Grid */}
        <section className="py-16 sm:py-24 md:py-32 bg-linear-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {contactMethods.map((method, index) => {
                const Icon = method.icon;
                return (
                  <div key={index} className="group relative rounded-2xl p-0.5 overflow-hidden cursor-pointer h-full">
                    <div className={`absolute inset-0 bg-linear-to-br ${method.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className={`relative bg-linear-to-br ${method.lightColor} rounded-2xl p-8 h-full transition-all duration-500 group-hover:-translate-y-2 group-hover:shadow-2xl`}>
                      <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-br opacity-0 group-hover:opacity-20 rounded-full blur-2xl group-hover:scale-150 transition-all duration-500" style={{background: `linear-gradient(to bottom right, rgba(255,107,53,0.4), transparent)`}}></div>
                      
                      <div className="relative">
                        <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-linear-to-br ${method.color} text-white mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                          <Icon size={28} />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{method.title}</h3>
                        <p className="text-gray-600 text-sm mb-3">{method.description}</p>
                        <p className="text-lg font-semibold text-slate-900 group-hover:text-red-600 transition-colors">{method.details}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Contact Form Section */}
        <section className="py-16 sm:py-24 md:py-32 bg-linear-to-b from-gray-50 to-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Send us a <span className="text-red-600">Message</span>
              </h2>
              <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                Fill out the form below and we&apos;ll get back to you as soon as possible
              </p>
            </div>

            <div className="bg-linear-to-br from-white to-gray-50 rounded-3xl shadow-2xl overflow-hidden border border-gray-200">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                {/* Form */}
                <div className="p-8 sm:p-12">
                  {submitted && (
                    <div className="mb-6 p-4 bg-green-50 border-2 border-green-500 rounded-xl">
                      <p className="text-green-700 font-semibold text-center">✓ Thank you! We&apos;ll contact you soon.</p>
                    </div>
                  )}
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-2">Full Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-bold text-slate-900 mb-2">Email</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300"
                          placeholder="your@email.com"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-slate-900 mb-2">Phone</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300"
                          placeholder="+254 708 932 609"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-2">Subject</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300"
                        placeholder="What is this about?"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-bold text-slate-900 mb-2">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:outline-none focus:border-red-500 focus:ring-2 focus:ring-red-200 transition-all duration-300 resize-none"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 bg-linear-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl group"
                    >
                      <Send size={20} />
                      <span>Send Message</span>
                    </button>
                  </form>
                </div>

                {/* Info Section */}
                <div className="hidden lg:flex flex-col justify-between bg-linear-to-br from-slate-900 to-red-950 p-12 text-white">
                  <div>
                    <h3 className="text-2xl font-bold mb-8">Why Contact Us?</h3>
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center shrink-0">
                          <span className="text-xl">✓</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Quick Response</h4>
                          <p className="text-gray-300 text-sm">We respond within 24 hours</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center shrink-0">
                          <span className="text-xl">✓</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">Expert Advice</h4>
                          <p className="text-gray-300 text-sm">Get professional recommendations</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center shrink-0">
                          <span className="text-xl">✓</span>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-1">24/7 Available</h4>
                          <p className="text-gray-300 text-sm">Reach out anytime that suits you</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-white/20">
                    <p className="text-gray-300 text-sm mb-4">Need immediate assistance?</p>
                    <a
                      href="https://wa.me/254708932609"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
                    >
                      <Smartphone size={20} />
                      <span>Chat on WhatsApp</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile WhatsApp CTA */}
            <div className="lg:hidden mt-8 text-center">
              <p className="text-gray-600 text-sm mb-4">Need immediate assistance?</p>
              <a
                href="https://wa.me/254708932609"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <Smartphone size={20} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16 sm:py-24 md:py-32 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Find Us
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Located in Kiserian Town, Magadi Road | Open Monday to Saturday
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">Our Location</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    1760 Hardware is conveniently located in Kiserian Town on Magadi Road, serving customers throughout Kenya with premium door solutions and hardware supplies.
                  </p>
                </div>

                <div className="bg-linear-to-br from-red-50 to-orange-50 rounded-2xl p-8 border border-red-100">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <MapPin className="text-red-600 shrink-0 mt-1" size={24} />
                      <div>
                        <p className="font-semibold text-slate-900">Address</p>
                        <p className="text-gray-600">Kiserian Town, Magadi Road, Kenya</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="text-red-600 shrink-0 mt-1" size={24} />
                      <div>
                        <p className="font-semibold text-slate-900">Phone</p>
                        <a href="tel:+254708932609" className="text-red-600 hover:text-red-700 font-medium">
                          +254 708 932 609
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="text-red-600 shrink-0 mt-1" size={24} />
                      <div>
                        <p className="font-semibold text-slate-900">Email</p>
                        <a href="mailto:info@1760hardware.com" className="text-red-600 hover:text-red-700 font-medium">
                          info@1760hardware.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl overflow-hidden shadow-2xl h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.0245896547547!2d36.6726!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x18455a3b7d6b5555%3A0x8e7c8e8e8e8e8e8e!2sKiserian%20Town%2C%20Magadi%20Road!5e0!3m2!1sen!2ske!4v1623456789"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="1760 Hardware Location - Kiserian Town, Magadi Road"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
