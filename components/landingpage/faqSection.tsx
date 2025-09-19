'use client';

import { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

const faq = [
  {
    question: 'What is Apollo?',
    answer: 'Apollo is an all-in-one platform that combines a Learning Management System (LMS), Project Management, and Portfolio showcase. You can learn, build projects, and showcase your achievements seamlessly.',
  },
  {
    question: 'Do I need to pay to use Apollo?',
    answer: 'No. Apollo offers a Free Trial plan with access to basic courses and community support. You can upgrade anytime for more advanced content and features.',
  },
  {
    question: 'How does the pricing work for LMS?',
    answer: 'We provide flexible options: you can pay per content, unlock full course access, follow structured learning paths, or subscribe monthly for unlimited access.',
  },
  {
    question: 'Can I use Project Management and Portfolio features for free?',
    answer: 'Yes. Project Management and Portfolio features are included and accessible once you create an Apollo account, with no additional cost.',
  },
  {
    question: 'Will I get a certificate after completing a course?',
    answer: 'Yes. Certificates are available for paid plans such as Course Access, Learning Path Access, and Full Access.',
  },
  {
    question: 'Can I cancel or change my plan?',
    answer: 'Absolutely. You can cancel anytime or switch to another plan that suits your learning needs.',
  },
  {
    question: 'Who can use Apollo?',
    answer: 'Apollo is designed for students, professionals, bootcamps, and organizations who want to learn new skills, collaborate on projects, and build a portfolio.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const leftColumnItems = faq.slice(0, Math.ceil(faq.length / 2));
  const rightColumnItems = faq.slice(Math.ceil(faq.length / 2));

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-3xl font-bold">Frequently Asked Questions (FAQ)</h2>
        <p className="mt-4 max-w-3xl mx-auto text-lg">Find answers to the most frequently asked questions about Apollo, from pricing to features, so you can start your journey with confidence</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="flex flex-col gap-4">
          {leftColumnItems.map((item, index) => (
            <div key={index} className={`rounded-2xl p-6 bg-purple-100 ${openIndex === index}`}>
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="flex items-center justify-between w-full text-left">
                <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
                {openIndex === index ? <ChevronUpIcon className="h-5 w-5 text-gray-600 flex-shrink-0" /> : <ChevronDownIcon className="h-5 w-5 text-gray-600 flex-shrink-0" />}
              </button>
              {openIndex === index && <div className="mt-4 text-gray-700 leading-relaxed">{item.answer}</div>}
            </div>
          ))}
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          {rightColumnItems.map((item, index) => {
            const actualIndex = index + leftColumnItems.length;
            return (
              <div key={actualIndex} className={`rounded-2xl p-6 bg-purple-100 ${openIndex === actualIndex}`}>
                <button onClick={() => setOpenIndex(openIndex === actualIndex ? null : actualIndex)} className="flex items-center justify-between w-full text-left">
                  <span className="font-semibold text-gray-900 pr-4">{item.question}</span>
                  {openIndex === actualIndex ? <ChevronUpIcon className="h-5 w-5 text-gray-600 flex-shrink-0" /> : <ChevronDownIcon className="h-5 w-5 text-gray-600 flex-shrink-0" />}
                </button>
                {openIndex === actualIndex && <div className="mt-4 text-gray-700 leading-relaxed">{item.answer}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
