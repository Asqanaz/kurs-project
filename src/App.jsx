import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PasswordEdit } from "./components/forgotpassword/PasswordEdit";
import { Home } from "./components/homepage/Home";
import { Login } from "./components/loginpage/Login";

function App() {
  const [userDatas, setUserDatas] = useState({
    username: "asqanaz",
    password: "asqo1234",
  });

  useEffect(() => {
    localStorage.setItem("userDatas", JSON.stringify(userDatas));
  }, [userDatas]);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login userDatas = {userDatas}/>} />
          <Route path="/forgot-password" element={<PasswordEdit userDatas = {userDatas} setUserDatas = {setUserDatas}/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;