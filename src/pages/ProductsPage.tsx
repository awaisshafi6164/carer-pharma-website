import { Pill, Tablets, Syringe, Package, Droplets, Shield } from 'lucide-react';
import { productsComplete, productCategories } from '../data/productsComplete';
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const productsPerPage = 20;

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

  const productImages: Record<string, string> = {
    'Careifer': '/ForWebsite/CARER PROFILE IMAGE/16.jpg',
    'Desyre': '/ForWebsite/CARER PROFILE IMAGE/16.jpg',
    'Datzend': '/ForWebsite/CARER PROFILE IMAGE/16.jpg',
    'Prezula': '/ForWebsite/CARER PROFILE IMAGE/16.jpg',
    'Absotela': '/ForWebsite/CARER PROFILE IMAGE/16.jpg',
    'Cinmyor': '/ForWebsite/CARER PROFILE IMAGE/16.jpg',
    'Galacto': '/ForWebsite/CARER PROFILE IMAGE/17.jpg',
    'Ceficar': '/ForWebsite/CARER PROFILE IMAGE/17.jpg',
    'Caraprox': '/ForWebsite/CARER PROFILE IMAGE/17.jpg',
    'Trevlig': '/ForWebsite/CARER PROFILE IMAGE/17.jpg',
    'Caraconazole': '/ForWebsite/CARER PROFILE IMAGE/17.jpg',
  };

  const filteredProducts = productsComplete.filter(p => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (page - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const handlePageChange = (_event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setPage(1);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-gray-50 to-teal-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Our Complete Product Range
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Browse our comprehensive portfolio of pharmaceutical products
          </p>
        </div>

        <div className="mb-8">
          <input
            type="text"
            placeholder="Search products by name or generic name..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-teal-500 focus:outline-none text-lg"
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => handleCategoryChange('All')}
            className={`px-6 py-2 rounded-full font-semibold transition-all ${
              selectedCategory === 'All'
                ? 'bg-teal-600 text-white'
                : 'bg-white text-gray-700 hover:bg-gray-100'
            }`}
          >
            All ({productsComplete.length})
          </button>
          {productCategories.map((category) => (
            <button
              key={category}
              onClick={() => handleCategoryChange(category)}
              className={`px-6 py-2 rounded-full font-semibold transition-all ${
                selectedCategory === category
                  ? 'bg-teal-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              {category} ({productsComplete.filter(p => p.category === category).length})
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {paginatedProducts.map((product) => {
            const Icon = categoryIcons[product.category] || Pill;
            const color = categoryColors[product.category] || 'from-teal-500 to-cyan-500';
            
            return (
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
                  <div className={`absolute top-3 right-3 bg-gradient-to-r ${color} p-2 rounded-lg`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </div>

                <div className="p-4">
                  <span className="text-xs font-semibold text-teal-600 uppercase tracking-wide">
                    {product.category}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mt-1 mb-2">{product.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{product.genericName}</p>
                  
                  <div className="space-y-1 mb-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Strength:</span>
                      <span className="font-semibold text-gray-700">{product.strength}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">Pack:</span>
                      <span className="font-semibold text-gray-700">{product.packSize}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-gray-500">MRP:</span>
                      <span className="font-bold text-teal-600">Rs. {product.mrp}</span>
                    </div>
                  </div>
                  

                </div>
              </div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-gray-600">No products found matching your criteria.</p>
          </div>
        )}

        {filteredProducts.length > 0 && (
          <div className="flex flex-col items-center mt-12 space-y-4">
            <p className="text-lg text-gray-600">
              Showing {startIndex + 1}-{Math.min(startIndex + productsPerPage, filteredProducts.length)} of {filteredProducts.length} products
            </p>
            {totalPages > 1 && (
              <Pagination
                count={totalPages}
                page={page}
                onChange={handlePageChange}
                color="primary"
                size="large"
                sx={{
                  '& .MuiPaginationItem-root': {
                    color: '#0f766e',
                  },
                  '& .Mui-selected': {
                    backgroundColor: '#0f766e !important',
                    color: 'white',
                  },
                  '& .MuiPaginationItem-root:hover': {
                    backgroundColor: '#14b8a6',
                    color: 'white',
                  },
                }}
              />
            )}
          </div>
        )}
      </div>
    </section>
  );
}