import MissionSection from '../components/MissionSection';
import TeamSection from '../components/TeamSection';
import { companyInfo } from '../data/company';

export default function ResearchPage() {
  return (
    <>
      {/* Research Hero Section */}
      <section className="py-24 bg-gradient-to-br from-teal-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Research & Development
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {companyInfo.about}
            </p>
          </div>
          
          <div className="mt-16">
            <img
              src="https://images.pexels.com/photos/3786126/pexels-photo-3786126.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Research & Development"
              className="w-full h-96 object-cover rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      <MissionSection />
      <TeamSection />
    </>
  );
}