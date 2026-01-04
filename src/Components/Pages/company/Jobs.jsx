
import {
  Briefcase,
  MapPin,
  Sparkles,
} from "lucide-react";

export const Jobs = () => {
  const jobs = [
    { title: "Academic Community Lead", dept: "Marketing", type: "Full-time", location: "Dhaka", perks: "Flexible Hours" },
    { title: "React/Native Developer", dept: "Engineering", type: "Remote", location: "Global", perks: "Learning Budget" },
    { title: "Student Counselor", dept: "Education", type: "Part-time", location: "Hybrid", perks: "Career Coaching" }
  ];

  return (
    <section className="min-h-screen px-4 mt-40 space-y-10 duration-700 animate-in fade-in slide-in-from-bottom-4">
      <div className="space-y-3 text-center ">
        <h2 className="text-3xl font-black dark:light dark:text">Join the <span className="text-yellow-400">Core</span> Team</h2>
        <p className="max-w-2xl mx-auto text-gray-500 text-md dark:text-gray-400">Amra emon manush khujchhi jara education ebong technology niye passion rakhen.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        {jobs.map((job, i) => (
          <div key={i} className="group bg-white dark:bg-gray-800 p-8 rounded-[20px] border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-2xl hover:border-yellow-200 transition-all flex flex-col">
            <div className="flex-1 space-y-6">
              <div className="flex items-start justify-between">
                <div className="p-3 text-blue-600 bg-blue-50 dark:bg-blue-900/30 rounded-2xl"><Briefcase size={24} /></div>
                <div className="text-right">
                  <span className="block px-3 py-1 text-xs font-bold text-blue-500 rounded-full bg-blue-50 dark:bg-blue-900/30">{job.type}</span>
                </div>
              </div>
              <div>
                <h4 className="text-2xl font-black leading-tight transition-colors dark:text-white group-hover:text-blue-600">{job.title}</h4>
                <div className="flex items-center gap-2 mt-2 text-sm text-gray-400">
                  <MapPin size={14} /> {job.location} | {job.dept}
                </div>
              </div>
              <div className="pt-4 border-t border-gray-50 dark:border-gray-700">
                 <p className="flex items-center gap-2 text-sm font-bold text-gray-500 uppercase">
                   <Sparkles size={14} className="text-yellow-500" /> Perks: {job.perks}
                 </p>
              </div>
            </div>
            <button className="mt-8 w-full py-4 bg-[#001F46] text-white font-bold rounded-2xl hover:bg-blue-700 transition-all transform group-hover:-translate-y-1 shadow-md">Apply Now</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Jobs;
