import MissionSection from '../components/MissionSection';
import TeamSection from '../components/TeamSection';
import { companyInfo } from '../data/company';
import { useScrollReveal } from '../hooks/useScrollReveal';
import {
  FlaskConical, Microscope, TestTube, Atom,
  ShieldCheck, CheckCircle2, ArrowRight, BarChart3, HeartPulse,
} from 'lucide-react';
import { Link } from 'react-router-dom';

const capabilities = [
  {
    icon: FlaskConical,
    title: 'Advanced Formulation',
    desc: 'Cutting-edge drug formulation using the latest excipient science for maximum bioavailability, stability, and patient compliance.',
    color: 'from-teal-500 to-teal-600',
  },
  {
    icon: Microscope,
    title: 'Analytical Research',
    desc: 'Rigorous HPLC, dissolution, and microbiological analysis ensuring every batch meets stringent pharmacopoeial specifications.',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: TestTube,
    title: 'Stability Testing',
    desc: 'ICH-compliant accelerated and long-term stability studies, supported by temperature- and humidity-controlled chambers.',
    color: 'from-teal-600 to-cyan-500',
  },
  {
    icon: Atom,
    title: 'Innovation Pipeline',
    desc: 'Continuous new molecule evaluation and product line extensions addressing unmet therapeutic needs in the market.',
    color: 'from-cyan-600 to-teal-600',
  },
];

const pipelineCategories = [
  { label: 'Capsules & Tablets',   icon: HeartPulse, count: '40+' },
  { label: 'Injections & Vials',   icon: TestTube,   count: '25+' },
  { label: 'Sachets & Suspensions', icon: FlaskConical, count: '20+' },
  { label: 'Nutraceuticals',       icon: ShieldCheck, count: '15+' },
];

const standards = [
  'Good Manufacturing Practices (GMP)',
  'ICH Q10 Pharmaceutical Quality System',
  'WHO Technical Report Series guidelines',
  'DRAP Drug Registration Standards',
  'ISO 9001:2015 Quality Management',
  'Pharmacopoeia (BP/USP) compliant testing',
];

export default function ResearchPage() {
  const capRef      = useScrollReveal();
  const pipelineRef = useScrollReveal();
  const stdRef      = useScrollReveal();

  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 right-0 w-[500px] h-[500px] bg-teal-500/12 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl animate-blob-2" />
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left text */}
            <div className="animate-fade-in">
              <p className="text-teal-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Innovation & Science
              </p>
              <h1 className="text-5xl md:text-6xl font-extrabold text-white leading-tight mb-5">
                Research &amp;<br />
                <span className="gradient-text">Development</span>
              </h1>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-lg">
                {companyInfo.about}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  to="/products"
                  className="group inline-flex items-center gap-2 bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold btn-glow transition-all"
                >
                  View Our Products
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-6 py-3 rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all"
                >
                  Partner With Us
                </Link>
              </div>
            </div>

            {/* Right image */}
            <div className="relative animate-float">
              <div className="absolute -inset-4 bg-teal-500/10 rounded-3xl blur-2xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Research Laboratory"
                  className="w-full h-72 md:h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent" />
                {/* Floating badges */}
                <div className="absolute bottom-5 left-5 glass-dark border border-white/10 px-4 py-2.5 rounded-2xl">
                  <p className="text-xs text-teal-400 font-semibold uppercase tracking-wider">Certified Lab</p>
                  <p className="text-white font-bold text-sm">GMP · ISO 9001 · DRAP</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ R&D CAPABILITIES ══ */}
      <section className="py-24 bg-white overflow-hidden" ref={capRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="reveal text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3">What We Do</p>
            <h2 className="reveal text-4xl md:text-5xl font-extrabold text-gray-900 stagger-1">
              Our R&amp;D <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="reveal text-gray-500 max-w-xl mx-auto mt-3 stagger-2">
              From molecule to medicine — our science-driven team ensures every product is safe, effective, and stable.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {capabilities.map(({ icon: Icon, title, desc, color }, i) => (
              <div
                key={title}
                className={`reveal-scale stagger-${i + 1} group relative bg-gradient-to-br from-slate-50 to-teal-50/40 border border-teal-100/50 rounded-2xl p-7 card-hover overflow-hidden`}
              >
                <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color}`} />
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 text-base mb-2">{title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ PRODUCT PIPELINE ══ */}
      <section
        className="py-24 overflow-hidden bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900"
        ref={pipelineRef}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="reveal text-teal-400 text-sm font-semibold uppercase tracking-widest mb-3">
                Product Portfolio
              </p>
              <h2 className="reveal text-4xl md:text-5xl font-extrabold text-white mb-5 stagger-1">
                Our Manufacturing<br /><span className="gradient-text">Pipeline</span>
              </h2>
              <p className="reveal text-slate-300 leading-relaxed mb-8 stagger-2">
                Our diverse manufacturing capabilities span across key pharmaceutical dosage forms, each produced with the same commitment to quality and patient safety.
              </p>

              <div className="reveal grid grid-cols-2 gap-4 stagger-3">
                {pipelineCategories.map(({ label, icon: Icon, count }) => (
                  <div
                    key={label}
                    className="group glass-dark rounded-2xl p-5 border border-white/8 hover:border-teal-500/30 transition-all duration-300"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-teal-500/20 border border-teal-500/30 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-teal-400" />
                      </div>
                      <span className="text-2xl font-extrabold gradient-text">{count}</span>
                    </div>
                    <p className="text-slate-300 text-xs font-semibold">{label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="reveal-right relative">
              <div className="absolute -inset-3 bg-teal-500/10 rounded-3xl blur-xl" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src="https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Pharmaceutical Pipeline"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-5 h-5 text-teal-400" />
                    <p className="text-teal-400 text-xs font-semibold uppercase tracking-wider">100+ Products</p>
                  </div>
                  <p className="text-white font-bold text-lg mt-1">Across 6 dosage categories</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ QUALITY STANDARDS ══ */}
      <section className="py-24 bg-white overflow-hidden" ref={stdRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left relative rounded-3xl overflow-hidden shadow-2xl h-80">
              <img
                src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Quality Standards"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-teal-900/60 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-teal-300 text-xs font-semibold uppercase tracking-widest mb-1">Compliance</p>
                <p className="text-white font-extrabold text-2xl">International Standards</p>
              </div>
            </div>

            <div>
              <p className="reveal text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3">
                Regulatory Compliance
              </p>
              <h2 className="reveal text-4xl md:text-5xl font-extrabold text-gray-900 mb-5 stagger-1">
                Adherence to<br /><span className="gradient-text">Quality Standards</span>
              </h2>
              <p className="reveal text-gray-600 leading-relaxed mb-7 stagger-2">
                Our R&D and manufacturing processes comply with all relevant international guidelines, ensuring our products meet the expectations of healthcare professionals and regulatory authorities worldwide.
              </p>
              <ul className="reveal grid grid-cols-1 gap-2.5 stagger-3">
                {standards.map((std) => (
                  <li key={std} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0" />
                    <span className="text-gray-700">{std}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <MissionSection />
      <TeamSection />
    </>
  );
}
