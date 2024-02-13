import './App.css';
import React, { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import CategoryPage from "./pages/CategoryPage";
import SafetyTipPage from "./pages/SafetyTipPage";
import AllyCorner from "./pages/AllyCorner";
import ProfilePage from "./pages/ProfilePage";
import RegLog from "./pages/RegLog";
import SeeAllSafetyTips from "./pages/SeeAllSafetyTips"; 

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<RegLog />} />
        <Route path="/home" element={<PrivateRoute component={HomePage} />} />
        <Route path="/about" element={<PrivateRoute component={AboutPage} />} />
        <Route path="/category" element={<PrivateRoute component={CategoryPage} />} />
        <Route path="/safety-tips" element={<PrivateRoute component={SafetyTipPage} />} />
        <Route path="/see-all-safety-tips" element={<PrivateRoute component={SeeAllSafetyTips} />} /> 
        <Route path="/allycorner" element={<PrivateRoute component={AllyCorner} />} />
        <Route path="/profile" element={<PrivateRoute component={ProfilePage} />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      <Footer />
    </Router>
  );
}

function PrivateRoute({ component: Component }) {
  const [isAuthChecked, setIsAuthChecked] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthentication().then(isAuth => {
      setIsAuthenticated(isAuth);
      setIsAuthChecked(true);
    });
  }, []);

  if (!isAuthChecked) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return (
      <React.Fragment>
        <NavBar />
        <Component />
      </React.Fragment>
    );
  } else {
    return <Navigate to="/" replace />;
  }
}

PrivateRoute.propTypes = {
  component: PropTypes.elementType.isRequired
};

async function checkAuthentication() {
  try {
    const response = await fetch('http://localhost:8000/auth/user', {
      credentials: 'include',
    });
    if (response.ok) {
      return true;
    }
    return false;
  } catch (error) {
    console.error('Error checking authentication:', error);
    return false;
  }
}

export default App;

