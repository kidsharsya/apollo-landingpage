import Image from 'next/image';

export default function FeatureSection() {
  return (
    <section className="bg-purple-50">
      <div className="max-w-6xl mx-auto h-auto gap-8 items-center px-6 py-24">
        <div className="flex flex-col text-center">
          <h1 className="text-3xl font-medium">What You’ll Get With Apollo</h1>
          <h2 className="text-base mt-2 mb-8">A powerful ecosystem designed to help you learn faster, build smarter, and showcase better.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 text-center flex flex-col items-center">
            <Image src="/lms_icon.svg" alt="Icon LMS" width={80} height={80} className="max-w-full h-auto" />
            <h2 className="text-lg font-medium mt-2">Learning Management System</h2>
            <p className="text-base mt-2">Master programming skills with structured modules, interactive lessons, quizzes, and coding challenges. Learn by doing, track your progress, and stay on the path to becoming job-ready.</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 text-center flex flex-col items-center">
            <Image src="/pm_icon.svg" alt="Icon PM" width={80} height={80} className="max-w-full h-auto" />
            <h2 className="text-lg font-medium mt-2">Project Management</h2>
            <p className="text-base mt-2">Turn your knowledge into real experience. Collaborate with teammates, manage tasks, and track progress — just like working on real-world projects.</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-200 shadow-lg p-8 text-center flex flex-col items-center">
            <Image src="/port_icon.svg" alt="Icon Port" width={80} height={80} className="max-w-full h-auto" />
            <h2 className="text-lg font-medium mt-2">Portfolio Management</h2>
            <p className="text-base mt-2">Showcase your best work in one place. Every project you build in Apollo can be instantly added to your portfolio to share with recruiters, peers, and the world.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
