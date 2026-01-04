
import {
  Palette,
  Layers,
  Sparkles,
  CheckCircle2,
} from "lucide-react";


export const Branding = () => (
  <section className="py-12 space-y-12 duration-700 animate-in fade-in slide-in-from-bottom-4">
    <div className="max-w-3xl px-4 mx-auto text-center">
      <div className="inline-flex p-3 mb-4 text-blue-600 bg-blue-100 dark:text rounded-2xl">
        <Palette size={32} />
      </div>
      <h2 className="mb-4 text-3xl font-black dark:light dark:text">
        Our <span className="text-yellow-400">Visual</span> Identity
      </h2>
      <p className="text-lg text-gray-500 dark:text-gray-400">
        Study Partner-er branding ekti trustworthy ebong friendly vibe toiri
        kore jate student-ra shohoje connect hote pare.
      </p>
    </div>

    <div className="grid grid-cols-1 gap-8 px-4 md:grid-cols-2">
      <div className="p-8 bg-gray-50 dark:bg-gray-900 rounded-[32px] border border-gray-100 dark:border-gray-800">
        <h3 className="flex items-center gap-2 mb-6 text-2xl font-bold dark:text-white">
          <Layers className="text-blue-500" /> Core Values
        </h3>
        <ul className="space-y-4">
          {[
            {
              t: "Trust",
              d: "Student-der moddhe nirapoddha ebong bishwash toiri kora.",
            },
            {
              t: "Equality",
              d: "Sokol student-er jonno soman sujog nishchit kora.",
            },
            {
              t: "Innovation",
              d: "Collaborative learning-e AI ebong tech use kora.",
            },
          ].map((val, i) => (
            <li key={i} className="flex gap-4">
              <CheckCircle2 className="text-emerald-500 shrink-0" size={20} />
              <div>
                <p className="font-bold dark:text-white">{val.t}</p>
                <p className="text-sm text-gray-500">{val.d}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-8 bg-[#001F46] rounded-[32px] text-white">
        <h3 className="flex items-center gap-2 mb-6 text-2xl font-bold">
          <Sparkles className="text-yellow-400" /> Voice & Tone
        </h3>
        <div className="space-y-6 opacity-90">
          <div className="p-4 border bg-white/5 rounded-2xl border-white/10">
            <p className="mb-2 text-xs tracking-widest text-blue-300 uppercase">
              Primary Tone
            </p>
            <p className="text-lg italic font-medium">
              "Empowering, Friendly, and Scholarly."
            </p>
          </div>
          <p className="text-sm leading-relaxed">
            Amra student-der sathe emon vabe kotha boli jeno amra tader borno
            boro bhai ba mentor. Amader tone kkhonoi boro ba boring noy.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default Branding;
