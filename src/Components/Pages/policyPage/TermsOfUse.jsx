import React from 'react';
import { FileText } from 'lucide-react';

const TermsOfUse = () => {
  return (
    <div className="min-h-screen px-4 py-12 bg-gray-50 dark:bg-gray-900 sm:px-6 lg:px-8 md:pt-30">
      <div className="max-w-3xl p-8 mx-auto bg-white border border-gray-100 shadow-md dark:bg-gray-800 rounded-2xl dark:border-gray-700">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 text-[#001F46] bg-blue-100 rounded-lg dark:bg-blue-900/30">
            <FileText size={28} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Terms of Use</h1>
        </div>
        
        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-300">Last updated: January 2024</p>
          
          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-[#001F46]">1. Acceptance of Terms</h3>
            <p className="leading-relaxed text-gray-600 dark:text-gray-400">
              By accessing and using Study Partner, you agree to be bound by these Terms of Use and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-[#001F46]">2. User Conduct</h3>
            <ul className="ml-5 space-y-2 text-gray-600 list-disc dark:text-gray-400">
              <li>Users must provide accurate information when creating an account.</li>
              <li>Harassment or abuse of other study partners is strictly prohibited.</li>
              <li>You may not use the platform for any illegal or unauthorized purposes.</li>
              <li>Sharing of copyrighted study materials without permission is not allowed.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-[#001F46]">3. Account Security</h3>
            <p className="text-gray-600 dark:text-gray-400">
              You are responsible for maintaining the confidentiality of your account and password. Study Partner cannot and will not be liable for any loss or damage arising from your failure to comply with this security obligation.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsOfUse;