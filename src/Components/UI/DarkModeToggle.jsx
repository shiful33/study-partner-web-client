import { useEffect, useState } from "react";
import { GoSun } from "react-icons/go";
import { IoMoonSharp } from "react-icons/io5";

export default function DarkModeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("darkMode") === "true";
    setDarkMode(saved == "true");
    document.documentElement.classList.toggle("dark", saved);
  }, []);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("darkMode", newMode);
    document.documentElement.classList.toggle("dark", newMode);
  };
 console.log(darkMode)
  return (
    <button
      onClick={toggleDarkMode}
      className="fixed z-[1000] p-2 text-yellow-500 transition-transform bg-gray-200 rounded-full shadow-lg top-6 right-34 hover:scale-110 dark:bg-gray-700 cursor-pointer"
    >
      {darkMode ? <GoSun size={20} /> : <IoMoonSharp size={20} />}
    </button>
  );
}