import React, {useEffect, useState} from "react"
import {useForm} from "react-hook-form"
import {Link} from "react-router-dom"
import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import FormHelperText from "@mui/material/FormHelperText"

export const PasswordEdit = ({userDatas, setUserDatas}) => {
	const {
		register,
		formState: {isValid, errors},
		handleSubmit,
		reset
	} = useForm({mode: "onSubmit", reValidateMode: "onSubmit"})

	const handleChangeDatas = data => {
		if (isValid) {
			setUserDatas({
				username: data.newUserName,
				password: data.newPassword
			})
			reset()
		}

		reset()
	}


	console.log(errors)
	return (
		<form className="form-container flex flex-col" onSubmit={handleSubmit(handleChangeDatas)}>
			<Box
				sx={{
					display: "flex",
					alignItems: "flex-end",
					marginTop: "1rem",
					justifyContent: "space-around",
					width: 100 + "%"
				}}
			>
				<TextField
					label="Current User Name"
					variant="standard"
					{...register("currentUserName", {
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
					marginTop: "1rem",
					justifyContent: "space-around",
					width: 100 + "%"
				}}
			>
				<TextField
					label="Current Password"
					variant="standard"
					{...register("currentPassword", {
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
			<Box
				sx={{
					display: "flex",
					alignItems: "flex-end",
					marginTop: "1rem",
					justifyContent: "space-around",
					width: 100 + "%"
				}}
			>
				<TextField
					label="New User Name"
					variant="standard"
					{...register("newUserName", {
						required: "Required field"
					})}
				/>
			</Box>
			<Box
				sx={{
					display: "flex",
					alignItems: "flex-end",
					marginTop: "1rem",
					justifyContent: "space-around",
					width: 100 + "%"
				}}
			>
				<TextField
					label="New Password"
					variant="standard"
					{...register("newPassword", {
						required: "Required field"
					})}
				/>
			</Box>
			<div className="back-to-login flex flex-col justify-center items-center mt-6">
				<FormHelperText>{errors?.currentUserName?.message || errors?.currentPassword?.message || "Data"}</FormHelperText>
				<Link to="/login">Back to login</Link>
				<button type="submit" className="mt-5">
					Edit Datas
				</button>
			</div>
		</form>
	)
}
