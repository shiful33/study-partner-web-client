# Study Partner – Find Your Perfect Study Buddy

**Live Site:** [https://study-partner-web-client-shiful33.netlify.app](https://study-partner-web-client-shiful33.netlify.app)  
**Backend API:** [https://study-partner-web-server.vercel.app](https://study-partner-web-server.vercel.app)  
**Client GitHub:** [github.com/shiful33/study-partner-web-client](https://github.com/shiful33/study-partner-web-client)  
**Server GitHub:** [github.com/shiful33/study-partner-web-server](https://github.com/shiful33/study-partner-web-server)

---

## Project Overview

**Study Partner** is a modern, responsive web application that connects students to find ideal study partners based on subject, study mode, location, and availability. Users can create profiles, browse partners, update details, and manage connections — all in a clean, intuitive interface.

---

## Tech Stack

| Layer        | Technology                          |
|-------------|-------------------------------------|
| **Frontend** | React.js, Vite, Tailwind CSS, DaisyUI |
| **Backend**  | Node.js, Express.js, MongoDB        |
| **Deploy**   | Netlify (Client), Vercel (Server)   |
| **Others**   | React Router, Toastify, SweetAlert2 |

---

## Key Features

- **Create Partner Profile** – Add name, subject, study mode, location, availability, rating, etc.

- **Browse Partners** – View all available study partners with filters.

- **My Connections** – View, update, and delete your created partners.

- **Responsive Design** – Mobile-first, dark mode supported.

- **Loading States** – Smooth UX with spinners and toast notifications.

- **Error Handling** – Professional 404/500 error page with reload & home navigation.

---

## Project Structure


---

## API Endpoints (Backend)

| Method | Endpoint                     | Description                     |
|--------|-----------------------------|---------------------------------|
| POST   | `/create-partner`           | Create new partner profile      |
| GET    | `/myConnection`             | Fetch all connections           |
| DELETE | `/delete-partner/:id`       | Remove a partner                |
| GET    | `/update-partner/:id`       | Load partner for update         |
| PUT    | `/update-partner/:id`       | Update partner details          |

---

## Deployment

- **Frontend**: Deployed on **Netlify** with continuous deployment from GitHub.
- **Backend**: Deployed on **Vercel** with MongoDB Atlas integration.
- **Environment Variables**: Securely managed via platform dashboards.

---

## Project Structure
study-partner-web-client/
├── src/
│   ├── Components/Pages/
│   │   ├── CreatePartnerProfile.jsx
│   │   ├── MyConnection.jsx
│   │   └── ErrorPage.jsx
│   ├── context/AuthContext.jsx
│   └── main.jsx
└── vite.config.js
study-partner-web-server/
├── index.js
├── routes/
└── .env

## How to Run Locally

### Client
```bash
git clone https://github.com/shiful33/study-partner-web-client.git
cd study-partner-web-client
npm install
npm run dev