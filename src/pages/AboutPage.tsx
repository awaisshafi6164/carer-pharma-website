import Certificates from '../components/Certificates';
import MissionSection from '../components/MissionSection';
import TeamSection from '../components/TeamSection';
import { companyInfo, leadership, facilityFeatures } from '../data/company';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { Target, Eye, Globe, Users, ShieldCheck, Award, Building2, CheckCircle2 } from 'lucide-react';

/* ── Timeline milestones ── */
const milestones = [
  {
    year: 'Founded',
    title: 'Establishment with Purpose',
    text: "Carer Pharmaceutical was founded with a clear vision: to deliver top-notch medications globally. Our narrative embodies dedication, innovation, and an unwavering commitment to enhancing patient well-being.",
    side: 'left',
  },
  {
    year: 'Growth',
    title: 'Becoming an Authority',
    text: "We evolved into a respected authority in the pharmaceutical realm. Our emphasis on groundbreaking research, state-of-the-art manufacturing, and compassionate patient engagement redefined healthcare standards.",
    side: 'right',
  },
  {
    year: 'Sustainability',
    title: 'Eco-Friendly Operations',
    text: "With a focus on sustainability, we adopted eco-friendly practices throughout operations. Our ISO 14001 certification reflects our genuine commitment to environmental responsibility.",
    side: 'left',
  },
  {
    year: 'Today',
    title: 'Pioneering Excellence',
    text: "Today we consistently meet and exceed regulatory standards across our full product range — delivering safe, effective pharmaceutical solutions from our GMP-certified Islamabad facility.",
    side: 'right',
  },
];

const coreValues = [
  { icon: ShieldCheck, title: 'Integrity',  desc: 'Transparent operations and honest partnerships with healthcare professionals and patients.', color: 'from-teal-500 to-teal-600' },
  { icon: Award,       title: 'Excellence', desc: 'Every batch produced meets the highest international pharmaceutical quality standards.', color: 'from-cyan-500 to-cyan-600' },
  { icon: Users,       title: 'Compassion', desc: 'We treat every medicine as if it were going to a loved one — with care and precision.', color: 'from-teal-600 to-cyan-500' },
  { icon: Globe,       title: 'Innovation', desc: 'Continuous improvement in formulations and processes to address evolving healthcare needs.', color: 'from-cyan-600 to-teal-600' },
];

const facilityIcons = [Globe, Users, ShieldCheck];

export default function AboutPage() {
  const missionRef  = useScrollReveal();
  const valuesRef   = useScrollReveal();
  const timelineRef = useScrollReveal();
  const leaderRef   = useScrollReveal();
  const facilityRef = useScrollReveal();

  return (
    <>
      {/* ══ HERO ══ */}
      <section className="relative pt-32 pb-0 overflow-hidden bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900">
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

        {/* Hero text */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 text-center">
          <p className="text-teal-400 text-sm font-semibold uppercase tracking-widest mb-3 animate-fade-in">Our Story</p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 animate-fade-in">
            About <span className="gradient-text">Carer Pharmaceutical</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto animate-fade-in">{companyInfo.slogan}</p>
        </div>

        {/* ── Mission & Vision ── full-width cards inside hero bottom */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-0" ref={missionRef}>
          <div className="grid md:grid-cols-2 gap-1">
            {[
              { icon: Target, title: 'Our Mission', text: companyInfo.mission, accent: 'border-l-4 border-teal-500' },
              { icon: Eye,    title: 'Our Vision',  text: companyInfo.vision,  accent: 'border-l-4 border-cyan-400' },
            ].map(({ icon: Icon, title, text }, i) => (
              <div
                key={title}
                className={`reveal stagger-${i + 1} group flex gap-5 p-8 md:p-10 bg-white/[0.04] hover:bg-white/[0.07] backdrop-blur-sm border-b-0 border border-white/[0.07] transition-all duration-300 ${i === 0 ? 'md:rounded-tl-3xl' : 'md:rounded-tr-3xl'}`}
              >
                <div className={`w-1 self-stretch rounded-full flex-shrink-0 bg-gradient-to-b ${i === 0 ? 'from-teal-400 to-teal-600' : 'from-cyan-400 to-cyan-600'}`} />
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${i === 0 ? 'from-teal-500 to-teal-600' : 'from-cyan-500 to-cyan-600'} flex items-center justify-center`}>
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-white font-bold text-xl">{title}</h3>
                  </div>
                  <p className="text-slate-300 text-sm leading-relaxed">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CORE VALUES ══ */}
      <section className="py-24 bg-white overflow-hidden" ref={valuesRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="reveal text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3">What Drives Us</p>
            <h2 className="reveal text-4xl md:text-5xl font-extrabold text-gray-900 stagger-1">
              Our Core <span className="gradient-text">Values</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {coreValues.map(({ icon: Icon, title, desc, color }, i) => (
              <div
                key={title}
                className={`reveal-scale stagger-${i + 1} group relative bg-gradient-to-br from-slate-50 to-teal-50/40 border border-teal-100/50 rounded-2xl p-7 card-hover overflow-hidden`}
              >
                <div className={`absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r ${color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-400`} />
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-5 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 text-lg mb-2">{title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ COMPANY HISTORY — VERTICAL TIMELINE ══ */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-teal-50/30 overflow-hidden" ref={timelineRef}>
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <p className="reveal text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3">Our Journey</p>
            <h2 className="reveal text-4xl md:text-5xl font-extrabold text-gray-900 stagger-1">
              Company <span className="gradient-text">History</span>
            </h2>
            <p className="reveal text-gray-500 max-w-xl mx-auto mt-3 stagger-2">{companyInfo.about}</p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Center line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-teal-300 via-cyan-400 to-teal-300 -translate-x-1/2 hidden md:block" />

            <div className="space-y-12">
              {milestones.map(({ year, title, text, side }, i) => (
                <div key={i} className={`reveal stagger-${i + 1} relative flex flex-col md:flex-row items-center gap-0 md:gap-8 ${side === 'right' ? 'md:flex-row-reverse' : ''}`}>
                  {/* Content card */}
                  <div className={`w-full md:w-[calc(50%-2rem)] ${side === 'left' ? 'md:text-right' : 'md:text-left'}`}>
                    <div className={`group bg-white rounded-2xl p-6 shadow-md shadow-teal-900/8 border border-gray-100/80 card-hover`}>
                      <span className="inline-block text-xs font-bold text-teal-600 uppercase tracking-widest bg-teal-50 border border-teal-200/50 px-3 py-1 rounded-full mb-3">
                        {year}
                      </span>
                      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
                      <p className="text-gray-500 text-sm leading-relaxed">{text}</p>
                    </div>
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex w-16 flex-shrink-0 items-center justify-center relative z-10">
                    <div className="w-5 h-5 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 border-4 border-white shadow-lg shadow-teal-500/30" />
                  </div>

                  {/* Spacer on other side */}
                  <div className="hidden md:block w-[calc(50%-2rem)]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <MissionSection />

      {/* ══ LEADERSHIP ══ */}
      <section className="py-24 bg-white overflow-hidden" ref={leaderRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="reveal text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3">The People</p>
            <h2 className="reveal text-4xl md:text-5xl font-extrabold text-gray-900 stagger-1">
              Our <span className="gradient-text">Leadership Team</span>
            </h2>
            <p className="reveal text-gray-500 max-w-xl mx-auto mt-3 stagger-2">
              Experienced professionals dedicated to advancing pharmaceutical excellence and patient care.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((leader, i) => (
              <div
                key={i}
                className={`reveal-scale stagger-${(i % 3) + 1} group relative bg-white rounded-3xl overflow-hidden border border-gray-100 card-hover`}
              >
                {/* Image */}
                <div className="relative h-72 overflow-hidden bg-gradient-to-br from-slate-100 to-teal-50">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Permanent gradient overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
                </div>

                {/* Info bar */}
                <div className="relative p-5 flex items-center gap-4">
                  {/* Accent line */}
                  <div className="absolute top-0 left-5 right-5 h-px bg-gradient-to-r from-teal-500/30 to-cyan-500/30" />
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center flex-shrink-0 shadow-md">
                    <span className="text-white font-bold text-sm">{leader.name.charAt(0)}</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base leading-tight">{leader.name}</h4>
                    <p className="text-teal-600 font-semibold text-xs mt-0.5">{leader.position}</p>
                  </div>
                  <div className="ml-auto">
                    <div className="w-8 h-8 rounded-full bg-teal-50 border border-teal-200/50 flex items-center justify-center">
                      <CheckCircle2 className="w-4 h-4 text-teal-500" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />

      {/* ══ FACILITY ══ */}
      <section className="py-24 bg-gradient-to-br from-slate-50 to-teal-50/30 overflow-hidden" ref={facilityRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Top: heading + image split */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <p className="reveal text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3">Infrastructure</p>
              <h2 className="reveal text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4 stagger-1">
                State-of-the-Art<br /><span className="gradient-text">Manufacturing Facility</span>
              </h2>
              <p className="reveal text-gray-600 leading-relaxed mb-6 stagger-2">
                Our Rawat Industrial Estate facility in Islamabad operates under strict GMP guidelines with dedicated cleanrooms, automated production lines, and rigorous quality control labs.
              </p>
              {/* facility highlights list */}
              <ul className="reveal space-y-2.5 stagger-3">
                {['ISO-classified cleanrooms for aseptic filling', 'Automated inspection & packaging lines', 'In-house QC lab with stability chambers', 'Cold-chain storage capabilities'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-teal-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="reveal-right relative">
              <div className="absolute -inset-3 bg-gradient-to-br from-teal-100 to-cyan-100 rounded-[3rem] blur-xl opacity-50" />
              <div className="relative rounded-3xl overflow-hidden shadow-2xl h-80">
                <img
                  src="assets/HomeAbout3.jpeg"
                  alt="Manufacturing Facility"
                  className="w-full h-full object-cover"
                />
                {/* stats overlay bottom */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-slate-900/80 to-transparent p-6">
                  <div className="flex gap-6">
                    <div className="text-white">
                      <p className="text-2xl font-extrabold text-teal-400">GMP</p>
                      <p className="text-xs text-slate-300 uppercase tracking-wide">Certified</p>
                    </div>
                    <div className="text-white">
                      <p className="text-2xl font-extrabold text-cyan-400">ISO</p>
                      <p className="text-xs text-slate-300 uppercase tracking-wide">9001 & 14001</p>
                    </div>
                    <div className="text-white">
                      <p className="text-2xl font-extrabold text-teal-300">DRAP</p>
                      <p className="text-xs text-slate-300 uppercase tracking-wide">Approved</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature cards */}
          <div className="grid md:grid-cols-3 gap-5 mb-12">
            {facilityFeatures.map((feature, i) => {
              const Icon = facilityIcons[i] || Building2;
              const gradients = ['from-teal-500 to-teal-600', 'from-cyan-500 to-cyan-600', 'from-teal-600 to-cyan-500'];
              return (
                <div
                  key={i}
                  className={`reveal-scale stagger-${i + 1} group relative bg-white rounded-2xl overflow-hidden card-hover border border-gray-100/80`}
                >
                  <div className={`h-1.5 bg-gradient-to-r ${gradients[i]}`} />
                  <div className="p-7">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${gradients[i]} flex items-center justify-center mb-5 shadow-lg shadow-teal-500/20 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h4>
                    <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Full-width banner */}
          <div className="reveal relative overflow-hidden rounded-3xl shadow-2xl">
            <img
              src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Pharmaceutical Excellence"
              className="w-full h-72 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/60 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-xl px-10 md:px-16 text-white">
                <p className="text-teal-400 text-xs font-semibold uppercase tracking-widest mb-3">Our Commitment</p>
                <h3 className="text-3xl md:text-4xl font-extrabold leading-tight mb-3">
                  Pioneering Excellence<br />
                  <span className="gradient-text">In Quality Healthcare</span>
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed">
                  From formulation to final packaging — every step of our process reflects an unwavering commitment to safety, efficacy, and patient trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Certificates />
    </>
  );
}
