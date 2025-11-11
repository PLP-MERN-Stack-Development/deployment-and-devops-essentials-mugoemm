import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import ErrorBoundary from "./ErrorBoundary";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  return (
    <ErrorBoundary>
      <BrowserRouter>
        <div>
          {/* Navigation */}
          <nav className="bg-gray-800 text-white p-4 flex justify-center gap-8">
            <Link className="hover:underline" to="/">Home</Link>
            <Link className="hover:underline" to="/dashboard">Dashboard</Link>
            <Link className="hover:underline" to="/login">Login</Link>
            <Link className="hover:underline" to="/signup">Sign Up</Link>
          </nav>

          {/* Routes */}
          <div className="mt-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </ErrorBoundary>
  );
}

export default App;
