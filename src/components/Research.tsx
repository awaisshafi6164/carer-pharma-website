import { Microscope, FlaskConical, LineChart, BookOpen } from 'lucide-react';

export default function Research() {
  const researchAreas = [
    {
      icon: Microscope,
      title: 'Advanced Drug Discovery',
      description: 'Utilizing cutting-edge technology and AI to identify and develop novel therapeutic compounds.',
      projects: '45+ Active Projects',
    },
    {
      icon: FlaskConical,
      title: 'Clinical Trials',
      description: 'Conducting comprehensive Phase I-III trials with diverse patient populations worldwide.',
      projects: '28 Ongoing Trials',
    },
    {
      icon: LineChart,
      title: 'Pharmacokinetics',
      description: 'Studying drug absorption, distribution, metabolism, and excretion for optimal efficacy.',
      projects: '60+ Studies',
    },
    {
      icon: BookOpen,
      title: 'Scientific Publications',
      description: 'Contributing to medical knowledge through peer-reviewed research and collaborative studies.',
      projects: '200+ Publications',
    },
  ];

  const pipeline = [
    { phase: 'Discovery', count: 15, color: 'bg-blue-500' },
    { phase: 'Preclinical', count: 12, color: 'bg-teal-500' },
    { phase: 'Phase I', count: 8, color: 'bg-cyan-500' },
    { phase: 'Phase II', count: 6, color: 'bg-green-500' },
    { phase: 'Phase III', count: 4, color: 'bg-emerald-500' },
    { phase: 'FDA Review', count: 2, color: 'bg-amber-500' },
  ];

  return (
    <section id="research" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Research & Development
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pioneering tomorrow's treatments through innovative research, advanced technology, and scientific excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <img
              src="https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Research Laboratory"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Innovation at Our Core</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our R&D division represents the heart of Carer Pharmaceutical. With state-of-the-art laboratories, advanced analytical instruments, and a team of world-renowned scientists, we're committed to discovering breakthrough treatments.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We invest over 20% of our annual revenue into research and development, ensuring we remain at the forefront of pharmaceutical innovation. Our collaborative approach brings together experts from various disciplines to tackle the most challenging medical conditions.
            </p>
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-6 rounded-xl">
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-2">
                $500M+
              </p>
              <p className="text-gray-700 font-semibold">Annual R&D Investment</p>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {researchAreas.map((area, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border-2 border-gray-100 hover:border-teal-500 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="bg-gradient-to-br from-teal-500 to-cyan-600 w-16 h-16 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <area.icon className="w-8 h-8 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{area.title}</h4>
              <p className="text-gray-600 leading-relaxed mb-4">{area.description}</p>
              <p className="text-teal-600 font-semibold text-sm">{area.projects}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-br from-teal-900 to-cyan-900 rounded-2xl shadow-2xl p-8 md:p-12 text-white">
          <h3 className="text-3xl font-bold mb-8 text-center">Development Pipeline</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {pipeline.map((stage, index) => (
              <div key={index} className="text-center">
                <div className={`${stage.color} w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-3 shadow-lg hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl font-bold">{stage.count}</span>
                </div>
                <p className="font-semibold">{stage.phase}</p>
                <p className="text-sm text-teal-200 mt-1">Compounds</p>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <p className="text-lg text-teal-100">
              Our robust pipeline represents years of dedicated research and brings hope to millions of patients worldwide.
            </p>
          </div>
        </div>

        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Partnerships</h4>
            <p className="text-gray-600 leading-relaxed">
              Collaborating with leading academic institutions, research organizations, and healthcare providers to accelerate innovation.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Ethics</h4>
            <p className="text-gray-600 leading-relaxed">
              Maintaining the highest ethical standards in all research activities, ensuring patient safety and data integrity.
            </p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100">
            <h4 className="text-2xl font-bold text-gray-900 mb-4">Sustainability</h4>
            <p className="text-gray-600 leading-relaxed">
              Committed to environmentally responsible research practices and sustainable pharmaceutical manufacturing.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
