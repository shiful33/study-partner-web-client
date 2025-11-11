import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./Components/Layouts/RootLayout.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import Register from "./Components/Register.jsx";
import Login from "./Components/Login.jsx";
import MyConnection from "./Components/Pages/MyConnection.jsx";
import { ToastContainer } from "react-toastify";
import Home from "./Components/Pages/Home.jsx";
import PartnerDetails, {
  ErrorBoundary,
} from "./Components/AllStudyPartners/PartnerDetails.jsx";
import Profile from "./Components/Pages/Profile.jsx";
import CreatePartnerProfile from "./Components/Pages/CreatePartnerProfile.jsx";
import FindPartners from "./Components/FindPartnerAll/FindPartners.jsx";
import FindPartnersData from "./Components/FindPartnerAll/FindPartnersData.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "findPartners",
        element: <FindPartners />,
      },
      {
        path: "createPartnerProfile",
        element: <CreatePartnerProfile />,
      },
      {
        path: "myConnection",
        element: <MyConnection />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "partnerDetails/:id",
        element: <PartnerDetails />,
        loader: async ({ params, request }) => {
          const url = new URL(request.url);
          const from = url.searchParams.get("from");

          let apiUrl = "";
          if (from === "findPartners") {
            apiUrl = `http://localhost:3000/find-partners/${params.id}`;
          } else {
            apiUrl = `http://localhost:3000/studies/${params.id}`;
          }

          const res = await fetch(apiUrl);
          if (!res.ok) throw new Response("Not found", { status: 404 });
          return await res.json();
        },
        errorElement: <ErrorBoundary />
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer />
  </StrictMode>
);
