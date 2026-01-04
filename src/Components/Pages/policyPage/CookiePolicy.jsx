import React from 'react';
import { Cookie } from 'lucide-react';

const CookiePolicy = () => {
  return (
    <div className="min-h-screen px-4 py-12 bg-gray-50 dark:bg-gray-900 sm:px-6 lg:px-8 md:pt-40">
      <div className="max-w-3xl p-8 mx-auto bg-white border border-gray-100 shadow-md dark:bg-gray-800 rounded-2xl dark:border-gray-700">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-3 text-orange-600 bg-orange-100 rounded-lg dark:bg-orange-900/30">
            <Cookie size={28} />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white">Cookie Policy</h1>
        </div>

        <div className="space-y-6">
          <p className="text-gray-600 dark:text-gray-300">How we use cookies to improve your experience.</p>
          
          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-orange-600">What are Cookies?</h3>
            <p className="leading-relaxed text-gray-600 dark:text-gray-400">
              Cookies are small text files stored on your device when you visit a website. They help the website recognize your device and remember information about your visit.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-orange-600">Types of Cookies We Use</h3>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              <div className="p-4 border border-orange-100 rounded-lg bg-orange-50 dark:bg-orange-900/20 dark:border-orange-800">
                <h4 className="font-bold text-orange-700 dark:text-orange-400">Essential Cookies</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Necessary for the website to function (e.g., login sessions).</p>
              </div>
              <div className="p-4 border border-orange-100 rounded-lg bg-orange-50 dark:bg-orange-900/20 dark:border-orange-800">
                <h4 className="font-bold text-orange-700 dark:text-orange-400">Preference Cookies</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Remembering your theme (dark/light mode) and language.</p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h3 className="text-xl font-semibold text-orange-600">Managing Cookies</h3>
            <p className="leading-relaxed text-gray-600 dark:text-gray-400">
              You can choose to disable cookies through your individual browser options. However, some features of Study Partner may not function properly without them.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;