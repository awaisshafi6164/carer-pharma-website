import { Link } from 'react-router-dom';
import { companyInfo } from '../data/company';

export default function HomeAbout() {
  return (
    <section id="home-about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=400"
              alt="Manufacturing Facility"
              className="rounded-xl shadow-lg w-full h-56 object-cover"
            />
            <img
              src="assets/HomeAbout1.jpeg"
              alt="Quality Control"
              className="rounded-xl shadow-lg w-full h-56 object-cover"
            />
            <img
              src="assets/HomeAbout2.jpeg"
              alt="Research Lab"
              className="rounded-xl shadow-lg w-full h-56 object-cover"
            />
            <img
              src="assets/HomeAbout3.jpeg"
              alt="Production Line"
              className="rounded-xl shadow-lg w-full h-56 object-cover"
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
              {companyInfo.about}
            </p>
            <p className="text-base text-gray-600 leading-relaxed">
              {companyInfo.history}
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-teal-600 font-bold text-xl">✓</span>
                <p className="text-gray-700">State-of-the-art manufacturing facilities</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-teal-600 font-bold text-xl">✓</span>
                <p className="text-gray-700">GMP compliant production processes</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-teal-600 font-bold text-xl">✓</span>
                <p className="text-gray-700">ISO 9001 & ISO 14001 certified</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-teal-600 font-bold text-xl">✓</span>
                <p className="text-gray-700">DRAP approved pharmaceutical products</p>
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
