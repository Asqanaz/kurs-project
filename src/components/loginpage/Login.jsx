import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import "./login.css"


export const Login = () => {
    
    const [inputValue, setInputValue] = useState("")

  return (
    <form className='form-container'>
        <div>
            <span>User Name</span>
            <input type="text" onChange = {(e) => setInputValue(e.target.value)}/>
        </div>
        <br />
        <div>
            <span>Password</span>
            <input type="text" onChange = {(e) => setInputValue(e.target.value)}/>
        </div>

        <Link to = "/forgot-password">Forgot password?</Link>
    </form>
  )
}
