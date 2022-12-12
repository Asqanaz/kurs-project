import React, { useState } from "react";
import { useEffect } from "react";

export const Exercise = () => {
  let [row, setRow] = useState();
  const [initArr, setInitArr] = useState();
  const [resArr, setResArr] = useState();
  const [message, setMessage] = useState();

  const runTask = () => {
    if (row % 2 !== 0) {
      setMessage("Rows cant be odd");
    } else {
      setMessage("");
      let arr = [];
      for (let i = 0; i < row; i++) {
        arr[i] = [];
        for (let j = 0; j < row; j++) {
          arr[i][j] = Math.round(Math.random() * 1000);
        }
      }
      f(arr);
      setInitArr(arr);
      setResArr(f(arr));
    }
  };

  function f(arr) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
      newArr[i] = [...arr[i]];
      for (let j = 0; j < arr[i].length; j++) {
        newArr[i][j] = arr[i][j];
      }
    }

    for (let j = 0; j < row / 2; j++) {
      for (let i = 0; i < row; i++) {
        let temp = newArr[i][j];
        newArr[i][j] = newArr[i][row / 2 + j];
        newArr[i][row / 2 + j] = temp;
      }
    }

    return newArr;
  }
  return (
    <div className="flex flex-row justify-between w-full">
      <div className="flex flex-col gap-10">
        <input
          type="number"
          placeholder={"Row"}
          value={row}
          onChange={(e) => setRow(e.target.value)}
        />
        <button className="text-white" onClick={runTask}>
          Submit
        </button>
        <span style={{ color: "red" }}>{message}</span>
      </div>
      <table border="1">
        <tbody>
          {initArr?.map((row) => (
            <tr>
              {row.map((col) => (
                <td>{col}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <table border="1">
        <tbody>
          {resArr?.map((row) => (
            <tr>
              {row.map((col) => (
                <td>{col}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
