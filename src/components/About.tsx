export default function About() {

  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            About Carer Pharmaceutical
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A legacy of innovation, quality, and commitment to improving global health through pharmaceutical excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 1998, Carer Pharmaceutical has been at the forefront of medical innovation, developing and manufacturing high-quality medicines that address critical health challenges. Our state-of-the-art facilities and world-class research teams work tirelessly to bring effective treatments to patients worldwide.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              We believe in the power of science to transform lives. Through rigorous research, ethical practices, and unwavering dedication to quality, we continue to set new standards in pharmaceutical excellence.
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
  );
}
