'use client';

import Image from 'next/image';
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <section className="bg-[#121827]">
      <footer className="max-w-6xl mx-auto text-gray-300 py-16 px-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-24 lg:gap-40">
          {/* Brand + Contact */}
          <div>
            <Image src="/logofooter.svg" alt="Icon LMS" width={100} height={100} className="max-w-full h-auto mb-4" />
            <p className="mb-6 text-sm">Advanced Programming and Online Learning Laboratory</p>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 text-blue-500" />
                +62 1234 5678 9101
              </li>
              <li className="flex items-center gap-3">
                <EnvelopeIcon className="h-5 w-5 text-blue-500" />
                apollo@apollo.com
              </li>
              <li className="flex items-center gap-3">
                <MapPinIcon className="h-5 w-5 text-blue-500" />
                Kampus 4 Universitas Ahmad Dahlan
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  How it works
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Plans
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resources</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-white">
                  Support
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of use
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-xs text-gray-400">©2025 APOLLO - All rights reserved</div>
      </footer>
    </section>
  );
}
