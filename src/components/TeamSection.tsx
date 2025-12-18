export default function TeamSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">OUR TEAM</h2>
        
        <div className="mb-12">
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="Carer Pharmaceutical Team"
            className="w-full h-96 object-cover rounded-2xl shadow-2xl"
          />
        </div>
        
        <div className="max-w-5xl mx-auto space-y-6">
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-3 h-3 rounded-full bg-gradient-to-br from-teal-500 to-cyan-600 mt-2"></div>
            <p className="text-gray-700 leading-relaxed text-lg">
              Our hardworking team at Carer Pharmaceutical embodies dedication, resilience, and a relentless pursuit of excellence, driving our success in the pharmaceutical industry.
            </p>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-3 h-3 rounded-full bg-gradient-to-br from-cyan-500 to-teal-600 mt-2"></div>
            <p className="text-gray-700 leading-relaxed text-lg">
              With a shared commitment to innovation and collaboration, our hardworking team at Carer Pharmaceutical.
            </p>
          </div>
          
          <div className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-3 h-3 rounded-full bg-gradient-to-br from-teal-600 to-cyan-700 mt-2"></div>
            <p className="text-gray-700 leading-relaxed text-lg">
              The foundation of Carer Pharmaceutical's achievements lies in our hardworking team, whose unwavering passion and tireless effort propel us towards our shared goals of advancing healthcare and improving patient outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
