import React, {useState, useEffect} from "react"
import {Link} from "react-router-dom"
import {useForm} from "react-hook-form"
import TextField from "@mui/material/TextField"
import {MdPassword} from "react-icons/md"
import {AiOutlineUser} from "react-icons/ai"
import Box from "@mui/material/Box"
import FormHelperText from "@mui/material/FormHelperText"

export const Login = ({userDatas}) => {
	const {
		register,
		formState: {errors},
		handleSubmit
	} = useForm({mode: "onSubmit", reValidateMode: "onSubmit"})

	const handleOnSubmit = data => {
		console.log(data)
	}

	console.log(errors)
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
			<FormHelperText sx={{color: "red", marginTop: 1 + "rem"}}>
				{errors?.login?.message || errors?.password?.message}
			</FormHelperText>
			<Link to="/forgot-password" className="mt-6">
				Forgot password?
			</Link>
			<button className="w-full h-10 rounded-2xl border hover:border-violet-600 bg-white-600 text-grey-500 mt-5">
				Submit
			</button>
		</form>
	)
}
