import Image from 'next/image';

export default function WorksSection() {
  return (
    <section className="bg-white">
      <div className="max-w-6xl mx-auto h-auto gap-8 items-center px-6 py-24">
        <div className="flex flex-col text-center">
          <h1 className="text-3xl font-medium">How Apollo Works</h1>
          <h2 className="text-base mt-2 mb-8">Simple steps to start your journey.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-7">
          <div className="text-center flex flex-col items-center">
            <Image src="/roket.svg" alt="Icon LMS" width={80} height={80} className="max-w-full h-auto" />
            <h2 className="text-lg font-medium mt-2">Get Started</h2>
            <p className="text-base mt-2">Create your Apollo account and instantly unlock access to learning, projects, and portfolio</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/panah.svg" alt="panah" width={80} height={80} className="max-w-full h-auto py-8 my-4 md:my-0 rotate-90 md:rotate-0" />
          </div>
          <div className="text-center flex flex-col items-center">
            <Image src="/lms.svg" alt="Icon PM" width={80} height={80} className="max-w-full h-auto" />
            <h2 className="text-lg font-medium mt-2">Learn with LMS</h2>
            <p className="text-base mt-2">Start learning through interactive lessons, quizzes, and coding exercises. Track your progress with ease</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/panah.svg" alt="panah" width={80} height={80} className="max-w-full h-auto py-8 my-4 md:my-0 rotate-90 md:rotate-0" />
          </div>
          <div className="text-center flex flex-col items-center">
            <Image src="/projects.svg" alt="Icon Port" width={80} height={80} className="max-w-full h-auto" />
            <h2 className="text-lg font-medium mt-2">Build Projects</h2>
            <p className="text-base mt-2">Join or create projects, manage tasks, and collaborate with teammates in a real-world setting</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/panah.svg" alt="panah" width={80} height={80} className="max-w-full h-auto py-8 my-4 md:my-0 rotate-90 md:rotate-0" />
          </div>
          <div className="text-center flex flex-col items-center">
            <Image src="/portfolio.svg" alt="Icon Port" width={80} height={80} className="max-w-full h-auto" />
            <h2 className="text-lg font-medium mt-2">Showcase Portfolio</h2>
            <p className="text-base mt-2">Publish your projects directly to your portfolio and share them with recruiters or peers</p>
          </div>
        </div>
      </div>
    </section>
  );
}
