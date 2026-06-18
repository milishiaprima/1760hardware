'use client';

import { Navbar } from '@/components/index';
import Footer from '@/components/Footer';
import { Star, Send, MessageCircle, User } from 'lucide-react';
import { useState } from 'react';

export default function Reviews() {
  const [reviews, setReviews] = useState([
    {
      id: 1,
      name: 'James Omondi',
      rating: 5,
      date: '2024-06-10',
      comment: 'Excellent service! The doors are of premium quality and the installation was quick and professional. Highly recommend 1760 Hardware!',
      verified: true,
    },
    {
      id: 2,
      name: 'Sarah Kipchoge',
      rating: 5,
      date: '2024-06-08',
      comment: 'Best hardware supplier in Kiserian. Great customer support and competitive pricing. Will definitely order again!',
      verified: true,
    },
    {
      id: 3,
      name: 'Peter Nyambati',
      rating: 4,
      date: '2024-06-05',
      comment: 'Very satisfied with the wooden doors. Quality is great, only wish delivery was faster but overall excellent experience.',
      verified: true,
    },
  ]);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    rating: 5,
    comment: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'rating' ? parseInt(value) : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newReview = {
      id: reviews.length + 1,
      name: formData.name,
      rating: formData.rating,
      date: new Date().toISOString().split('T')[0],
      comment: formData.comment,
      verified: false,
    };
    setReviews([newReview, ...reviews]);
    setFormData({ name: '', email: '', rating: 5, comment: '' });
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const averageRating = (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 sm:py-28 md:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-slate-950 via-blue-950 to-slate-900"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <div className="absolute top-1/3 -right-32 w-80 h-80 bg-cyan-400 rounded-full blur-3xl opacity-15 animate-pulse" style={{animationDelay: '0.5s'}}></div>
            <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent"></div>
          </div>

          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <div className="inline-block mb-6 px-5 py-2.5 bg-blue-500/20 rounded-full border-2 border-blue-400/60 backdrop-blur-md">
              <p className="text-blue-200 text-xs sm:text-sm font-bold tracking-widest uppercase drop-shadow-lg">Customer Voice</p>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight text-white drop-shadow-lg">
              Customer <span className="bg-linear-to-r from-blue-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">Reviews & Partnerships</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed">
              Hear from our satisfied customers and become part of our growing community of hardware professionals
            </p>
          </div>
        </section>

        {/* Reviews Stats Section */}
        <section className="py-16 sm:py-24 md:py-32 bg-linear-to-b from-white to-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {/* Total Reviews */}
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-8 border border-blue-200 text-center">
                <MessageCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <p className="text-4xl font-bold text-blue-600 mb-2">{reviews.length}</p>
                <p className="text-gray-700 font-medium">Total Reviews</p>
              </div>

              {/* Average Rating */}
              <div className="bg-gradient-to-br from-yellow-50 to-amber-100 rounded-2xl p-8 border border-amber-200 text-center">
                <Star className="w-12 h-12 text-amber-600 mx-auto mb-4 fill-amber-600" />
                <p className="text-4xl font-bold text-amber-600 mb-2">{averageRating}</p>
                <p className="text-gray-700 font-medium">Average Rating</p>
              </div>

              {/* Verified Partners */}
              <div className="bg-gradient-to-br from-green-50 to-emerald-100 rounded-2xl p-8 border border-green-200 text-center">
                <User className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <p className="text-4xl font-bold text-green-600 mb-2">{reviews.filter(r => r.verified).length}</p>
                <p className="text-gray-700 font-medium">Verified Reviews</p>
              </div>
            </div>
          </div>
        </section>

        {/* Customer Reviews Display */}
        <section className="py-16 sm:py-24 md:py-32 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                What Our Customers <span className="text-blue-600">Say</span>
              </h2>
            </div>

            <div className="space-y-6">
              {reviews.map((review) => (
                <div key={review.id} className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-bold">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <h3 className="font-bold text-slate-900">{review.name}</h3>
                          <p className="text-sm text-gray-500">{review.date}</p>
                        </div>
                      </div>
                    </div>
                    {review.verified && (
                      <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">✓ Verified</span>
                    )}
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className={i < review.rating ? 'fill-amber-400 text-amber-400' : 'text-gray-300'}
                      />
                    ))}
                  </div>

                  <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leave a Review Form */}
        <section className="py-16 sm:py-24 md:py-32 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Share Your <span className="text-blue-600">Experience</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Your feedback helps us improve our services and helps other customers make informed decisions
              </p>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl shadow-2xl overflow-hidden border border-blue-200 p-8 sm:p-12">
              {submitted && (
                <div className="mb-6 p-4 bg-green-50 border-2 border-green-500 rounded-xl">
                  <p className="text-green-700 font-semibold text-center">✓ Thank you! Your review has been submitted and is awaiting verification.</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-blue-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-bold text-slate-900 mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-blue-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Rating</label>
                  <div className="flex gap-2">
                    {[1, 2, 3, 4, 5].map((value) => (
                      <button
                        key={value}
                        type="button"
                        onClick={() => setFormData(prev => ({ ...prev, rating: value }))}
                        className="focus:outline-none transition-transform hover:scale-110"
                      >
                        <Star
                          size={32}
                          className={`cursor-pointer transition-all ${
                            value <= formData.rating
                              ? 'fill-amber-400 text-amber-400'
                              : 'text-gray-400 hover:text-amber-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-bold text-slate-900 mb-2">Your Review</label>
                  <textarea
                    name="comment"
                    value={formData.comment}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border-2 border-blue-300 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300 resize-none"
                    placeholder="Share your experience with 1760 Hardware services..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl group"
                >
                  <Send size={20} />
                  <span>Submit Review</span>
                </button>
              </form>

              <p className="text-center text-sm text-gray-600 mt-6">
                All reviews are moderated and verified before being published on our site.
              </p>
            </div>
          </div>
        </section>

        {/* Partnership Section */}
        <section className="py-16 sm:py-24 md:py-32 bg-linear-to-b from-slate-50 to-blue-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                Become a <span className="text-blue-600">Partner</span>
              </h2>
              <p className="text-gray-600 text-lg">
                Join our network of hardware retailers and contractors
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Wholesale Pricing</h3>
                <p className="text-gray-600">Get exclusive wholesale rates on bulk orders and special pricing for regular partners</p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Business Growth</h3>
                <p className="text-gray-600">Expand your business with our premium products and dedicated account support</p>
              </div>

              <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">Marketing Support</h3>
                <p className="text-gray-600">Access marketing materials and promotional support to help grow your sales</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <a
                href="https://wa.me/254708932609"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-linear-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-2xl"
              >
                <MessageCircle size={20} />
                <span>Inquire About Partnership</span>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
