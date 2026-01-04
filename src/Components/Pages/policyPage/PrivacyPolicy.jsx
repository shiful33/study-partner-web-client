import React from 'react';
import { ShieldCheck } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen px-4 py-12 bg-gray-50 dark:bg-gray-900 sm:px-6 lg:px-8 md:pt-40">
      <div className="max-w-3xl p-8 mx-auto bg-white border border-gray-100 shadow-md dark:bg-gray-800 rounded-2xl dark:border-gray-700">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 rounded-lg bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600">
            <ShieldCheck size={28} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Privacy Policy</h1>
        </div>

        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-300">Your privacy is important to us.</p>
          
          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-emerald-600">Information We Collect</h3>
            <p className="leading-relaxed text-gray-600 dark:text-gray-400">
              We collect personal information that you provide to us, such as your name, email address, education background, and study interests to help you find the best matching study partners.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-emerald-600">How We Use Your Information</h3>
            <p className="leading-relaxed text-gray-600 dark:text-gray-400">
              Your information is used to personalize your experience, improve our platform services, and facilitate communication between study partners. We do not sell your personal data to third parties.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-emerald-600">Data Protection</h3>
            <p className="leading-relaxed text-gray-600 dark:text-gray-400">
              We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your profile data.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;