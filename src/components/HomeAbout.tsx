import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { companyInfo } from '../data/company';
import { useScrollReveal } from '../hooks/useScrollReveal';

const highlights = [
  'State-of-the-art manufacturing facilities',
  'GMP compliant production processes',
  'ISO 9001 & ISO 14001 certified',
  'DRAP approved pharmaceutical products',
];

export default function HomeAbout() {
  const sectionRef = useScrollReveal();

  return (
    <section id="home-about" className="py-24 bg-white overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — image mosaic */}
          <div className="reveal-left relative">
            {/* Large image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-teal-900/15 h-80">
              <img
                src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Manufacturing"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/50 to-transparent" />
              <div className="absolute bottom-5 left-5 text-white">
                <p className="text-xs text-teal-300 font-semibold uppercase tracking-widest">Est. 2009</p>
                <p className="font-bold text-base">Carer Pharmaceutical</p>
              </div>
            </div>

            {/* Two smaller images below */}
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="rounded-2xl overflow-hidden shadow-lg h-44 group">
                <img
                  src="assets/HomeAbout1.jpeg"
                  alt="Quality Control Lab"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg h-44 group">
                <img
                  src="assets/HomeAbout2.jpeg"
                  alt="Research Lab"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Floating trust badge */}
            <div className="absolute -right-5 top-1/2 -translate-y-1/2 hidden lg:block">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-4 w-36 text-center">
                <p className="text-3xl font-extrabold gradient-text leading-none mb-1">100+</p>
                <p className="text-xs text-gray-500 font-medium">Registered<br />Products</p>
              </div>
            </div>
          </div>

          {/* Right — text */}
          <div className="space-y-7">
            <div className="reveal">
              <p className="text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3">Who We Are</p>
              <h2 className="text-4xl xl:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                Trusted Pharmaceutical<br />
                <span className="gradient-text">Manufacturing Partner</span>
              </h2>
              <div className="w-16 h-1.5 rounded-full bg-gradient-to-r from-teal-500 to-cyan-500" />
            </div>

            <p className="reveal text-lg text-gray-700 leading-relaxed stagger-1">
              {companyInfo.about}
            </p>
            <p className="reveal text-base text-gray-500 leading-relaxed stagger-2">
              {companyInfo.history}
            </p>

            {/* Highlights */}
            <ul className="reveal grid grid-cols-1 gap-2.5 stagger-3">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-3 p-3 rounded-xl bg-teal-50/60 border border-teal-100/50">
                  <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium text-sm">{item}</span>
                </li>
              ))}
            </ul>

            <div className="reveal stagger-4">
              <Link
                to="/about"
                className="group inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-xl btn-glow transition-all duration-300"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
