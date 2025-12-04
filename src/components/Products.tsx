import { Heart, Brain, Shield, Activity, Pill, Stethoscope } from 'lucide-react';

export default function Products() {
  const products = [
    {
      icon: Heart,
      category: 'Cardiovascular',
      name: 'CardioCare Plus',
      description: 'Advanced treatment for hypertension and heart disease management with proven efficacy.',
      benefits: ['Reduces blood pressure', 'Improves heart function', 'Minimizes side effects'],
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Brain,
      category: 'Neurology',
      name: 'NeuroShield',
      description: 'Breakthrough medication for neurological disorders and cognitive health support.',
      benefits: ['Enhances cognitive function', 'Neuroprotective properties', 'Long-term safety'],
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Shield,
      category: 'Immunology',
      name: 'ImmunoBoost',
      description: 'Strengthens immune response and provides comprehensive protection against infections.',
      benefits: ['Boosts immunity', 'Rapid action', 'Suitable for all ages'],
      color: 'from-teal-500 to-cyan-500',
    },
    {
      icon: Activity,
      category: 'Metabolic Health',
      name: 'MetaBalance',
      description: 'Innovative solution for diabetes management and metabolic syndrome treatment.',
      benefits: ['Regulates glucose levels', 'Weight management support', 'Reduces complications'],
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Pill,
      category: 'Pain Management',
      name: 'PainRelief Pro',
      description: 'Fast-acting pain relief for chronic and acute conditions with minimal dependency risk.',
      benefits: ['Quick pain relief', 'Non-addictive formula', 'Multiple dosage options'],
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: Stethoscope,
      category: 'Respiratory',
      name: 'RespiClear',
      description: 'Comprehensive respiratory care for asthma, COPD, and breathing disorders.',
      benefits: ['Improves lung function', 'Reduces inflammation', 'Easy to use'],
      color: 'from-blue-500 to-cyan-500',
    },
  ];

  return (
    <section id="products" className="py-24 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Product Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive pharmaceutical solutions across multiple therapeutic areas, backed by rigorous research and clinical trials.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:scale-105"
            >
              <div className={`bg-gradient-to-r ${product.color} p-6 text-white`}>
                <product.icon className="w-12 h-12 mb-3" />
                <p className="text-sm font-semibold uppercase tracking-wide opacity-90">
                  {product.category}
                </p>
                <h3 className="text-2xl font-bold mt-1">{product.name}</h3>
              </div>

              <div className="p-6 space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  {product.description}
                </p>

                <div className="space-y-2">
                  <p className="font-semibold text-gray-900">Key Benefits:</p>
                  <ul className="space-y-1">
                    {product.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start space-x-2 text-sm text-gray-600">
                        <span className="text-teal-600 mt-0.5">✓</span>
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Quality Assurance
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Every product undergoes rigorous testing and quality control procedures. We maintain the highest standards of manufacturing excellence, ensuring safety, efficacy, and consistency in every batch.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center space-x-3">
                  <div className="bg-teal-100 rounded-full p-1">
                    <Shield className="w-5 h-5 text-teal-600" />
                  </div>
                  <span className="text-gray-700">FDA Approved Facilities</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="bg-teal-100 rounded-full p-1">
                    <Shield className="w-5 h-5 text-teal-600" />
                  </div>
                  <span className="text-gray-700">ISO 9001:2015 Certified</span>
                </li>
                <li className="flex items-center space-x-3">
                  <div className="bg-teal-100 rounded-full p-1">
                    <Shield className="w-5 h-5 text-teal-600" />
                  </div>
                  <span className="text-gray-700">WHO GMP Compliant</span>
                </li>
              </ul>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3825541/pexels-photo-3825541.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Quality Control"
                className="rounded-xl shadow-lg w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
