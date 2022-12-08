import React, {useState, useEffect} from "react"
import {Link, Navigate, useNavigate} from "react-router-dom"
import {useForm} from "react-hook-form"
import TextField from "@mui/material/TextField"
import {MdPassword} from "react-icons/md"
import {AiOutlineUser} from "react-icons/ai"
import Box from "@mui/material/Box"
import FormHelperText from "@mui/material/FormHelperText"

export const Login = ({userDatas}) => {
	const navigate = useNavigate()

	const {
		register,
		formState: {errors, isValid},
		handleSubmit
	} = useForm({mode: "onSubmit", reValidateMode: "onSubmit"})

	const handleOnSubmit = data => {
		isValid && navigate("/home")
	}

	return (
		<form
			className="flex justify-center items-center flex-col container h-[50vh] w-80 form-container"
			onSubmit={handleSubmit(handleOnSubmit)}
		>
			<h2 className="font-bold text-4xl text-center">Login</h2>
			<Box
				sx={{
					display: "flex",
					alignItems: "flex-end",
					marginTop: "1rem",
					justifyContent: "space-around",
					width: 100 + "%"
				}}
			>
				<AiOutlineUser size={24} />
				<TextField
					type="text"
					label="User Name"
					variant="standard"
					{...register("login", {
						required: "Required field",
						validate: value => {
							if (userDatas.username !== value) {
								return "User datas doesn't match"
							}

							return true
						}
					})}
				/>
			</Box>
			<Box
				sx={{
					display: "flex",
					alignItems: "flex-end",
					marginTop: 1 + "rem",
					justifyContent: "space-around",
					width: 100 + "%"
				}}
			>
				<MdPassword size={24} />
				<TextField
					type="password"
					label="Password"
					variant="standard"
					{...register("password", {
						required: "Required field",
						validate: value => {
							if (userDatas.password !== value) {
								return "User datas doesn't match"
							}
							return true
						}
					})}
				/>
			</Box>
			<FormHelperText error sx={{marginTop: 1 + "rem"}}>
				{errors?.login?.message || errors?.password?.message}
			</FormHelperText>
			<Link to="/forgot-password" className="mt-6">
				Forgot password?
			</Link>
			<button className="w-full h-10 mt-5">Submit</button>
		</form>
	)
}
