import React, { useState } from "react";

export default function Consultation({ onBookingSuccess, onCancel }) {
  const [projectType, setProjectType] = useState("");
  const [duration, setDuration] = useState(30);
  const [price, setPrice] = useState(100);

  // Pricing logic
  React.useEffect(() => {
    let base = 100;
    if (projectType === "IT Consulting") base = 150;
    else if (projectType === "Branding & Design") base = 120;
    else if (["Website", "Mobile App", "Web App", "SEO", "Ads Running"].includes(projectType)) base = 130;
    else if (!projectType) base = 100;
    setPrice(Math.round((base / 30) * duration));
  }, [projectType, duration]);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-4">
      <div className="max-w-lg w-full bg-white/10 rounded-3xl p-10 shadow-2xl border border-white/10 mt-16 mb-16">
        <h2 className="text-4xl font-bold text-yellow-400 mb-6 text-center">Book a Consultation</h2>
        <p className="text-gray-300 text-lg mb-8 text-center">
          Fill out the form below and our team will reach out to schedule your free consultation session.
        </p>
        {/* Rates Section */}
        <div className="mb-6 p-4 rounded-xl bg-yellow-400/10 border border-yellow-400/30">
          <h3 className="text-xl font-bold text-yellow-400 mb-2">Consultation Rates</h3>
          <ul className="text-gray-200 text-base list-disc pl-5">
            <li>Standard Consultation: <span className="font-semibold">$100 CAD / 30 minutes</span></li>
            <li>Specialized IT Consulting: <span className="font-semibold">$150 CAD / 30 minutes</span></li>
            <li>Branding & Design: <span className="font-semibold">$120 CAD / 30 minutes</span></li>
            <li>Website/Mobile App/SEO: <span className="font-semibold">$130 CAD / 30 minutes</span></li>
          </ul>
          <p className="text-yellow-300 mt-2 text-sm">All rates are in Canadian Dollars (CAD). HST/GST may apply.</p>
        </div>

        <form className="space-y-6" onSubmit={e => {
          e.preventDefault();
          const form = e.target;
          const name = form.name.value;
          const email = form.email.value;
          const phone = form.phone.value;
          const bookingDate = form.bookingDate.value;
          const bookingTime = form.bookingTime.value;
          const sessionDuration = form.sessionDuration.value;
          const details = form.details.value;
          const subject = encodeURIComponent("Consultation Request from Website");
          const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\nProject Type: ${projectType}\nPreferred Date: ${bookingDate}\nPreferred Time: ${bookingTime}\nSession Duration: ${sessionDuration} minutes\nEstimated Price: $${price} CAD\nDetails: ${details}`
          );
          window.location.href = `mailto:eglobalixtechsolutions@gmail.com?subject=${subject}&body=${body}`;
          if (typeof onBookingSuccess === 'function') {
            setTimeout(() => {
              onBookingSuccess();
            }, 500);
          }
        }}>
          <div>
            <label className="block text-gray-200 mb-2">Full Name</label>
            <input name="name" type="text" className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-yellow-400" placeholder="Your Name" required />
          </div>
          <div>
            <label className="block text-gray-200 mb-2">Email Address</label>
            <input name="email" type="email" className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-yellow-400" placeholder="you@email.com" required />
          </div>
          <div>
            <label className="block text-gray-200 mb-2">Project Type</label>
            <select
              name="projectType"
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-yellow-400"
              required
              value={projectType}
              onChange={e => setProjectType(e.target.value)}
            >
              <option value="">Select a service</option>
              <option value="Website">Website</option>
              <option value="Mobile App">Mobile App</option>
              <option value="Web App">Web App</option>
              <option value="SEO">SEO</option>
              <option value="Ads Running">Ads Running</option>
              <option value="Branding & Design">Branding & Design</option>
              <option value="IT Consulting">IT Consulting</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div>
            <label className="block text-gray-200 mb-2">Phone Number</label>
            <input name="phone" type="tel" className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-yellow-400" placeholder="(123) 456-7890" />
          </div>
          <div>
            <label className="block text-gray-200 mb-2">Preferred Booking Date</label>
            <input name="bookingDate" type="date" className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-yellow-400" required />
          </div>
          <div>
            <label className="block text-gray-200 mb-2">Preferred Booking Time</label>
            <input name="bookingTime" type="time" className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-yellow-400" required />
          </div>
          <div>
            <label className="block text-gray-200 mb-2">Session Duration (minutes)</label>
            <input
              name="sessionDuration"
              type="number"
              min="30"
              step="15"
              value={duration}
              onChange={e => setDuration(Number(e.target.value))}
              className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-yellow-400"
              required
            />
            <span className="text-yellow-400 text-sm">Minimum 30 minutes</span>
          </div>
          <div className="mb-2">
            <span className="text-lg font-bold text-yellow-400">Estimated Price: ${price} CAD</span>
          </div>
          <div>
            <label className="block text-gray-200 mb-2">Project Details</label>
            <textarea name="details" className="w-full px-4 py-3 rounded-xl bg-black/40 border border-white/10 text-white focus:outline-none focus:border-yellow-400" rows="4" placeholder="Tell us about your project or goals..." required></textarea>
          </div>
          <div className="flex items-center mb-4">
            <input name="confirmRates" type="checkbox" required className="mr-2 accent-yellow-400" id="confirmRates" />
            <label htmlFor="confirmRates" className="text-gray-200 text-sm">I have read and agree to the consultation rates above.</label>
          </div>
          <div className="flex gap-4">
            <button type="submit" className="flex-1 py-4 rounded-2xl bg-yellow-400 text-black font-bold text-lg hover:scale-105 transition shadow-2xl shadow-yellow-500/20">Submit Request</button>
            <button
              type="button"
              className="flex-1 py-4 rounded-2xl bg-black/40 border border-yellow-400 text-yellow-400 font-bold text-lg hover:bg-yellow-400 hover:text-black transition"
              onClick={onCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}