import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const StartPage = () => {
  const navigate = useNavigate()
  useEffect(() => {
    setTimeout(() => {
      navigate('/login')
    }, 2000);
  }, []);

  return (
    <div className="container">
      
    </div>
  );
};
