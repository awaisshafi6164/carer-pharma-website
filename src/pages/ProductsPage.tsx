import { Pill, Tablets, Syringe, Package, Droplets, Shield, Search } from 'lucide-react';
import { productsComplete, productCategories } from '../data/productsComplete';
import { useState } from 'react';
import Pagination from '@mui/material/Pagination';

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);
  const productsPerPage = 20;

  const categoryIcons: Record<string, any> = {
    'Antibiotics':   Syringe,
    'PPI':           Shield,
    'Injections':    Droplets,
    'Capsules':      Pill,
    'Tablets':       Tablets,
    'Sachets':       Package,
    'Suspensions':   Droplets,
  };
  const categoryColors: Record<string, string> = {
    'Antibiotics':   'from-violet-500 to-indigo-600',
    'PPI':           'from-teal-500 to-cyan-600',
    'Injections':    'from-blue-500 to-cyan-600',
    'Capsules':      'from-rose-500 to-pink-600',
    'Tablets':       'from-emerald-500 to-green-600',
    'Sachets':       'from-orange-500 to-amber-600',
    'Suspensions':   'from-cyan-500 to-teal-600',
  };

  const filteredProducts = productsComplete.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          p.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);
  const startIndex = (page - 1) * productsPerPage;
  const paginatedProducts = filteredProducts.slice(startIndex, startIndex + productsPerPage);

  const handlePageChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setPage(1);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50/40">
      {/* Page hero */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 right-0 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-blob-2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-teal-400 text-sm font-semibold uppercase tracking-widest mb-3 animate-fade-in">
            Pharmaceutical Portfolio
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 animate-fade-in">
            Our Complete <span className="gradient-text">Product Range</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto animate-fade-in">
            Browse our comprehensive portfolio of high-quality pharmaceutical products
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Search */}
        <div className="relative mb-8">
          <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-teal-400" />
          <input
            type="text"
            placeholder="Search products by name or category..."
            value={searchQuery}
            onChange={(e) => { setSearchQuery(e.target.value); setPage(1); }}
            className="w-full pl-14 pr-6 py-4 rounded-2xl border-2 border-gray-200 focus:border-teal-400 focus:outline-none text-base bg-white shadow-sm transition-colors duration-200"
          />
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <button
            onClick={() => handleCategoryChange('All')}
            className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
              selectedCategory === 'All'
                ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg shadow-teal-500/30'
                : 'bg-white text-gray-600 hover:bg-teal-50 hover:text-teal-700 shadow-sm border border-gray-200'
            }`}
          >
            All ({productsComplete.length})
          </button>
          {productCategories.map((category) => {
            const Icon = categoryIcons[category] || Pill;
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                  active
                    ? `bg-gradient-to-r ${categoryColors[category] || 'from-teal-600 to-cyan-600'} text-white shadow-lg`
                    : 'bg-white text-gray-600 hover:bg-teal-50 hover:text-teal-700 shadow-sm border border-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {category} ({productsComplete.filter((p) => p.category === category).length})
              </button>
            );
          })}
        </div>

        {/* Product grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {paginatedProducts.map((product) => {
            const Icon = categoryIcons[product.category] || Pill;
            const color = categoryColors[product.category] || 'from-teal-500 to-cyan-500';
            return (
              <div
                key={product.id}
                className="item-animate group bg-white rounded-2xl overflow-hidden card-hover glow-teal border border-gray-100/80"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => {
                      e.currentTarget.src =
                        'https://images.pexels.com/photos/3683041/pexels-photo-3683041.jpeg?auto=compress&cs=tinysrgb&w=400';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className={`absolute top-3 right-3 bg-gradient-to-r ${color} p-2 rounded-xl shadow-lg`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div className="p-4">
                  <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gradient-to-r ${color} text-white mb-2`}>
                    {product.category}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 mb-0.5">{product.name}</h3>
                  <p className="text-xs text-gray-400 mb-3">{product.genericName}</p>

                  <div className="space-y-1 border-t border-gray-100 pt-3">
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Strength</span>
                      <span className="font-semibold text-gray-700">{product.strength}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">Pack</span>
                      <span className="font-semibold text-gray-700">{product.packSize}</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-gray-400">MRP</span>
                      <span className="font-bold text-teal-600">Rs. {product.mrp}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredProducts.length === 0 && (
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-xl font-semibold text-gray-600">No products found</p>
            <p className="text-gray-400 mt-1">Try adjusting your search or filter</p>
          </div>
        )}

        {filteredProducts.length > 0 && (
          <div className="flex flex-col items-center mt-12 space-y-4">
            <p className="text-sm text-gray-500">
              Showing <span className="font-semibold text-gray-700">{startIndex + 1}–{Math.min(startIndex + productsPerPage, filteredProducts.length)}</span> of{' '}
              <span className="font-semibold text-gray-700">{filteredProducts.length}</span> products
            </p>
            {totalPages > 1 && (
              <Pagination
                count={totalPages}
                page={page}
                onChange={handlePageChange}
                color="primary"
                size="large"
                sx={{
                  '& .MuiPaginationItem-root': { color: '#0f766e' },
                  '& .Mui-selected': { backgroundColor: '#0f766e !important', color: 'white' },
                  '& .MuiPaginationItem-root:hover': { backgroundColor: '#14b8a6', color: 'white' },
                }}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
