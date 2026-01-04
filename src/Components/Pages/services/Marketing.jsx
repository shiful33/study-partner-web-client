

import {
  Megaphone,
  Target,
  BarChart3,
  Share2,
} from "lucide-react";

export const Marketing = () => (
  <section className="py-12 space-y-12 duration-700 animate-in fade-in slide-in-from-bottom-4">
    <div className="flex flex-col items-center gap-12 px-4 md:flex-row">
      <div className="flex-1 space-y-6">
        <h2 className="text-5xl font-black leading-tight dark:light dark:text">
          How we <span className="text-yellow-400">Grow</span> the Community.
        </h2>
        <p className="text-lg text-gray-500 dark:text-gray-400">
          Amader marketing strategy ekti organic ebong community-first approach follow kore jate student-ra nijei amader brand ambassador hoye uthe.
        </p>
        <div className="space-y-4">
          <div className="flex items-center gap-4 p-4 bg-white border border-gray-100 shadow-sm dark:bg-gray-800 rounded-2xl dark:border-gray-700">
             <Share2 className="text-blue-500" />
             <span className="font-bold dark:text-white">Social Media Engagement</span>
          </div>
          <div className="flex items-center gap-4 p-4 bg-white border border-gray-100 shadow-sm dark:bg-gray-800 rounded-2xl dark:border-gray-700">
             <Target className="text-emerald-500" />
             <span className="font-bold dark:text-white">SEO & Content Marketing</span>
          </div>
        </div>
      </div>
      <div className="w-full md:w-[400px] grid grid-cols-2 gap-4">
        <div className="flex flex-col items-center justify-center p-8 text-center text-white bg-blue-600 rounded-3xl">
          <BarChart3 size={32} className="mb-2" />
          <p className="text-2xl font-black">45%</p>
          <p className="text-xs tracking-widest uppercase opacity-80">Growth</p>
        </div>
        <div className="flex flex-col items-center justify-center p-8 mt-8 text-center text-white bg-emerald-500 rounded-3xl">
          <Megaphone size={32} className="mb-2" />
          <p className="text-2xl font-black">10K+</p>
          <p className="text-xs tracking-widest uppercase opacity-80">Mentions</p>
        </div>
      </div>
    </div>
  </section>
);

export default Marketing;