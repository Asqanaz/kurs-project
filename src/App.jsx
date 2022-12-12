import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { PasswordEdit } from "./components/forgotpassword/PasswordEdit";
import { StartPage } from "./components/startpage/StartPage";
import { Login } from "./components/loginpage/Login";
import { Home } from "./components/home/Home";
import { Exercise } from "./common/Exercise";
import { Tips } from "./common/Tips";
import { Help } from "./common/Help";
import { Author } from "./common/Author";

function App() {
  const [userDatas, setUserDatas] = useState({
    username: "1",
    password: "2",
  });

  useEffect(() => {
    sessionStorage.setItem("userDatas", JSON.stringify(userDatas));
  }, [userDatas]);

  console.log(userDatas);

  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<StartPage />} />
          <Route path="/login" element={<Login userDatas={userDatas} />} />
          <Route
            path="/change-password"
            element={
              <PasswordEdit userDatas={userDatas} setUserDatas={setUserDatas} />
            }
          />
          <Route path="/home/" element={<Home />}>
            <Route path="exercise" element={<Exercise />} />
            <Route path="tip-of-the-day" element={<Tips />} />
            <Route path="help-window" element={<Help />} />
            <Route path="author" element={<Author />} />
          </Route>
          <Route path="*" element={<StartPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
