import Hero from '../components/Hero';
import HomeAbout from '../components/HomeAbout';
import Certificates from '../components/Certificates';
import { leadership } from '../data/company';
import { productsComplete } from '../data/productsComplete';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight, ShieldCheck, Award, HeartPulse, Microscope,
  FlaskConical, Layers, PackageCheck, BadgeCheck, Quote,
  Globe, Users, TestTubes,
} from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

/* ── data ── */
const trustStats = [
  { value: '100+', label: 'Registered Products', icon: PackageCheck },
  { value: '15+',  label: 'Years of Excellence', icon: Award },
  { value: '4',    label: 'Global Certifications', icon: BadgeCheck },
  { value: 'GMP',  label: 'Certified Facility',   icon: ShieldCheck },
];

const whyUs = [
  {
    icon: ShieldCheck,
    title: 'Certified & Compliant',
    desc: 'ISO 9001, ISO 14001 & DRAP certified. Every batch is produced under strict GMP standards ensuring full regulatory compliance.',
    accent: 'from-teal-500 to-teal-600',
  },
  {
    icon: HeartPulse,
    title: 'Patient Safety First',
    desc: 'Rigorous stability testing, precise dosing, and end-to-end quality control — because every medicine reaches a real person.',
    accent: 'from-cyan-500 to-cyan-600',
  },
  {
    icon: Microscope,
    title: 'Science-Led Innovation',
    desc: 'A dedicated R&D team continuously improves formulations to deliver more effective, bioavailable pharmaceutical solutions.',
    accent: 'from-teal-600 to-cyan-500',
  },
  {
    icon: Globe,
    title: 'Global Standards',
    desc: 'Manufacturing processes aligned with international pharmaceutical guidelines, ensuring products meet worldwide quality benchmarks.',
    accent: 'from-cyan-600 to-teal-600',
  },
  {
    icon: Users,
    title: 'Expert Workforce',
    desc: 'Highly trained pharmacists, chemists and manufacturing specialists who bring precision and dedication to every product.',
    accent: 'from-teal-500 to-cyan-600',
  },
  {
    icon: TestTubes,
    title: 'Full-Spectrum Manufacturing',
    desc: 'From raw material sourcing to final packaging — capsules, tablets, injections, sachets and more, all under one roof.',
    accent: 'from-cyan-500 to-teal-500',
  },
];

const processSteps = [
  { num: '01', label: 'Raw Material', icon: FlaskConical, desc: 'Sourcing & testing of active pharmaceutical ingredients' },
  { num: '02', label: 'Sterilizing', icon: ShieldCheck, desc: 'Autoclave sterilization meeting pharmacopoeial standards' },
  { num: '03', label: 'Filling Ampules', icon: TestTubes, desc: 'Aseptic filling in ISO-classified cleanrooms' },
  { num: '04', label: 'Vial Filling', icon: Layers, desc: 'Precision vial filling with automated inspection' },
  { num: '05', label: 'Capsules', icon: HeartPulse, desc: 'High-speed encapsulation with content uniformity testing' },
  { num: '06', label: 'Quality Control', icon: BadgeCheck, desc: 'Final QC release — analytical, microbiological & stability' },
];

export default function HomePage() {
  const navigate = useNavigate();
  const ceo = leadership[0];
  const featuredProducts = productsComplete.slice(0, 8);

  const statsRef    = useScrollReveal();
  const ceoRef      = useScrollReveal();
  const processRef  = useScrollReveal();
  const whyRef      = useScrollReveal();
  const featuredRef = useScrollReveal();

  return (
    <>
      <Hero />

      {/* ══════════════════════════════
          TRUST STATS BAR
      ══════════════════════════════ */}
      <section className="bg-white border-b border-gray-100" ref={statsRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-gray-100">
            {trustStats.map(({ value, label, icon: Icon }, i) => (
              <div
                key={label}
                className={`reveal stagger-${i + 1} flex flex-col items-center justify-center py-8 px-6 text-center group hover:bg-teal-50/50 transition-colors duration-300`}
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-teal-500/10 to-cyan-500/10 border border-teal-200/40 flex items-center justify-center mb-3 group-hover:from-teal-500 group-hover:to-cyan-500 group-hover:border-transparent transition-all duration-300">
                  <Icon className="w-5 h-5 text-teal-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <p className="text-3xl font-extrabold gradient-text leading-none mb-1">{value}</p>
                <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          WHO WE ARE
      ══════════════════════════════ */}
      <HomeAbout />

      {/* ══════════════════════════════
          CEO MESSAGE — full-width cinematic
      ══════════════════════════════ */}
      <section
        className="relative py-0 overflow-hidden bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900"
        ref={ceoRef}
      >
        {/* large decorative quote mark */}
        <div className="absolute top-8 left-8 text-white/[0.04] text-[18rem] font-serif leading-none select-none pointer-events-none">
          "
        </div>
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-600/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-cyan-600/8 rounded-full blur-3xl" />
        </div>

        <div className="relative grid lg:grid-cols-5">
          {/* Image side */}
          <div className="lg:col-span-2 relative min-h-[340px] lg:min-h-[480px]">
            <img
              src="assets/CEOAmjad.png"
              alt={ceo.name}
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/60 lg:to-slate-900/80" />
            {/* CEO name on image bottom */}
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden">
              <p className="text-white font-bold text-lg">{ceo.name}</p>
              <p className="text-teal-400 text-sm font-semibold">{ceo.position}</p>
            </div>
          </div>

          {/* Text side */}
          <div className="lg:col-span-3 flex flex-col justify-center px-8 md:px-16 py-16">
            <div className="reveal">
              <p className="text-teal-400 text-sm font-semibold uppercase tracking-widest mb-4">
                Leadership Message
              </p>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <Quote className="w-4 h-4 text-white" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-white">Message from our CEO</h2>
              </div>

              <p className="text-lg md:text-xl text-slate-300 leading-relaxed italic mb-10 pl-6 border-l-2 border-teal-500/40">
                "{ceo.statement}"
              </p>

              <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-teal-500/40">
                  <img src="assets/CEOAmjad.png" alt={ceo.name} className="w-full h-full object-cover object-top" />
                </div>
                <div>
                  <p className="text-white font-bold text-base">{ceo.name}</p>
                  <p className="text-teal-400 text-sm font-semibold">{ceo.position} · Carer Pharmaceutical</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          MANUFACTURING PROCESS FLOW
      ══════════════════════════════ */}
      <section className="py-24 bg-white overflow-hidden" ref={processRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="reveal text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3">
              How We Work
            </p>
            <h2 className="reveal text-4xl md:text-5xl font-extrabold text-gray-900 mb-3 stagger-1">
              Our Manufacturing <span className="gradient-text">Process</span>
            </h2>
            <p className="reveal text-gray-500 max-w-xl mx-auto stagger-2">
              Every product follows a rigorous 6-stage pipeline — from raw material to quality-certified finished goods.
            </p>
          </div>

          {/* Step flow — 3 + 3. DOM order is always 1→6 so mobile reads correctly.
               On desktop row-2 is visually reversed via flex-row-reverse to form a snake. */}
          <div className="space-y-4" ref={processRef}>

            {/* Row 1: steps 1–3, left → right */}
            <div className="grid md:grid-cols-3 gap-4">
              {processSteps.slice(0, 3).map(({ num, label, icon: Icon, desc }, i) => (
                <div
                  key={num}
                  className={`reveal stagger-${i + 1} relative group bg-gradient-to-br from-slate-50 to-teal-50/40 border border-teal-100/60 rounded-2xl p-6 hover:border-teal-300/60 hover:shadow-lg hover:shadow-teal-500/10 transition-all duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-md shadow-teal-500/20 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-teal-500 uppercase tracking-wider">{num}</span>
                        <div className="h-px flex-1 bg-teal-200/40" />
                      </div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">{label}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                  {/* → arrow between cards (desktop only) */}
                  {i < 2 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <div className="w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center shadow">
                        <ArrowRight className="w-3 h-3 text-white" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* ↓ Connecting turn arrow — desktop only, aligned to right edge of row */}
            <div className="hidden md:flex justify-end pr-[calc(33.33%+0.5rem)]">
              <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center shadow rotate-90">
                <ArrowRight className="w-3 h-3 text-white" />
              </div>
            </div>

            {/* Row 2: DOM order 4→5→6 (correct on mobile).
                 md:flex-row-reverse makes desktop display 6←5←4 to complete the snake. */}
            <div className="flex flex-col md:flex-row-reverse gap-4">
              {processSteps.slice(3).map(({ num, label, icon: Icon, desc }, i) => (
                <div
                  key={num}
                  className={`reveal stagger-${i + 1} relative group flex-1 bg-gradient-to-br from-cyan-50/40 to-teal-50/30 border border-cyan-100/60 rounded-2xl p-6 hover:border-cyan-300/60 hover:shadow-lg hover:shadow-cyan-500/10 transition-all duration-300`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold text-cyan-500 uppercase tracking-wider">{num}</span>
                        <div className="h-px flex-1 bg-cyan-200/40" />
                      </div>
                      <h4 className="font-bold text-gray-900 text-base mb-1">{label}</h4>
                      <p className="text-gray-500 text-xs leading-relaxed">{desc}</p>
                    </div>
                  </div>
                  {/* ← arrow between cards on desktop (shown between positions, not last item) */}
                  {i < 2 && (
                    <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 z-10">
                      <div className="w-6 h-6 rounded-full bg-cyan-500 flex items-center justify-center shadow">
                        <ArrowRight className="w-3 h-3 text-white rotate-180" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

          </div>

          {/* Supporting image */}
          <div className="reveal mt-12">
            <div className="relative rounded-3xl overflow-hidden h-64 md:h-80 shadow-2xl shadow-teal-900/15">
              <img src="assets/boxes.jpg" alt="Manufacturing Facility" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-teal-900/70 to-transparent" />
              <div className="absolute left-10 top-1/2 -translate-y-1/2 text-white max-w-xs">
                <p className="text-xs text-teal-400 font-semibold uppercase tracking-widest mb-2">Our Commitment</p>
                <p className="text-2xl font-bold leading-tight">"Quality is not just our standard — it's our commitment."</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          WHY CHOOSE US
      ══════════════════════════════ */}
      <section
        className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900"
        ref={whyRef}
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-teal-600/8 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-600/8 rounded-full blur-3xl" />
          <div
            className="absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="reveal text-teal-400 text-sm font-semibold uppercase tracking-widest mb-3">
              Our Difference
            </p>
            <h2 className="reveal text-4xl md:text-5xl font-extrabold text-white mb-4 stagger-1">
              Why Choose <span className="gradient-text">Carer Pharma</span>
            </h2>
            <p className="reveal text-slate-400 max-w-2xl mx-auto stagger-2">
              We combine clinical precision, regulatory compliance, and genuine care to deliver pharmaceuticals you can trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map(({ icon: Icon, title, desc, accent }, i) => (
              <div
                key={title}
                className={`reveal-scale stagger-${(i % 3) + 1} group relative glass-dark rounded-2xl p-7 border border-white/8 hover:border-teal-500/30 transition-all duration-400 overflow-hidden`}
              >
                {/* Bottom glow on hover */}
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${accent} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400`} />

                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${accent} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-white font-bold text-lg mb-2">{title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════
          FEATURED PRODUCTS
      ══════════════════════════════ */}
      <section className="py-24 bg-white overflow-hidden" ref={featuredRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="reveal text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3">Portfolio</p>
              <h2 className="reveal text-4xl md:text-5xl font-extrabold text-gray-900 stagger-1">
                Featured <span className="gradient-text">Products</span>
              </h2>
              <p className="reveal text-gray-500 mt-3 max-w-md stagger-2">
                A glimpse of our high-quality pharmaceutical product range — each manufactured to the strictest standards.
              </p>
            </div>
            <button
              onClick={() => navigate('/products')}
              className="reveal flex-shrink-0 group inline-flex items-center gap-2 border-2 border-teal-600 text-teal-700 font-semibold px-6 py-3 rounded-xl hover:bg-teal-600 hover:text-white transition-all duration-300 stagger-3"
            >
              View All Products
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredProducts.map((product, i) => (
              <div
                key={product.id}
                className={`reveal-scale stagger-${(i % 4) + 1} group bg-white rounded-2xl overflow-hidden border border-gray-100 card-hover glow-teal`}
              >
                <div className="relative h-44 bg-gradient-to-br from-slate-100 to-teal-50 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg?auto=compress&cs=tinysrgb&w=400';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent" />
                  {/* Certified badge */}
                  <div className="absolute top-3 right-3 bg-teal-600/90 backdrop-blur-sm text-white text-[9px] font-bold uppercase tracking-wide px-2 py-1 rounded-full flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" /> DRAP
                  </div>
                </div>

                <div className="p-4 border-t border-gray-50">
                  <span className="text-[10px] font-bold text-teal-600 uppercase tracking-widest">{product.category}</span>
                  <h3 className="font-bold text-gray-900 mt-1 mb-3 text-base leading-snug">{product.name}</h3>
                  <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-xs border-t border-gray-100 pt-3">
                    <span className="text-gray-400">Strength</span>
                    <span className="font-semibold text-gray-700 text-right">{product.strength}</span>
                    <span className="text-gray-400">MRP</span>
                    <span className="font-bold text-teal-600 text-right">Rs. {product.mrp}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="reveal mt-14 relative overflow-hidden rounded-3xl bg-gradient-to-r from-teal-600 to-cyan-600 p-8 md:p-12 text-white">
            <div className="absolute -top-8 -right-8 w-48 h-48 bg-white/10 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-white/5 rounded-full blur-xl" />
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <p className="text-teal-100 text-sm font-semibold uppercase tracking-widest mb-1">Full Portfolio</p>
                <h3 className="text-2xl md:text-3xl font-extrabold">Browse Our Complete Product Range</h3>
                <p className="text-teal-100 mt-2 text-sm">
                  Capsules, tablets, injections, sachets, dry suspensions & nutraceuticals
                </p>
              </div>
              <button
                onClick={() => navigate('/products')}
                className="flex-shrink-0 group flex items-center gap-2 bg-white text-teal-700 font-bold px-8 py-4 rounded-xl hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                Explore All
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <Certificates />
    </>
  );
}
