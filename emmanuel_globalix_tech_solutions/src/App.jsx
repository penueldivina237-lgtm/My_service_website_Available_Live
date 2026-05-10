
import React, { useState, useEffect, useRef } from "react";

import Consultation from "./Consultation";

export default function EmmanuelGlobalixHomepage() {
  const services = [
    "Website Development",
    "Mobile App Development",
    "IT Consulting",
    "Run Ads for Business",
    "Create Business Flyer",
    "SEO & Digital Marketing",
  ];

  const features = [
    "Professional Team",
    "Fast Delivery",
    "Modern Technology",
    "Reliable Support",
    "Scalable Solutions",
    "Premium UI/UX",
  ];


  const [showConsultation, setShowConsultation] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const [animate, setAnimate] = useState(false);
  const [revealed, setRevealed] = useState({});

  // For scroll-based reveal
  const sectionRefs = {
    hero: useRef(),
    about: useRef(),
    services: useRef(),
    why: useRef(),
    portfolio: useRef(),
    testimonials: useRef(),
    contact: useRef(),
    footer: useRef(),
  };

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);

    const handleReveal = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setRevealed(prev => ({ ...prev, [entry.target.dataset.section]: true }));
        }
      });
    };
    const observer = new window.IntersectionObserver(handleReveal, {
      threshold: 0.15
    });
    Object.entries(sectionRefs).forEach(([key, ref]) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });
    return () => observer.disconnect();
  }, []);


  if (showConsultation && !showConfirmation) {
    return (
      <Consultation
        onBookingSuccess={() => {
          setShowConsultation(false);
          setShowConfirmation(true);
        }}
        onCancel={() => setShowConsultation(false)}
      />
    );
  }

  if (showConfirmation) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
        <div className="bg-white/10 border border-yellow-400/30 rounded-3xl p-10 shadow-2xl text-center max-w-lg mx-auto">
          <h2 className="text-4xl font-bold text-yellow-400 mb-4">Congratulations!</h2>
          <p className="text-lg text-gray-200 mb-6">
            You have successfully booked a service with Emmanuel Globalix Tech Solutions.
          </p>
          <p className="text-gray-300 mb-8">
            You will receive a confirmation email shortly with your booking details.<br />
            Thank you for choosing us!
          </p>
          <button
            className="px-8 py-3 rounded-full bg-yellow-400 text-black font-bold hover:scale-105 transition"
            onClick={() => setShowConfirmation(false)}
          >
            Back to Homepage
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen bg-black text-white overflow-hidden transition-all duration-700 ${animate ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
      {/* Background Effects */}
      <div className="fixed inset-0 -z-10">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-500/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/40 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold tracking-wide text-yellow-400">
              Emmanuel <span className="text-white">Globalix</span>
            </h1>
            <p className="text-xs text-gray-400 tracking-[0.3em]">
              TECH SOLUTIONS
            </p>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            <a href="#about" className="hover:text-yellow-400 transition">
              About
            </a>
            <a href="#services" className="hover:text-yellow-400 transition">
              Services
            </a>
            <a href="#portfolio" className="hover:text-yellow-400 transition">
              Portfolio
            </a>
            <a href="#contact" className="hover:text-yellow-400 transition">
              Contact
            </a>
          </nav>

          <button
            className="px-5 py-2 rounded-full bg-yellow-400 text-black font-semibold hover:scale-105 transition"
            onClick={() => setShowConsultation(true)}
          >
            Book Consultation
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section
        ref={sectionRefs.hero}
        data-section="hero"
        className={`relative py-32 px-6 transition-all duration-700 ${revealed.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-yellow-400/30 bg-yellow-400/10 text-yellow-300 text-sm mb-6">
              Canadian-Based Digital Solutions Company
            </div>

            <h2 className="text-5xl md:text-7xl font-black leading-tight mb-6">
              Innovative Digital Solutions for
              <span className="text-yellow-400"> Modern Businesses</span>
            </h2>

            <p className="text-lg text-gray-300 leading-relaxed mb-10 max-w-2xl">
              We help businesses grow through premium website development,
              mobile apps, branding, IT consulting, and scalable digital
              transformation solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                className="px-8 py-4 rounded-2xl bg-yellow-400 text-black font-bold hover:scale-105 transition shadow-2xl shadow-yellow-500/20"
                onClick={() => setShowConsultation(true)}
              >
                Book Consultation
              </button>

              <button className="px-8 py-4 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl hover:bg-white/10 transition">
                View Services
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-8 shadow-2xl">
              <div className="grid grid-cols-2 gap-5">
                <div className="rounded-2xl bg-gradient-to-br from-yellow-400/20 to-yellow-600/10 p-6 border border-yellow-400/20">
                  <h3 className="text-4xl font-black text-yellow-400">50+</h3>
                  <p className="text-gray-300 mt-2">Projects Delivered</p>
                </div>

                <div className="rounded-2xl bg-gradient-to-br from-blue-500/20 to-blue-700/10 p-6 border border-blue-400/20">
                  <h3 className="text-4xl font-black text-blue-400">24/7</h3>
                  <p className="text-gray-300 mt-2">Client Support</p>
                </div>

                <div className="rounded-2xl bg-white/5 p-6 border border-white/10 col-span-2">
                  <h3 className="text-2xl font-bold mb-4">
                    Premium Technology Solutions
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    Modern websites, business systems, scalable applications,
                    and enterprise-grade digital experiences designed for
                    growth-focused businesses.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section
        id="about"
        ref={sectionRefs.about}
        data-section="about"
        className={`py-24 px-6 border-t border-white/5 transition-all duration-700 ${revealed.about ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-6xl mx-auto text-center">
          <h3 className="text-5xl font-bold mb-8">
            About <span className="text-yellow-400">Us</span>
          </h3>

          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
            Emmanuel Globalix Tech Solutions is a Canadian-based digital
            solutions company specializing in professional website
            development, mobile app development, IT consulting, branding, and
            business technology solutions. We help entrepreneurs and
            organizations build a strong digital presence through modern,
            scalable, and innovative technology services.
          </p>
        </div>
      </section>

      {/* Services */}
      <section
        id="services"
        ref={sectionRefs.services}
        data-section="services"
        className={`py-24 px-6 transition-all duration-700 ${revealed.services ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold mb-4">
              Our <span className="text-yellow-400">Services</span>
            </h3>
            <p className="text-gray-400 text-lg">
              Premium digital solutions tailored for modern businesses.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              let description = "High-quality digital services designed to improve business growth, visibility, and operational efficiency.";
              if (service === "IT Consulting") {
                description = "Expert IT consulting to streamline your business operations, implement the right technology solutions, and provide strategic guidance for digital transformation and growth.";
              } else if (service === "Run Ads for Business") {
                description = "Targeted advertising campaigns to boost your business reach and attract new customers across digital platforms.";
              } else if (service === "Create Business Flyer") {
                description = "Professional flyer design and creative assets to promote your business, events, or special offers both online and offline.";
              } else if (service === "SEO & Digital Marketing") {
                description = "Comprehensive SEO and digital marketing strategies to increase your online visibility, drive traffic, and grow your brand.";
              }
              return (
                <div
                  key={index}
                  className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 hover:border-yellow-400/40 hover:-translate-y-2 transition duration-300"
                >
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-yellow-400 to-yellow-600 mb-6" />
                  <h4 className="text-2xl font-bold mb-4 group-hover:text-yellow-400 transition">
                    {service}
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    {description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section
        ref={sectionRefs.why}
        data-section="why"
        className={`py-24 px-6 border-t border-white/5 transition-all duration-700 ${revealed.why ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-5xl font-bold mb-8">
              Why Choose <span className="text-yellow-400">Us</span>
            </h3>

            <div className="space-y-5">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 rounded-2xl bg-white/5 border border-white/10 p-5"
                >
                  <div className="w-4 h-4 rounded-full bg-yellow-400" />
                  <span className="text-lg text-gray-200">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[2rem] bg-gradient-to-br from-yellow-500/20 to-blue-500/20 border border-white/10 p-10 backdrop-blur-2xl">
            <h4 className="text-4xl font-bold mb-6">
              Building Future-Ready Businesses
            </h4>

            <p className="text-gray-300 leading-relaxed text-lg mb-8">
              Our mission is to provide modern technology solutions that help
              businesses scale faster, improve customer engagement, and build a
              strong online presence.
            </p>

            <button className="px-8 py-4 rounded-2xl bg-yellow-400 text-black font-bold hover:scale-105 transition">
              Start Your Project
            </button>
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section
        id="portfolio"
        ref={sectionRefs.portfolio}
        data-section="portfolio"
        className={`py-24 px-6 transition-all duration-700 ${revealed.portfolio ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold mb-4">
              Project <span className="text-yellow-400">Showcase</span>
            </h3>
            <p className="text-gray-400 text-lg">
              Modern digital experiences built for ambitious brands.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 hover:scale-[1.02] transition"
              >
                <div className="h-64 bg-gradient-to-br from-yellow-400/20 to-blue-500/20" />
                <div className="p-6">
                  <h4 className="text-2xl font-bold mb-3">
                    Premium Business Platform
                  </h4>
                  <p className="text-gray-400 leading-relaxed">
                    Responsive digital platform with modern branding, booking,
                    and scalable technology infrastructure.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section
        ref={sectionRefs.testimonials}
        data-section="testimonials"
        className={`py-24 px-6 border-t border-white/5 transition-all duration-700 ${revealed.testimonials ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-5xl font-bold mb-4">
              Client <span className="text-yellow-400">Testimonials</span>
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-3xl bg-white/5 border border-white/10 p-8"
              >
                <div className="flex gap-1 mb-4 text-yellow-400 text-xl">
                  ★★★★★
                </div>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Emmanuel Globalix Tech Solutions delivered an outstanding
                  digital experience with professionalism, speed, and premium
                  design quality.
                </p>
                <div>
                  <h4 className="font-bold">Business Client</h4>
                  <p className="text-gray-500 text-sm">Toronto, Canada</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        ref={sectionRefs.contact}
        data-section="contact"
        className={`py-24 px-6 transition-all duration-700 ${revealed.contact ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <div className="max-w-5xl mx-auto rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-2xl p-12 text-center">
          <h3 className="text-5xl font-bold mb-6">
            Book a <span className="text-yellow-400">Consultation</span>
          </h3>

          <p className="text-gray-300 text-lg mb-10 max-w-3xl mx-auto">
            Ready to build your next digital project? Let’s discuss your
            business goals and create modern technology solutions that drive
            growth.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="rounded-2xl bg-black/40 border border-white/10 p-6">
              <h4 className="text-yellow-400 font-bold mb-2">Email</h4>
              <p className="text-gray-300">emmanuel@globalix-inc.com</p>
            </div>

            <div className="rounded-2xl bg-black/40 border border-white/10 p-6">
              <h4 className="text-yellow-400 font-bold mb-2">Phone</h4>
              <p className="text-gray-300">+1 (365) 384-5983</p>
            </div>

            <div className="rounded-2xl bg-black/40 border border-white/10 p-6">
              <h4 className="text-yellow-400 font-bold mb-2">Website</h4>
              <p className="text-gray-300">emmanueldivine.com</p>
            </div>
          </div>

          <button
            className="px-10 py-5 rounded-2xl bg-yellow-400 text-black text-lg font-bold hover:scale-105 transition shadow-2xl shadow-yellow-500/20"
            onClick={() => setShowConsultation(true)}
          >
            Schedule Session
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer
        ref={sectionRefs.footer}
        data-section="footer"
        className={`border-t border-white/10 py-10 px-6 text-center text-gray-500 transition-all duration-700 ${revealed.footer ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
      >
        <h4 className="text-2xl font-bold text-yellow-400 mb-3">
          Emmanuel Globalix Tech Solutions
        </h4>

        <p className="mb-6">
          Innovate • Solve • Grow
        </p>

        <div className="flex justify-center gap-6 mb-6 text-sm">
          <a href="#" className="hover:text-yellow-400 transition">
            Facebook
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            Instagram
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            LinkedIn
          </a>
        </div>

        <p>
          © 2026 Emmanuel Globalix Tech Solutions. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
