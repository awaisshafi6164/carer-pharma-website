import { Users } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const teamPoints = [
  'Our hardworking team at Carer Pharmaceutical embodies dedication, resilience, and a relentless pursuit of excellence, driving our success in the pharmaceutical industry.',
  'With a shared commitment to innovation and collaboration, each member contributes their unique expertise toward our collective goal of advancing healthcare.',
  'The foundation of our achievements lies in our team whose unwavering passion and tireless effort propel us towards advancing healthcare and improving patient outcomes.',
];

export default function TeamSection() {
  const sectionRef = useScrollReveal();

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-teal-50/40 overflow-hidden" ref={sectionRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <div className="reveal inline-flex items-center gap-3 mb-3">
            <Users className="w-6 h-6 text-teal-500" />
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-widest">People</p>
          </div>
          <h2 className="reveal text-4xl md:text-5xl font-extrabold text-gray-900 stagger-1">
            Our <span className="gradient-text">Team</span>
          </h2>
        </div>

        <div className="reveal mb-14">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-teal-900/15">
            <img
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Carer Pharmaceutical Team"
              className="w-full h-[400px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 text-white">
              <p className="text-sm font-semibold text-teal-400 uppercase tracking-widest mb-1">Carer Pharmaceutical</p>
              <p className="text-2xl font-bold">A Team United by Purpose</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {teamPoints.map((point, i) => (
            <div
              key={i}
              className={`reveal-scale stagger-${i + 1} group p-6 bg-white rounded-2xl border border-gray-100 card-hover glow-teal`}
            >
              <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mb-4">
                <span className="text-white font-bold text-sm">{i + 1}</span>
              </div>
              <p className="text-gray-600 leading-relaxed text-sm">{point}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
