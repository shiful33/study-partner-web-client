import { useRouteError, Link } from "react-router-dom";

const UpdatePartnerError = () => {
  const error = useRouteError();

  return (
    <div className="flex items-center justify-center min-h-screen px-4 bg-gray-50">
      <div className="w-full max-w-md p-8 text-center bg-white shadow-lg rounded-xl">
        <h1 className="mb-4 text-6xl font-bold text-red-600">404</h1>
        <h2 className="text-2xl font-semibold text-[#001F46] mb-2">
          Partner Not Found
        </h2>
        <p className="mb-6 text-gray-600">
          {error?.data || "The partner you're looking for doesn't exist or has been removed."}
        </p>
        <Link
          to="/myConnection"
          className="btn bg-yellow-400 hover:bg-yellow-500 text-[#001F46] font-bold"
        >
          Back to My Connections
        </Link>
      </div>
    </div>
  );
};

export default UpdatePartnerError;