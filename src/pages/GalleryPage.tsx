import { useState } from 'react';
import { galleryImages } from '../data/company';
import Lightbox from 'yet-another-react-lightbox';
import Captions from 'yet-another-react-lightbox/plugins/captions';
import 'yet-another-react-lightbox/styles.css';
import 'yet-another-react-lightbox/plugins/captions.css';
import { Images } from 'lucide-react';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const categories = ['All', ...Array.from(new Set(galleryImages.map((img) => img.category)))];
  const filteredImages =
    selectedCategory === 'All' ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory);

  const slides = filteredImages.map((img) => ({
    src: img.image,
    title: img.title,
    description: img.category,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-teal-50/30">
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden bg-gradient-to-br from-slate-900 via-teal-950 to-slate-900">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-20 right-0 w-96 h-96 bg-teal-500/15 rounded-full blur-3xl animate-blob" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-blob-2" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-teal-300 px-4 py-2 rounded-full text-sm font-semibold mb-4 animate-fade-in">
            <Images className="w-4 h-4" />
            Facility Showcase
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4 animate-fade-in">
            Our <span className="gradient-text">Gallery</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto animate-fade-in">
            Explore our state-of-the-art manufacturing facilities and precision equipment
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white shadow-lg shadow-teal-500/30'
                  : 'bg-white text-gray-600 hover:bg-teal-50 hover:text-teal-700 shadow-sm border border-gray-200'
              }`}
            >
              {category}
              {category === 'All' && (
                <span className="ml-2 text-xs opacity-70">({galleryImages.length})</span>
              )}
            </button>
          ))}
        </div>

        {/* Masonry grid — key forces remount on category change so item-animate fires */}
        <div key={selectedCategory} className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-5">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="item-animate break-inside-avoid mb-5 group cursor-pointer overflow-hidden rounded-2xl shadow-md hover:shadow-2xl hover:shadow-teal-500/20 transition-shadow duration-500"
              onClick={() => {
                setLightboxIndex(index);
                setLightboxOpen(true);
              }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={image.image}
                  alt={image.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                {/* Info */}
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-400">
                  <h3 className="text-sm font-bold leading-tight mb-0.5">{image.title}</h3>
                  <span className="inline-block text-[10px] font-semibold uppercase tracking-wider bg-teal-500/80 backdrop-blur-sm px-2 py-0.5 rounded-full">
                    {image.category}
                  </span>
                </div>

                {/* Zoom indicator */}
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Lightbox
        open={lightboxOpen}
        close={() => setLightboxOpen(false)}
        slides={slides}
        index={lightboxIndex}
        plugins={[Captions]}
      />
    </div>
  );
}
