import Image from 'next/image';

export default function BannerSection() {
  return (
    <section className="bg-blue-50">
      <div className="max-w-6xl mx-auto h-auto flex flex-col-reverse md:flex-row gap-8 items-center px-6 py-12 lg:py-6 md:py-24">
        {/* Left Column */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-3xl sm:text-3xl md:text-4xl font-poppins font-bold text-blue-500 leading-tight">LEARN, BUILD, & SHOWCASE</h1>
          <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold text-blue-500 leading-tight mt-2">ALL IN ONE PLATFORM</h1>
          <p className="mt-6 mb-8 text-base text-gray-700">
            APOLLO is the Advanced Programming and Online Learning Laboratory that combines LMS, Project Management, and Portfolio in a seamless ecosystem. Learn new skills, collaborate on real projects, and showcase your achievements—all
            within one integrated platform.
          </p>
          <div className="flex flex-col sm:flex-row sm:justify-center md:justify-start gap-4">
            <button className="bg-blue-500 text-white font-medium px-6 py-3 rounded-md hover:bg-blue-600">Get Started Free</button>
            <button className="text-blue-500 font-medium px-6 py-3 border border-blue-500 rounded-md hover:bg-blue-500 hover:text-white">Explore Features</button>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-1 justify-center items-center">
          <Image src="/hero.svg" alt="Banner Image" width={500} height={500} className="max-w-full h-auto" />
        </div>
      </div>
    </section>
  );
}
