import React, { useState } from "react";
import {
  Users,
  Globe,
  Award,
} from "lucide-react";


export const AboutUs = () => (
  <section className="min-h-screen py-12 space-y-12 duration-700 animate-in fade-in slide-in-from-bottom-4">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="mb-4 text-3xl font-extrabold dark:light dark:text">
        Empowering <span className="text-yellow-400">Learners</span> Together
      </h2>
      <p className="text-gray-600 text-md dark:text-gray-400">
        Study Partner is on a mission to make collaborative learning accessible
        to everyone, everywhere.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-3">
      {[
        {
          icon: <Users className="text-blue-500" />,
          title: "Community Driven",
          desc: "Built for students, by students, to foster real connections.",
        },
        {
          icon: <Globe className="text-emerald-500" />,
          title: "Global Reach",
          desc: "Connect with study partners from over 50+ countries.",
        },
        {
          icon: <Award className="text-yellow-500" />,
          title: "Trusted Platform",
          desc: "Secure and verified profiles for a safe learning environment.",
        },
      ].map((item, i) => (
        <div
          key={i}
          className="p-8 text-center transition-transform bg-white border border-gray-100 shadow-lg dark:bg-gray-800 rounded-3xl dark:border-gray-700 hover:scale-105"
        >
          <div className="inline-flex p-4 mb-4 shadow-inner bg-gray-50 dark:bg-gray-900 rounded-2xl">
            {item.icon}
          </div>
          <h3 className="mb-2 text-xl font-bold dark:text-white">
            {item.title}
          </h3>
          <p className="text-sm leading-relaxed text-gray-500 dark:text-gray-400">
            {item.desc}
          </p>
        </div>
      ))}
    </div>

    <div className="bg-gradient-to-br from-blue-700 to-[#001F46] rounded-[40px] p-8 md:p-16 text-white flex flex-col md:flex-row items-center gap-10 shadow-2xl mx-4">
      <div className="flex-1">
        <div className="inline-block px-4 py-1 mb-4 text-xs font-bold tracking-widest uppercase rounded-full bg-white/10">
          Our Vision
        </div>
        <h3 className="mb-6 text-4xl font-bold">
          Changing the way students study.
        </h3>
        <p className="text-lg italic leading-relaxed text-blue-100 opacity-90">
          "We believe that education is most effective when shared. Our platform
          bridges the gap between solitary study and collaborative success."
        </p>
      </div>
      <div className="grid w-full grid-cols-1 gap-4 text-center md:w-1/3">
        <div className="p-6 border bg-white/10 rounded-3xl backdrop-blur-xl border-white/10">
          <div className="text-4xl font-black">500K+</div>
          <div className="text-sm font-medium text-blue-200">Active Users</div>
        </div>
        <div className="p-6 border bg-white/10 rounded-3xl backdrop-blur-xl border-white/10">
          <div className="text-4xl font-black">1.2M</div>
          <div className="text-sm font-medium text-blue-200">Daily Matches</div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutUs;
