import { Facebook, Instagram, Mail, Youtube } from 'lucide-react';
import { companyInfo } from '../data/company';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { label: 'About Us', href: '#about' },
      { label: 'Leadership', href: '#' },
      { label: 'Careers', href: '#' },
      { label: 'News & Media', href: '#' },
    ],
    products: [
      { label: 'Our Products', href: '#products' },
      { label: 'Pipeline', href: '#research' },
      { label: 'Clinical Trials', href: '#' },
      { label: 'Quality Assurance', href: '#' },
    ],
    resources: [
      { label: 'Patient Resources', href: '#' },
      { label: 'Healthcare Professionals', href: '#' },
      { label: 'Research Publications', href: '#' },
      { label: 'Safety Information', href: '#' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '#' },
      { label: 'Terms of Use', href: '#' },
      { label: 'Compliance', href: '#' },
      { label: 'Accessibility', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/profile.php?id=61584684687653', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Youtube, href: 'https://www.instagram.com/carerpharma/', label: 'Youtube' },
  ];

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src="assets/logo/CP-logo.png"
                alt="Carer Pharma Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="text-2xl font-bold text-white">{companyInfo.name}</h1>
                <p className="text-xs text-gray-400">{companyInfo.tagline}</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              {companyInfo.slogan}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="bg-gray-800 p-3 rounded-lg hover:bg-gradient-to-r hover:from-teal-600 hover:to-cyan-600 transition-all duration-300 group"
                >
                  <social.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-teal-400 transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-teal-400 transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-teal-400 transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-teal-400 transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-gray-400">
              © {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="w-4 h-4 text-teal-500" />
              <a href={`mailto:${companyInfo.email}`} className="text-gray-400 hover:text-teal-400 transition-colors duration-200">
                {companyInfo.email}
              </a>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-4 text-center md:text-left">
            {companyInfo.name} is committed to compliance with all applicable healthcare regulations.
            All products are DRAP certified and manufactured under strict GMP quality control standards.
          </p>
        </div>
      </div>
    </footer>
  );
}
