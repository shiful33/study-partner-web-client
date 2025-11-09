import React from "react";
import { FaGraduationCap, FaUser, FaBookOpen } from "react-icons/fa";

const FeatureCards = () => {
  const features = [
    {
      title: "Group Study",
      description: "Group study shares knowledge, deepens understanding, and aids collaborative problem-solving to reach goals.",
      icon: FaGraduationCap,
    },
    {
      title: "Online Study",
      description: "Online study offers location-independent learning, saves time, and supports self-paced knowledge acquisition.",
      icon: FaUser,
    },
    {
      title: "Book Choice",
      description: "Choosing the right books unlocks learning paths, boosts interest, and aids in quick, effective knowledge gain.",
      icon: FaBookOpen,
    },
  ];

  return (
    <div className="relative z-20 max-w-6xl px-4 mx-auto mb-10 -mt-18">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-black/50 text-white border-outline p-6 rounded-tr-4xl rounded-bl-4xl
               rounded-tl-none rounded-br-none shadow-2xl flex flex-col items-start space-y-3 transform transition duration-300 hover:scale-[1.03] cursor-pointer"
          >
            <div className="flex items-center justify-center gap-4">
              <feature.icon className="text-3xl text-yellow-400" />
              <h3 className="text-xl font-bold text-center">{feature.title}</h3>
            </div>

            <p className="pt-2 text-sm text-left opacity-80">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCards;
