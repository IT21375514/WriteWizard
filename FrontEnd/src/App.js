// import React from "react";
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import PadPage from "./pages/PadPage";
// import Login from "./pages/Login"
// import Register from "./pages/Register"
// import { UserProvider } from "./context/UserContext";

// function App() {
//   return (
//     <UserProvider>
//     <Router>
//       <Routes>
//         <Route path="/register" element={<Register />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/" element={<Home />} />
//         <Route path="/pad/:padId" element={<PadPage />} />
//       </Routes>
//     </Router>
//     </UserProvider>
//   );
// }

// export default App;


// App.jsx
import React from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import DashboardLayout from "./pages/DashboardLayout"; // Adjust path as needed
import Home from "./pages/Home";
import PadPage from "./pages/PadPage";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Mindmap from "./pages/Mindmap";
import Citations from "./pages/Citations";
import Ieee from "./pages/Ieee";
import Profile from "./pages/Profile";
import ProtectedRoute from "./pages/ProtectedRoute";
import LoadingScreen from "./pages/LoadingScreen";

import { UserProvider } from "./context/UserContext";

function App() {
  // Get the token from localStorage immediately
  const token = localStorage.getItem("token");

  return (
    <UserProvider>
      <Router>
        <LoadingScreen />
        <Routes>
          {/* Public Routes */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/pad/:padId" element={<PadPage />} />
          
          {/* Protected routes using the DashboardLayout */}
          {token ? (
            <Route element={<ProtectedRoute><DashboardLayout /></ProtectedRoute>}>
              <Route path="/" element={<Home />} />
              <Route path="/mindmap" element={<Mindmap />} />
              <Route path="/citations" element={<Citations />} />
              <Route path="/ieee" element={<Ieee />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          ) : (
            // If no token, redirect everything to /login immediately.
            <Route path="*" element={<Navigate to="/login" replace />} />
          )}
        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;
