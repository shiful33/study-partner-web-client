import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [loading, setLoading] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });

    // Fetch from MongoDB
    const fetchTestimonials = async () => {
      try {
        const res = await fetch("http://localhost:3000/testimonials");
        if (!res.ok) throw new Error("Failed to load testimonials");
        const data = await res.json();
        setTestimonials(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTestimonials();

    // Auto-slide
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  if (loading) {
    return (
      <section className="py-20">
        <div className="px-4 mx-auto text-center max-w-7xl">
          <p className="text-xl text-gray-500">Loading success stories...</p>
        </div>
      </section>
    );
  }

  if (testimonials.length === 0) {
    return (
      <section className="py-20">
        <div className="px-4 mx-auto text-center max-w-7xl">
          <p className="text-xl text-gray-500">
            No testimonials yet. Be the first!
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 overflow-hidden md:py-28dark:from-gray-800 dark:to-gray-900">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-16 text-center" data-aos="fade-up">
          <h2 className="mb-4 text-3xl text-4xl font-bold light:text dark:text">
            What Students Are Saying
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-gray-400 dark:text-gray-300">
            Real stories from real students who found their <span className="text-yellow-500">perfect study buddy.</span>
          </p>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div key={t._id} className="flex-shrink-0 w-full px-4">
                  <div className="max-w-4xl mx-auto">
                    <div className="relative p-10 transition-all duration-500 bg-white border border-yellow-100 shadow-xl dark:bg-gray-800 rounded-3xl dark:border-gray-700 hover:border-yellow-400 dark:hover:border-yellow-500 group">
                      <div className="absolute inset-0 transition-opacity duration-500 bg-yellow-400 opacity-0 rounded-3xl dark:bg-yellow-500 group-hover:opacity-20 blur-xl"></div>

                      <div className="absolute text-yellow-400 -top-6 left-8 dark:text-yellow-500">
                        <svg
                          className="w-12 h-12"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                        </svg>
                      </div>

                      <div className="flex justify-center mb-6">
                        {[...Array(t.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-6 h-6 text-yellow-400 drop-shadow-md animate-pulse"
                            style={{ animationDelay: `${i * 100}ms` }}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>

                      <p className="mb-8 text-lg italic leading-relaxed text-center text-gray-700 md:text-xl dark:text-gray-200">
                        "{t.text}"
                      </p>

                      <div className="flex items-center justify-center gap-4">
                        <img
                          src={t.image}
                          alt={t.name}
                          className="w-16 h-16 rounded-full shadow-lg ring-4 ring-yellow-400 dark:ring-yellow-500"
                        />
                        <div className="text-left">
                          <h4 className="font-bold text-[#001F46] dark:text-white text-lg">
                            {t.name}
                          </h4>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {t.role}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "bg-yellow-400 dark:bg-yellow-500 w-8 shadow-lg"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>

        <div
          className="mt-16 text-center"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <p className="mb-6 text-lg text-gray-400 dark:text-gray-300">
            Ready to write your own success story?
          </p>
          <a
            href="/findPartners"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 hover:from-yellow-500 hover:to-yellow-600 text-[#001F46] font-bold text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
          >
            Find Your Partner Today
            <svg
              className="w-5 h-5 ml-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%,
          100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.2);
          }
        }
        .animate-pulse {
          animation: pulse 1.5s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
