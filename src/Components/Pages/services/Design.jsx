import React, { useState } from 'react';
import { 
  PenTool, Layout, Zap, Monitor
} from 'lucide-react';


export const Design = () => {
  return (
    <section className="py-12 space-y-12 duration-700 animate-in fade-in slide-in-from-bottom-4">
      <div className="px-4 text-center">
        <h2 className="mb-4 text-3xl font-black dark:light dark:text">
          Design <span className="text-emerald-500">Language</span>
        </h2>
        <p className="text-gray-500 dark:text-gray-400">Minimalism ebong functionality amader design-er mool montro.</p>
      </div>

      <div className="grid grid-cols-1 gap-4 px-4 md:grid-cols-4">
        {[
          { icon: <Layout />, label: "Grid System", color: "bg-blue-500" },
          { icon: <PenTool />, label: "Custom Icons", color: "bg-purple-500" },
          { icon: <Monitor />, label: "Responsive", color: "bg-emerald-500" },
          { icon: <Zap />, label: "Fast UI", color: "bg-yellow-500" }
        ].map((item, i) => (
          <div key={i} className="p-6 text-center transition-all bg-white border border-gray-100 shadow-sm dark:bg-gray-800 rounded-3xl dark:border-gray-700 group hover:border-blue-500">
            <div className={`inline-flex p-4 ${item.color} text-white rounded-2xl mb-4 group-hover:scale-110 transition-transform`}>
              {item.icon}
            </div>
            <p className="font-bold dark:text-white">{item.label}</p>
          </div>
        ))}
      </div>

      <div className="mx-4 p-8 bg-gray-50 dark:bg-gray-900 rounded-[40px] border-2 border-dashed border-gray-200 dark:border-gray-800 flex flex-col items-center">
        <h4 className="mb-4 text-xl font-bold dark:text-white">Design Assets Preview</h4>
        <div className="flex flex-wrap justify-center gap-4">
          <div className="flex items-center justify-center w-24 h-24 text-xs font-bold text-white bg-blue-600 shadow-lg rounded-2xl">Primary</div>
          <div className="w-24 h-24 bg-[#001F46] rounded-2xl shadow-lg flex items-center justify-center text-white text-xs font-bold">Deep Navy</div>
          <div className="flex items-center justify-center w-24 h-24 text-xs font-bold text-gray-900 bg-yellow-400 shadow-lg rounded-2xl">Highlight</div>
          <div className="flex items-center justify-center w-24 h-24 text-xs font-bold text-white shadow-lg bg-emerald-500 rounded-2xl">Success</div>
        </div>
      </div>
    </section>
  );
};

export default Design;
