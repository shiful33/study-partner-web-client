
import {
  Rocket,
  Instagram,
  Youtube,
} from "lucide-react";

export const Advertisement = () => (
  <section className="px-4 py-12 duration-700 animate-in fade-in slide-in-from-bottom-4">
    <div className="bg-gradient-to-r from-blue-700 to-[#001F46] p-10 md:p-16 rounded-[50px] text-white relative overflow-hidden shadow-2xl">
      <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
      <div className="relative z-10 grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
        <div className="space-y-8">
          <div className="inline-flex px-4 py-1 bg-yellow-400 text-[#001F46] rounded-full text-xs font-black uppercase tracking-widest">
            Ad Campaign Active
          </div>
          <h2 className="text-5xl font-black leading-tight">Finding Partners is <span className="text-yellow-400">Easier</span> Now.</h2>
          <p className="text-lg text-blue-100 opacity-80">
            "Study Partner" app download korun ebong join korun hazaro student-der community-te. Eka porashona korar din shesh!
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-white text-[#001F46] font-black rounded-2xl hover:bg-yellow-400 transition-all flex items-center gap-2">
              <Rocket size={20} /> Join Free Today
            </button>
            <button className="px-8 py-4 font-black text-white transition-all bg-transparent border-2 border-white/30 rounded-2xl hover:bg-white/10">
              Learn More
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="flex items-center gap-6 p-6 border bg-white/10 backdrop-blur-md rounded-3xl border-white/20">
            <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl"><Instagram size={32} /></div>
            <div>
              <p className="font-bold">Instagram Ads</p>
              <p className="text-sm opacity-70">Targeting Gen-Z students worldwide.</p>
            </div>
          </div>
          <div className="flex items-center gap-6 p-6 border bg-white/10 backdrop-blur-md rounded-3xl border-white/20">
            <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-2xl"><Youtube size={32} /></div>
            <div>
              <p className="font-bold">YouTube Pre-rolls</p>
              <p className="text-sm opacity-70">Focusing on study & educational channels.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Advertisement;