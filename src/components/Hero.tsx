import { ArrowRight} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { companyInfo } from '../data/company';

export default function Hero() {
  const navigate = useNavigate();
  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-teal-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <div className="inline-block">
              <span className="bg-teal-100 text-teal-800 px-4 py-2 rounded-full text-sm font-semibold">
                {companyInfo.slogan}
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              {companyInfo.tagline.split(' ').slice(0, 2).join(' ')}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-cyan-600"> {companyInfo.tagline.split(' ').slice(2).join(' ')}</span>
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed">
              {companyInfo.about}
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
            <img
              src="assets/HeroSection.jpeg"
              alt="Pharmaceutical Research"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
