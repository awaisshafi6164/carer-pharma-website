import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const certificates = [
  {
    id: 1,
    image: 'assets/certificate/world-health-organization-logo.png',
    title: 'World Health Organization'
  },
  {
    id: 2,
    image: 'assets/certificate/Pharmaceutical-Inspection-logo.png',
    title: 'Pharmaceutical Inspection Co-operation Scheme'
  },
  {
    id: 3,
    image: 'assets/certificate/Eurasian-Economic-logo.png',
    title: 'Eurasian Economic Union'
  },
  {
    id: 4,
    image: 'assets/certificate/Leadership-in-energy-and-environmental-design-logo.png',
    title: 'Leadership in Energy and Environmental Design'
  },
  {
    id: 5,
    image: 'assets/certificate/iso-certified-company-logo.png',
    title: 'ISO/IEC 17025:2017 Standard'
  },
];

export default function Certificates() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Certifications & Awards
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Recognized globally for our commitment to quality, safety, and excellence in pharmaceutical manufacturing
          </p>
        </div>

        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {certificates.map((cert) => (
            <SwiperSlide key={cert.id}>
              <div className="text-center bg-white p-4 rounded-xl h-56 w-full flex flex-col justify-center border border-grey">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-32 h-32 mx-auto mb-4 object-contain"
                />
                <p className="text-gray-600 text-base leading-tight text-center font-sans">{cert.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}