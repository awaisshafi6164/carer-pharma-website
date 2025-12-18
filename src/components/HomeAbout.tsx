import { Link } from 'react-router-dom';

export default function HomeAbout() {
  return (
    <section id="home-about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Carer Pharmaceutical"
              className="rounded-xl shadow-lg w-full h-80 object-cover"
            />
          </div>
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">
                Who We Are
              </h2>
              <div className="w-16 h-1 bg-gradient-to-r from-teal-600 to-cyan-600 rounded"></div>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed">
              Since 1998, Carer Pharmaceutical has been pioneering innovative healthcare solutions. We combine cutting-edge research with ethical practices to deliver medicines that make a real difference in people's lives.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-teal-600 font-bold text-xl">✓</span>
                <p className="text-gray-700">State-of-the-art manufacturing facilities</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-teal-600 font-bold text-xl">✓</span>
                <p className="text-gray-700">World-class research and development teams</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-teal-600 font-bold text-xl">✓</span>
                <p className="text-gray-700">Commitment to quality and innovation</p>
              </div>
            </div>
            <Link
              to="/about"
              className="inline-block mt-6 px-8 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
