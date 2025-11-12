import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const HowItWorks = () => {
  useEffect(() => {
    AOS.init({ duration: 800, easing: "ease-out-cubic" });
  }, []);

  return (
    <section className="py-16 transition-colors duration-300 md:py-24 bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
      <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        {/* Headline */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#001F46] dark:text-white mb-4 text-shadow-light">
          How It Works
        </h2>
        <p className="max-w-3xl mx-auto mb-12 text-lg text-gray-600 md:text-xl dark:text-gray-300">
          Find your perfect study partner in just{" "}
          <span className="font-bold text-yellow-500">3 simple steps</span>.
        </p>

        {/* Steps Grid */}
        <div className="grid gap-8 md:grid-cols-3 lg:gap-12">
          {/* Step 1 */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="relative p-8 transition-all duration-300 bg-white border border-gray-100 shadow-lg group dark:bg-gray-800 rounded-2xl hover:shadow-2xl dark:border-gray-700 hover:border-yellow-400 dark:hover:border-yellow-500"
          >
            <div className="absolute transform -translate-x-1/2 -top-6 left-1/2">
              <div className="w-14 h-14 bg-yellow-400 dark:bg-yellow-500 text-[#001F46] dark:text-gray-900 rounded-full flex items-center justify-center text-2xl font-bold shadow-xl group-hover:scale-110 transition-transform duration-300">
                1
              </div>
            </div>

            {/* Animated SVG */}
            <div className="w-20 h-20 mx-auto mb-6 text-yellow-500 dark:text-yellow-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 64 64"
                className="w-full h-full drop-shadow-md"
              >
                <circle
                  cx="32"
                  cy="32"
                  r="20"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M20 32L28 40L44 24"
                  stroke="currentColor"
                  strokeWidth="4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-draw"
                  style={{ strokeDasharray: 80, strokeDashoffset: 80 }}
                />
                <style jsx>{`
                  @keyframes draw {
                    to {
                      stroke-dashoffset: 0;
                    }
                  }
                  .animate-draw {
                    animation: draw 1.5s ease-out forwards;
                  }
                `}</style>
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-[#001F46] dark:text-white mb-3">
              Search Partners
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Filter by subject, location, study mode, and availability to find
              your ideal match.
            </p>
          </div>

          {/* Step 2 */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="relative p-8 transition-all duration-300 bg-white border border-gray-100 shadow-lg group dark:bg-gray-800 rounded-2xl hover:shadow-2xl dark:border-gray-700 hover:border-yellow-400 dark:hover:border-yellow-500 md:mt-8"
          >
            <div className="absolute transform -translate-x-1/2 -top-6 left-1/2">
              <div className="w-14 h-14 bg-yellow-400 dark:bg-yellow-500 text-[#001F46] dark:text-gray-900 rounded-full flex items-center justify-center text-2xl font-bold shadow-xl group-hover:scale-110 transition-transform duration-300">
                2
              </div>
            </div>

            <div className="w-20 h-20 mx-auto mb-6 text-yellow-500 dark:text-yellow-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 64 64"
                className="w-full h-full drop-shadow-md"
              >
                <rect
                  x="16"
                  y="20"
                  width="32"
                  height="24"
                  rx="4"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M24 28L30 34L40 26"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="animate-draw"
                  style={{ strokeDasharray: 80, strokeDashoffset: 80 }}
                />
                <style jsx>{`
                  @keyframes draw {
                    to {
                      stroke-dashoffset: 0;
                    }
                  }
                  .animate-draw {
                    animation: draw 1.5s ease-out forwards 0.3s;
                  }
                `}</style>
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-[#001F46] dark:text-white mb-3">
              Send Request
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Click "Connect" to send a study request. They’ll get notified
              instantly.
            </p>
          </div>

          {/* Step 3 */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="relative p-8 transition-all duration-300 bg-white border border-gray-100 shadow-lg group dark:bg-gray-800 rounded-2xl hover:shadow-2xl dark:border-gray-700 hover:border-yellow-400 dark:hover:border-yellow-500"
          >
            <div className="absolute transform -translate-x-1/2 -top-6 left-1/2">
              <div className="w-14 h-14 bg-yellow-400 dark:bg-yellow-500 text-[#001F46] dark:text-gray-900 rounded-full flex items-center justify-center text-2xl font-bold shadow-xl group-hover:scale-110 transition-transform duration-300">
                3
              </div>
            </div>

            <div className="w-20 h-20 mx-auto mb-6 text-yellow-500 dark:text-yellow-400">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 64 64"
                className="w-full h-full drop-shadow-md"
              >
                <circle
                  cx="22"
                  cy="24"
                  r="8"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                />
                <circle
                  cx="42"
                  cy="24"
                  r="8"
                  stroke="currentColor"
                  strokeWidth="3"
                  fill="none"
                />
                <path
                  d="M22 32C22 36 28 40 32 42C36 40 42 36 42 32"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="animate-draw"
                  style={{ strokeDasharray: 60, strokeDashoffset: 60 }}
                />
                <style jsx>{`
                  @keyframes draw {
                    to {
                      stroke-dashoffset: 0;
                    }
                  }
                  .animate-draw {
                    animation: draw 1.5s ease-out forwards 0.6s;
                  }
                `}</style>
              </svg>
            </div>

            <h3 className="text-2xl font-bold text-[#001F46] dark:text-white mb-3">
              Start Studying!
            </h3>
            <p className="text-gray-600 dark:text-gray-300">
              Chat, schedule sessions, share notes, and study together —
              anytime, anywhere.
            </p>
          </div>
        </div>

        {/* CTA Button */}
        <div className="mt-16">
          <Link
            to="/findPartners"
            className="inline-flex items-center px-8 py-4 bg-yellow-400 hover:bg-yellow-500 dark:bg-yellow-500 dark:hover:bg-yellow-600 text-[#001F46] dark:text-gray-900 font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Find Your Study Partner Now
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
