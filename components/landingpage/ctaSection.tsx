import Image from 'next/image';

export default function CTASection() {
  return (
    <section className="px-6">
      <div className="max-w-7xl mx-auto h-auto bg-blue-100 rounded-2xl items-center px-6 py-24">
        <div className="flex flex-col text-center items-center">
          <Image src="/roket_cta.svg" alt="Icon LMS" width={80} height={80} className="max-w-full h-auto mb-8" />
          <h1 className="text-2xl md:text-3xl font-bold">Ready to Launch Your Journey?</h1>
          <h2 className="text-base mt-8 mb-8 mx-6 md:mx-48">Join Apollo today and experience the all-in-one ecosystem to learn programming, build real projects, and showcase your portfolio.</h2>
          <button className="bg-blue-500 text-white font-medium px-6 py-3 rounded-md hover:bg-blue-600">Get Started Free</button>
        </div>
      </div>
    </section>
  );
}
