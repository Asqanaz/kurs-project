import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

export const Login = ({ userDatas }) => {
  const {
    register,
    formState: { isValid, errors },
    handleSubmit,
  } = useForm({ mode: "onSubmit", reValidateMode: "onSubmit" });

  const handleOnSubmit = (data) => {
    console.log(data);
  };

  console.log(isValid);
  return (
    <form className="flex justify-center items-center flex-col container h-[50vh]" onSubmit={handleSubmit(handleOnSubmit)}>
      <div>
        <h2 className="font-bold text-4xl text-center">Login</h2>
        <span>User Name</span>
        <input
          type="text"
          {...register("login", {
            required: "Required field",
            validate: (value) => {
              if (userDatas.username !== value) {
                return "User datas doesn't match";
              }

              return true;
            },
          })}
          className = "rounded-xl border-gray-600 border"          
        />
      </div>
      <br />
      <div>
        <span>Password</span>
        <input
          type="text"
          {...register("password", {
            required: "Required field",
            validate: (value) => {
              if (userDatas.password !== value) {
                return "User datas doesn't match";
              }
              return true;
            },
          })}
          className = "rounded-xl border-gray-600 border"          
        />
      </div>

      <Link to="/forgot-password">Forgot password?</Link>
      {isValid ? (
        <Link to="/home">
          <button type="submit" className="w-2xl">{isValid ? "Home" : "Enter"}</button>
        </Link>
      ) : (
        <button type="submit" className="w-36 border rounded-xl bg-gray-200">{isValid ? "Home" : "Enter"}</button>
      )}
    </form>
  );
};
