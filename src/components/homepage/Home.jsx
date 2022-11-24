import React, { useEffect, useState } from "react";
import { redirect, Navigate } from "react-router-dom";
import "./home.css";

export const Home = () => {
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setRedirectToLogin(true);
    }, 15000);
  }, []);

  return (
    <div className="container">
      {redirectToLogin && <Navigate to="/login" replace />}
    </div>
  );
};
