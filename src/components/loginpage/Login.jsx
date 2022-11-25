import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./login.css"
import { useForm } from "react-hook-form"

export const Login = ({ userDatas }) => {
	const { register, formState: {isValid}, handleSubmit } = useForm({mode: "onSubmit"})

	const handleOnSubmit = (data) => {
		console.log(data)
	}

  console.log(isValid)
	return (
		<form
			className="form-container"
			onSubmit={handleSubmit(handleOnSubmit)}
		>
			<div>
				<span>User Name</span>
				<input
					type="text"
					{...register("login", {
						required: "Required field",
						validate: (value) => {
							if (userDatas.username !== value) {
								return "User datas doesn't match"
							}

							return true
						}
					})}
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
								return "User datas doesn't match"
							}
							return true
						}
					})}
				/>
			</div>

			<Link to="/forgot-password">Forgot password?</Link>

			{/* <Link to="/home"> */}
				<button type="submit">Enter</button>
			{/* </Link> */}
		</form>
	)
}
