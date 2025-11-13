import React from "react";
import { Link, useRouteError } from "react-router-dom";
import { AlertCircle, Home, RefreshCw } from "lucide-react";

const ErrorPage = () => {
  const error = useRouteError();
  const status = error?.status || 500;
  const message =
    error?.statusText || error?.message || "Something went wrong!";

  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="w-full max-w-md p-8 text-center transition-all transform bg-white shadow-xl dark:bg-gray-800 rounded-2xl hover:scale-105">
        {/* Icon */}
        <div className="w-20 h-20 mx-auto mb-6">
          <AlertCircle className="w-full h-full text-red-500 animate-pulse" />
        </div>

        {/* Status Code */}
        <h1 className="mb-2 text-6xl font-bold text-gray-800 dark:text-white">
          {status}
        </h1>

        {/* Message */}
        <p className="mb-6 text-xl font-medium text-gray-600 dark:text-gray-300">
          {status === 404 ? "Page Not Found" : "Oops! Something went wrong"}
        </p>

        <p className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          {message}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="flex items-center justify-center gap-2 px-5 py-3 bg-[#001F46] text-white rounded-lg hover:bg-[#003366] transition-colors font-medium"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <button
            onClick={() => window.location.reload()}
            className="flex items-center justify-center gap-2 px-5 py-3 font-medium text-gray-800 transition-colors bg-gray-200 rounded-lg dark:bg-gray-700 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            <RefreshCw size={18} />
            Reload
          </button>
        </div>

        {/* Footer */}
        <p className="mt-8 text-xs text-gray-400">
          Study Partner © 2025 | Need help?{" "}
          <a
            href="mailto:support@study.com"
            className="text-blue-500 hover:underline"
          >
            Contact Support
          </a>
        </p>
      </div>
    </div>
  );
};

export default ErrorPage;
