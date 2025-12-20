import Hero from '../components/Hero';
import HomeAbout from '../components/HomeAbout';
import Certificates from '../components/Certificates';
import { leadership } from '../data/company';
import { productsComplete } from '../data/productsComplete';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();
  const ceo = leadership[0];
  const featuredProducts = productsComplete.slice(0, 8);

  return (
    <>
      <Hero />
      <HomeAbout />
      
      {/* CEO Statement Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-3xl overflow-hidden shadow-xl">
            <div className="grid md:grid-cols-7 gap-0 items-center">
              <div className="relative md:col-span-2 h-56 md:h-auto md:min-h-[320px]">
                <img
                  src="assets/CEOAmjad.png"
                  alt={ceo.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-teal-50/50"></div>
              </div>
              <div className="md:col-span-5 p-8 md:p-10 flex flex-col justify-center">
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                  Message from our CEO
                </h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-6 italic">
                  "{ceo.statement}"
                </p>
                <div className="border-t-2 border-teal-600 pt-4">
                  <p className="text-xl font-bold text-gray-900">{ceo.name}</p>
                  <p className="text-base text-teal-600 font-semibold">{ceo.position}</p>
                  <p className="text-gray-600 text-sm mt-1">Carer Pharmaceutical</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Production Portfolio Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            
            <div className="w-32 h-1 bg-gradient-to-r from-teal-600 to-cyan-600 mb-8"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              Our Production Portfolio
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-cyan-500 mb-8">
              AT CARER PHARMACEUTICALS
            </h2>
            
            <p className="text-gray-700 leading-relaxed mb-8">
              With state-of-the-art facilities and stringent quality control measures, we ensure that each product meets the highest standards of efficacy, safety, and purity. Explore our comprehensive production offerings and experience the difference with Carer Pharmaceuticals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-gray-600 italic text-lg mb-8">
                Quality is not just our standard; it's our commitment.
              </p>
              
              <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-bold text-teal-500">01</span>
                  <span className="text-xl font-semibold text-gray-900">RAW MATERIAL</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-bold text-cyan-500">04</span>
                  <span className="text-xl font-semibold text-gray-900">VIAL FILLING</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-bold text-teal-400">02</span>
                  <span className="text-xl font-semibold text-gray-900">STERILIZING</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-bold text-cyan-400">05</span>
                  <span className="text-xl font-semibold text-gray-900">CAPSULES</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-bold text-teal-300">03</span>
                  <span className="text-xl font-semibold text-gray-900">FILLING AMPULES</span>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-6xl font-bold text-cyan-300">06</span>
                  <span className="text-xl font-semibold text-gray-900">QUALITY</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-gray-800 rounded-[3rem] p-6 shadow-2xl">
                <img
                  src="assets/boxes.jpg"
                  alt="Manufacturing Facility"
                  className="rounded-3xl w-full h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our range of high-quality pharmaceutical products
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = 'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg?auto=compress&cs=tinysrgb&w=400';
                    }}
                  />
                </div>
                <div className="p-4">
                  <span className="text-xs font-semibold text-teal-600 uppercase tracking-wide">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">{product.name}</h3>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-gray-500">{product.strength}</span>
                    <span className="font-bold text-teal-600">Rs. {product.mrp}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => navigate('/products')}
              className="bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center space-x-2 mx-auto"
            >
              <span>View All Products</span>
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      <Certificates />
    </>
  );
}