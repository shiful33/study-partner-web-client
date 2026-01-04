import {
  Download,
  ExternalLink,
  Building2
} from "lucide-react";

export const PressKit = () => (
  <section className="px-4 py-12 space-y-12 duration-700 animate-in fade-in slide-in-from-bottom-4">
    <div className="max-w-2xl mx-auto text-center">
      <h2 className="mb-4 text-3xl dark:light dark:text">
        Press <span className="text-yellow-400">Room</span>
      </h2>
      <p className="text-gray-500 dark:text-gray-400">
        Download high-quality assets and read our latest story.
      </p>
    </div>

    <div className="grid max-w-5xl grid-cols-1 gap-8 mx-auto md:grid-cols-2">
      <div className="bg-white dark:bg-gray-800 p-10 rounded-[40px] border border-gray-100 dark:border-gray-700 shadow-xl">
        <h3 className="flex items-center gap-3 mb-8 text-2xl font-black dark:text-white">
          <Building2 className="text-blue-500" /> Identity Assets
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-6 transition-all border border-transparent cursor-pointer bg-gray-50 dark:bg-gray-900 rounded-3xl group hover:border-blue-500">
            <div className="flex items-center gap-4 font-bold dark:text-white">
              <div className="flex items-center justify-center w-12 h-12 text-xl text-white bg-blue-600 rounded-xl">
                SP
              </div>
              Logo Package (SVG)
            </div>
            <Download
              className="text-gray-400 transition-all group-hover:text-blue-500 group-hover:translate-y-1"
              size={24}
            />
          </div>
          <div className="flex items-center justify-between p-6 transition-all border border-transparent cursor-pointer bg-gray-50 dark:bg-gray-900 rounded-3xl group hover:border-blue-500">
            <div className="flex items-center gap-4 font-bold dark:text-white">
              <div className="flex gap-1">
                <div className="w-6 h-10 bg-blue-600 rounded-lg"></div>
                <div className="w-6 h-10 bg-yellow-400 rounded-lg"></div>
              </div>
              Color Guidelines
            </div>
            <Download
              className="text-gray-400 transition-all group-hover:text-blue-500 group-hover:translate-y-1"
              size={24}
            />
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-br from-gray-900 to-black p-10 rounded-[40px] shadow-2xl text-white">
        <h3 className="flex items-center gap-3 mb-6 text-2xl font-bold">
          <ExternalLink className="text-yellow-400" /> Quick Facts
        </h3>
        <div className="space-y-6">
          <div className="flex justify-between pb-4 border-b border-white/10">
            <span className="text-gray-400">Founded</span>
            <span className="italic font-bold uppercase">January 2024</span>
          </div>
          <div className="flex justify-between pb-4 border-b border-white/10">
            <span className="text-gray-400">Headquarters</span>
            <span className="font-bold">Dhaka, Bangladesh</span>
          </div>
          <div className="flex justify-between pb-4 border-b border-white/10">
            <span className="text-gray-400">CEO</span>
            <span className="font-bold underline decoration-blue-500">
              John Learning
            </span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Primary Sector</span>
            <span className="font-bold">EdTech / Networking</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PressKit;
