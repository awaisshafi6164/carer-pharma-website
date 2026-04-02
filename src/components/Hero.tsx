import { ArrowRight, ChevronDown, Shield, Award, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { companyInfo } from '../data/company';

const stats = [
  { icon: Shield, value: '100+', label: 'Products' },
  { icon: Award, value: '4', label: 'Certifications' },
  { icon: Globe, value: 'GMP', label: 'Compliant' },
];

export default function Hero() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-teal-600/20 rounded-full animate-blob blur-3xl" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-cyan-500/15 rounded-full animate-blob-2 blur-3xl" />
        <div className="absolute -bottom-40 left-1/3 w-[450px] h-[450px] bg-teal-400/10 rounded-full animate-blob-3 blur-3xl" />

        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />

        {/* Radial glow center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-teal-600/5 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div className="space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-teal-300 px-4 py-2 rounded-full text-sm font-semibold">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-400" />
              </span>
              {companyInfo.slogan}
            </div>

            {/* Headline */}
            <div>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-extrabold leading-[1.1] tracking-tight">
                <span className="text-white block">
                  {companyInfo.tagline.split(' ').slice(0, 2).join(' ')}
                </span>
                <span className="block gradient-text mt-1">
                  {companyInfo.tagline.split(' ').slice(2).join(' ')}
                </span>
              </h1>
            </div>

            <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
              {companyInfo.about}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/products')}
                className="group flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold btn-glow transition-all duration-300"
              >
                Explore Products
                <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold border border-white/25 hover:bg-white/20 transition-all duration-300"
              >
                Contact Us
              </button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 pt-4">
              {stats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-teal-400" />
                  </div>
                  <div>
                    <p className="text-xl font-bold text-white leading-tight">{value}</p>
                    <p className="text-xs text-slate-400 uppercase tracking-wide">{label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — image */}
          <div className="relative flex justify-center items-center">
            {/* Rotating ring */}
            <div className="absolute w-[420px] h-[420px] rounded-full border border-teal-500/20 animate-spin-slow" />
            <div className="absolute w-[380px] h-[380px] rounded-full border border-cyan-400/10 animate-spin-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }} />

            {/* Glow backdrop */}
            <div className="absolute w-80 h-80 bg-teal-500/20 rounded-full blur-3xl" />

            {/* Image */}
            <div className="relative z-10 animate-float">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-teal-900/50">
                <img
                  src="assets/HeroSection.jpeg"
                  alt="Pharmaceutical Research"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-teal-900/40 to-transparent" />
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-6 glass-dark text-white px-4 py-3 rounded-2xl shadow-xl border border-white/10">
                <p className="text-xs text-teal-400 font-semibold uppercase tracking-wider">Certified</p>
                <p className="text-sm font-bold">ISO 9001 • DRAP</p>
              </div>

              <div className="absolute -top-4 -right-6 glass-dark text-white px-4 py-3 rounded-2xl shadow-xl border border-white/10">
                <p className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">Location</p>
                <p className="text-sm font-bold">Islamabad, PK</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-500">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-4 h-4 animate-bounce" />
        </div>
      </div>
    </section>
  );
}
