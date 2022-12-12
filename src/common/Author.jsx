import React, { useState, useEffect, useRef } from "react";

export const Author = () => {
  const [color, setColor] = useState("rgb()");

  const spanRef = useRef()
  const string =
    "Միքայել Շահինյան Հակոբի, Երևանի Ինֆորմատիկայի պետական քոլեջ, 15.10.2022 - 11․12.2022, Course Work";

    setInterval(() => {
      let r = Math.round(Math.random() * 255) 
      let g = Math.round(Math.random() * 255) 
      let b = Math.round(Math.random() * 255) 
      spanRef.current.style.color = `rgb(${r}, ${g}, ${b})`
    }, 1000)
  return (
    <>
      <div
        readOnly
        className="p-5 focus:border-0 focus:outline-0 w-1/2 h-full text-white bg-blue-200"
        
      >
        <p>
          Միքայել Շահինյան Հակոբի,{" "}
          <span className="colored" ref = {spanRef}>
            Երևանի Ինֆորմատիկայի պետական քոլեջ, 15.10.2022 - 11․12.2022
          </span>
          , Course Work
        </p>
      </div>
      <img src="/course-work-logo.png" alt="" />
    </>
  );
};
