import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const certificates = [
  {
    id: 1,
    image: 'assets/certificate/iso-certified-company-logo.png',
    title: 'ISO 9001:2015',
    subtitle: 'Quality Management System',
    color: 'from-teal-500 to-teal-600',
  },
  {
    id: 2,
    image: 'assets/certificate/iso-certified-company-logo.png',
    title: 'ISO 14001:2015',
    subtitle: 'Environmental Management',
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    id: 3,
    image: 'assets/certificate/fbr-logo.png',
    title: 'FBR Pakistan',
    subtitle: 'Registered Tax Compliant',
    color: 'from-teal-600 to-cyan-500',
  },
  {
    id: 4,
    image: 'assets/certificate/DRAP-logo.png',
    title: 'DRAP Certified',
    subtitle: 'Drug Regulatory Authority of Pakistan',
    color: 'from-cyan-600 to-teal-600',
  },
];

const qualityPoints = [
  'Every batch monitored against pharmacopoeial specifications',
  'Stability chambers maintain ICH-compliant storage conditions',
  'Microbiological testing at each stage of production',
  'Full traceability from raw material to finished goods',
];

const stats = [
  { value: '100+', label: 'Products Manufactured' },
  { value: '15+',  label: 'Years of Excellence' },
  { value: '4',    label: 'Major Certifications' },
  { value: 'GMP',  label: 'Certified Facility' },
];

export default function Certificates() {
  const qualityRef = useScrollReveal();
  const certRef    = useScrollReveal();

  return (
    <>
      {/* ══ QUALITY CONTROL ══ */}
      <section className="py-24 bg-white overflow-hidden" ref={qualityRef}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Left: Text + points */}
            <div>
              <p className="reveal text-sm font-semibold text-teal-600 uppercase tracking-widest mb-3">Our Standards</p>
              <h2 className="reveal text-5xl md:text-6xl font-extrabold text-gray-900 leading-none mb-1 stagger-1">
                QUALITY
              </h2>
              <h2 className="reveal gradient-text text-5xl md:text-6xl font-extrabold leading-none mb-7 stagger-2">
                CONTROL
              </h2>
              <p className="reveal text-gray-600 leading-relaxed text-lg mb-8 stagger-3">
                At Carer Pharmaceutical, quality control is not a checkbox — it is the foundation of everything we do. We adhere strictly to Good Manufacturing Practices (GMP) so that every tablet, capsule, and injection that leaves our facility is safe, potent, and pure.
              </p>
              <ul className="reveal space-y-3 stagger-4">
                {qualityPoints.map((pt) => (
                  <li key={pt} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-sm leading-relaxed">{pt}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: Stats grid */}
            <div className="reveal grid grid-cols-2 gap-4 stagger-2">
              {stats.map(({ value, label }, i) => (
                <div
                  key={label}
                  className={`group relative flex flex-col items-center justify-center p-8 rounded-2xl text-center overflow-hidden border transition-all duration-300 ${
                    i % 2 === 0
                      ? 'bg-gradient-to-br from-teal-600 to-teal-700 border-teal-500 text-white'
                      : 'bg-white border-gray-100 hover:border-teal-200 card-hover'
                  }`}
                >
                  <p className={`text-4xl font-extrabold leading-none mb-2 ${i % 2 === 0 ? 'text-white' : 'gradient-text'}`}>
                    {value}
                  </p>
                  <p className={`text-xs font-semibold uppercase tracking-wide ${i % 2 === 0 ? 'text-teal-200' : 'text-gray-500'}`}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ CERTIFICATIONS ══ */}
      <section
        className="py-24 relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900"
        ref={certRef}
      >
        {/* Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 right-0 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/8 rounded-full blur-3xl animate-blob-2" />
          <div
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.8) 1px, transparent 1px)',
              backgroundSize: '40px 40px',
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <div className="text-center mb-14">
            <div className="reveal inline-flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center shadow-lg shadow-teal-500/30">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white">CERTIFICATIONS</h2>
            </div>
            <div className="reveal w-20 h-1 bg-gradient-to-r from-teal-400 to-cyan-400 mx-auto mb-6 rounded stagger-1" />
            <p className="reveal text-slate-300 leading-relaxed text-lg max-w-3xl mx-auto stagger-2">
              Every certification we hold is a pledge to our customers, partners, and patients — that our products are manufactured with precision, care, and full regulatory compliance.
            </p>
          </div>

          {/* Cert carousel */}
          <div className="reveal stagger-3">
            <Swiper
              modules={[Autoplay]}
              spaceBetween={16}
              slidesPerView={1}
              loop={true}
              autoplay={{ delay: 2400, disableOnInteraction: false, pauseOnMouseEnter: true }}
              breakpoints={{
                640:  { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
              }}
            >
              {certificates.map((cert) => (
                <SwiperSlide key={cert.id}>
                  <div className="group relative h-64 glass-dark rounded-2xl overflow-hidden flex flex-col items-center justify-center p-7 border border-white/8 hover:border-teal-500/30 card-hover cursor-default">
                    {/* Accent bar */}
                    <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color}`} />

                    <div className="w-24 h-24 mb-5 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center p-3 group-hover:bg-white/15 transition-colors duration-300">
                      <img src={cert.image} alt={cert.title} className="w-full h-full object-contain" />
                    </div>
                    <p className="text-white font-bold text-center text-base leading-tight">{cert.title}</p>
                    <p className="text-slate-400 text-xs text-center mt-1.5 leading-snug">{cert.subtitle}</p>

                    {/* Verified badge */}
                    <div className="absolute bottom-4 right-4">
                      <div className="w-7 h-7 rounded-full bg-teal-500/20 border border-teal-500/30 flex items-center justify-center">
                        <CheckCircle2 className="w-3.5 h-3.5 text-teal-400" />
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Bottom trust statement */}
          <div className="reveal mt-12 text-center stagger-4">
            <p className="text-slate-400 text-sm max-w-2xl mx-auto">
              All certifications are maintained through regular third-party audits and continuous improvement initiatives.
              <span className="text-teal-400 font-semibold"> Our quality never sleeps.</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
