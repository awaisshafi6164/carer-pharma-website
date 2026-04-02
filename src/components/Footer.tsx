import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { companyInfo } from '../data/company';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company:   [{ label: 'About Us', to: '/about' }, { label: 'Leadership', to: '/about' }, { label: 'Gallery', to: '/gallery' }, { label: 'Contact', to: '/contact' }],
    products:  [{ label: 'Our Products', to: '/products' }, { label: 'R&D Pipeline', to: '/research' }, { label: 'Quality Assurance', to: '/about' }],
    resources: [{ label: 'Patient Resources', to: '/contact' }, { label: 'Healthcare Professionals', to: '/contact' }, { label: 'Safety Information', to: '/contact' }],
  };

  const socialLinks = [
    { icon: Facebook,  href: 'https://www.facebook.com/profile.php?id=61584684687653', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/carerpharma/', label: 'Instagram' },
    { icon: Youtube,   href: '#', label: 'Youtube' },
  ];

  return (
    <footer className="relative bg-slate-950 text-slate-400 overflow-hidden">
      {/* Top gradient accent */}
      <div className="h-0.5 bg-gradient-to-r from-teal-600 via-cyan-400 to-teal-600 animate-gradient" />

      {/* Background blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-teal-900/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-20 w-80 h-80 bg-cyan-900/15 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10 mb-14">

          {/* Brand column */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3 group w-fit">
              <div className="w-11 h-11 rounded-xl overflow-hidden bg-white/10 flex items-center justify-center p-1 group-hover:bg-white/20 transition-colors">
                <img src="assets/logo/CP-logo.png" alt="Logo" className="w-full h-full object-contain" />
              </div>
              <div>
                <h2 className="text-white font-bold text-lg leading-tight">{companyInfo.name}</h2>
                <p className="text-xs text-teal-400">{companyInfo.slogan}</p>
              </div>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Delivering excellence in pharmaceutical manufacturing with state-of-the-art facilities and an unwavering commitment to patient care.
            </p>

            {/* Social */}
            <div className="flex gap-3">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:bg-gradient-to-br hover:from-teal-500 hover:to-cyan-500 hover:text-white hover:border-transparent transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>

            {/* Contact info */}
            <div className="space-y-2 text-sm">
              <a href={`mailto:${companyInfo.email}`} className="flex items-center gap-2 hover:text-teal-400 transition-colors">
                <Mail className="w-4 h-4 text-teal-500 flex-shrink-0" />
                {companyInfo.email}
              </a>
              <a href={`tel:${companyInfo.phone.office}`} className="flex items-center gap-2 hover:text-teal-400 transition-colors">
                <Phone className="w-4 h-4 text-teal-500 flex-shrink-0" />
                {companyInfo.phone.office}
              </a>
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                <span>{companyInfo.address}</span>
              </p>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-white font-bold text-sm uppercase tracking-widest mb-5">
                {section}
              </h4>
              <ul className="space-y-3">
                {links.map(({ label, to }) => (
                  <li key={label}>
                    <Link
                      to={to}
                      className="text-sm hover:text-teal-400 transition-colors duration-200 flex items-center gap-1.5 group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-600/40 group-hover:bg-teal-400 transition-colors duration-200 flex-shrink-0" />
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/[0.07] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {currentYear} {companyInfo.name}. All rights reserved.
          </p>
          <p className="text-xs text-slate-600 text-center">
            All products are DRAP certified and manufactured under strict GMP quality control standards.
          </p>
        </div>
      </div>
    </footer>
  );
}
