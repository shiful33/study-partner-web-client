import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './Components/Layouts/RootLayout.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Register from './Components/Register.jsx';
import Login from './Components/Login.jsx';
import CreatePartnerProfile from './Pages/CreatePartnerProfile.jsx';
import MyConnection from './Pages/MyConnection.jsx';
import FindPartners from './Pages/FindPartners.jsx';
import { ToastContainer } from 'react-toastify';
import Profile from './Pages/Profile.jsx';
import Home from './Pages/Home.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home
      },
      {
        path: "findPartners",
        element: <FindPartners />
      },
      {
        path: "createPartnerProfile",
        element: <CreatePartnerProfile></CreatePartnerProfile>
      },
      {
        path: "myConnection",
        element: <MyConnection></MyConnection>
      },
      {
        path: "profile",
        element: <Profile />
      },
      {
        path: "login",
        Component: Login
      },
      {
        path: "register",
        Component: Register
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />,
    </AuthProvider>
    <ToastContainer />
  </StrictMode>,
)
