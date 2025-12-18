import Certificates from '../components/Certificates';
import MissionSection from '../components/MissionSection';
import TeamSection from '../components/TeamSection';
import { companyInfo, leadership, facilityFeatures } from '../data/company';

export default function AboutPage() {
  return (
    <>
      {/* About Section - Mission & Vision */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              About {companyInfo.name}
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {companyInfo.slogan}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {companyInfo.mission}
              </p>
              <h3 className="text-3xl font-bold text-gray-900 mt-8">Our Vision</h3>
              <p className="text-lg text-gray-600 leading-relaxed">
                {companyInfo.vision}
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Laboratory Research"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Company History Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
                COMPANY
              </h2>
              <h2 className="text-5xl md:text-6xl font-bold text-cyan-500 mb-8">
                HISTORY
              </h2>
              
              <p className="text-gray-700 leading-relaxed mb-12">
                At <span className="text-cyan-500 font-semibold">Carer Pharmaceutical</span>, our narrative embodies dedication, innovation, and an unwavering commitment to enhancing patient well-being. We were established with a clear vision: to deliver top-notch medications globally.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 flex items-center justify-center text-white font-bold shadow-lg">
                    1
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-1">
                    Over time, we've evolved into a respected authority in the pharmaceutical realm. Our emphasis on groundbreaking research, state-of-the-art manufacturing techniques, and compassionate patient engagement drives us to redefine healthcare standards.
                  </p>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 flex items-center justify-center text-white font-bold shadow-lg">
                    2
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-1">
                    With a focus on sustainability, we prioritize eco-friendly practices throughout our operations. Moreover, our dedication to diversity and inclusivity fosters a dynamic and collaborative work environment.
                  </p>
                </div>
                
                <div className="flex gap-4 items-start">
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-cyan-600 to-teal-700 flex items-center justify-center text-white font-bold shadow-lg">
                    3
                  </div>
                  <p className="text-gray-700 leading-relaxed pt-1">
                    Finally, our relentless pursuit of excellence ensures that we consistently meet and exceed regulatory standards to deliver safe and effective pharmaceutical solutions.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="relative h-full">
              <div className="bg-gray-800 rounded-[3rem] p-8 shadow-2xl h-full">
                <img
                  src="assets/companyhistory.jpeg"
                  alt="Pharmaceutical Excellence"
                  className="rounded-3xl w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <MissionSection />
      
      {/* Leadership Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">OUR LEADERSHIP</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-full h-80 object-cover object-top"
                />
                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{leader.name}</h4>
                  <p className="text-teal-600 font-semibold">{leader.position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <TeamSection />

      {/* Facility Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-2">
              STATE-OF-THE-ART
            </h2>
            <h2 className="text-5xl md:text-6xl font-bold text-cyan-500">
              MANUFACTURING FACILITY
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {facilityFeatures.map((feature, index) => {
              const gradients = [
                'from-cyan-500 to-teal-600',
                'from-teal-500 to-cyan-600',
                'from-cyan-600 to-teal-700'
              ];
              return (
                <div key={index} className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                  <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${gradients[index % 3]}`}></div>
                  <div className="p-8">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradients[index % 3]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-3xl font-bold text-white">{index + 1}</span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h4>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </div>
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${gradients[index % 3]} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`}></div>
                </div>
              );
            })}
          </div>
          
          {/* Pioneering Excellence Section */}
          <div className="mt-16 relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-gray-900 to-gray-800 shadow-2xl">
            <div className="grid md:grid-cols-5 items-end">
              <div className="md:col-span-2 p-12 text-white z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  Pioneering
                </h3>
                <h3 className="text-3xl md:text-4xl font-bold mb-2">
                  Excellence
                </h3>
                <h3 className="text-3xl md:text-4xl font-bold text-cyan-400">
                  In Quality
                </h3>
                <h3 className="text-3xl md:text-4xl font-bold text-cyan-400">
                  Healthcare
                </h3>
                <h3 className="text-3xl md:text-4xl font-bold text-cyan-400 mb-6">
                  Solutions
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  We specialize in a comprehensive range of services dedicated to pharmaceutical manufacturing and production. Our expertise spans across every stage of the medicine production process, from formulation to packaging.
                </p>
              </div>
              
              <div className="md:col-span-3 relative h-[450px] md:h-[500px]">
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-gray-900 z-10"></div>
                <img
                  src="https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Quality Healthcare Products"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <Certificates />
    </>
  );
}