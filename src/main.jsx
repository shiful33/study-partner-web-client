import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './Components/Layouts/RootLayout.jsx';
import Home from './Components/Home.jsx';
import FindPartners from './Components/FindPartners.jsx';
import AuthProvider from './Context/AuthProvider.jsx';
import Register from './Components/Register.jsx';
import Login from './Components/Login.jsx';
import CreatePartnerProfile from './Components/CreatePartnerProfile.jsx';
import MyConnection from './Components/MyConnection.jsx';

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
        path: "findPartner",
        Components: FindPartners
      },
      {
        path: "createPartnerProfile",
        element: <CreatePartnerProfile></CreatePartnerProfile>
      },
      {
        path: "findPartner",
        element: <FindPartners></FindPartners>
      },
      {
        path: "myConnection",
        element: <MyConnection></MyConnection>
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
  </StrictMode>,
)
