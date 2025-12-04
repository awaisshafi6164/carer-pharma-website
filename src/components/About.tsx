import { Target, Heart, Globe, TrendingUp } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Patient-Centered Care',
      description: 'Every decision we make puts patient health and safety first, ensuring the highest quality standards.',
    },
    {
      icon: Target,
      title: 'Scientific Excellence',
      description: 'Our research is driven by cutting-edge science and a commitment to breakthrough discoveries.',
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We serve communities worldwide, making essential medicines accessible to those who need them.',
    },
    {
      icon: TrendingUp,
      title: 'Continuous Innovation',
      description: 'We invest heavily in R&D to develop next-generation treatments for unmet medical needs.',
    },
  ];

  const stats = [
    { value: '25+', label: 'Years of Experience' },
    { value: '150+', label: 'Countries Served' },
    { value: '500+', label: 'Pharmaceutical Products' },
    { value: '2,000+', label: 'Healthcare Professionals' },
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Carer Pharmaceutical
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A legacy of innovation, quality, and commitment to improving global health through pharmaceutical excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 1998, Carer Pharmaceutical has been at the forefront of medical innovation, developing and manufacturing high-quality medicines that address critical health challenges. Our state-of-the-art facilities and world-class research teams work tirelessly to bring effective treatments to patients worldwide.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe in the power of science to transform lives. Through rigorous research, ethical practices, and unwavering dedication to quality, we continue to set new standards in pharmaceutical excellence.
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

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl hover:shadow-lg transition-shadow duration-300"
            >
              <p className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600 mb-2">
                {stat.value}
              </p>
              <p className="text-gray-700 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl border-2 border-gray-100 hover:border-teal-500 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="bg-gradient-to-br from-teal-500 to-cyan-600 w-14 h-14 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
              <p className="text-gray-600 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
