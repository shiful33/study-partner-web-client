import { CheckCircle, Facebook, Linkedin, Loader2, Mail, MapPin, Send, Twitter } from "lucide-react";
import { useState } from "react";


export const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    }, 1500);
  };

  return (
    <section className="min-h-screen px-4 mt-40 duration-700 animate-in fade-in slide-in-from-bottom-4">
      <div className="grid items-start grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="space-y-10">
          <div className="space-y-4">
            <h2 className="text-3xl font-black leading-tight dark:light dark:text">
              Let's Talk{" "}
              <span className="text-yellow-500 underline decoration-wavy underline-offset-8">
                Support.
              </span>
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400">
              Have questions? Our team is ready to assist you in finding your
              perfect study companion.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="p-6 border border-blue-100 bg-blue-50 dark:bg-blue-900/10 rounded-2xl dark:border-blue-800">
              <Mail className="mb-3 text-blue-600" size={28} />
              <p className="text-sm font-medium tracking-tighter text-gray-500 uppercase">
                Email
              </p>
              <p className="font-bold dark:text-white">support@study.com</p>
            </div>
            <div className="p-6 border bg-emerald-50 dark:bg-emerald-900/10 rounded-2xl border-emerald-100 dark:border-emerald-800">
              <MapPin className="mb-3 text-emerald-600" size={28} />
              <p className="text-sm font-medium tracking-tighter text-gray-500 uppercase">
                Office
              </p>
              <p className="font-bold dark:text-white">Dhaka, Bangladesh</p>
            </div>
          </div>

          <div className="flex gap-4 pt-4 border-t border-gray-100 dark:border-gray-800">
            <button className="flex items-center justify-center w-12 h-12 transition-all bg-gray-100 rounded-full dark:bg-gray-800 hover:bg-blue-600 hover:text-white">
              <Twitter size={20} />
            </button>
            <button className="flex items-center justify-center w-12 h-12 transition-all bg-gray-100 rounded-full dark:bg-gray-800 hover:bg-blue-600 hover:text-white">
              <Linkedin size={20} />
            </button>
            <button className="flex items-center justify-center w-12 h-12 transition-all bg-gray-100 rounded-full dark:bg-gray-800 hover:bg-blue-600 hover:text-white">
              <Facebook size={20} />
            </button>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-10 rounded-[40px] shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-blue-500/5 blur-3xl"></div>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                Full Name
              </label>
              <input
                required
                type="text"
                className="w-full px-5 py-4 transition-all border-none rounded-2xl bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 dark:text-white"
                placeholder="Type your name..."
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                Email Address
              </label>
              <input
                required
                type="email"
                className="w-full px-5 py-4 transition-all border-none rounded-2xl bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 dark:text-white"
                placeholder="name@domain.com"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold tracking-widest text-gray-400 uppercase">
                Your Message
              </label>
              <textarea
                required
                rows="4"
                className="w-full px-5 py-4 transition-all border-none resize-none rounded-2xl bg-gray-50 dark:bg-gray-900 focus:ring-2 focus:ring-blue-500 dark:text-white"
                placeholder="How can we help?"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full py-5 bg-[#001F46] hover:bg-blue-900 text-white font-black text-lg rounded-2xl flex items-center justify-center gap-3 shadow-lg transform active:scale-95 transition-all disabled:opacity-70 cursor-pointer"
            >
              {loading ? (
                <Loader2 size={24} className="animate-spin" />
              ) : success ? (
                <>
                  <CheckCircle size={24} /> Sent!
                </>
              ) : (
                <>
                  <Send size={20} /> Send Inquiry
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
