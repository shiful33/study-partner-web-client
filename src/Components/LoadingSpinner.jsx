import React from "react";

const LoadingSpinner = ({
  size = "md",
  type = "dots",
  color = "yellow",
  message = "Loading...",
  center = false,
  className = "",
}) => {
  const sizeMap = {
    sm: "w-3 h-3",
    md: "w-5 h-5",
    lg: "w-8 h-8",
    xl: "w-12 h-12",
  };

  const colorMap = {
    yellow: "bg-yellow-400 dark:bg-yellow-500",
    primary: "bg-[#001F46] dark:bg-white",
    blue: "bg-blue-500",
    green: "bg-green-500",
    red: "bg-red-500",
    custom: "",
  };

  const baseColor = colorMap[color] || color;

  // Spinner Types
  const renderSpinner = () => {
    switch (type) {
      case "dots":
        return (
          <div className="flex space-x-2">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className={`${sizeMap[size]} rounded-full ${baseColor} animate-bounce`}
                style={{ animationDelay: `${i * 0.15}s` }}
              />
            ))}
          </div>
        );

      case "spinner":
        return (
          <div
            className={`${sizeMap[size]} border-4 border-t-transparent border-${color}-400 dark:border-${color}-500 rounded-full animate-spin`}
            style={{ borderTopColor: "transparent" }}
          />
        );

      case "pulse":
        return (
          <div className="relative">
            <div
              className={`${sizeMap[size]} rounded-full ${baseColor} animate-ping`}
            />
            <div
              className={`${sizeMap[size]} rounded-full ${baseColor} absolute top-0 animate-ping`}
              style={{ animationDelay: "0.5s" }}
            />
          </div>
        );

      case "bar":
        return (
          <div className="w-32 h-2 overflow-hidden bg-gray-200 rounded-full dark:bg-gray-700">
            <div
              className={`h-full ${baseColor} rounded-full animate-pulse`}
              style={{ width: "60%", animation: "loading-bar 1.5s infinite" }}
            />
          </div>
        );

      default:
        return null;
    }
  };

  const spinner = (
    <div
      className={`flex flex-col items-center justify-center space-y-3 ${className}`}
    >
      {renderSpinner()}
      {message && (
        <p className="text-sm font-medium text-gray-600 dark:text-gray-300 animate-pulse">
          {message}
        </p>
      )}
    </div>
  );

  if (center) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white dark:bg-gray-900">
        {spinner}
      </div>
    );
  }

  return (
    <div
      className={`flex flex-col items-center justify-center ${
        center ? "min-h-screen" : "h-full"
      } p-8`}
    >
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-[#001F46] mb-4"></div>
      <p className="text-lg font-medium text-gray-700">{message}</p>
    </div>
  );
};

export default LoadingSpinner;
