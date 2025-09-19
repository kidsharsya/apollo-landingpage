'use client';

import { CheckIcon } from '@heroicons/react/24/outline';

const plans = [
  {
    title: 'Free trial',
    price: 'Rp0',
    subtitle: 'forever free',
    features: ['Access to basic courses', 'Limited practice exercises', 'Basic progress tracking', 'Community support'],
    button: 'Get started',
    highlight: false,
  },
  {
    title: 'Pay Per Content',
    price: 'Rp10.000',
    subtitle: 'per content',
    subprice: 'Start from',
    features: ['Pay only for what you need', 'Full access to purchased content', 'All practice exercises included', 'Progress tracking', 'Priority support'],
    button: 'Get started',
    highlight: true, // Popular
  },
  {
    title: 'Course Access',
    price: 'Rp50.000',
    subtitle: 'per course',
    subprice: 'Start from',
    features: ['Full course access', 'All exercises and projects', 'Downloadable resources', 'Certificate upon completion', 'Direct instructor support'],
    button: 'Get started',
    highlight: false,
  },
  {
    title: 'Learning Path Access',
    price: 'Rp150.000',
    subtitle: 'per path',
    features: ['Complete learning pathway', 'Multiple related courses', 'Structured progression', 'Dedicated mentor support', 'Path completion certificate'],
    button: 'Get started',
    highlight: false,
  },
  {
    title: 'Full Access',
    price: 'Rp300.000',
    subtitle: 'per month',
    features: ['Access to all content', 'All courses and paths', 'Premium exercises', 'All certificates', '24/7 priority support', 'Live sessions access'],
    button: 'Get started',
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section className="bg-[#E6EEFF] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-bold">Learning Plans Options</h2>
        <p className="mt-2 text-base text-gray-700">Flexible payment options—pay only for what you need, or unlock full modules with affordable subscriptions.</p>

        <div className="mt-12 grid gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {plans.map((plan, idx) => (
            <div key={idx} className={`flex flex-col rounded-xl border border-blue-500 shadow-sm p-6 text-left ${plan.highlight ? 'relative bg-blue-600 text-white' : 'bg-white'}`}>
              {plan.highlight && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-400 text-xs font-semibold px-3 py-1 rounded-full">Popular</span>}

              <h3 className="text-lg font-semibold text-center">{plan.title}</h3>

              {plan.subprice && <p className="text-center text-xs mt-1 opacity-80">{plan.subprice}</p>}

              <p className={`text-2xl text-center font-bold mt-2 ${plan.highlight ? 'text-white' : 'text-blue-500'}`}>{plan.price}</p>
              <p className="text-sm text-center opacity-80">{plan.subtitle}</p>

              <ul className="mt-6 space-y-2 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckIcon className={`h-5 w-5 flex-shrink-0 ${plan.highlight ? 'text-white' : 'text-green-500'}`} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`mt-6 w-full rounded-md py-2 font-medium ${plan.highlight ? 'bg-white text-blue-600' : 'bg-blue-600 text-white'}`}>{plan.button}</button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
