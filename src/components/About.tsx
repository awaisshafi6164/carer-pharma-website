import { companyInfo, leadership, facilityFeatures } from '../data/company';
import { Users } from 'lucide-react';

export default function About() {

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About {companyInfo.name}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {companyInfo.slogan}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {companyInfo.mission}
            </p>
            <h3 className="text-3xl font-bold text-gray-900 mt-8">Our Vision</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              {companyInfo.vision}
            </p>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Laboratory Research"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
        </div>

        <div className="mb-20">
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Leadership</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 text-center">
                <Users className="w-16 h-16 text-teal-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h4>
                <p className="text-teal-600 font-semibold mb-4">{leader.position}</p>
                {leader.statement && (
                  <p className="text-gray-600 text-sm leading-relaxed">{leader.statement}</p>
                )}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Facility</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {facilityFeatures.map((feature, index) => (
              <div key={index} className="bg-white border-2 border-teal-100 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <h4 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h4>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
