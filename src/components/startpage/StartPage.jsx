import React, { useEffect, useState } from "react";
import { redirect, Navigate } from "react-router-dom";

export const StartPage = () => {
  const [redirectToLogin, setRedirectToLogin] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setRedirectToLogin(true);
    }, 5000);
  }, []);

  return (
    <div className="container">
      {redirectToLogin && <Navigate to="/login" replace />}
    </div>
  );
};
