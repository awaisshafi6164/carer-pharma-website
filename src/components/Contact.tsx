import { Mail, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { useState, FormEvent } from 'react';
import { companyInfo } from '../data/company';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const sectionRef = useScrollReveal();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 6000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const contactInfo = [
    { icon: Phone, title: 'Phone', details: [companyInfo.phone.office, `CEO: ${companyInfo.phone.ceo}`], color: 'from-teal-500 to-teal-600' },
    { icon: Mail,  title: 'Email', details: [companyInfo.email, companyInfo.website], color: 'from-cyan-500 to-cyan-600' },
    { icon: MapPin, title: 'Address', details: [companyInfo.address], color: 'from-teal-600 to-cyan-500' },
    { icon: Clock, title: 'Business Hours', details: ['Mon – Fri: 9am – 6pm', 'Saturday: 10am – 4pm'], color: 'from-cyan-600 to-teal-600' },
  ];

  const inputClass =
    'w-full px-4 py-3.5 rounded-xl border-2 border-gray-200 bg-gray-50/50 focus:border-teal-400 focus:bg-white focus:outline-none transition-all duration-200 text-gray-800 placeholder-gray-400';

  return (
    <section id="contact" className="min-h-screen pt-32 pb-20 bg-gradient-to-br from-slate-50 to-teal-50/40 overflow-hidden">
      {/* Page heading */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
        <p className="text-teal-600 text-sm font-semibold uppercase tracking-widest mb-3 animate-fade-in">
          Get In Touch
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 animate-fade-in">
          Contact <span className="gradient-text">Us</span>
        </h1>
        <p className="text-lg text-gray-500 mt-4 max-w-2xl mx-auto animate-fade-in">
          Have questions about our products or services? We're here to help.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={sectionRef}>
        <div className="grid lg:grid-cols-2 gap-12">

          {/* Left — info */}
          <div className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.map((info, i) => (
                <div
                  key={i}
                  className={`reveal reveal-left stagger-${i + 1} group flex items-start gap-4 p-5 bg-white rounded-2xl border border-gray-100 card-hover`}
                >
                  <div className={`bg-gradient-to-br ${info.color} p-3 rounded-xl flex-shrink-0 shadow-md`}>
                    <info.icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm mb-1">{info.title}</h4>
                    {info.details.map((d, j) => (
                      <p key={j} className="text-gray-500 text-sm">{d}</p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA card */}
            <div className="reveal reveal-left stagger-5 relative overflow-hidden rounded-3xl bg-gradient-to-br from-teal-600 to-cyan-600 p-8 text-white">
              <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
              <div className="relative">
                <h4 className="text-xl font-bold mb-3">Need Immediate Assistance?</h4>
                <p className="text-teal-100 text-sm mb-5 leading-relaxed">
                  For urgent inquiries or adverse event reporting, contact our team directly.
                </p>
                <a
                  href={`tel:${companyInfo.phone.ceo}`}
                  className="inline-flex items-center gap-2 bg-white text-teal-700 px-5 py-3 rounded-xl font-bold text-sm hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                >
                  <Phone className="w-4 h-4" />
                  {companyInfo.phone.ceo}
                </a>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="reveal reveal-right bg-white rounded-3xl shadow-2xl shadow-teal-900/10 border border-gray-100/80 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h3>

            {submitted && (
              <div className="mb-6 flex items-center gap-3 p-4 bg-teal-50 border-2 border-teal-400/50 rounded-2xl text-teal-800">
                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0" />
                <span className="text-sm font-medium">Message sent! We'll get back to you within 24 hours.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                    Full Name *
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                    Email *
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="john@example.com" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                    Phone
                  </label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="+92 300 0000000" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                    Subject *
                  </label>
                  <select id="subject" name="subject" value={formData.subject} onChange={handleChange} required className={inputClass}>
                    <option value="">Select a subject</option>
                    <option value="product">Product Inquiry</option>
                    <option value="partnership">Partnership Opportunity</option>
                    <option value="support">Customer Support</option>
                    <option value="adverse">Adverse Event Report</option>
                    <option value="other">Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-gray-600 uppercase tracking-wider mb-1.5">
                  Message *
                </label>
                <textarea
                  id="message" name="message" value={formData.message} onChange={handleChange} required rows={5}
                  className={`${inputClass} resize-none`} placeholder="Tell us how we can help you..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-4 rounded-xl font-bold btn-glow transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
