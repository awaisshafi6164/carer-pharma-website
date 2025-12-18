import { ArrowRight, Shield, Award, Users } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold">
                Trusted Since 1998
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Advancing Healthcare Through
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600"> Innovation</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              Carer Pharmaceutical is committed to developing and manufacturing high-quality medicines that improve lives worldwide. Our dedication to research and excellence drives us forward.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => navigate('/products')}
                className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigate('/contact')}
                className="bg-white text-teal-600 px-8 py-4 rounded-lg font-semibold border-2 border-teal-600 hover:bg-teal-50 transition-all duration-300"
              >
                Contact Us
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-gradient-to-br from-teal-400 to-cyan-500 rounded-3xl p-8 shadow-2xl transform hover:scale-105 transition-transform duration-300">
              <div className="bg-white rounded-2xl p-8 space-y-6">
                <img
                  src="https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Pharmaceutical Research"
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-teal-50 rounded-xl">
                    <Shield className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-gray-900">FDA Approved</p>
                  </div>
                  <div className="text-center p-4 bg-cyan-50 rounded-xl">
                    <Award className="w-8 h-8 text-cyan-600 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-gray-900">ISO Certified</p>
                  </div>
                  <div className="text-center p-4 bg-teal-50 rounded-xl">
                    <Users className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                    <p className="text-sm font-semibold text-gray-900">50M+ Lives</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
