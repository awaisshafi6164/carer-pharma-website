import { Target, Heart, Globe } from 'lucide-react';
import { companyInfo } from '../data/company';
import { useScrollReveal } from '../hooks/useScrollReveal';

const pillars = [
  { icon: Target, title: 'Patient-Centric', desc: 'Every decision is measured against a single question: does this benefit the patient?' },
  { icon: Heart,  title: 'Care & Compassion', desc: 'We treat each medicine with the same care we would want for our own loved ones.' },
  { icon: Globe,  title: 'Global Responsibility', desc: 'Committed to safe, affordable, and high-quality medicines reaching communities worldwide.' },
];

export default function MissionSection() {
  const sectionRef = useScrollReveal();

  return (
    <section
      className="relative py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900"
      ref={sectionRef}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-teal-600/6 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-600/8 rounded-full blur-3xl animate-blob" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.9) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left — mission text */}
          <div>
            <p className="reveal text-teal-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Our Purpose
            </p>
            <h2 className="reveal text-4xl md:text-5xl font-extrabold text-white mb-6 stagger-1">
              Driven by a<br /><span className="gradient-text">Clear Mission</span>
            </h2>

            <p className="reveal text-slate-300 leading-relaxed text-lg mb-6 stagger-2">
              At <span className="text-teal-400 font-semibold">Carer Pharmaceutical</span>, our mission is centered on preserving and enhancing patient health through the consistent delivery of top-quality, safe, and effective pharmaceutical products and services.
            </p>

            <p className="reveal text-slate-400 leading-relaxed stagger-3">
              We are dedicated to meeting the expectations of our customers worldwide by adhering to current good manufacturing practices, utilizing state-of-the-art technology, fostering a competent workforce, and ensuring efficient management practices.
            </p>

            {/* Big quote */}
            <div className="reveal mt-8 stagger-4">
              <div className="relative pl-6 border-l-2 border-teal-500/50">
                <p className="text-xl text-white font-medium italic leading-relaxed">
                  "By prioritizing the health and well-being of patients, we strive to make a positive impact on healthcare outcomes globally."
                </p>
              </div>
            </div>
          </div>

          {/* Right — pillars */}
          <div className="space-y-4">
            {pillars.map(({ icon: Icon, title, desc }, i) => (
              <div
                key={title}
                className={`reveal stagger-${i + 1} group flex items-start gap-5 glass-dark border border-white/8 hover:border-teal-500/30 rounded-2xl p-6 transition-all duration-300`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal-500/20 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-1">{title}</h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                </div>
              </div>
            ))}

            {/* Vision card */}
            <div className="reveal stagger-4 relative overflow-hidden rounded-2xl bg-gradient-to-br from-teal-600/20 to-cyan-600/10 border border-teal-500/25 p-6">
              <p className="text-teal-400 text-xs font-semibold uppercase tracking-widest mb-2">Our Vision</p>
              <p className="text-white font-semibold leading-relaxed">
                {companyInfo.vision}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
