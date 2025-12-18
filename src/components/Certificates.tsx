import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const certificates = [
  {
    id: 1,
    image: 'assets/certificate/iso-certified-company-logo.png',
    title: 'ISO 9001 - Quality Management'
  },
  {
    id: 2,
    image: 'assets/certificate/iso-certified-company-logo.png',
    title: 'ISO 14001 - Environmental Management'
  },
  {
    id: 3,
    image: 'assets/certificate/fbr-logo.png',
    title: 'FBR Pakistan - Tax Compliance'
  },
  {
    id: 4,
    image: 'assets/certificate/DRAP-logo.png',
    title: 'DRAP - Drug Regulatory Authority of Pakistan'
  },
];

export default function Certificates() {
  return (
    <>
      {/* Quality Control Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
              QUALITY
            </h2>
            <h2 className="text-4xl md:text-5xl font-bold text-cyan-500 mb-8">
              CONTROL
            </h2>
            
            <p className="text-gray-700 leading-relaxed text-lg">
              At Carer Pharmaceutical, prioritizing quality control is paramount. We strictly adhere to Good Manufacturing Practices (GMP) to guarantee the production of superior medicines. Each stage of our manufacturing process undergoes meticulous monitoring and documentation, ensuring full compliance with technical specifications and regulatory standards. Our dedication to quality assurance is underscored by rigorous stability testing protocols, ensuring the enduring consistency and reliability of our products. From raw materials to finished goods, we uphold the highest standards of quality control, steadfast in our commitment to delivering safe and efficacious medications to our valued customers.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-green-600 mb-4">
              CERTIFICATIONS
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-green-600 to-teal-600 mx-auto mb-8"></div>
            
            <p className="text-gray-700 leading-relaxed text-lg max-w-4xl mx-auto">
              We proudly hold ISO 9001 and 14001 certifications, showcasing our commitment to quality management and environmental stewardship. Additionally, our compliance with FBR (Food and Drug Regulatory Authority) standards underscores our dedication to regulatory excellence. Moreover, our DRAP certification further validates our adherence to rigorous industry standards, ensuring the safety and efficacy of our pharmaceutical products.
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
    </>
  );
}