import React, { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Link, Navigate, redirect } from "react-router-dom"

export const PasswordEdit = ({ userDatas, setUserDatas }) => {
	const {
		register,
		formState: { isValid, errors },
		handleSubmit,
		reset
	} = useForm({ mode: "onSubmit" })

	const handleChangeDatas = (data) => {
		if (data.currentUserName === userDatas.username && data.currentPassword === userDatas.password) {
			setUserDatas({
				username: data.newUserName,
				password: data.newPassword
			})
		}

		return reset()
	}

	console.log(errors)
	return (
		<form
			className="form-container"
			onSubmit={handleSubmit(handleChangeDatas)}
		>
			<div className="form-fields">
				<span>Current UserName</span>
				<input
					type="text"
					{...register("currentUserName", {
						require: "Required field",
						validate: (value) => {
							if (value !== userDatas.username) {
								return "UserDatas doesn't match"
							}
							return true
						}
					})}
					placeholder={errors?.currentUserName?.message}
				/>
			</div>
			<div className="form-fields">
				<span>Current Password</span>
				<input
					type="text"
					{...register("currentPassword", {
						require: "Required field",
						validate: (value) => {
							if (value !== userDatas.password) {
								return "UserDatas doesn't match"
							}
							return true
						}
					})}
					placeholder={errors?.currentPassword?.message}
				/>
				<></>
			</div>
			<div className="form-fields">
				<span>New UserName</span>
				<input
					type="text"
					{...register("newUserName", {
						require: "Required field"
					})}
				/>
				<></>
			</div>
			<div className="form-fields">
				<span>New Password</span>
				<input
					type="text"
					{...register("newPassword", {
						require: "Required field"
					})}
				/>
				<></>
			</div>
			{errors?.currentUserName || errors?.currentPassword ? (
				<>
					<p>{errors?.currentUserName?.message}</p>
					<button
						type="submit"
					>Edit Datas</button>
				</>
			) : (
				<div className="back-to-login">
					<Link to = "/login">Back to login</Link>
					<button type = "submit">Edit Datas</button>	
				</div>
				
			)}
		</form>
	)
}
