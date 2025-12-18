import { Pill, Tablets, Syringe, Package, Droplets, Shield } from 'lucide-react';
import { products, productCategories } from '../data/products';
import { useState } from 'react';

export default function Products() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categoryIcons: Record<string, any> = {
    'Capsules': Pill,
    'Tablets': Tablets,
    'Injections': Syringe,
    'Sachets': Package,
    'Dry Suspensions': Droplets,
    'Nutra Products': Shield,
  };

  const categoryColors: Record<string, string> = {
    'Capsules': 'from-red-500 to-pink-500',
    'Tablets': 'from-blue-500 to-cyan-500',
    'Injections': 'from-purple-500 to-indigo-500',
    'Sachets': 'from-green-500 to-emerald-500',
    'Dry Suspensions': 'from-orange-500 to-amber-500',
    'Nutra Products': 'from-teal-500 to-cyan-500',
  };

  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <section id="products" className="py-24 bg-gradient-to-br from-gray-50 to-teal-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Product Portfolio
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Comprehensive pharmaceutical solutions across multiple therapeutic areas, backed by rigorous research and clinical trials.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setSelectedCategory('All')}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === 'All'
                  ? 'bg-teal-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              All Products
            </button>
            {productCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  selectedCategory === category
                    ? 'bg-teal-600 text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.slice(0, 12).map((product) => {
            const Icon = categoryIcons[product.category] || Pill;
            const color = categoryColors[product.category] || 'from-teal-500 to-cyan-500';
            
            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 group hover:scale-105"
              >
                <div className={`bg-gradient-to-r ${color} p-6 text-white`}>
                  <Icon className="w-12 h-12 mb-3" />
                  <p className="text-sm font-semibold uppercase tracking-wide opacity-90">
                    {product.category}
                  </p>
                  <h3 className="text-2xl font-bold mt-1">{product.name}</h3>
                </div>

                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-sm text-gray-500 mb-1">Generic: {product.genericName}</p>
                    <p className="text-sm text-gray-500">Strength: {product.strength}</p>
                  </div>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-sm text-gray-500">Pack Size: {product.packSize}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {filteredProducts.length > 12 && (
          <div className="text-center mt-12">
            <p className="text-gray-600">Showing 12 of {filteredProducts.length} products</p>
          </div>
        )}

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
                  <span className="text-gray-700">GMP Compliant Facilities</span>
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
                  <span className="text-gray-700">DRAP Certified</span>
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
