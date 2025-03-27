import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Doctors from "./components/Doctors";
import Login from "./components/Login";
import DoctorLogin from "./components/DoctorLogin";
import DoctorRegister from "./components/DoctorRegister";
import DoctorProfile from "./components/DoctorProfile"; // Added profile page
import ConsultationForm from "./components/AppointmentForm";
import Register from "./components/Register";
import FooterComponent from "./components/Footer";
import DiseaseInfo from "./components/DiseaseInfo";
import Prediction from "./components/Prediction";
import "./App.css";

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/diseaseInfo" element={<DiseaseInfo />} />
        <Route path="/consultation" element={<ConsultationForm />} />
        <Route path="/prediction" element={<Prediction />} />

        {/* User Authentication */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        {/* Doctor Authentication */}
        <Route path="/doctor-login" element={<DoctorLogin />} />
        <Route path="/doctorregister" element={<DoctorRegister />} />
        <Route path="/doctorprofile" element={<DoctorProfile />} />

        {/* 404 Page Not Found */}
        <Route
          path="*"
          element={
            <h2 style={{ textAlign: "center" }}>404 - Page Not Found</h2>
          }
        />
      </Routes>
      <FooterComponent />
    </Router>
  );
}

export default App;
