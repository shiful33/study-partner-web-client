import React from "react";

const TrustBadges = () => {

    const logos = [
    {
      name: "BUET",
      svg: `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="20" width="80" height="60" rx="10" fill="#001F46"/>
          <text x="50" y="55" font-family="Arial" font-size="24" fill="white" text-anchor="middle" font-weight="bold">BUET</text>
        </svg>
      `
    },
    {
      name: "DU",
      svg: `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <circle cx="50" cy="50" r="40" fill="#C8102E"/>
          <text x="50" y="58" font-family="Arial" font-size="20" fill="white" text-anchor="middle" font-weight="bold">DU</text>
        </svg>
      `
    },
    {
      name: "DMC",
      svg: `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="25" width="70" height="50" rx="8" fill="#006400"/>
          <text x="50" y="55" font-family="Arial" font-size="18" fill="white" text-anchor="middle" font-weight="bold">DMC</text>
        </svg>
      `
    },
    {
      name: "UIU",
      svg: `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="30" width="80" height="40" rx="5" fill="#00247D"/>
          <text x="50" y="55" font-family="Arial" font-size="14" fill="white" text-anchor="middle">UIU</text>
          <text x="50" y="70" font-family="Arial" font-size="14" fill="white" text-anchor="middle"></text>
        </svg>
      `
    },
    {
      name: "IELTS",
      svg: `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <rect x="15" y="35" width="70" height="30" rx="5" fill="#0072CE"/>
          <text x="50" y="55" font-family="Arial" font-size="16" fill="white" text-anchor="middle" font-weight="bold">IELTS</text>
        </svg>
      `
    },
    {
      name: "NSU",
      svg: `
        <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 50 L50 10 L90 50 L50 90 Z" fill="#003087"/>
          <text x="50" y="58" font-family="Arial" font-size="18" fill="white" text-anchor="middle" font-weight="bold">NSU</text>
        </svg>
      `
    }
    
  ];
  
  return (
    <div>
      <section className="py-12 border-gray-200 dark:bg">
      <div className="max-w-6xl px-4 mx-auto text-center">
        <p className="mb-6 text-sm font-medium text-gray-400 dark:text-gray-400">
          <span className="mr-1 text-lg font-bold text-green-500">✓</span>
          Trusted by 10,000+ students from
        </p>

        <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="w-40 h-40 transition-all duration-300 opacity-50 cursor-pointer md:h-25 md:w-25 hover:opacity-90 hover:grayscale-0"
              dangerouslySetInnerHTML={{ __html: logo.svg }}
            />
          ))}
        </div>
      </div>
    </section>
    </div>
  );
};

export default TrustBadges;
