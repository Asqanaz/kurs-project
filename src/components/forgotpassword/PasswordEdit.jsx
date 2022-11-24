import React, { useEffect, useState } from "react";
import { Link, Navigate, redirect } from "react-router-dom";

export const PasswordEdit = ({ userDatas, setUserDatas }) => {
  const [currentUser, setCurrentUser] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newUser, setNewUser] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [isValid, setIsValid] = useState();

  console.log(userDatas);

  console.log(isValid)

  const handleChangeDatas = () => {
    if (
      currentUser === userDatas.username &&
      currentPassword === userDatas.password
    ) {
      setUserDatas({
        username: newUser,
        password: newPassword,
      });
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };
  return (
    <form>
      <div>
        <span>Current UserName</span>
        <input type="text" onChange={(e) => setCurrentUser(e.target.value)} />
      </div>
      <div>
        <span>Current Password</span>
        <input
          type="text"
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
      </div>
      <div>
        <span>New UserName</span>
        <input type="text" onChange={(e) => setNewUser(e.target.value)} />
      </div>
      <div>
        <span>New Password</span>
        <input type="text" onChange={(e) => setNewPassword(e.target.value)} />
      </div>

      {isValid ? <Navigate to="/login" replace /> : <h2>Not valid</h2>}

      <button type="submit" onClick={handleChangeDatas}>
        Edit datas
      </button>
    </form>
  );
};
